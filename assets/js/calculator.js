const form = document.forms.calculator;
const result = document.querySelector('.calculator-result');
const price = 1312;

let resultOutput = function(){
    result.innerHTML = `${form.days.value * form.participants.value * price} грн`;
}

resultOutput();

form.addEventListener('change', () => {
    if(form.days.value > 100){
        form.days.value = 100
    } if(form.days.value < 3){
        form.days.value = 3
    }

    if(form.participants.value > 100){
        form.participants.value = 100
    } if(form.participants.value < 6){
        form.participants.value = 6
    }

    resultOutput();
});