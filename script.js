fetch("https://restcountries.com/v3.1/all").then(function(data) {
    return data.json();
}).then(function(countryData) {
      var div = document.createElement("div");
      div.setAttribute("class","container");
      var row = document.createElement("div");
      row.setAttribute("class","row");
  
      div.append(row);
  

     countryData.forEach(function(country) {
        var card = document.createElement("div");
        card.setAttribute("class"," card card-design text-white col-lg-4 col-sm-12");
        row.appendChild(card);

      var cardHeader = document.createElement("div");
      cardHeader.setAttribute("class","card-header bg-dark text-white d-flex justify-content-center");
      cardHeader.innerHTML = country.name.common;
      card.append(cardHeader);

      var cardBody = document.createElement("div");
      cardBody.setAttribute("class","card-body p-3 card-design");
      cardBody.innerHTML = `<img class="mx-auto d-block" src= ${country.flags.png} height = '90' width='200'>`

      if(country.capital){
        var capitalText = document.createElement("p");
      capitalText.setAttribute("class","text-center");
      capitalText.innerText = `Capital : ${country.capital}`;
      cardBody.append(capitalText);
      }
        var RegionText = document.createElement("p");
        RegionText.setAttribute("class","text-center");
        RegionText.innerText = `Region : ${country.region}`;
        cardBody.append(RegionText);
        card.append(cardBody);
        var code=document.createElement("p");
        code.setAttribute("class","text-center");
        code.innerText=`Country Code : ${country.cca3}`;
        cardBody.append(code);
        card.append(cardBody);
});
      
      document.body.append(div);
      
}).catch(function(error) {
    console.error("error");
 })



