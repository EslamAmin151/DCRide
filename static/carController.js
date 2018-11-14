

let car1 = {
    carID: "1",
    carLat: 29.669025,
    carLong: -95.196819,
    markerColor: "blue"
}

let car2 = {
    carID: "2",
    carLat: 29.757125,
    carLong: -95.355622,
    markerColor: "red"
}

let car3 = {
    carID: "3",
    carLat: 29.684545,
    carLong: -95.411491,
    markerColor: "yellow"
}

let car4 = {
    carID: "4",
    carLat: 29.752721,
    carLong: -95.339295,
    markerColor: "green" 
}

let car5 = {
    carID: "5",
    carLat: 29.646427,
    carLong: - 95.277743,
    markerColor: "orange" 
}

let car6 = {
    carID: "6",
    carLat: 29.844174,
    carLong: -95.234162,
    markerColor: "purple"
}

let car7 = {
    carID: "7",
    carLat: 29.835209,
    carLong: -95.412286,
    markerColor: "dark gray"
} 

let car8 = {
    carID: "8",
    carLat: 29.789602,
    carLong: -95.230839,
    markerColor: "magenta"
}

let car9 = {
    carID: "9",
    carLat: 29.650140,
    carLong: -95.419282,
    markerColor: "pink"
}

let car10 = {
    carID: "10",
    carLat: 29.759415,
    carLong: -95.448185,
    markerColor: "black"
}
let marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10
let operatorRN
let changeAmountRN
let changeType

let cars = [car1,car2,car3,car4,car5,car6,car7,car8,car9,car10]
let markers = [marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9,marker10]

var map;







function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 29.757125 , lng: -95.355622 },
        zoom: 10,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true
    })
}

initMap()
createMarkers()
createCarInfo()


function createCarInfo() {
    
    for (index = 0; index < cars.length; index++) {
        
    let currentCar = cars[index]
    let currentMarker = markers[index]
        setInterval(function () {
    driveCars(currentCar, currentMarker)

}, 1000)
}
}
function createMarkers() {
    for (index = 0; index < markers.length; index++) {
        var startPosition = { lng: cars[index].carLong, lat: cars[index].carLat }
        markers[index] = new SlidingMarker({
            position: startPosition,

            map: map,
            duration: 1000,
            easing: "linear"
        })
        markers[index].setDuration(1000)
        //console.log(markers[index])
        //console.log(cars[index].carLong)
}
}



function driveCars(currentCar, currentMarker) {
    
    
        
        
        change(currentCar)
        //console.log("Car " + currentCar.carID + " : " + currentCar.carLat + "," + currentCar.carLong)
        
        var newPosition = { lng: currentCar.carLong, lat: currentCar.carLat}
        currentMarker.setPosition(newPosition)
        
        
        
    } 
               
       
   


    
    
    

function whatChanges(){
  let changeRN = Math.floor((Math.random()* 3))
  //console.log(changeRN)
  let changeArray = ["latOnly", "longOnly", "both"]
  changeType = changeArray[changeRN]

}


function howMuchChange(){
    
        operatorRN = Math.floor((Math.random() * 2))
        changeAmountRN = Math.random() * (0.0014 - 0.0006) + 0.0006
        
}

function latChange (currentCar) {
    howMuchChange()
    if (operatorRN == 0) {
        currentCar.carLat += changeAmountRN
    } else {
        currentCar.carLat -= changeAmountRN
    }
    return currentCar.carLat
}

function longChange(currentCar) {
    howMuchChange()
    if (operatorRN == 0) {
        currentCar.carLong += changeAmountRN
    } else {
        currentCar.carLong -= changeAmountRN
    }
    return currentCar.carLong
}

function change(currentCar){
        whatChanges()
        if (changeType == "latOnly"){
            latChange(currentCar)
        }
        else if (changeType == "longOnly") {
            longChange(currentCar)
    }
        else if (changeType == "both"){
            latChange(currentCar)
            longChange(currentCar)
        }
        
    }




function postCars() {
    
  
setInterval(function() {
    
carsForm =`
  
<form action="/admin" id="submitForm" method="POST">
  
            <input type="textbox" name="carID1" value="${car1.carID}"/>
            <input type="textbox" name="carLong1" value="${car1.carLong}"/>
            <input type="textbox" name="carLat1" value="${car1.carLat}"/><br>
            <input type="textbox" name="carID2" value="${car2.carID}"/>
            <input type="textbox" name="carLong2" value="${car2.carLong}"/>
            <input type="textbox" name="carLat2" value="${car2.carLat}"/><br>
            <input type="textbox" name="carID3" value="${car3.carID}"/>
            <input type="textbox" name="carLong3" value="${car3.carLong}"/>
            <input type="textbox" name="carLat3" value="${car3.carLat}"/><br>
            <input type="textbox" name="carID4" value="${car4.carID}"/>
            <input type="textbox" name="carLong4" value="${car4.carLong}"/>
            <input type="textbox" name="carLat4" value="${car4.carLat}"/><br>
            <input type="textbox" name="carID5" value="${car5.carID}"/>
            <input type="textbox" name="carLong5" value="${car5.carLong}"/>
            <input type="textbox" name="carLat5" value="${car5.carLat}"/><br>
            <input type="textbox" name="carID6" value="${car6.carID}"/>
            <input type="textbox" name="carLong6" value="${car6.carLong}"/>
            <input type="textbox" name="carLat6" value="${car6.carLat}"/><br>
            <input type="textbox" name="carID7" value="${car7.carID}"/>
            <input type="textbox" name="carLong7" value="${car7.carLong}"/>
            <input type="textbox" name="carLat7" value="${car7.carLat}"/><br>
            <input type="textbox" name="carID8" value="${car8.carID}"/>
            <input type="textbox" name="carLong8" value="${car8.carLong}"/>
            <input type="textbox" name="carLat8" value="${car8.carLat}"/><br>
            <input type="textbox" name="carID9" value="${car9.carID}"/>
            <input type="textbox" name="carLong9" value="${car9.carLong}"/>
            <input type="textbox" name="carLat9" value="${car9.carLat}"/><br>
            <input type="textbox" name="carID10" value="${car10.carID}"/>
            <input type="textbox" name="carLong10" value="${car10.carLong}"/>
            <input type="textbox" name="carLat10" value="${car10.carLat}"/><br>
            </form>
               `
let carDiv = document.getElementById("allCarsForm")  
carDiv.innerHTML = carsForm
let carForm = document.getElementById("submitForm")
//console.log(carForm)
carForm.submit()
}
,5000)
}

postCars()


