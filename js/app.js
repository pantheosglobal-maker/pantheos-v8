document.addEventListener("DOMContentLoaded", () => {

console.log("Pantheos Global Store V8 Loaded");

const gameCards = document.querySelectorAll(".game-card");

gameCards.forEach(card => {
card.addEventListener("click", () => {

const gameName =
card.querySelector("h3").innerText;

alert(
"Selected: " +
gameName +
"\n\nTop-up system coming soon."
);

});
});

const searchInput =
document.querySelector(
'.search-section input'
);

if(searchInput){

searchInput.addEventListener(
'keyup',
function(){

const search =
this.value.toLowerCase();

gameCards.forEach(card=>{

const title =
card.querySelector("h3")
.innerText
.toLowerCase();

if(title.includes(search)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});

}

});
