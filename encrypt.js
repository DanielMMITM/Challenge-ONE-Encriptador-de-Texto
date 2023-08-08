function buttonencrypt() {
    let text = document.getElementById('encrypttext');
    text = text.value;
    text = crypt(text);
    let response = document.getElementById("empty");
    response.style.display = "none";
    response = document.getElementById("response");
    response.style.display = "block";
    document.getElementById("cryptedText").textContent = text;
}

function crypt(text) {
    let cryptedText = "";
    for (let i = 0; i < text.length; i++) {
        console.log(text.charAt(i));
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