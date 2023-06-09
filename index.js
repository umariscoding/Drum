noOfButtons = document.querySelectorAll("button").length;


for(i=0;i<noOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        console.log(this.textContent);
        character = this.textContent;
        musicPlay(character);
        buttonAnimation(character);
    });
}

//when keys are pressed
document.addEventListener("keypress",function (event){
console.log(event.key);
character = event.key;
musicPlay(character);
buttonAnimation(character);
})

//does the animation by adding css class
function buttonAnimation(character){
    var toBeAnimated = document.querySelector("."+character);
    toBeAnimated.classList.add("pressed")
    setTimeout(function(){
        toBeAnimated.classList.remove("pressed")
    }, 200);
}

function musicPlay(character){
    switch (character) {
        case "w":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var snare=new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var kick=new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            break;
    }
}