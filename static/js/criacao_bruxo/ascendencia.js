export default () => {
    const container = document.createElement('div');

    const template = `
    <div id="ascendencia" class="bg-card">
        <div class="row text-center">
            <h3>Ascendência</h3>
            <p>Qual a sua ascendência?</p>
        </div>
       
        <div class="row text-center">
            <select name="ascendency" id="ascendency">
                <option value="1">Nascido-trouxa (Comece com 1 feitiço e 3 de Experiência)</option>
                <option value="2">Mestiço (Comece com 2 feitiços e 2 de Experiência</option>
                <option value="3">Sangue puro (Comece com 3 feitiços e 1 de Experiência)</option>
            </select>
        </div>
       
     </div>
    `

    container.innerHTML = template;

    return container;
}