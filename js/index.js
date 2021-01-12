// Random inspirational quote generator and display on page
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
