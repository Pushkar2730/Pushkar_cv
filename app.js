let capital = document.getElementById("capital");
let ReadMore = document.getElementById("more");
let Read=document.getElementById("more2");
let Esports= document.getElementById("Esports");
ReadMore.style.display = "none";
Read.style.display="none";
document.getElementById
function clickHandler() {
  if (capital.innerHTML === "Read More") {
    ReadMore.style.display = "inline";
    capital.innerHTML = "Read Less";
  } 
  else {
    capital.innerHTML = "Read More";
    ReadMore.style.display = "none";
  }
}
function clicked(){
    if (Esports.innerHTML === "Read More") {
        Read.style.display = "inline";
        Esports.innerHTML = "Read Less";
      } 
      else {
        Esports.innerHTML = "Read More";
        Read.style.display = "none";
      } 
}