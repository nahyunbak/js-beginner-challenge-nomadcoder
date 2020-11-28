//초반에 const 상수 선언하기
const select = document.querySelector("select"),
  KR= document.querySelector(".korea"),
  JP= document.querySelector(".japan"),
  CH= document.querySelector(".china")

const USER_COUNTRY="Country"

function saveValue(country){
    event.preventDefault();
    const currentValue = country.target.value;
    localStorage.setItem(USER_COUNTRY, currentValue);
}

function loadValue(){
    const currentUser = localStorage.getItem(USER_COUNTRY);
    if (currentUser ==="KR"){
        KR.setAttribute("selected", "true");
    } else if (currentUser ==="JP"){
        JP.setAttribute("selected", "true");
    } else if (currentUser ==="CH") {
        CH.setAttribute("selected", "true");
    } 
}

function init(){
    select.addEventListener("change", saveValue)
    loadValue()
  }
  
init();



