const textInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoText = document.querySelector(".info-text");
let filterInput;

checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse("").join("");
    infoText.style.display = "block";
    if(filterInput != reverseInput) {
        return infoText.innerHTML = `No, <span>'${textInput.value}'</span> ¡no es palindromo!`;
    }
    infoText.innerHTML = `Si, <span>'${textInput.value}'</span> ¡es palindromo!`;
});
textInput.addEventListener("keyup", () => {
    filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput){
         return checkBtn.classList.add("active");
    }
    infoText.style.display = "none";
    checkBtn.classList.remove("active");
});

