// let imgArray = ['./img/download(1).jpeg' , './img/download(2).jpeg' , './img/download']

// setInterval(function(){
//     let backgroundIndex = Math.floor(Math.random() * imgArray.length)
//     console.log(backgroundIndex)
//     document.body.style.background = imgArray[backgroundIndex]
// },2000)

let inputElem = document.querySelector('.search-bar')
let btnElem = document.querySelector('.btn')

// let weathers = [
//     {id : 1 , name : 'Tehran' , state : 'windy' , humidity : '15' , windSpeed : '10 km/h'},
//     {id : 2 , name : 'Tabriz' , state : 'sunny' , humidity : '30' , windSpeed : '15 km/h'},
//     {id : 3 , name : 'Esfahan' , state : 'snowy' , humidity : '20' , windSpeed : '25 km/h'},
//     {id : 4 , name : 'Mashhad' , state : 'windy' , humidity : '10' , windSpeed : '5 km/h'},
// ]

let weathers = {
    tehran : {temp : 12 , city : 'Tehran' , weather : 'windy' , humidity : 15 , windSpeed : 10 },
    tabriz : {temp : 2 , city : 'Tabriz' , weather : 'sunny' , humidity : 30 , windSpeed : 15 },
    mashhad : {temp : 9 , city : 'Mashhad' , weather : 'windy' , humidity : 10 , windSpeed : 5 }
}

btnElem.addEventListener('click' , clickHandler)

function clickHandler(){
    let cityName = inputElem.value
    let maincity = weathers[cityName]

    if(maincity){
        document.querySelector('.weather').classList.remove('loading')
        document.querySelector('.city').innerHTML = maincity.city
        document.querySelector('.temp').innerHTML = maincity.temp
        document.querySelector('.description').innerHTML = maincity.weather
        document.querySelector('.humidity').innerHTML = maincity.humidity
    }
    else{
        alert('its wrong')
    }
    

    
    console.log(maincity)
}
