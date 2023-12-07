document.getElementById('owl').addEventListener('click', function() {
  var audio = document.getElementById('owlsound');
  if (audio.paused) {
      audio.play();
  } else {
      audio.pause();
      audio.currentTime = 0;
  }
});

document.getElementById('wandyButtom').addEventListener('click', function() {
  var audio = document.getElementById('meu-audio');
  if (audio.paused) {
      audio.play();
  } else {
      audio.pause();
      audio.currentTime = 0;
  }
  rollDice();
});



function rollDice() {
  const diceFace = document.getElementById('dice-face');
  const result = Math.floor(Math.random() * 20) + 1; // Gera um número aleatório entre 1 e 20
  
  diceFace.textContent = result;

  

  // Envia o número gerado para o textarea
  const messageTextarea = document.querySelector('textarea');
  messageTextarea.value = `O número gerado foi: ${result}`;
}



  
  