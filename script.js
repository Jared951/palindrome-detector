const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result")

function isPalindrome(str){
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanedStr === cleanedStr.split("").reverse().join("");
};

function checkInput(){
  const inputValue = textInput.value.trim();

    if (inputValue === ""){
        alert("Please input a value");
        return;
    }

    if (isPalindrome(inputValue)) {
        result.innerText = `${inputValue} is a palindrome`;
    } else {
        result.innerText = `${inputValue} is not a palindrome`;
    }
};

checkButton.addEventListener("click", checkInput);