const url = "http://127.0.0.1:5000/usuarios";

const cadastrar = document.querySelector('.btn');

async function getAllUsuarios() {
    const response = await fetch(url);

    console.log(response);

    const data = await response.json();

    console.log(data[0].email);

    cadastrar.addEventListener('click', () => {
        const email = document.querySelector('#email').value;
        const senha = document.querySelector('#senha').value;

        for (const usuario of data) {
            if (email == usuario.email && senha == usuario.senha) {
                // alert("Login realizado com sucesso!");
                // console.log(email);
                window.location.href = "http://127.0.0.1:5000/jogo"

                // break; // Se o login for bem-sucedido, podemos interromper o loop
                break;
            }
            else {
                alert("email ou senha incorreta")
                window.location.href = "http://127.0.0.1:5000/login"
                return;
            }
        }

        //     if(email == data[0].email && senha == data[0].senha){
        //     console.log("Login realizado com sucesso!")
        //     console.log(email)
        // }

    })


}

getAllUsuarios();

// const url = "http://127.0.0.1:5000/usuarios";
// const cadastrar = document.querySelector('.btn');

// async function getAllUsuarios() {
//     try {
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`Erro ao obter dados de usuários. Status: ${response.status}`);
//         }

//         const data = await response.json();

//         console.log(data[0].email);

//         cadastrar.addEventListener('click', () => {
//             const email = document.querySelector('#email').value;
//             const senha = document.querySelector('#senha').value;

//             const usuarioEncontrado = data.find(usuario => email === usuario.email && senha === usuario.senha);

//             if (usuarioEncontrado) {
//                 // Login bem-sucedido
//                 return window.location.href = "http://127.0.0.1:5000/jogo";
//             } else {
//                 // Nenhum usuário correspondente encontrado
//                 alert("Email ou senha incorreta");
//                 return window.location.href = "http://127.0.0.1:5000/login";
//             }
//         });
//     } catch (error) {
//         console.error("Erro ao obter dados de usuários:", error);
//         // Trate o erro conforme necessário (exibindo uma mensagem de erro, redirecionando, etc.)
//     }
// }

// getAllUsuarios();
