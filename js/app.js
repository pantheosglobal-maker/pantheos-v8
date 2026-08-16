let currentGame = "";

const gamePackages = {
"Mobile Legends":[
"💎55 - ₹90",
"💎86 - ₹130",
"💎112 - ₹170",
"💎172 - ₹270",
"Weekly Pass - ₹149",
"Starlight Normal - ₹249"
],

"BGMI":[
"60 UC - ₹75",
"80 UC - ₹100",
"325 UC - ₹380",
"660 UC - ₹750",
"900 UC - ₹1000",
"1800 UC - ₹1900"
],

"Free Fire":[
"100 Diamonds",
"310 Diamonds",
"520 Diamonds",
"1060 Diamonds"
],

"COD Mobile":[
"80 CP",
"420 CP",
"880 CP",
"2400 CP"
],

"Valorant":[
"475 VP",
"1000 VP",
"2050 VP",
"3650 VP"
],

"Genshin Impact":[
"60 Genesis Crystals",
"300 Genesis Crystals",
"980 Genesis Crystals"
],

"Honkai Star Rail":[
"60 Oneiric Shards",
"300 Oneiric Shards",
"980 Oneiric Shards"
]
};

document.addEventListener("DOMContentLoaded",()=>{

const searchInput =
document.querySelector(".search-section input");

const gameCards =
document.querySelectorAll(".game-card");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const search =
this.value.toLowerCase();

gameCards.forEach(card=>{

const title =
card.querySelector("h3")
.innerText
.toLowerCase();

card.style.display =
title.includes(search)
? "block"
: "none";

});

});

}

});

function openOrder(game){

currentGame = game;

document.getElementById(
"selectedGame"
).innerText = game;

const packageSelect =
document.getElementById(
"packageSelect"
);

packageSelect.innerHTML = "";

const defaultOption =
document.createElement("option");

defaultOption.text =
"Select Package";

packageSelect.add(defaultOption);

if(gamePackages[game]){

gamePackages[game].forEach(pkg=>{

const option =
document.createElement(
"option"
);

option.text = pkg;

packageSelect.add(option);

});

}

document.getElementById(
"orderModal"
).style.display = "flex";

}

function closeOrder(){

document.getElementById(
"orderModal"
).style.display = "none";

}

function sendOrder(){

const gameId =
document.getElementById(
"gameId"
).value;

const serverId =
document.getElementById(
"serverId"
).value;

const packageName =
document.getElementById(
"packageSelect"
).value;

if(
!gameId ||
packageName ===
"Select Package"
){

alert(
"Please fill all details."
);

return;

}

const message =

`🔥 PANTHEOS GLOBAL STORE 🔥

🎮 Game: ${currentGame}

📦 Package: ${packageName}

🆔 Game ID: ${gameId}

🌐 Server ID: ${serverId}

💳 Payment: QR Payment

Please verify my order.`;

const url =

`https://wa.me/919310651934?text=${encodeURIComponent(message)}`;

window.open(
url,
"_blank"
);

}

window.onclick = function(event){

const modal =
document.getElementById(
"orderModal"
);

if(event.target === modal){

closeOrder();

}

};
