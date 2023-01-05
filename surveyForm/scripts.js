function myFunc() {
    const nome = document.querySelector('#name').value;
    const regEx = /Maire/i;

    if (regEx.test(nome)) {
        alert("Mo? Te amo <3");
    }
}