var readSync = require ('readline-sync');
const chalk = require('chalk');

var questions =[{
  question : "\nWhat is Luna Lovegood's patronus?\n\ta. Hare\n\tb. Owl\n\tc. Horse  ",
  answer : "a"
},{
  question : "\nWhat is Tom Riddle's middle name? \n\ta. Sirius\n\tb. Marvolo\n\tc. Arthur  ",
  answer : "b"
},{
  question : "\nWhat subject does Hagrid teach? \n\ta. Defence Against the Dark Arts\n\tb. History of Magic\n\tc. Care of Magical Creatures ",
  answer : "c"
},{
  question : "\nWho was The Half Blood Prince? \n\ta. Lucius Malfoy\n\tb. Severus Snape\n\tc. Sirius Black ",
  answer : "b"
},{
  question : "\nWhat is the spell used to unlock and open doors  protected by magic? \n\ta. Alohomor\n\tb. Riddikulus\n\tc. Accio ",
  answer : "a"
}];

var score = 0;

var highestScore = {
  name : "Sreenidhi ", 
  score : "5"
  }

function ask(question, answer){
  var ans = readSync.question(question);
  if (ans === answer){
    score = score + 1;
    console.log(chalk.hex('#50c39e')("\n You got that RIGHT :)\n Current Score: "+score+"\n-------"));
  } else {
    console.log(chalk.hex('#df697f')("\n That's not the RIGHT answer :(\n Current Score: "+score));
    console.log(chalk.hex('#50c39e')(" Correct answer is "+questions[i].answer+"\n-----------"));
  }
}

var user = readSync.question("\tWhat is your name? ");
console.log(chalk.hex('#DEADED')("\n\tWelcome ")+ user +chalk.hex('#DEADED')("! \n\tLets Play\n"));

for (var i =0; i<questions.length; i = i+1){
    
    var choice = readSync.question("Press 'e' to exit! Press any other key to continue..");
    if (choice !== 'e'){
      ask(questions[i].question, questions[i].answer);
    } else {
      console.log("Exit Successful");
      break;
    }
    
}

console.log("Thankyou for attempting the quiz!" );
console.log(chalk.hex('#DEADED').bold("\n\nFinal Score : ")+ score );
console.log(chalk.hex('#DEADED')("\n\n----- Highest Score -----"));
console.log(highestScore.name +": "+ highestScore.score);
