const navBar = document.querySelector('.nav-bar')
                let menuOpen = false;
                navBar.addEventListener('click', () => {

            if (!menuOpen) {
                navBar.classList.add('open');
                menuOpen = true;


            } else{
                navBar.classList.remove('open');
                menuOpen = false;
            }
               
                
                document.getElementById('nav').classList.toggle('change');
                });
                
var slideIndex = 0;
carousel();
                
function carousel() {
var i;
var x = document.getElementsByClassName("slideshow");
for (i = 0; i < x.length; i++) {
 x[i].style.display = "none";
 }
    slideIndex++;
if (slideIndex > x.length) {slideIndex = 1}
 x[slideIndex-1].style.display = "block";
setTimeout(carousel, 3000); // Change image every 3 seconds
 }    
 
 function validateEmail(mail) {
     var uemail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2, 3})+$/;
     var email = document.lhd.email;
     var phonenum = /^\d{10}$/;
     var phone = document.lhd.phone;
     if(email.uemail.match()) {
         return true;
     } else {
         alert("email is invalid");
         return false;
     }
     if(phone.value.match(phonenum)) {
         return true;
     }
     else{
         alert("Wrong number");
         return false;
     }

 }
 