window.addEventListener('DOMContentLoaded', (event) => {
  const currencyRatioVNDtoUSD = 23388.85;
  const currencyRatioUSDtoEUR = 1.08;
  const currencyRatioVNDtoEUR=25321.21;

  function formatCurrency(type1,type2, value) {
    const formatter = new Intl.NumberFormat(type1, {
      currency: type2,
      style: "currency"
    });
    return formatter.format(value);
  }

  function USDToVND(amount) {
    // return currencyRatioVNDtoUSD.toFixed(2);
    return formatCurrency('vi',"VND",currencyRatioVNDtoUSD.toFixed(2)*amount)
  }
  function VNDToUSD(amount) {
    // return (currencyRatioVNDtoUSD / amount).toFixed(2)
    return formatCurrency('en-US',"USD",(amount/currencyRatioVNDtoUSD).toFixed(2))
  }


  function USDToEUR(amount) {
    // return currencyRatioVNDtoUSD.toFixed(2);
    return formatCurrency('en-US',"USD",(amount/currencyRatioUSDtoEUR).toFixed(2))
  }
  function EURToUSD(amount) {
    // return (currencyRatioVNDtoUSD / amount).toFixed(2)
    

    return formatCurrency('de-DE',"EUR",currencyRatioUSDtoEUR.toFixed(2)*amount)
  }




  function EURToVND(amount) {
    // return currencyRatioVNDtoUSD.toFixed(2);
    return formatCurrency('vi',"VND",currencyRatioVNDtoEUR.toFixed(2)*amount)
  }
  function VNDToEUR(amount) {
    // return (currencyRatioVNDtoUSD / amount).toFixed(2)
    return formatCurrency('de-DE',"EUR",(amount/currencyRatioVNDtoEUR).toFixed(2))
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
    
    var result="";
    currency1===currency2 ?result="Currency 1 is the same as Currency 2 :(( Pls re-select. Thank u !" :""
    currency1==="USD" && currency2==="VND" ? result=(`${amountInput} ${currency1} to ${currency2} is ${USDToVND(amountInput)}`) :""
    currency1==="VND" && currency2==="USD" ? result=(`${amountInput} ${currency1} to ${currency2} is ${VNDToUSD(amountInput)}`) :""

    currency1==="EUR" && currency2==="USD" ? result=(`${amountInput} ${currency1} to ${currency2} is ${EURToUSD(amountInput)}`) :""
    currency1==="USD" && currency2==="EUR" ? result=(`${amountInput} ${currency1} to ${currency2} is ${USDToEUR(amountInput)}`) :""

    currency1==="EUR" && currency2==="VND" ? result=(`${amountInput} ${currency1} to ${currency2} is ${EURToVND(amountInput)}`) :""
    currency1==="VND" && currency2==="EUR" ? result=(`${amountInput} ${currency1} to ${currency2} is ${VNDToEUR(amountInput)}`) :""

    document.getElementById("demo").innerHTML = result;
  })
  


});
