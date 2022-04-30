window.addEventListener('DOMContentLoaded', (event) => {
    let bachelorPicture = document.getElementById("bachelor-picture");
    let bachelorBox = document.getElementById("bachelor-box");

    bachelorPicture.addEventListener('click', displayVideo);
    bachelorBox.addEventListener('mouseleave', changeBackgroundColor);

    function displayVideo(){
        bachelorPicture.style.display = "none";
        document.getElementById("bachelor-video").style.display = "block";
    }

    function changeBackgroundColor(){
        bachelorBox.style.backgroundColor = "#681750";
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    let birthdayPicture = document.getElementById("birthday-picture");
    let birthdayBox = document.getElementById("birthday-box");
    
    birthdayPicture.addEventListener('click', displayVideo);
    birthdayBox.addEventListener('mouseleave', changeBackgroundColor);

    function displayVideo(){
        birthdayPicture.style.display = "none";
        document.getElementById("birthday-video").style.display = "block";
    }

    function changeBackgroundColor(){
        birthdayBox.style.backgroundColor = "#681750";
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    let corporatePicture = document.getElementById("corporate-picture");
    let corporateBox = document.getElementById("corporate-box");

    corporatePicture.addEventListener('click', displayVideo);
    corporateBox.addEventListener('mouseleave', changeBackgroundColor);

    function displayVideo(){
        corporatePicture.style.display = "none";
        document.getElementById("corporate-video").style.display = "block";
    }

    function changeBackgroundColor(){
        corporateBox.style.backgroundColor = "#681750";
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    let nightPicture = document.getElementById("night-picture");
    let nightBox = document.getElementById("night-box");
    
    nightPicture.addEventListener('click', displayVideo);
    nightBox.addEventListener('mouseleave', changeBackgroundColor);

    function displayVideo(){
        nightPicture.style.display = "none";
        document.getElementById("night-video").style.display = "block";
    }

    function changeBackgroundColor(){
        nightBox.style.backgroundColor = "#681750";
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    let promPicture = document.getElementById("prom-picture");
    let promBox = document.getElementById("prom-box");
    
    promPicture.addEventListener('click', displayVideo);
    promBox.addEventListener('mouseleave', changeBackgroundColor);

    function displayVideo(){
        promPicture.style.display = "none";
        document.getElementById("prom-video").style.display = "block";
    }

    function changeBackgroundColor(){
        promBox.style.backgroundColor = "#681750";
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    let shoppingPicture = document.getElementById("shopping-picture");
    let shoppingBox = document.getElementById("shopping-box");
    
    shoppingPicture.addEventListener('click', displayVideo);
    shoppingBox.addEventListener('mouseleave', changeBackgroundColor);

    function displayVideo(){
        shoppingPicture.style.display = "none";
        document.getElementById("shopping-video").style.display = "block";
    }

    function changeBackgroundColor(){
        shoppingBox.style.backgroundColor = "#681750";
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    let sportPicture = document.getElementById("sport-picture");
    let sportBox = document.getElementById("sport-box");
    
    sportPicture.addEventListener('click', displayVideo);
    sportBox.addEventListener('mouseleave', changeBackgroundColor);

    function displayVideo(){
        sportPicture.style.display = "none";
        document.getElementById("sport-video").style.display = "block";
    }

    function changeBackgroundColor(){
        sportBox.style.backgroundColor = "#681750";
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    let weddingPicture = document.getElementById("wedding-picture");
    let weddingBox = document.getElementById("wedding-box");
    
    weddingPicture.addEventListener('click', displayVideo);
    weddingBox.addEventListener('mouseleave', changeBackgroundColor);

    function displayVideo(){
        weddingPicture.style.display = "none";
        document.getElementById("wedding-video").style.display = "block";
    }

    function changeBackgroundColor(){
        weddingBox.style.backgroundColor = "#681750";
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    let winePicture = document.getElementById("wine-picture");
    let wineBox = document.getElementById("wine-box");
    
    winePicture.addEventListener('click', displayVideo);
    wineBox.addEventListener('mouseleave', changeBackgroundColor);

    function displayVideo(){
        winePicture.style.display = "none";
        document.getElementById("wine-video").style.display = "block";
    }

    function changeBackgroundColor(){
        wineBox.style.backgroundColor = "#681750";
    }
})

const runTest = function (url, targetSelector) {
    const config = {
      method: "get", 
      mode: "cors", 
      cache: "no-cache"
    };

    fetch(url, config)
        .then(response => {
          return response.json();
      })
        .then(json => {
            setTimeout(() => {
            document.querySelector(targetSelector).innerHTML = `<div>${json.body}</div>`;
            }, "1000")
        })
        .catch(err => {
          console.log(`There was an error: ${err}`);
      });
  }

  window.addEventListener("DOMContentLoaded", event => {
    window.addEventListener("load", event => {
      runTest("https://dummyjson.com/comments/12", "[title='first']");
      runTest("https://dummyjson.com/comments/13", "[title='second']");
      runTest("https://dummyjson.com/comments/19", "[title='third']");
    });
  });

  window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("fleet1-limo").addEventListener('mouseover', changePicture);

    function changePicture(){
        document.getElementById("fleet1-limo").src = "images/inside-fleet1.jpeg"
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("fleet2-suv").addEventListener('mouseover', changePicture);

    function changePicture(){
        document.getElementById("fleet2-suv").src = "images/inside-fleet2.jpeg"
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("fleet3-bus").addEventListener('mouseover', changePicture);

    function changePicture(){
        document.getElementById("fleet3-bus").src = "images/inside-fleet3.jpeg"
    }
})

class Reservation {
    constructor(fullName, phoneNumber, email, pickupTime, pickupLocation, dropoffTime, dropoffLocation, notes){
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.pickupTime = pickupTime;
        this.pickupLocation = pickupLocation;
        this.dropoffTime = dropoffTime;
        this.dropoffLocation = dropoffLocation;
        this.notes = notes;
    }

    pickup() {
        return `Pick us up at ${this.pickupTime} at ${this.pickupLocation}.`;
    }

    dropoff() {
        return `Drop us off at ${this.dropoffTime} at ${this.dropoffLocation}.`;
    }
}

let reservation1 = new Reservation('User Name', 123456789, 'user@example.com', '7pm', 'home', '10pm', 'hotel', 'thank you');
