const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info')


const calculate = () => {

    fetch(`https://v6.exchangerate-api.com/v6/1c616793e20b99f6f280fdcf/pair/${currencyOne.value}/${currencyTwo.value}`)
    .then(res => res.json())
    .then(data => {

        const rate = data.conversion_rate;
        rateInfo.textContent = `1 ${currencyOne.value} = ${rate.toFixed(4)} ${currencyTwo.value}`;
        amountTwo.value = (amountOne.value * rate).toFixed(2);
    })
}

const swap = () => {
    const oldValue = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = oldValue;
    calculate();
}

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
swapBtn.addEventListener('click', swap)

calculate();