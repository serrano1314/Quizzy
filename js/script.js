let welcome=document.querySelector('.welcome-screen');
let game=document.querySelector('.game-screen');

welcome.classList.remove('hide');
welcome.innerHTML="WELOME</br>";

let start_button=document.createElement('button');
start_button.innerHTML="START GAME"
welcome.appendChild(start_button);
start_button.addEventListener('click',gameStarto);
welcome.classList.add('center');

function gameStarto(){
    game.classList.remove('hide');
    welcome.classList.add('hide');
    game.innerHTML="PLAYING<br>";
    game.classList.add('center');

    let quit_button=document.createElement('button');
    quit_button.innerHTML="QUIT GAME"
    game.appendChild(quit_button);
    quit_button.addEventListener('click',gameQuit);
}

function gameQuit(){
    game.classList.add('hide');
    welcome.classList.remove('hide');
    welcome.innerHTML="YOU LOSER";
}
