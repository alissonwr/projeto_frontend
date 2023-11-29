document.getElementById('wandyButtom').addEventListener('click', function() {
  var audio = document.getElementById('meu-audio');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
});

function rollDice() {
    const diceFace = document.getElementById('dice-face');
    const result = Math.floor(Math.random() * 20) + 1; // Generates a random number between 1 and 20
  
    
    diceFace.style.display = 'block';
    diceFace.textContent = result;
  }

  const mensagem= "Bem vindo a famosa escola de Howgtarasjh jovem aprendiz de magia, você irá se aventurar em uma jornada de aprendizado!!";
  const mensagemElement = document.getElementById('mensagem');
  let index = 0;

  function escreverMensagem(){
    if (index < mensagem.length){
        mensagemElement.innerHTML += mensagem.charAt(index);
        index++;
        setTimeout(escreverMensagem, 50);
    }
  }

  window.onload = escreverMensagem;
  
  