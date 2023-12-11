//Função para executar o som da coruja ao clicar no botão de enviar mensagem
document.getElementById('owl').addEventListener('click', function() {
  var audio = document.getElementById('owlsound');
  if (audio.paused) {
      audio.play();
  } else {
      audio.pause();
      audio.currentTime = 0;
  }
  //convocando função que envia mensagem do usuário
  sendMessage();
});

//função de enviar mensagem do usuário
function sendMessage() {
  //pegando o texto digitado na tag de input de texto
  const messageInput = document.getElementById('message-input').value.trim();
  //caso a mensagem seja diferente e um espaço em branco
  if (messageInput !== '') {
    //pega os valores digitados no chat-textarea
    const chatTextarea = document.getElementById('chat-textarea');
    //imprime no chat com o marcador do usuário (username) e da mensagem
    chatTextarea.value += `${username}: ${messageInput}\n`;
    // Limpa o campo de entrada após o envio
    document.getElementById('message-input').value = ''; 
  }
}
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

//função de cadastro de usuário
document.getElementById('submit-username').addEventListener('click', function() {
  //pegando pelo id e passando para constante usernameInput, e limpando espaços em branco com .trim()
  const usernameInput = document.getElementById('username-input').value.trim();
  //condiçao caso a variável que recebeu o conteúdo digitado for diferente de espaço em branco
  if (usernameInput.trim() !== '') {
    //variável username recebe usernameInput
    username = usernameInput;
    //e imprime a mensagem com o nome do usuário
    Swal.fire({
      icon: 'success', // Ícone da caixa de alerta (pode ser 'success', 'error', 'warning', 'info', etc.)
      title: `Olá, ${username}!`, // Título da caixa de alerta
      text: 'Seu nome de usuário foi registrado.', // Mensagem dentro da caixa de alerta
    }).then(() => {
      hideUsernameForm();
    });
    //caso o valor digitado seja um espaço em branco imprime a mensagem para digitar um nome válido
  } else {
    Swal.fire({
      icon: 'error', // Ícone da caixa de alerta (pode ser 'success', 'error', 'warning', 'info', etc.)
      title: 'Erro!', // Título da caixa de alerta
      text: 'Por favor, insira um nome de usuário válido.', // Mensagem dentro da caixa de alerta
    });
  }
});

//função para esconder o formulário de input do usuário
function hideUsernameForm() {

  const usernameForm = document.getElementById('username-form');
  usernameForm.style.display = 'none'; // Esconde o formulário
}

document.getElementById('send-message').addEventListener('click', function() {
  rollDice();
});

//Função que gera número aleatório
function rollDice() {
  const diceFace = document.getElementById('dice-face');
  const result = Math.floor(Math.random() * 20) + 1; // Gera um número aleatório entre 1 e 20
  
  //passando o valor do resultado do número aleatório e colocando no text-area com o nome da variável username cadastrada pelo usuário
  const chatTextarea = document.getElementById('chat-textarea');
  chatTextarea.value += `${username}: O número gerado foi ${result}\n`;
  //Impressão do número
  diceFace.textContent = result;


}


    function toggleMute(audioId) {
        var audio = document.getElementById(audioId);
        if (audio.muted) {
            audio.muted = false;
        } else {
            audio.muted = true;
        }
    }



  
  