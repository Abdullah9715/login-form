var Fullname = localStorage.getItem('typeNAME');
document.getElementById("NAME").textContent = "User Name YOU Entred:  " + Fullname;

//print citys
var cites = ["Faislabad", "Lahore", "Karachi", "Islamabad", "Burewal ", "Sheikhupura", "Kashmir"]

function printcity() {

    document.getElementById("output").innerHTML = "";

    for (let i = 0; i < cites.length; i++) {
        let number = i + 1;
        let cityNAme = cites[i];

        document.getElementById("output").innerHTML += "<span style=' padding:2px; display: inline-block;'>" + number + ")" + cityNAme + "</span>" + "<br>";
        console.log(cityNAme)

    }
}
// add cites

function addcity() {
    let city = document.getElementById("input").value;
    if (!city) {
        Toastify({
            text: "please enter city name",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(174,25,158,0.7791491596638656) 100%);",
            },
            onClick: function() {} // Callback after click
        }).showToast();
        return;
    }
    if (city.length < 3) {
        Toastify({
            text: "Please enter correct city name",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(174,25,158,0.7791491596638656) 100%);",
            },
            onClick: function() {} // Callback after click
        }).showToast();
        return;
    }

    // let cityFirstLeter = city.charAt(0).toUpperCase(); is also same let cityFirstLeter = city.slice(0, 1).toUpperCase();  

    let cityFirstLeter = city.slice(0, 1).toUpperCase();
    let cityAllLeter = city.slice(1).toLowerCase();
    let CityWordCaitalzie = cityFirstLeter + cityAllLeter;

    let cityFound = false;
    for (let i = 0; i < cites.length; i++) {
        if (cites[i] === CityWordCaitalzie) {
            cityFound = true;
            let html = "<span style='color:red;font-size:20px;'>" + CityWordCaitalzie + "</span>" + " IS ALready Exist in list"
            document.getElementById("output").innerHTML = html;
        }
    }
    if (cityFound == false) {
        cites.push(CityWordCaitalzie);
        let html1 = "<span style='color:green;font-size:20px;'>" + CityWordCaitalzie + "</span>" + " has been succesfully added  into list"
        document.getElementById("output").innerHTML = html1;

    }

}


//Clear Output Field 
document.getElementById("clearoutput").onclick = function() {
    document.getElementById("output").innerHTML = "";

}
document.getElementById("btnClear").onclick = function() {
    document.getElementById("input").value = "";

}