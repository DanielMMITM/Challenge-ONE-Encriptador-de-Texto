function buttonencrypt() {
    let text = document.getElementById('encrypttext').value;
    text = crypt(text);
    document.getElementById("empty").style.display = "none";
    document.getElementById("response").style.display = "block";
    document.getElementById("cryptedText").textContent = text;
    document.getElementById('encrypttext').value = "";
}

function crypt(text) {
    let cryptedText = "";
    for (let i = 0; i < text.length; i++) {
        switch (text.charAt(i)) {
            case 'a': 
                cryptedText = cryptedText + 'ai';
                break;
            case 'e': 
                cryptedText = cryptedText + 'enter';
                break;
            case 'i': 
                cryptedText = cryptedText + 'imes';
                break;
            case 'o': 
                cryptedText = cryptedText + 'ober';
                break;
            case 'u': 
                cryptedText = cryptedText + 'ufat';
                break;
            default: 
                cryptedText = cryptedText + text.charAt(i);
                break;
        }
    }
    return cryptedText;
}