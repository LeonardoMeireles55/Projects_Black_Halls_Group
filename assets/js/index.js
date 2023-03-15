let button = document.getElementById("button");
function conferirLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "leo" && password === "leo") {
        alert("Correct!");
    }
    else {
        alert("Incorrect!")
    }
}
button.addEventListener("click", conferirLogin);

