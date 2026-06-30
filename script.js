
/* COUNTDOWN SCREEN */

const targetDate =
new Date("October 21, 2026 00:00:00").getTime();

const livecount =
document.getElementById("livecount");

setInterval(function(){

const now = new Date().getTime();

const distance = targetDate - now;

const days =
Math.floor(distance / (1000*60*60*24));

const hours =
Math.floor((distance % (1000*60*60*24))
/ (1000*60*60));

const minutes =
Math.floor((distance % (1000*60*60))
/ (1000*60));

const seconds =
Math.floor((distance % (1000*60))
/ 1000);

if(livecount){

livecount.innerHTML =
`${days}d ${hours}h ${minutes}m ${seconds}s`;

}

},1000);

/* LOADER FLOW */

window.onload = function(){

const countscreen =
document.getElementById("countscreen");

const loader =
document.getElementById("loader");

setTimeout(function(){

if(countscreen){
countscreen.style.opacity = "0";
}

setTimeout(function(){

if(countscreen){
countscreen.style.display = "none";
}

if(loader){
loader.style.display = "flex";
}

setTimeout(function(){

if(loader){
loader.style.display = "none";
}

},1500);

},1000);

},4000);

};

/* OPEN WEBSITE */

function openCard(){

confetti({
particleCount:180,
spread:120,
origin:{ y:0.6 }
});

const opening =
document.getElementById("opening");

const main =
document.getElementById("main");

const music =
document.getElementById("music");

opening.style.opacity = "0";

setTimeout(function(){

opening.style.display = "none";

main.style.display = "block";

main.style.animation =
"fade 2s ease";

music.play();

typeText();

},1000);

}

/* TYPING TEXT */

const text = `
selamat ulang tahun sayangkuu 🤍

makasih udah hadir di hidup aku.
aku bersyukur banget bisa kenal kamu,
punya banyak cerita sama kamu,
dan bisa ngelewatin semuanya sama kamu.

semoga semua hal baik selalu datang ke kamu yaa.

i love you forever ❤️
`;

let i = 0;

function typeText(){

const typing =
document.getElementById("typing");

const typesound =
document.getElementById("typesound");

if(i < text.length){

typing.innerHTML += text.charAt(i);

if(text.charAt(i) != " "){

if(typesound){

typesound.currentTime = 0;
typesound.play();

}

}

i++;

setTimeout(typeText,40);

}

}

/* MUSIC BUTTON */

function toggleMusic(){

const music =
document.getElementById("music");

if(music.paused){

music.play();

}else{

music.pause();

}

}

/* TOGETHER COUNTER */

const counter =
document.getElementById("counter");

if(counter){

const startDate =
new Date("2024-10-21");

const today =
new Date();

const diffTime =
today - startDate;

const diffDays =
Math.floor(
diffTime / (1000 * 60 * 60 * 24)
);

counter.innerHTML =
`together for ${diffDays} days ❤️`;

}

/* BIRTHDAY COUNTDOWN */

const birthdaycount =
document.getElementById("birthdaycount");

if(birthdaycount){

const birthday =
new Date("October 21, 2026");

const today2 =
new Date();

const diff =
birthday - today2;

const days =
Math.floor(
diff / (1000 * 60 * 60 * 24)
);

birthdaycount.innerHTML =
`${days} days until birthday 🎂`;

}

/* PARALLAX EFFECT */

document.addEventListener("mousemove",function(e){

const images =
document.querySelectorAll(".slides img");

let x =
(e.clientX / window.innerWidth - 0.5) * 10;

let y =
(e.clientY / window.innerHeight - 0.5) * 10;

images.forEach((img)=>{

img.style.transform =
`translate(${x}px,${y}px) scale(1.03)`;

});

});

/* CLICK HEART EFFECT */

document.addEventListener("click",function(e){

const heart =
document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "fixed";
heart.style.left = e.clientX + "px";
heart.style.top = e.clientY + "px";
heart.style.fontSize = "20px";
heart.style.pointerEvents = "none";
heart.style.zIndex = "9999";
heart.style.transition = "1s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform =
"translateY(-80px) scale(1.5)";

heart.style.opacity = "0";

},10);

setTimeout(()=>{

heart.remove();

},1000);

});

/* FINAL CONFETTI */

window.addEventListener("scroll",function(){

const finalsection =
document.querySelector(".finalsection");

if(!finalsection) return;

const position =
finalsection.getBoundingClientRect().top;

const screenPosition =
window.innerHeight / 1.3;

if(position < screenPosition){

confetti({
particleCount:100,
spread:100,
origin:{ y:0.7 }
});

}

});
