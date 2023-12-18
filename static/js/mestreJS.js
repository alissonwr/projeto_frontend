


const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const containerFluid = document.querySelector(".container-fluid")
hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
  containerFluid.classList.toggle("main-active");
})

let magias = [];
let username = ''; // Variável global para armazenar o nome do usuário

// Requisição da API com método fetch
const resp = fetch("https://hp-api.onrender.com/api/spells")
    // Trata como JSON a resposta
    .then((response) => response.json())
    // Passa os dados da API para função
    .then((data) => {
        magias = data; // Atualiza a variável global com as magias
        addMagiasAoSelect(data);
    });

// Função para manipular o DOM para preencher o select com os dados
function addMagiasAoSelect(magiasData) {
    const select = document.querySelector("#select-magia");
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "";
    select.appendChild(emptyOption);

    magiasData.forEach((magia) => {
        const option = document.createElement("option");
        option.value = magia.id;
        option.textContent = magia.name;
        select.appendChild(option);
    });
}

const form = document.querySelector("#form-magia");
// Evento tipo submit
form.addEventListener("submit", (event) => {
    // Previnindo de recarregar a página quando o evento é submetido
    event.preventDefault();
    if (!username) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Por favor, insira um nome de usuário válido antes de enviar uma magia.',
        });
        return;
    }

    const select = document.querySelector("#select-magia");
    const selectedMagiaId = select.value;
    const selectedMagia = magias.find((magia) => magia.id === selectedMagiaId);

    if (selectedMagia) {
        const chatTextarea = document.querySelector("#chat-textarea");
        chatTextarea.value += `${username} selecionou a magia: ${selectedMagia.name}\n`;
        const descricaoMagia = document.querySelector("#descricao-magia");
        descricaoMagia.textContent = selectedMagia.description;
    } else {
        console.error('Magia não encontrada');
    }
    console.log("Magia enviada!");
});

const select = document.querySelector("#select-magia");
// Evento change ao select
select.addEventListener("change", (event) => {
    if (!username) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Por favor, insira um nome de usuário válido antes de selecionar uma magia.',
        });
        return;
    }

    const selectedMagiaId = event.target.value;
    const selectedMagia = magias.find((magia) => magia.id === selectedMagiaId);

    if (selectedMagia) {
        const descricaoMagia = document.querySelector("#descricao-magia");
        descricaoMagia.textContent = selectedMagia.description;
    } else {
        console.error('Magia não encontrada');
    }
    console.log("Magia selecionada!");
});





document.getElementById('owl').addEventListener('click', function() {
    var audio = document.getElementById('owlsound');
    if (!username) {
      Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Por favor, insira um nome de usuário válido antes de enviar uma mensagem.',
      });
      return;
  }
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
    sendMessage();
});

function sendMessage() {
    if (!username) {
        return;
    }
    const messageInput = document.getElementById('message-input').value.trim();
    if (messageInput !== '') {
        const chatTextarea = document.getElementById('chat-textarea');
        chatTextarea.value += `${username}: ${messageInput}\n`;
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

document.getElementById('submit-username').addEventListener('click', function() {
    const usernameInput = document.getElementById('username-input').value.trim();
    if (usernameInput.trim() !== '') {
        username = usernameInput;
        Swal.fire({
            icon: 'success',
            title: `Olá, ${username}!`,
            text: 'Seu nome de usuário foi registrado.',
        }).then(() => {
            hideUsernameForm();
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Por favor, insira um nome de usuário válido.',
        });
    }
});

function hideUsernameForm() {
    const usernameForm = document.getElementById('username-form');
    usernameForm.style.display = 'none';
}

document.getElementById('send-message').addEventListener('click', function() {
    rollDice();
});

function rollDice() {
  if (!username) {
    Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Por favor, insira um nome de usuário válido antes de rolar o dado',
    });
    return;
}
    const diceFace = document.getElementById('dice-face');
    const result = Math.floor(Math.random() * 20) + 1;
    const chatTextarea = document.getElementById('chat-textarea');
    chatTextarea.value += `${username}: O número gerado foi ${result}\n`;
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
 

