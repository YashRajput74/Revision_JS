function checkNum(word) {
    const wordArray = word.split("");
    for (let i = 0; i < word.length; i++) {
        if (!isNaN(parseInt(wordArray[i]))) {
            return true
        }
    }
    return false;
}

function checkSpecialChars(word){
    return /[^a-zA-Z0-9]/.test(word)
}

function checkPassword(submittedValue) {
    const response = document.querySelector(".responsePass");
    console.log(submittedValue);
    if (submittedValue.length > 8 && checkSpecialChars(submittedValue)) {
        response.style.color = "green";
        response.textContent = "Strong Password";
    }
    else if (submittedValue.length > 6 && checkNum(submittedValue)) {
        response.style.color = "orange";
        response.textContent = "Could be stronger";
    }
    else {
        response.style.color = "red";
        response.textContent = "Too Weak";
    }
}

function addEvents() {
    const submitButton = document.querySelector(".submitPassword");
    submitButton.addEventListener("click", (event) => {
        event.preventDefault()
        const submittedValue = document.querySelector("#pass1").value;
        checkPassword(submittedValue);
    })
}

function makePasswordGenerator(param, pass) {
    const tpl = `
    <form class="pass">
        <label name="${pass}">${param}</label>
        <input type="password" id="${pass}">
        <button class="submitPassword">Submit</button>
    </form>
    <div><p class="responsePass"></p></div>
        `;
    return tpl;
}

function init() {
    const tpl = makePasswordGenerator("Enter Password", "pass1");
    document.querySelector("#root").innerHTML = tpl;
    addEvents();
};

init();