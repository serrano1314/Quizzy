let bible_question = [
    {
        question:"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        choices:{
            a:"John 3:16",
            b:"Ernie 6:66",
            c:"Quiboloy 69:69"
        },
        answer:'John 3:16'
    },
    {
        question:"Therefore he is able to save completely those who come to God through him, because he always lives to intercede for them.",
        choices:{
            a:"John 3:16",
            b:"Hebrews 7:25",
            c:"Quiboloy 69:69"
        },
        answer:'Hebrews 7:25'
    },
    {
        question:"but in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect",
        choices:{
            a:"John 3:16",
            b:"Hebrews 7:25",
            c:"Peter 3:15"
        },
        answer:'Peter 3:15'
    }
]
let prog_question = [

]

let version=document.querySelector('footer').innerText='v0.6.0';
let welcome=document.querySelector('.welcome-screen');
let game=document.querySelector('.game-screen');
let timer=document.querySelector('.timer-screen');
let question_card=document.createElement('div');

let question_number=0;
let countdown=0;
let time_limit = 5;
let score = 0;
let time=time_limit;

welcome.classList.remove('hide');
welcome.innerHTML="WELOME</br>";

// create a start button for welcome page
let start_button=document.createElement('button');
start_button.setAttribute('class','btn start-btn');
start_button.innerHTML="START GAME";
welcome.appendChild(start_button);
start_button.addEventListener('click',gameStarto);

welcome.classList.add('center');

function gameArea(question_number){
    if(question_number>=bible_question.length){
        question_card.innerHTML=`GAME OVER! YOUR SCORE: ${score} / ${bible_question.length}`;
    } else {
        let choices = bible_question[question_number].choices;
        question_card.innerHTML=
            `<p>${bible_question[question_number].question} </p>
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
                if(choice_btn[i].innerText === bible_question[question_number].answer){
                    score++;
                    question_card.innerHTML="VALIDATING YOUR ANSWER, PLEASE WAIT...";
                    time=0;
                }
                else {
                    question_card.innerHTML="VALIDATING YOUR ANSWER, PLEASE WAIT...";
                    time=0;
                }
            });
        }
    }
}

function gameStarto(){
    game.classList.remove('hide');
    welcome.classList.add('hide');
    timer.classList.remove('hide');
    game.innerHTML="PLAYING<br>";
    game.classList.add('center');
    
    
    countdown=setInterval(() => {
        timer.innerHTML=`TIMER: ${time}`;
        if(question_number>=bible_question.length){ 
            clearInterval(countdown);
        }
        if(time==time_limit){
            question_card.innerHTML="";
            gameArea(question_number);
        }
        if(time==0){
            time = time_limit;
            question_number++
        } else {
            time--;
        }
    }, 1000);
    
    
    // create a quit button
    let quit_button=document.createElement('button');
    quit_button.setAttribute('class','btn quit-btn');
    quit_button.innerHTML="QUIT GAME";
    game.appendChild(quit_button);
    quit_button.addEventListener('click',gameQuit);
}

function gameQuit(){
    timer.classList.add('hide');
    game.classList.add('hide');
    welcome.classList.remove('hide');
    welcome.innerHTML="YOU LOSER";
}
