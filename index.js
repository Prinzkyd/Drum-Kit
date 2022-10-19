function HandleClick(){
   
   //checking for click//
    switch (this.innerHTML) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();   
        break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        default:
            console.log(this.innerHTML)
        break;
    }

    btnAnimation(this.innerHTML)

}



var btnLength = document.querySelectorAll(".drum").length;
                /* Or */
//  document.querySelectorAll("button")[0].addEventListener("click", HandleClick);
//  document.querySelectorAll("button")[1].addEventListener("click", HandleClick);
//  document.querySelectorAll("button")[2].addEventListener("click", HandleClick);
//  document.querySelectorAll("button")[3].addEventListener("click", HandleClick);
//  document.querySelectorAll("button")[4].addEventListener("click", HandleClick);
//  document.querySelectorAll("button")[5].addEventListener("click", HandleClick);
//  document.querySelectorAll("button")[6].addEventListener("click", HandleClick);


for (let index = 0; index < btnLength; index++) {
   document.querySelectorAll(".drum ")[index].addEventListener("click",HandleClick);
   
}



    //checkinng for press//
function HandlePress(event){
    switch(event.key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();   
        break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

    }
    btnAnimation(event.key)
}

document.addEventListener("keypress", HandlePress)


function btnAnimation(currentKey){
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed")

    setTimeout(function () {
        active.classList.remove("pressed")
    },150)
}