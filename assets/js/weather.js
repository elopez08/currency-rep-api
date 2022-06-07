function Getinfo(){
    const cityInput = document.getElementById("cityINput");
    const cityName = document.getElementById("CityName");
    cityName.innerHTML ="--"+cityInput.value+"--"
}

fetch("api.openweathermap.org/data/2.5/forecast?q='+cityInput.value+'&appid=4edd5c67bad039e65d1609fc75835f07")
.then(response => response.json())
.then(data =>{
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Min").innerHTML ="Min:" +Number(data.list[i].main.temp_min);
    }

    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Max").innerHTML ="Max:" +Number(data.list[i].main.temp_max);
    }

    for(i=0;i<5;i++){
        document.getElementById("img" +(i+1)).src =" http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    }
})

const d =new Date();
const weekday =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function CheckDay(day){
    if(day +d.getDay() > 6){
        return day +d.getDay()-7;
    }
    else{
        return day +d.getDay();
    }
}

for(i=0;i<5;i++){
    document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
}