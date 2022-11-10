var target = document.querySelector('#chat');
var config = { attributes: true, childList: true, characterData: true, subtree:true };

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    // console.log(mutation.type);

    if (mutation.type == 'childList') {

        // console.log(mutation.addedNodes[0].firstElementChild.firstElementChild.className);

        if (mutation.addedNodes[0].firstElementChild.firstElementChild.className == 'from-bp') {
            var teclando = elementsArray[elementsArray.length - 2];
            var margarida = elementsArray[elementsArray.length - 1];

            // console.log(elementsArray)
            // console.log(teclando);
            // console.log(margarida);

            var div1 = document.getElementById('teclando_'+ teclando);
            div1.style.display = 'block';
            setTimeout(function() { 
                div1.style.display = 'none'; 
            }, demorinhaGlobal);

            var div2 = document.getElementById('margarida_'+ margarida);
            div2.style.display = 'none';
            setTimeout(function() { 
                div2.style.display = 'block'; 
            }, demorinhaGlobal);
        }
    }  
  });
});

observer.observe(target, config);