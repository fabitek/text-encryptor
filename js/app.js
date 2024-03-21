const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");
const dollContainer = document.querySelector(".doll-container");
const paragraphContainer = document.querySelector(".paragraph-container");
const copyContainer = document.querySelector(".copy-container");


function btnEncrypt() {
    const textEncrypt = encrypt(textArea.value);
    const message = document.querySelector('.message');
    console.log("Texto: ", textArea.value);
    console.log("Texto encriptado: ", textEncrypt);
    message.value = textEncrypt;
    textArea.value = "";
    if (message) {
        message.style.display = 'block'; // Esto hace que el mensaje sea visible
        dollContainer.style.display = 'none';
        paragraphContainer.style.display = 'none';
        copyContainer.style.display = 'block';
    }
}

function encrypt(inputText) {
    const codeMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    if (specialSymbols(inputText)) {
        return "Atención🚨‼️ No tengo permitido encriptar caracteres especiales...";
    }

    let result = inputText;
    codeMatrix.forEach(([char, replacement]) => {
        result = result.replaceAll(char, replacement);
    });

    return result;
}

function specialSymbols(text) {
    const specialCharacters = /[^a-z\s]/;
    return specialCharacters.test(text);
}

function hiddenItems() {
    dollContainer = document.getElementById('doll-container');
    resultContainer = document.getElementById('result-container');
}


// btnEncrypt.addEventListener('click', function() {
//     // Lógica para mostrar el mensaje
//     const message = document.querySelector('.message');
//     if (message) {
//         message.style.display = 'block'; // Esto hará que el mensaje sea visible
//     }
// });



function btnDecrypt() {
    const decryptText = decrypt(message.value);
    console.log("Text ya encriptado: ", message.value);
    textArea.value = decryptText;
    message.value = "";
    message.style.backgroundImage = message.value ? "none" : "";
}

function decrypt(inputText) {
    const codeMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    if (specialSymbols(inputText)) {
        return "Atención🚨‼️ No tengo permitido encriptar caracteres especiales...";
    }

    let result = inputText;
    codeMatrix.forEach(([char, replacement]) => {
        result = result.replaceAll(replacement, char);
    });

    return result;
}

function btnCopy() {
    const copyText = document.querySelector(".message");
    if (navigator.clipboard) {
        navigator.clipboard.writeText(copyText.value);
    } else {
        copyText.select();
        document.execCommand("copy");
    }
}



// function btnEncrypt() {
//     // Validación de caracteres especiales y mayúsculas
//     if (!valideText(textArea.value)) {
//         alert("Ingresa solo texto en minúsculas sin caracteres especiales.");
//         return;
//     }
//     const encryptText = encrypt(textArea.value);
//     message.value = encryptText;
//     textArea.value = "";
// }

// function encrypt(stringEncrypt) {
//     let codeMatrix = [
//         ["e", "enter"],
//         ["i", "imes"],
//         ["a", "ai"],
//         ["o", "ober"],
//         ["u", "ufat"]
//     ];
//     stringEncrypt = stringEncrypt.toLowerCase();

//     for (let i = 0; i < codeMatrix.length; i++) {
//         if (stringEncrypt.includes(codeMatrix[i][0])) {
//             stringEncrypt = stringEncrypt.replaceAll(codeMatrix[i][0], codeMatrix[i][1]);
//         }
//     }

//     return stringEncrypt;
// }

// function valideText(texto) {
//     // Verifica que el texto solo contenga letras minúsculas y espacios.
//     // Retorna false si encuentra mayúsculas o caracteres especiales.
//     const caracteresValidos = /^[a-z\s]*$/;
//     return caracteresValidos.test(texto);
// }

// function btnDecrypt() {
//     if (!valideText(message.value)) {
//         alert("Ingresa solo texto en minúsculas sin caracteres especiales para desencriptar.");
//         return;
//     }
//     const decryptText = decrypt(message.value);
//     textArea.value = decryptText;
//     message.value = "";
//     cambiarBackgroundDeMensaje();
// }

// function decrypt(stringDecrypt) {
//     let codeMatrix = [
//         ["enter", "e"],
//         ["imes", "i"],
//         ["ai", "a"],
//         ["ober", "o"],
//         ["ufat", "u"]
//     ];
//     stringDecrypt = stringDecrypt.toLowerCase();

//     for (let i = 0; i < codeMatrix.length; i++) {
//         if (stringDecrypt.includes(codeMatrix[i][0])) {
//             stringDecrypt = stringDecrypt.replaceAll(codeMatrix[i][0], codeMatrix[i][1]);
//         }
//     }

//     return stringDecrypt;
// }

// function btnCopy() {
//     var copyText = document.querySelector(".message");
//     if (navigator.clipboard) {
//         navigator.clipboard.writeText(copyText.value);
//     } else {
//         copyText.select();
//         document.execCommand("copy");
//     }
// }




