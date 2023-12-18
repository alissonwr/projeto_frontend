export default () => {
    const container = document.createElement('div');

    const template = `<div class="bg-card">
    <div id="aparencia">
        <div class="text-center">
            <h3>Aparência</h3>
            <p>Como você se parece?</p>
        </div>

        <div class="row">
            <div class="col text-center">
                <div class="row">
                    <h5>Pele</h5>
                    <select name="skin form-select" id="skin">
                        <option value="1">Escura</option>
                        <option value="2">Sardenta</option>
                        <option value="3">Morena</option>
                        <option value="4">Pálida</option>
                        <option value="5">Corada</option>
                        <option value="6">Bronzeada</option>
                    </select>
                </div>
            </div>

            <div class="col text-center">
                <div class="row">
                    <h5>Cabelo</h5>
                    <select name="hair form-select" id="hair">
                        <option value="1">Negro</option>
                        <option value="2">Loiro</option>
                        <option value="3">Castanho</option>
                        <option value="4">Platinado</option>
                        <option value="5">Colorido</option>
                        <option value="6">Ruivo</option>
                    </select>
                </div>
            </div>
            
            <div class="col text-center">
                <div class="row">
                    <h5>Corpo</h5>
                    <select name="body form-select" id="body">
                        <option value="1">Atlético</option>
                        <option value="2">Grande</option>
                        <option value="3">Baixo</option>
                        <option value="4">Corpulento</option>
                        <option value="5">Alto</option>
                        <option value="6">Magro</option>
                    </select>
                </div>
            </div>
        </div>

    </div></div>
    `

    container.innerHTML = template;

    return container;
}