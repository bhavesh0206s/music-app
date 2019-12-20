window.addEventListener("load", () => {
    const pads = document.querySelectorAll(".pads div");
    const sounds = document.querySelectorAll(".sound");
    const visual = document.querySelector(".visual");
    const colors = ["indigo", "red", "antiquewhite", "sandybrown", "palegreen", "turquoise"];
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            ballAnimation(index)
        })
    })
    const ballAnimation = (index) =>{
        const ball = document.createElement("div");
        visual.appendChild(ball);
        ball.style.background = colors[index];
        ball.style.animation = "jump 1.5s ease";
        ball.addEventListener("animationend", function(){
            visual.removeChild(this);
        })
    }
})