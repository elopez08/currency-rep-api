var currencyEl=document.querySelector("#currency");
var selectEl=document.querySelector("#form")



//create currency api function
var getCurrency = function (){
    //put api USD api link to a variety.
    var apiCurrency="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";
    //make a request to USD api
    fetch(apiCurrency).then(function(response){
        console.log(response);
        response.json().then(function(data){
            console.log(data);
            //japanese yen for Tokyo
            console.log(data.usd.jpy);
            //british pound for London
            console.log(data.usd.gbp);
            //Australian dollar for Sydney
            console.log(data.usd.aud);
        })
    })
}

getCurrency()

var displayCurrency=function(event){
    event.preventDefault()
    
    var currencyDisEL=document.createElement("p")
    currencyDisEL.className="currency-display"
    currencyDisEL.setAttribute=("id", "currency-display")
    currencyDisEL.textContent="USD=6.37RMB"

    //append currency display to currency section.
    currencyEl.appendChild(currencyDisEL);
}


// function favTutorial() {  
//     var mylist = document.getElementById("#myList");  
//     document.getElementById("#currency-display").value = mylist.options[mylist.selectedIndex].text;  
//     } 

selectEl.addEventListener("submit", displayCurrency)