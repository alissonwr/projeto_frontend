export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="bg-card">
        <div class="row text-center">
            <h3>Varinha</h3>
            <p>Me dê detalhes sobre a sua varinha</p>
        </div>
        <div class="row">
            <div class="col text-center">
                <div class="row">
                    <h5>Material</h5>
                    <select name="wand-material" id="wand-material">
                        <option value="1">Conquista - Bordo</option>
                        <option value="2">Conhecimento - Nogueira</option>
                        <option value="3">Diversão - Pinho</option>
                        <option value="4">Amizade - Cedro</option>
                        <option value="5">Poder - Teixo</option>
                        <option value="6">Status - Olmo</option>
                    </select>
                </div>
            </div>

            <div class="col text-center">
                <div class="row">
                    <h5>Aspecto</h5>
                    <select name="wand-aspect" id="wand-aspect">
                        <option value="1">Flexível</option>
                        <option value="2">Longa</option>
                        <option value="3">Ornamentada</option>
                        <option value="4">Simples</option>
                        <option value="5">Usada</option>
                        <option value="6">Curta</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    `

    container.innerHTML = template;

    return container;
}