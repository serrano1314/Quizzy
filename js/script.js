let bible_question = [
    {
        question:"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        choices:{
            a:"John 3:16",
            b:"Ernie 6:66",
            c:"Quiboloy 69:69"
        },
        answer:'John 3:16'
    }
]
let prog_question = [

]


let welcome=document.querySelector('.welcome-screen');
let game=document.querySelector('.game-screen');
let timer=document.querySelector('.timer-screen');

welcome.classList.remove('hide');
welcome.innerHTML="WELOME</br>";

// create a start button for welcome page
let start_button=document.createElement('button');
start_button.setAttribute('class','btn start-btn');
start_button.innerHTML="START GAME";
welcome.appendChild(start_button);
start_button.addEventListener('click',gameStarto);

welcome.classList.add('center');

function gameStarto(){
    game.classList.remove('hide');
    welcome.classList.add('hide');
    timer.classList.remove('hide');
    game.innerHTML="PLAYING<br>";
    game.classList.add('center');
    
    
    
    let time=10;
    let countdown=setInterval(() => {
        timer.innerHTML=`TIMER: ${time}`;
        if(time==0){
            clearInterval(countdown)
            timer.innerHTML="GAME OVER";
        }
        time--;
    }, 1000);
    let question_card=document.createElement('div');
    let choices = bible_question[0].choices;
    question_card.innerHTML=
        `<p>${bible_question[0].question} </p>
        <div class="choices_card">
            <button class="choices btn">${choices.a}</button>
            <button class="choices btn">${choices.b}</button>
            <button class="choices btn">${choices.c}</button>
        </div>
    `;
    game.appendChild(question_card);

    let choice_btn = document.querySelectorAll('.choices');
    for(let i=0;i<3;i++){
        choice_btn[i].addEventListener('click',()=>{
            if(choice_btn[i].innerText === bible_question[0].answer){
                alert('TAMA! EDI WAW');
            }
            else{
                alert('WRONG');
            }
        });
    }
    



    // create a quit button
    let quit_button=document.createElement('button');
    quit_button.setAttribute('class','btn quit-btn');
    quit_button.innerHTML="QUIT GAME"
    game.appendChild(quit_button);
    quit_button.addEventListener('click',gameQuit);
}

function gameQuit(){
    timer.classList.add('hide');
    game.classList.add('hide');
    welcome.classList.remove('hide');
    welcome.innerHTML="YOU LOSER";
}
