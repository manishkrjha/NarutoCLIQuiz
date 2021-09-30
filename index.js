//imports
const readlineSync = require('readline-sync')
const chalk        = require('chalk')

//globals
var totalScore = 0;
var highestScore = 3;

var questions = [
  [
    {
      question: `What was Naruto's team name?`,
      answer: "Team 7"
    },
    {
      question: "According to Anime who was naruto's first sensei?",
      answer: "Iruka"
    },
    {
      question: "Who was popularly known as 'The copy ninja'",
      answer: "Kakashi"
    },
    {
      question: "Which clan did Sasuke belong to?",
      answer: "Uchiha"
    },
    {
      question: "What was the name of spy of the sound village?",
      answer: "Kabuto"
    }
  ],
  [
    {
      question: "Who was the only shinobi to pass to chunnin exam?",
      answer: "Shikamaru"
    },
    {
      question: "What rank did Asuma Sarutobi's father held?",
      answer: "Hokage"
    },
    {
      question: "Which jutsu did 3rd Hokage used to cut Orochimaru's hands?",
      answer: "Reaper seal Death Jutsu"
    },
    {
      question: "What creature did Jiraya summon?",
      answer: "Toad"
    },
    {
      question: "How many legendary sannins did exist?",
      answer: "Three"
    }
  ],
  [
    {
      question: "What was the nature of Naruto's chakra?",
      answer: "wind"
    },
    {
      question: "Which akatsuki member was known as the Rouge ninja?",
      answer: "Kisame Hoshigaki"
    },
    {
      question: "What kind of eyes did Huga clan possess?",
      answer: "Byakugan"
    },
    {
      question: "Name the kind of jutsu Rock lee had?",
      answer: "Taijustu"
    },
    {
      question: "What was Suigestu Hozuki's sword's name?",
      answer: "Kubikiribocho"
    }
  ],
  [
    {
      question: "What was Naruto's rasengan's name?",
      answer: "Rasenshuriken",
    },
    {
      question: "Who lead the Team 7 in the absence of Kakashi",
      answer: "Tenzo",
    },
    {
      question: "Whom did itachi kill to get mangekyou sharingan?",
      answer: "Shisui Uchiha"
    },
    {
      question: "What is the Eight Tails' real name?",
      answer: "Gyuki"
    },
    {
      question: "What is the name of Madara Uchiha's grand plan?",
      answer: "Tsuki no Me"
    }
  ]
]

//selecting difficulty level
function selectDifficultyLevel(){
  console.log(`Welcome ${username}, let's get started. Choose a difficulty level`);
  var difficultyLevels = ['Genin', 'Chunnin', 'Jounin', 'Kage']
  var difficultyLevel  = readlineSync.keyInSelect(difficultyLevels, 'Select your difficulty level: ');
  console.log('Okay ' + username + `, you've opted for a ${difficultyLevels[difficultyLevel]} quiz. Let's get started`);
  return difficultyLevel;
}


function startGame(){
  var dif_lvl = selectDifficultyLevel();
  var ind = dif_lvl - 1;

  for(let i=0;i<5;i++){
    var userResponse = readlineSync.question(`${questions[ind][i].question}: `)
    if(userResponse == questions[ind][i].answer){
      totalScore += 2*dif_lvl;
      console.log(`Correct answer! Current Score: ${totalScore}`)
    }else{
      console.log(`Oops! The correct answer is ${questions[ind][i].answer}. Current Score: ${totalScore}`)
    }
  }
}


//game rules
function gameRules(){
  console.log(`[1]. You'll have pick one level\n[2]. Each level will have 5 questions each.\n[3]. You'll be rewarded 2*(your level s.no) points for each correct answer. There ins't any negative marking.`)
}


//taking username:
console.log(`Hello shinobi! Welcome to the Naruto quiz.`)
var username = readlineSync.question(`Please enter your name: `);


var initialResponse = readlineSync.question(`Hello ${username}, press 1 to know the rules or press 2 to start the game or 3 to exit: `)

if(initialResponse === `1`){
  gameRules();

  var secondResponse = readlineSync.question(`Do you want to start the game now? [y/n]: `)

  if(secondResponse === 'y'){
    startGame();
  }else{
    console.log(`You have choosen to exit the game!`)
    // return;
  }
}

if(initialResponse === '2'){
  startGame();
}

if(initialResponse === '3'){
  console.log(`You have choosen to exit the game!`)
}

console.log(`GAME OVER!! Your final score is ${totalScore}.\n`)

if(totalScore >= highestScore){
  console.log(`Hey! It looks like you've levelled or surpassed the highest score. Please send me a screenshot of your score and I'll update your name on the Hall of Fame!`)
}