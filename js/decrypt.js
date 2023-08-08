function buttondecrypt() {
    let text = document.getElementById('encrypttext').value;
    text = decrypt(text);
    document.getElementById("empty").style.display = "none";
    document.getElementById("response").style.display = "block";
    document.getElementById("cryptedText").textContent = text;
    document.getElementById('encrypttext').value = "";
}

function decrypt(text) {
    let decryptedText = "";
    let vocal = "";
    for (let i = 0; i < text.length; i++) {
        try {
            switch (text.charAt(i)) {
                case 'a':
                    vocal = 'a' + text.charAt(i + 1);
                    if (vocal === "ai") {
                        decryptedText = decryptedText + 'a';
                        i = i + (vocal.length - 1);
                    }
                    break;
                case 'e':
                    vocal = 'e' + text.charAt(i + 1) + text.charAt(i + 2)  + text.charAt(i + 3)  + text.charAt(i + 4)  + text.charAt(i + 5)  + text.charAt(i + 6);
                    if (vocal === "entrada") {
                        decryptedText = decryptedText + 'e';
                        i = i + (vocal.length - 1);
                    }
                    break;
                case 'i':
                    vocal = 'i' + text.charAt(i + 1) + text.charAt(i + 2)  + text.charAt(i + 3);
                    if (vocal === "imes") {
                        decryptedText = decryptedText + 'i';
                        i = i + (vocal.length - 1);
                    }
                    break;
                case 'o':
                    vocal = 'o' + text.charAt(i + 1) + text.charAt(i + 2)  + text.charAt(i + 3);
                    if (vocal === "ober") {
                        decryptedText = decryptedText + 'o';
                        i = i + (vocal.length - 1);
                    }
                    break;
                case 'u':
                    vocal = 'u' + text.charAt(i + 1) + text.charAt(i + 2)  + text.charAt(i + 3);
                    if (vocal === "ufat") {
                        decryptedText = decryptedText + 'u';
                        i = i + (vocal.length - 1);
                    }
                    break;
                default:
                    decryptedText = decryptedText + text.charAt(i);
                    break;
            }
        }
        catch {
            console.log("No hay mas caracteres")
        }
        
    }
    return decryptedText;
}