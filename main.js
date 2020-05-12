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

    amountInput = parseInt(amountInput);
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





  var moneyType = [1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000];



  function foo(num) {
    var index = moneyType.length - 1;
    var splits = [];
    while (num >= moneyType[0]) {
      if (num >= moneyType[index]) {
        num -= moneyType[index];
        splits.push(moneyType[index]);
      } else {
        index--;
      }
    }
    return splits;
  }



  var coinChangeBtn = document.getElementById("coinChangeBtn")
  coinChangeBtn.addEventListener("click", () => {
    document.getElementById("myList").innerHTML = ""
    let temp = []
    const coinInput = document.getElementById("coinInput").value
    temp = foo(parseInt(coinInput));

    //turn temp array to object
    let obj = {};
    for (let i = 0; i < temp.length; i++) {
      let value = temp[i];
      if (!obj[value]) {
        obj[value] = 1;
      } else {
        obj[value]++;
      }
    }

    obj[500000] ? appendImg(500000, obj[500000]) : ""
    obj[200000] ? appendImg(200000, obj[200000]) : ""
    obj[100000] ? appendImg(100000, obj[100000]) : ""
    obj[50000] ? appendImg(50000, obj[50000]) : ""
    obj[20000] ? appendImg(20000, obj[20000]) : ""
    obj[10000] ? appendImg(10000, obj[10000]) : ""
    obj[5000] ? appendImg(5000, obj[5000]) : ""
    obj[2000] ? appendImg(2000, obj[2000]) : ""
    obj[1000] ? appendImg(1000, obj[1000]) : ""




    // temp.filter(elm => elm === 500000).map((elm) => { appendImg(500000) })
    // temp.filter(elm => elm === 200000).map((elm) => { appendImg(200000) })
    // temp.filter(elm => elm === 100000).map((elm) => { appendImg(100000) })
    // temp.filter(elm => elm === 50000).map((elm) => { appendImg(50000) })
    // temp.filter(elm => elm === 20000).map((elm) => { appendImg(20000) })
    // temp.filter(elm => elm === 10000).map((elm) => { appendImg(10000) })
    // temp.filter(elm => elm === 5000).map((elm) => { appendImg(5000) })
    // temp.filter(elm => elm === 2000).map((elm) => { appendImg(2000) })
    // temp.filter(elm => elm === 1000).map((elm) => { appendImg(1000) })



  })

  function appendImg(value, number) {

    let imgLink = "";
    var img = new Image();
    value === 500000 ? imgLink = "https://3.bp.blogspot.com/-XkkbFyrCKWg/Vn-Kthj5VlI/AAAAAAAAB4M/CJ0SJW2JkGU/s1600/v500rb1.jpg" : ""
    value === 200000 ? imgLink = "https://i.pinimg.com/originals/51/0b/b7/510bb7834f1b2e74bc4195f4d0f09dae.jpg" : ""
    value === 100000 ? imgLink = "https://scootersaigontour.com/wp-content/uploads/2019/04/front-of-100000-VND-note.jpg" : ""
    value === 50000 ? imgLink = "https://upload.wikimedia.org/wikipedia/vi/thumb/2/28/%C4%90%E1%BB%93ng_b%E1%BA%A1c_50.000.jpg/300px-%C4%90%E1%BB%93ng_b%E1%BA%A1c_50.000.jpg" : ""
    value === 20000 ? imgLink = "https://image2.tienphong.vn/w665/Uploaded/2020/xumrvjpnb/215/54215.jpg" : ""
    value === 10000 ? imgLink = "https://art-hanoi.com/collection/vnpaper/vn-p119a-b.jpg" : ""
    value === 5000 ? imgLink = "https://upload.wikimedia.org/wikipedia/vi/7/7c/%C4%90%E1%BB%93ng_b%E1%BA%A1c_5000_%C4%91%E1%BB%93ng.jpg" : ""
    value === 2000 ? imgLink = "https://upload.wikimedia.org/wikipedia/vi/5/57/Gi%E1%BA%A5y_b%E1%BA%A1c_2000.jpg" : ""
    value === 1000 ? imgLink = "https://upload.wikimedia.org/wikipedia/vi/9/9f/%C4%90%E1%BB%93ng_b%E1%BA%A1c_1000_%C4%91%E1%BB%93ng.jpeg" : ""
    img.src = imgLink;
    var node = document.createElement("p");                 
    var textnode = document.createTextNode(number); 
          // Create a text node
    node.appendChild(textnode);    
    var div = document.createElement("div");          
    div.appendChild(img)                      
    div.appendChild(node)  
    document.getElementById("myList").appendChild(div);
  
    
  }





});

