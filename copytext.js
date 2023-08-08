function copy() {
    let copyText = document.getElementById("cryptedText");

    navigator.clipboard.writeText(copyText.textContent);
}