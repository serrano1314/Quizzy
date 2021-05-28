questions_per_game=7;
let biblical_set = []
while (biblical_set.length != questions_per_game){
  num = Math.floor(Math.random()*bible_question.length);
  if (!(biblical_set.includes(num))){
    biblical_set.push(bible_question[num]);
  }
}
// for(let i=0;i<questions_per_game;i++){
//     biblical_set.push(bible_question[Math.floor(Math.random()*bible_question.length)]);
// }

let prog_set = []
while(prog_set.length != questions_per_game){
    num = Math.floor(Math.random()*prog_question.length);
    if (!(biblical_set.includes(num))){
      prog_set.push(prog_question[num]);
    }
}

let version=document.querySelector('footer').innerText='v0.7.4';
let welcome=document.querySelector('.welcome-screen');
let game=document.querySelector('.game-screen');
let timer=document.querySelector('.timer-screen');
let scoring=document.querySelector('.score-screen');
let question_card=document.createElement('div');
let correct_sym=document.createElement('img');
correct_sym.setAttribute('src','img/correct_sym.png');
correct_sym.classList.add('symbol');

let wrong_sym=document.createElement('img');
wrong_sym.setAttribute('src','img/wrong_sym.png');
wrong_sym.classList.add('symbol');


let question_number=0;
let countdown=0;
let time_limit = 15;
let score = 0;
let time=time_limit;


let logo=document.createElement('img');
logo.setAttribute("src","img/quizzy_logo.png");
logo.classList.add('img_logo');


welcome.classList.remove('hide');
// welcome.innerHTML=`<p class="fancy">WELCOME</p>`;


// create a start button for welcome page
let start_button=document.createElement('button');
start_button.setAttribute('class','btn start-btn');
start_button.innerHTML="<p>START GAME</p>";

// create a high scores button
let scores_button=document.createElement('button');
scores_button.setAttribute('class','btn scores-btn');
scores_button.innerHTML="<p>HIGH SCORES</p>";

// create a quit button
let quit_button=document.createElement('button');
quit_button.setAttribute('class','btn quit-btn');
quit_button.innerHTML="QUIT GAME";

// Play Again button
let play_again=document.createElement('button');
play_again.setAttribute('class', 'btn play-again');
play_again.setAttribute('onClick', 'window.location.reload()');
play_again.innerHTML = 'Play Again';


//  game.appendChild(quit_button);
quit_button.addEventListener('click',gameQuit);

welcome.appendChild(logo);
welcome.appendChild(start_button);
welcome.appendChild(scores_button);
start_button.addEventListener('click',pickTopic);

welcome.classList.add('center');

function gameArea(question_number, topic_choice){
    if(question_number>=topic_choice.length){
        scoring.classList.add('hide');
        timer.classList.add('hide');
        game.innerHTML=`<p class="fancy">GAME OVER! YOUR SCORE: ${score} / ${topic_choice.length} </p><br><br>`;
        game.appendChild(play_again);

    } else {
        let choices = topic_choice[question_number].choices;
        scoring.innerHTML = `<span class="fancy2">SCORE: ${score}<br>`;
        question_card.innerHTML=
            `<p class="fade_in">${topic_choice[question_number].question} </p>
            <div class="choices_card">
                <button class="choices btn">${choices.a}</button>
                <button class="choices btn">${choices.b}</button>
                <button class="choices btn">${choices.c}</button>
            </div>
        `;
        game.appendChild(question_card);
        game.appendChild(quit_button);
        let choice_btn = document.querySelectorAll('.choices');
        for(let i=0;i<3;i++){
            choice_btn[i].addEventListener('click',()=>{
                if(choice_btn[i].innerText === topic_choice[question_number].answer){
                    score++;
                    question_card.appendChild(correct_sym);
                    time=0;
                }
                else {
                    question_card.appendChild(wrong_sym);
                    time=0;
                }
            });
        }
    }
}

// Picking a Topic
function pickTopic(){
    welcome.innerHTML = '<span class="fancy">PICK A TOPIC</span><br><br>';
    game.classList.remove('hide');
    game.classList.add('center');
    question_card.innerHTML = `
        <div class='topics_card'>
            <button class='topics btn'>Biblical</button>
            <button class='topics btn'>Programming</button>
        </div>`;
    game.appendChild(question_card);
    let topic_btn = document.querySelectorAll('.topics');
    game.appendChild(quit_button);
    for(let i=0; i<2; i++){
        topic_btn[i].addEventListener('click', ()=>{
        if(topic_btn[i].innerHTML == 'Biblical'){
            gameStarto(biblical_set)
        }
        else{
            gameStarto(prog_set)
        }
        })
    }
}


function gameStarto(topic_choice){
    game.classList.remove('hide');
    welcome.classList.add('hide');
    scoring.classList.remove('hide');
    timer.classList.remove('hide');
    game.classList.add('center');
    game.innerHTML=`<span class="fancy">GET READY</span>`;
    countdown=setInterval(() => {
        if(time<=5)
            timer.innerHTML=`<span class="center fancy">TIME: </span><span style="color:red;" class="fancy fade_in">${time}</span>`;
        else
        timer.innerHTML=`<span class="center fancy">TIME: </span><span class="fancy fade_in">${time}</span>`;
        if(question_number>=topic_choice.length){//execute when the last question is answered
            clearInterval(countdown);
        }
        if(time==time_limit){
            game.innerHTML="";
            gameArea(question_number, topic_choice);
        }
        if(time==0){
            time = time_limit;
            question_number++
        } else {
            time--;
        }
    }, 1000);



}
function playAgain(){

}

function gameQuit(){
    timer.classList.add('hide');
    game.classList.add('hide');
    scoring.classList.add('hide');
    welcome.classList.remove('hide');
    welcome.innerHTML=`<span class="fancy">YOU LOSE</span>`;
    welcome.appendChild(play_again);
}

//New Navbar
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
