const esPalindromo = texto => {
    texto = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    let izquierda = 0, derecha = texto.length - 1;

    while (izquierda < derecha) {
        if (texto[izquierda++] !== texto[derecha--]) return false;
    }
    return true;
};

(esPalindromo("Anita lava la tinaa")) ? console.log("Es un palindromo") : console.log("No es un palindromo");


