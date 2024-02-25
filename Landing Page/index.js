function updateNavbar()
{
  if(window.innerWidth < 650 )
  {
    document.querySelector("nav").querySelector(".detail").classList.add("hide") ;
    document.querySelector("nav").querySelector(".detail").classList.remove("flex") ;
    document.querySelector("nav").querySelector(".no-detail").classList.remove("hide") ;
    document.querySelector("nav").querySelector(".no-detail").classList.add("flex") ;
    document.querySelector("nav").querySelector(".logo").innerHTML = "ZH" ;
  }
  else
  {
    document.querySelector("nav").querySelector(".no-detail").classList.add("hide") ;
    document.querySelector("nav").querySelector(".no-detail").classList.remove("flex") ;
    document.querySelector("nav").querySelector(".detail").classList.remove("hide") ;
    document.querySelector("nav").querySelector(".detail").classList.add("flex") ;
    document.querySelector("nav").querySelector(".logo").innerHTML = "Zero Hunger" ;
  }
}

function updateVolunteer()
{
  if(window.innerWidth < 1200)
  {
    document.querySelector(".volunteer").querySelector("img").classList.remove("w-[50vw]") ;
    document.querySelector(".volunteer").querySelector("img").classList.remove("h-[70vh]") ;
    document.querySelector(".volunteer").querySelector("img").classList.add("w-[100vw]") ;
    document.querySelector(".volunteer").querySelector(".volunteer-content").classList.add("flex-col") ;
  }  
  else
  {
    document.querySelector(".volunteer").querySelector("img").classList.add("w-[50vw]") ;
    document.querySelector(".volunteer").querySelector("img").classList.add("h-[70vh]") ;
    document.querySelector(".volunteer").querySelector("img").classList.remove("w-[100vw]") ;
    document.querySelector(".volunteer").querySelector(".volunteer-content").classList.remove("flex-col") ;
  }  
}

updateNavbar() ;
updateVolunteer() ;
window.addEventListener("resize",updateNavbar) ;
window.addEventListener("resize",updateVolunteer) ;

