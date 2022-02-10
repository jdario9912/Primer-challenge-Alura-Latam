var textoAPortaPapeles = document.querySelector('#muestraTexto');

var botonCopiar = document.querySelector('#botonCopiar');

botonCopiar.addEventListener('click', function () {
    
    // Agrega un texto al portapapeles
    navigator.clipboard.writeText(textoAPortaPapeles.textContent);
    alert('Copiado al portapapeles');
});