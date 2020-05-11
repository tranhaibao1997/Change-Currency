window.addEventListener('DOMContentLoaded', (event) => {
  const currencyRatioVNDtoUSD = 23388.85;

  function formatCurrency(type1,type2, value) {
    const formatter = new Intl.NumberFormat(type1, {
      currency: type2,
      style: "currency"
    });
    return formatter.format(value);
  }
  function USDToVND(amount) {
    // return currencyRatioVNDtoUSD.toFixed(2);
    return formatCurrency('vi',"VND",currencyRatioVNDtoUSD.toFixed(2))
  }
  function VNDToUSD(amount) {
    // return (currencyRatioVNDtoUSD / amount).toFixed(2)
    return formatCurrency('en-US',"USD",(amount/currencyRatioVNDtoUSD).toFixed(2))
  }

  const exchangeBtn = document.getElementById("exchange");
  const convertBtn = document.getElementById("convertCurrencyBtn");
  exchangeBtn.addEventListener("click", () => {
    var currency1 = document.getElementById("currency1").value;
    var currency2 = document.getElementById("currency2").value;
    document.getElementById("currency1").value = currency2
    document.getElementById("currency2").value = currency1
  })

  convertBtn.addEventListener("click", () => {
    var currency1 = document.getElementById("currency1").value;
    var currency2 = document.getElementById("currency2").value;
    const amountInput = document.getElementById("amountInput").value;
    amountInput ?"" :alert("You must enter an amount");
    console.log(currency1)
    console.log(currency2)

    currency1==="USD" && currency2==="VND" ? console.log(`${amountInput} from ${currency1} To ${currency2} is ${USDToVND(amountInput)}`) :""
    currency1==="VND" && currency2==="USD" ? console.log(`${amountInput} from ${currency1} To ${currency2} is ${VNDToUSD(amountInput)}`) :""


  })


});
