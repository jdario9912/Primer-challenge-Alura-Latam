var textoIngresado = document.querySelector('#textoIngresado');

var botonEncriptar = document.querySelector('#encriptar');

var muestraTexto = document.querySelector('#muestraTexto');

var mensajeError = document.querySelector('#mensajeError');

textoIngresado.focus();

botonEncriptar.addEventListener('click', function () {
    
    var texto = textoIngresado.value;

    if(validaCaracteres(texto)){
        mensajeError.textContent = 'Existen caracteres especiales o mayúculas';
    }else{
        muestraTexto.textContent = encriptar(texto);
        textoIngresado.value = '';
    }
    
});

// ME FALTA VALIDAR EL TEXTO PARA LETRAS MINUSCULAS SOLAMENTE CON textoIngresado.toLowerCase(); Y SIN CARACTERES ESPECIALES