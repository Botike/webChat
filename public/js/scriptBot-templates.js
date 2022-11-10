var elementsArray = [];
var demorinhaGlobal;

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Template bp typing
// https://codepen.io/nunoooo/pen/OxbYop
const templateDelay = function(demorinha, from) {
  var _id_ = makeElementID(5);
  demorinhaGlobal = demorinha;
  elementsArray.push(_id_);
  var ret = '';
  ret = `
    <div id="teclando_${_id_}">
      <div class="from-${from}">
        <div class="message-inner">
          <p>
            <img src="http://localhost:3000/api/v1/bots/features/media/teclanda.gif">
          </p>
        </div>
      </div>
    </div>
  `;
  return ret;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Template texto Bot
//
const templateMensagens = function(message, from) {
  var _id_ = makeElementID(5);
  elementsArray.push(_id_);
  var ret = '';
  ret = `
    <div id="margarida_${_id_}">
      <div class="from-${from}">
        <div class="message-inner">
          <p>
            ${message}
          </p>
        </div>
      </div>
    <div>
    `;
  return ret;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Template texto User
//
const templateMensagensUser = function(message) {
  var _id_ = makeSessionID(5)
  var ret = '';
  ret = `
  <div id="${_id_}">
    <div class="from-user">
      <div class="message-inner">
        <p>
          ${message}
        </p>
      </div>
    </div>
  </div>
  `;
  return ret;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Template imagens
//
const templateImagens = function(nomeImagem, endImagem, from) {
  var _id_ = makeElementID(5);
  elementsArray.push(_id_);
  var ret = '';
  ret = `
  <div id="margarida_${_id_}">
    <div class="from-${from}">
      <div id="um_card">
        <div class="message-inner">
          <p>
            ${nomeImagem}</br></br>
            <img src="${endImagem}" style="height:350; width:350">
          </p>
        </div>
      </div>
    </div>
  </div<
  `;
  return ret;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Template audio
//
const templateAudio = function(nomeAudio, endAudio, from) {
  var _id_ = makeElementID(5);
  elementsArray.push(_id_);
  var ret = '';
  ret = `
  <div id="margarida_${_id_}">
  <div class="from-${from}">
    <div class="message-inner">
      <p>
        ${nomeAudio}</br></br>
        <audio controls="controls">
        <source src="${endAudio}" type="audio/mp3" />
        Desculpe: seu navegador não suporta HTML5, logo não conseguimos te mandar esse audio :-(
        </audio>
      </p>
    </div>
  </div>
</div>
`;
  return ret;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Template video
//
const templateVideo = function(nomeVideo, endVideo, from) {
  var _id_ = makeElementID(5);
  elementsArray.push(_id_);
  var ret = '';
  ret = `
  <div id="margarida_${_id_}">
    <div class="from-${from}">
      <div class="message-inner">
        <p>
          ${nomeVideo}</br></br>
          <video width="350" controls="controls">
          <source src="${endVideo}" type="video/mp4">
          Desculpe: seu navegador não suporta HTML5, logo não conseguimos te mandar esse video :-(
          </video>
        </p>
      </div>
    </div>
  </div>
  `;
  return ret;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Template dos arquivos
//
const templateArquivo = function(nomeArquivo, endArquivo, from) {
  var _id_ = makeElementID(5);
  elementsArray.push(_id_);
  var ret = '';
  ret = `
  <div id="margarida_${_id_}">
    <div class="from-${from}">
      <div class="message-inner">
        <p>
          ${nomeArquivo}</br>
          <a href="${endArquivo}">Um arquivo qualquer</a> 
        </p>
      </div>
    </div>
  </div>
  `;
  return ret;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Template da localização
// https://developers.google.com/maps/documentation/embed/embedding-map
// https://snazzymaps.com/
//
const templateLocaliza = function(localNome, localEnder, localLatid, localLongit, from) {
  var _id_ = makeElementID(5);
  elementsArray.push(_id_);
  var ret = '';
  ret = `
  <div id="margarida_${_id_}">
    <div class="from-${from}">
      <div class="message-inner">
        <p>
          Nome: ${localNome}</br>
          Endereço: ${localEnder}</br></br>
          <iframe
            width="350"
            height="450"
            frameborder="0" style="border:0"
            referrerpolicy="no-referrer-when-downgrade"
            mapId="578e70af1c55ef9e"
            src="https://www.google.com/maps/embed/v1/place?key=` + process.env.GOOGLE_MAPS_API + `&q=Conjunto+dos+Bancários&center=${localLongit},${localLatid}&zoom=14"
          >
          </iframe>
        </p>
      </div>
    </div>
  </div>
  `;
  return ret;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Template dos choices
//

// Monta uma escolha
const templateItem = function(choices) {
  var _id_ = makeElementID(5);
  var objectId = `escolhas_${_id_}`
  var ret = '';
  ret = `
  <input type="button" name="${objectId}" id="${objectId}" value="${choices.value}" onClick="confirmaChoiceBotaoClick('${choices.value}')"/> <br/>
  `;
  return ret;
};

// Monta a lista de escolhas
const templateItemsEscolhas = (botao_escolha) => {
  var ret_ = '';
  botao_escolha.forEach(choices => {
    ret_ +=
      `
      ${templateItem(choices)}
      `
  });
  return ret_;
};

// Monta o componente todo
const templateChoice = function(chicotInsano, from) {
  var _id_ = makeElementID(5);
  elementsArray.push(_id_);
  var ret = '';
  ret = `
  <div id="margarida_${_id_}">
    <div class="from-${from}">
      <div class="message-inner">
        <p>
          ${chicotInsano.tit_choice}<br/><br/>
          ${templateItemsEscolhas(chicotInsano.choices_choice)}<br/>
        </p>
      </div>
    </div>
  </div>
  `;
  return ret;
};

// Enter!
const confirmaChoiceBotaoClick = (botaoValue) => {
  // console.log(botaoValue);
  tdb_txt(botaoValue);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Template drop
// https://freefrontend.com/css-dropdown-menus/
//

// Monta as opções do drop
const templateOptDrop = function(options) {
  var ret = '';
  ret = `
  <option value=${options.value}>${options.label}</option>
  `;
  return ret;
};

// Monta a lista de opções do drop
const templateMaisOptsDrop = (maisOptions, botao_drop) => {
  var _id_ = makeSessionID(5);
  var objectId = `dropdown_${_id_}`
  var ret_ = `<select name="${objectId}" id="${objectId}"><option disabled selected>${element.placeholderText}</option>`;
  maisOptions.forEach(options => {
    ret_ +=
      `
      ${templateOptDrop(options)}
      `
  });
  ret_ += `</select>`;
  ret_ += `<br/>`;
  ret_ += `${templateBotaoConfirmaDrop(objectId, botao_drop)}`;
  return ret_;
};

// Monta o drop
const templateDrop = function(chicotAtomico, from) {
  var _id_ = makeElementID(5);
  elementsArray.push(_id_);
  var ret = '';
  ret = `
  <div id="margarida_${_id_}">
    <div class="from-${from}">
      <div class="message-inner">
        <p>
          ${chicotAtomico.messag_drop}<br/> </br>
          ${templateMaisOptsDrop(chicotAtomico.maisOptions, chicotAtomico.botao_drop)}<br/>
        </p>
      </div>
    </div>
  </div>
  `;
  return ret;
};

// Lógica do enter
const templateBotaoConfirmaDrop = (dropName, butaum_caption) => {
  var _id_ = makeSessionID(5);
  var objectId = `button_${_id_}`
  var ret_ = `<input type="button" name="${objectId}" id="${objectId}" value="${butaum_caption}" onClick="confirmaDropClick('${dropName}')"/>`;
  return ret_;
};

// Enter!
const confirmaDropClick = (dropName) => {
  var select = document.getElementById(dropName);
  // aqui embaixo, no final pode ser .label também
  var selectedValue = select.options[select.selectedIndex].value;
  if  (selectedValue !== element.placeholderText) {
    tdb_txt(selectedValue);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Template card
//


// Monta um botão
const templateBotaoCard = function(action_) {
  var _id_ = makeSessionID(5);
  var objectId = `escolhas_${_id_}`;
  var ret = '';
  ret = `
    <input 
    type="button" 
    name="${objectId}" 
    id="${objectId}" 
    value="${action_.title}" 
    onClick="confirmaCardBotaoClick('${action_.title}', '${action_.action}', '${action_.txt}', '${action_.url}', '${action_.payload}')"/>
    <br/>
  `;
  return ret;
};

// Monta a lista de botões
const templateBotoesCard = (botoes_card_actions) => {
  var ret_ = '';
  botoes_card_actions.forEach(action_ => {
    ret_ +=
      `
      ${templateBotaoCard(action_)}
      `
  });
  return ret_;
};

// Monta o card com a imagem
const templateCard = function(chicotEletriko, from) {
  var _id_ = makeElementID(5);
  elementsArray.push(_id_);
  var ret = '';
  ret = `
  <div id="margarida_${_id_}">
    <div class="from-${from}">
      <div id="um_card">
        <div class="message-inner">
          <p>
            <img src="${chicotEletriko.imag_card}" <br/></br>
            ${chicotEletriko.tit_card}<br/>
            ${chicotEletriko.subtit_card}<br/></br>
            ${templateBotoesCard(chicotEletriko.actions)}<br/>
          </p>
        </div>
      </div>
    </div>
  </div>
  `;
  return ret;
};

// Enter!
// '${action_.title}', '${action_.action}', '${action_.txt}', '${action_.url}', '${action_.payload}
const confirmaCardBotaoClick = (botao_value, botao_action, botao_txt, botao_link, botao_payload) => {
  // console.log(element.actions);

  let lista_actions = element.actions
  let resultado = lista_actions.find(function(resultado) {
    return resultado.action === 'Say something';
  });

  var select_txt = resultado.text;
  console.log('select_txt', select_txt);

  var select_value = botao_value;
  console.log('select_value', select_value);

  var select_action = botao_action;
  console.log('select_action', select_action);

  var select_link = botao_link;
  console.log('select_link', select_link);

  var select_payload = botao_payload;
  console.log('select_payload', select_payload);

  if (select_action == 'Say Something') {
    tdb_txt(select_txt);

  } else if (select_action == 'Open URL') {
    tdb_link(select_link);

  } else if (select_action == 'Postback') {
    tdb_payload(select_payload);
  }
}


////////////////////////////////////////////////////////////////

const templateBotaoCardCarr = function(CarrAction_) {
  var _id_ = makeSessionID(5);
  var objectId = `escolhas_${_id_}`;
  var ret = '';
  ret = `
    <input 
    type="button" 
    name="${objectId}" 
    id="${objectId}" 
    value="${action_.title}" 
    onClick="confirmaCardBotaoClick('${CarrAction_.title}', '${CarrAction_.action}', '${CarrAction_.txt}', '${CarrAction_.url}', '${CarrAction_.payload}')"/>
    <br/>
  `;
  return ret;
};


const templateBotoesCardCarr = (botoes_cardCarr_actions) => {
  var ret_ = '';
  botoes_cardCarr_actions.forEach(CarrAction_ => {
    ret_ +=
      `
      ${templateBotaoCardCarr(CarrAction_)}
      `
  });
  return ret_;
};


// Monta o card carrossel com a imagem
const templateCarousel = function(chicotAntan, from) {
  var _id_ = makeElementID(5);
  elementsArray.push(_id_);
  var ret = '';
  ret = `
  <div id="margarida_${_id_}">
    <div class="from-${from}">
      <div id="um_card">
        <div class="message-inner">
          <p>
            <img src="${chicotAntan.imag_card}" <br/></br>
            ${chicotAntan.tit_card}<br/>
            ${chicotAntan.subtit_card}<br/></br>
            ${templateBotoesCardCarr(chicotAntan.actions)}<br/>
          </p>
        </div>
      </div>
    </div>
  </div>
  `;
  return ret;
};
