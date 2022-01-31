// Desencripta un texto
function desencriptar(texto) {
    var arrayTextoIngresado = [];
    var arrayTextoFinal = [];
    var caracter = '';
    var textoFinal = '';
    var i = 0;

    arrayTextoIngresado = textoAArray(texto);

    while (i < arrayTextoIngresado.length) {
        if (arrayTextoIngresado[i] == 'a' || arrayTextoIngresado[i] == 'e' || arrayTextoIngresado[i] == 'i' || arrayTextoIngresado[i] == 'o' || arrayTextoIngresado[i] == 'u') {
            switch (texto[i]) {
                case 'a':
                    caracter = arrayTextoIngresado[i];
                    arrayTextoFinal.push(caracter);
                    i += 2;
                    break;
                case 'e':
                    caracter = arrayTextoIngresado[i];
                    arrayTextoFinal.push(caracter);
                    i += 5;
                    break;
                case 'i':
                    caracter = arrayTextoIngresado[i];
                    arrayTextoFinal.push(caracter);
                    i += 4;
                    break;
                case 'o':
                    caracter = arrayTextoIngresado[i];
                    arrayTextoFinal.push(caracter);
                    i += 4;
                    break;
                case 'u':
                    caracter = arrayTextoIngresado[i];
                    arrayTextoFinal.push(caracter);
                    i += 4;
                    break;
            }
        } else { 
            caracter = arrayTextoIngresado[i];
            arrayTextoFinal.push(caracter);
            i ++;
        }
    }
    // Combierte un array en una cadena
    return textoFinal = arrayATexto(arrayTextoFinal);
}

// Encripta un texto
function encriptar(texto) {

    var arrayTexto = [];
    var caracter = '';
    var textoFinal = '';

    // Combierte la cadena en array
    arrayTexto = textoAArray(texto);
    
    for (let i = 0; i < arrayTexto.length; i++) {
        if (arrayTexto[i] === 'a' || arrayTexto[i] === 'e' || arrayTexto[i] === 'i' || arrayTexto[i] === 'o' || arrayTexto[i] === 'u') {
            switch (arrayTexto[i]) {
                case 'a':
                    arrayTexto[i] = 'ai';
                    break;
                case 'e':
                    arrayTexto[i] = 'enter';
                    break;
                case 'i':
                    arrayTexto[i] = 'imes';
                    break;
                case 'o':
                    arrayTexto[i] = 'ober';
                    break;
                case 'u':
                    arrayTexto[i] = 'ufat';
                    break;
            }
        }      
    }

    // Combierte un array en una cadena
    return textoFinal = arrayATexto(arrayTexto);
}

// Combierte un texto en un array
function textoAArray(texto) {
    var arrayTexto = [];

    for (let i = 0; i < texto.length; i++) {
        arrayTexto[i] = texto[i];
    }
    return arrayTexto;
}

// Combierte un array en una cadena
function arrayATexto(array) {
    var textoFinal = '';
    var caracter = '';

    while (array.length > 0) {
        
        caracter = array.pop();

        textoFinal = caracter.concat(textoFinal);
    }

    return textoFinal;
}

// Valida texto si esta todo en minusculas
function validaCaracteres(texto) {

    var alarma = false;
    const reExp = /[a-z]/g;
    
    if(reExp.test(texto)){
        alarma = true;
    }
    return alarma;
}