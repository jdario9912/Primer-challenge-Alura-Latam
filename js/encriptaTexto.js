var textoIngresado = document.querySelector('#textoIngresado');

var botonEncriptar = document.querySelector('#encriptar');

var muestraTexto = document.querySelector('#muestraTexto');

textoIngresado.focus();

botonEncriptar.addEventListener('click', function () {
    
    var texto = textoIngresado.value;
    muestraTexto.textContent = encriptar(texto);
    
});