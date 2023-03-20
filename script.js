function check() {

    var username = document.getElementById("typeNAME").value
    console.log(username)
    localStorage.setItem('typeNAME', username)
    var maile = document.getElementById("typeEmailX").value
    console.log(maile)
    var pasword = document.getElementById("typePasswordX").value
    console.log(pasword)
    var email = "admin@user.com"
    var Pass = 123456
    if (!username) {
        Toastify({
            text: "Enter Full Name",
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
    if (!maile) {
        Toastify({
            text: "Enter Your Email",
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
    if (!pasword) {
        Toastify({
            text: "Enter your 8 digit password",
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
    if (maile == email && pasword == Pass) {
        window.location.href = "Home.html"
            // "<br><h4>" + username + "</h4>"
    } else {
        Toastify({
            text: "YOur passwod or email not match",
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

    }
}