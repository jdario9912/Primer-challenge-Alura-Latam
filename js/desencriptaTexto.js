var textoIngresado = document.querySelector('#textoIngresado');

var botonDesencriptar = document.querySelector('#desencriptar');

var muestraTexto = document.querySelector('#muestraTexto');

textoIngresado.focus();


botonDesencriptar.addEventListener('click', function () {
    
    texto = textoIngresado.value;
    muestraTexto.textContent = desencriptar(texto);
    textoIngresado.value = '';
    
});