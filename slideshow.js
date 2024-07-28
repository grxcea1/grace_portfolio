let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function checkEmails()
{
    var email = document.getElementById("email").value;
    var confemail = document.getElementById("confemail").value;

    if(email != confemail)
    {
      alert('Email Not Matching! ');
    }
}

function checkDate()
{
  var date = document.getElementById("time").value;
  var appointment = new Date(date);
  var today = new Date();
  

  if(appointment < today)
  {
     
    alert('Given date is greater than the current date');

  }
}