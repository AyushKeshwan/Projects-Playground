const noBtn = document.querySelector("button.no");
const yesBtn = document.querySelector("button.yes");
const question = document.querySelector(".question");

const danceVideo = document.getElementById("dance");
function playVideo(){
    danceVideo.play();
};

noBtn.addEventListener("mouseover", moveHover);

yesBtn.addEventListener("click", ()=>{
    question.innerHTML = "Yeii !! Te Amo TONTO (≧▽≦)"
    document.querySelector(".kitty").style.width = "270px"
    document.querySelector("#dance").style.width = "540px"

    document.querySelector(".buttons").style.display = "none";
    
    playVideo();
})


function moveHover () {
    let i = Math.floor(Math.random()*600) + 1;
    let j = Math.floor(Math.random()*600) + 1;

    noBtn.style.left = i+"px";
    noBtn.style.top = j+"px";
}