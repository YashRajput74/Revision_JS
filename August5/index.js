//test case if there are two chars in one word, then my current code won't work
// let word1 = "listen";
// let word2 = "silent";

function anagramChecker(word1, word2) {
    for (let i = 0; i < word1.length; i++) {
        let flag = false;
        for (let j = 0; j < word2.length; j++) {
            if (word1[i] == word2[j]) {
                flag = true;
            }
        }
        if (flag == false) {
            return false;
        }
    }

    return true;
}
function startChecking(word1, word2) {
    let result1 = anagramChecker(word1, word2);
    let result2 = anagramChecker(word2, word1);

    if (result1 == true && result2 == true) {
        console.log(true);
        return true
    }
    else {
        console.log(false);
        return false
    }
}

function addEvents() {
    let inputField1 = document.querySelector("#word1");
    let inputField2 = document.querySelector("#word2");
    let submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", () => {
        let word1 = inputField1.value;
        let word2 = inputField2.value;
        let ans = startChecking(word1, word2);
        if(ans==true){
            ans="They are not anagrams."
        }
        else{
            ans="These are anagarms."
        }
        document.querySelector("#result").textContent = ans;
    });
}

addEvents();