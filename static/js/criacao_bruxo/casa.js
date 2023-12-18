export default () => {
    const container = document.createElement('div');

    const template = `
    <div id="casa" class="bg-card">
        <div class="row text-center">
            <h3>Casa</h3>
            <p>Qual a sua casa?</p>
        </div>
        <div class="row text-center">
            <select name="house" id="house">
                <option value="1">Grifinória <span>(+1 em Bravura)</span></option>
                <option value="2">Lufa-Lufa <span>(+1 em Lealdade)</span></option>
                <option value="3">Corvinal (+1 em Intelecto)</option>
                <option value="4">Sonserina (+1 em Astúcia)</option>
            </select>
        </div>
     </div>
    `

    container.innerHTML = template;

    return container;
}