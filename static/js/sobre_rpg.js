function mostrarTextoPor(idTexto) {
    var areaDeTexto = document.getElementById("areaDeTexto");
    var texto = document.getElementById(idTexto)
    areaDeTexto.innerHTML = texto.innerHTML;
}