const reverseButton = document.querySelector('#reverse');
const reverseAnswer = document.querySelector('.reverse_answer');
const palindromeButton = document.querySelector('#palindrome');
const palindromeAnswer =  document.querySelector(".palindrome_answer");
const restaurantButton = document.querySelector('#generate_bill');
const restaurantAnswer = document.querySelector(".restaurant_answer");
const clearPlaceHolder = (input) => {
    input.placeholder = "";
};
const appearPlaceHolder = (input) => {
    input.placeholder = "Enter a Value";
};
reverseButton.addEventListener("click",()=>{
    const reverseStringValue = document.querySelector('#word');
    if(reverseStringValue.value.trim().length === 0){
        alert("Reaaalllyy!! An empty submission?");
    }
    else{
        let reverseStringValue_temp = reverseStringValue.value;
        let reversedString='';
        for(let i= reverseStringValue_temp.length - 1; i >= 0; i--){
            reversedString += reverseStringValue_temp[i];
        }
        const answer = "The reverse of " + reverseStringValue_temp + " is " + reversedString+"."; 
        reverseAnswer.textContent = answer;
        reverseStringValue.value = "";
        setTimeout(()=>{
            reverseAnswer.textContent = "";
        },5000);
    }
})
palindromeButton.addEventListener("click",()=>{
    const palindromeValue = document.querySelector("#palindrome_word");
    if(palindromeValue.value.trim().length === 0){
        alert("Reaaalllyy!! An empty submission?");
    }
    else{
        let palindromeValue_temp = palindromeValue.value;
        let reversedString='';
        for(let i=palindromeValue_temp.length - 1; i >= 0; i--){
            reversedString += palindromeValue_temp[i];
        }
        palindromeAnswer.textContent = palindromeValue_temp === reversedString ? palindromeValue_temp + " is a palindrome." : palindromeValue_temp + " is not a palindrome.";
        palindromeValue.value = "";
        setTimeout(()=>{
            palindromeAnswer.textContent = "";
        },5000);
    }
})
restaurantButton.addEventListener("click",()=>{
    const bill = document.querySelector("#bill_amount");
    const tip = document.querySelector("#tip_percent");
    if(bill.value < 0 || bill.value === "" || tip.value < 0){
        alert("Not a empty or negative values brotha!");
    }else{
        let bill_temp = Number(bill.value);
        let tip_temp = Number(tip.value);
        if(tip_temp === ""){
            tip_temp = 0;
        }
        console.log(typeof bill.value)
        let total = bill_temp + ((bill_temp/100)*tip_temp);
        restaurantAnswer.textContent = "Food Bill is "+ bill_temp + "$ and Tip is "+ ((bill_temp/100)*tip_temp) + "$." +" Your total Bill is " + total +"$."
        bill.value = ""
        tip.value = ""
        setTimeout(()=>{
            restaurantAnswer.textContent = "";
        },5000);
    }
})
