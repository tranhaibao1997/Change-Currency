window.addEventListener('DOMContentLoaded', (event) => {

  const USD = {
    VND: 23388.85,
    EUR: 0.92,
    KRW: 1223.56,
    USD: 1,
    JPY: 107.64,
    CNY: 7.10

  }

  function formatCurrency(type1, type2, value) {
    const formatter = new Intl.NumberFormat(type1, {
      currency: type2,
      style: "currency"
    });
    return formatter.format(value);
  }


  const exchangeBtn = document.getElementById("exchange");
  exchangeBtn.addEventListener("click", () => {
    var currency1 = document.getElementById("currency1").value;
    var currency2 = document.getElementById("currency2").value;
    document.getElementById("currency1").value = currency2
    document.getElementById("currency2").value = currency1
  })




  const convertBtn = document.getElementById("convertCurrencyBtn");
  convertBtn.addEventListener("click", () => {
    var amountInput = document.getElementById("amountInput").value;
    amountInput ? "" : alert("U must enter a number to convert");
    
      amountInput=parseInt(amountInput);
      const fromValue = document.getElementById("currency1").value;
      const toValue = document.getElementById("currency2").value;
      const result = ((USD[toValue] / USD[fromValue]) * parseInt(amountInput)).toFixed(2)
      const notification = showResult(toValue, result)
      document.getElementById("demo").innerHTML = `${parseInt(amountInput)} ${fromValue}=${notification} ${toValue}`;
    



  })

  const showResult = (toValue, result) => {
    var convertedValue = "";
    toValue === "USD" ? convertedValue = formatCurrency('en-US', "USD", result) : ""
    toValue === "VND" ? convertedValue = formatCurrency('vi', "VND", result) : ""
    toValue === "EUR" ? convertedValue = formatCurrency('de-DE', "EUR", result) : ""
    toValue === "JPY" ? convertedValue = formatCurrency('ja-JP', "JPY", result) : ""
    toValue === "CNY" ? convertedValue = formatCurrency('zh-CN', "CNY", result) : ""
    return convertedValue;
  }



});

