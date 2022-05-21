function changeText(text){
    document.getElementById('header-text').innerHTML = text;
    
}


function playsound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key = '${e.keyCode}']`)
    key.classList.remove('playing')

    if(!audio) return
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
   console.log(audio)
}

function removeTransition(){
    const keys = document.querySelectorAll('.key')
    console.log(keys
        )

        keys.forEach((key) => key.classList.remove('.playing'))
}

window.addEventListener("keydown",playsound);
window.addEventListener("keyup",removeTransition);

