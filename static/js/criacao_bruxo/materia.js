export default () => {
    const container = document.createElement('div');

    const template = `
    <div id="materia" class="bg-card">
        <div class="row text-center">
            <h3>Materia</h3>
            <p>Qual a sua matéria favorita?</p>
        </div>
        <div class="row text-center">
            <div class="col">
                <div class = "row text-center">
                    <h5>Principal</h5>
                    <select name="subject" id="subject">
                        <option value="1">Feitiços</option>
                        <option value="2">Def. contra as Artes das Trevas</option>
                        <option value="3">Herbologia</option>
                        <option value="4">História da Magia</option>
                        <option value="5">Poções</option>
                        <option value="6">Transfiguração</option>
                    </select>
                </div>
                
            </div>
            <div class="col">
                <div class = "row text-center">
                    <h5>Opcional</h5>
                    <select name="opt-subject" id="opt-subject">
                        <option value="1">Aritmancia</option>
                        <option value="2">Astronomia</option>
                        <option value="3">Trato das Criaturas Mágicas</option>
                        <option value="4">Adivinhação</option>
                        <option value="5">Estudo dos Trouxas</option>
                        <option value="6">Quadribol</option>
                    </select>
                </div>
                
            </div>
        </div>
     </div>
    `

    container.innerHTML = template;

    return container;
}