var selectEl=document.querySelector("#mylist");
var currencyDisplayEl=document.querySelector("#currencyDisplay");

//create currency api function
var getCurrency = function (currency){
    //put api USD api link to a variety.
    var apiCurrency="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";
    
    //make a request for USD api to get data
    fetch(apiCurrency).then(function(response){    
        response.json().then(function(data){    
            //get Japanese yen for Tokyo
            var jpy=data.usd.jpy;            
            //get British pound for London
            var gbp =data.usd.gbp;     
            //get Australian dollar for Sydney
            var aud=data.usd.aud       
            //if currency parameter match the currency name, display the value.
            if(currency==="jpy"){
                displayCurrency(jpy,"JPY");
            }else if(currency==="gbp"){
                displayCurrency(gbp,"GBP");
            }else{
                displayCurrency(aud,"AUD")
            }          
        })
    });
};
//add content to currency division
var displayCurrency=function(number, money){
    currencyDisplayEl.textContent="1 USD = "+ number +" "+ money
}

//display currency in currency division when change dropdown menue
var currencyHandler=function(event){   
    var targetEl=event.target.value;
    //if selected currency matched value, run getCurrency function with the currency parameter.
    if(targetEl ==="Tokyo"){
        getCurrency("jpy");      
    }else if(targetEl ==="London"){
        getCurrency("gbp");       
    }else{
        getCurrency("aud");      
    }
};

//dropdown menu connect to currency division
 selectEl.addEventListener("change", currencyHandler);
var lightmode=true
var dark=document.querySelector(".slider") 
var darkmode=function(event){
if(lightmode===true){
   document.querySelector("header").style.backgroundColor="black"
   lightmode=false
   document.querySelector("section").style.backgroundColor="black"
   lightmode=false
} else{
    document.querySelector("header").style.backgroundColor="#3A37F3"
    lightmode=true
    document.querySelector("section").style.backgroundColor="white"
    lightmode=true
}

}

dark.addEventListener("click",darkmode)
