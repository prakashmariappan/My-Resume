//dark theme function//
     function darktheme(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
        icon.classList ="fas fa-sun";
      }
      else{
        icon.classList ="fas fa-moon";
      }
    }
//toggle menubar function//
function menu() {
  document.getElementById("nav").classList.toggle("active");
}


//skill card function//
function frontend() {
    document.getElementById("frontdw").classList.toggle("toggle");
    
  }
function backend() {
    document.getElementById("backdw").classList.toggle("toggle");
    
    
  }
    