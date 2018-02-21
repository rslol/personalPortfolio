var contact = document.getElementById('contact');
var modal = document.getElementById('contactForm');
var span = document.getElementsByClassName('close')[0];


contact.addEventListener("click", function(){
  modal.style.display = "block";
});

span.addEventListener("click", function(){
  modal.style.display = "none";
});

window.addEventListener("click", function(){
  if(event.target == modal){
    modal.style.display = "none";
  }
});
