document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const introPage = document.querySelector('.intro-page');

    // Function to toggle the fixed-top (navbar) class based on scroll position
    function updateNavbarPosition() {
        if (window.scrollY > introPage.offsetHeight) {
            navbar.classList.add('fixed-top');
        } else {
            navbar.classList.remove('fixed-top');
        }
    }

    // Check scroll position on page load, to stop navbar appearing whenever page is reloaded
    updateNavbarPosition();

    // Update navbar position on each scroll
    window.addEventListener('scroll', updateNavbarPosition);
});

document.getElementById('messageForm').onsubmit = function() {myFunction()};

function myFunction() {
  alert("The form was submitted");
}

function toast(){
    var myToastEl = document.getElementById('cvToast');
    var myToast = bootstrap.Toast.getOrCreateInstance(myToastEl);
    myToast.show();
}

async function getData() {
    const url = "https://official-joke-api.appspot.com/random_joke";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      alert(json.setup);
      alert(json.punchline);
    } catch (error) {
      console.error(error.message);
    }
  }