window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("bachelor-picture").addEventListener('click', displayVideo);

    function displayVideo(){
        document.getElementById("bachelor-picture").style.display = "none";
        document.getElementById("bachelor-video").style.display = "block";
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("birthday-picture").addEventListener('click', displayVideo);

    function displayVideo(){
        document.getElementById("birthday-picture").style.display = "none";
        document.getElementById("birthday-video").style.display = "block";
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("corporate-picture").addEventListener('click', displayVideo);

    function displayVideo(){
        document.getElementById("corporate-picture").style.display = "none";
        document.getElementById("corporate-video").style.display = "block";
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("night-picture").addEventListener('click', displayVideo);

    function displayVideo(){
        document.getElementById("night-picture").style.display = "none";
        document.getElementById("night-video").style.display = "block";
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("prom-picture").addEventListener('click', displayVideo);

    function displayVideo(){
        document.getElementById("prom-picture").style.display = "none";
        document.getElementById("prom-video").style.display = "block";
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("shopping-picture").addEventListener('click', displayVideo);

    function displayVideo(){
        document.getElementById("shopping-picture").style.display = "none";
        document.getElementById("shopping-video").style.display = "block";
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("sport-picture").addEventListener('click', displayVideo);

    function displayVideo(){
        document.getElementById("sport-picture").style.display = "none";
        document.getElementById("sport-video").style.display = "block";
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("wedding-picture").addEventListener('click', displayVideo);

    function displayVideo(){
        document.getElementById("wedding-picture").style.display = "none";
        document.getElementById("wedding-video").style.display = "block";
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("wine-picture").addEventListener('click', displayVideo);

    function displayVideo(){
        document.getElementById("wine-picture").style.display = "none";
        document.getElementById("wine-video").style.display = "block";
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
            document.querySelector(targetSelector).innerHTML = `<div>${json.body}</div>`;
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