export default () => {
    const container = document.createElement('div');

    const template = `
        <div id="nome" class="bg-card">
            <div class="col text-center">
                <h3>Nome</h3>
                <p>Primeiro, escolha o seu nome.</p>
                <div class="row"><input name="name" id="name" type="text"/></div>
                <a class="btn btn-outline-light sugestoes-btn" href="#">Ver sugestões de nomes</a>
            </div> 
            <div class="sugestoes row">
                <div class="col">
                    <h5>Nomes próprios trouxas</h5>
                    <p class="text-center">
                        Ahmad, Arthur, Aurora, Chiwetel, Cormac, Daniel, Dev, Dimitrios,
                        Eleni, Emma, Fatima, Gabriela, Genevieve, James, Jing, Joanne,
                        Lorenzo, Maggie, Nnedi, Pablo, Penelope, Richard, Riya, Rupert,
                        Scarlett, Sean, Susan, Terry, Wei, Zoe
                    </p>
                </div>
                <div class="col">
                    <h5>Nomes próprios bruxos</h5>
                    <p class="text-center">
                        Alecto, Andromeda, Arabella, Argus, Ariana, Arsenius, Augusta,
                        Cuthbert, Dedalus, Eldred, Elphias, Emeric, Emmeline, Filius,
                        Griselda, Helena, Imelda, Ludo, Mafalda, Merope, Newt, Phyllida,
                        Rodolphus, Rolanda, Septima, Silvanus, Sybill, Thorfinn, Wilbert,
                        Wilhelmina
                    </p>
                </div>

                <div class="col">
                    <h5>Sobrenomes</h5>
                    <p class="text-center">
                        Adebayo, Ali, Bagshot, Chowdhry, Davies, Diaz, Dubois, Finnigan,
                        Goldstein, Grint, Johnson, Kazinsky, Khan, Leung, Macmillan,
                        Mwangi, Ogden, Okafor, Patel, Quinn, Radcliffe, Santos, Schmidt,
                        Spinnet, Tarkowski, Thomas, Valentini, Warren, Watson, Wong
                    </p>  
                </div>
            </div>           
        </div>
            
    `

    container.innerHTML = template;

    return container;
}