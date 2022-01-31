var textoIngresado = document.querySelector('#textoIngresado');

var botonEncriptar = document.querySelector('#encriptar');

var muestraTexto = document.querySelector('#muestraTexto');

var mensajeError = document.querySelector('#mensajeError');

textoIngresado.focus();

botonEncriptar.addEventListener('click', function () {
    
    var texto = textoIngresado.value;

    if(validaCaracteres(texto)){
        muestraTexto.textContent = encriptar(texto);
    }else{
        mensajeError.textContent = 'Existen caracteres especiales o mayúculas';
    }

// -------------------------------------------------------
// ACA ESTOY PROBANDO SI LA CADENA TIENE CARACTERES ESPECIALES


// -------------------------------------------------------
    
    
});

// ME FALTA VALIDAR EL TEXTO PARA LETRAS MINUSCULAS SOLAMENTE CON textoIngresado.toLowerCase(); Y SIN CARACTERES ESPECIALES