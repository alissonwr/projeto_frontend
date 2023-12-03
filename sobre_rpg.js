function posicaoAletoria(){
    console.log(1)
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    
    var randomX = Math.floor(Math.random() * (windowWidth - 500)); 
    var randomY = Math.floor(Math.random() * (windowHeight - 20));
    
    return { x: randomX, y: randomY };
}

function movimentoAleatorio1(){
    console.log(2)
    var div = document.getElementById('pegadas1');
    var newPosition = posicaoAletoria();

    div.style.left = newPosition.x + 'px';
    div.style.top = newPosition.y + 'px';
}

function movimentoAleatorio2(){
    console.log(3)
    var div = document.getElementById('pegadas2');
    var newPosition = posicaoAletoria();

    div.style.left = newPosition.x + 'px';
    div.style.top = newPosition.y + 'px';
}

movimentoAleatorio1();
movimentoAleatorio2();
setInterval(movimentoAleatorio1, 15000);
setInterval(movimentoAleatorio2, 15000);

function mostrarTextoPor(idTexto) {
    var areaDeTexto = document.getElementById("areaDeTexto");
    var texto = document.getElementById(idTexto)
    areaDeTexto.innerHTML = texto.innerHTML;
}