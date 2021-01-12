// // Inspirational Quote JSON request

// var mainQuote;
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var mainQuote = JSON.parse(this.responseText);
//     // console.log(mainQuote[Math.random() * mainQuote.length].text)
//     let quoteNum = Math.round(mainQuote.length * Math.random())
//     console.log(mainQuote[quoteNum].text.length)
//     while (mainQuote[quoteNum].text.length > 50) {
//         quoteNum = Math.round(mainQuote.length * Math.random())
//         console.log(mainQuote[quoteNum].text.length)
//     }
//     document.getElementById("quote").innerHTML = `'${mainQuote[quoteNum].text}'`;
//     console.log()
//   }
//   else {
//       document.getElementById("quote").innerHTML = 'Stay motivated!';
//   }
// };
// xmlhttp.open("GET", "https://type.fit/api/quotes", true); // GET request to JSON API
// xmlhttp.send();

// Random quote generator and display on page
fetch('https://type.fit/api/quotes')
  .then(response => {
    if (response.ok) {
      data = response.json();
      return data; // return json data to next .then
    } else {
      console.log("FAILURE")
    }
  })
  .then(function quoteFunction(data) {
    let quote = data[Math.round(data.length * Math.random())].text;
    while (quote.length > 50) {
      quote = data[Math.round(data.length * Math.random())].text;
    }
    document.getElementById("quote").innerHTML = `'${quote}'`
  })