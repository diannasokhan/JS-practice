function getAgeInDays(){
    let ageInYears = prompt("How old are you?");
    let ageInDays = ageInYears * 365;
    let h1 = document.createElement("h1");
    let textAnswer = document.createTextNode("You are " + ageInDays + " days old!");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){
    document.getElementById("ageInDays").remove();
}

 function generateCat(){
     let image = document.createElement("img");
     let div = document.getElementById("flex-cat-gen");
     image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
     image.id = "cat-gif"
     div.appendChild(image);
 }

 function deleteImg(){
     document.getElementById("cat-gif").remove();
 }

 function rpsGame(yourChoice){
     console.log(yourChoice);
      let humanChoice = yourChoice.id;
      let botChoice = numToChoice(randToRpsInt())
      console.log("Computer choice: ", botChoice)
      let results = decideWinner(humanChoice, botChoice);
      console.log(results);
      let message = finalMessage(results);
      console.log(message);
      rpsFrontEnd(yourChoice.id, botChoice, message);
 }

 function randToRpsInt(){
     return Math.floor(Math.random() * 3);
 }

 function numToChoice(number){
     return["rock", "paper", "scissors"][number];
 }

 function decideWinner(humanChoice, botChoice){
      let rpsDatabase ={
          "rock": {"scissors": 1, "rock": 0.5, "paper": 0},
          "paper": {"rock": 1, "paper": 0.5, "scissors": 0},
          "scissors": {"paper": 1, "scissors": 0.5, "rock": 0}
      }
      let yourScore = rpsDatabase[humanChoice][botChoice];
      let botScore = rpsDatabase[botChoice][humanChoice];
      return [yourScore, botScore];
 }

 function finalMessage([yourScore, botScore]){
     if(yourScore === 0){
         return {"message": "You lost!", "color": "red"};
     }else if(yourScore === 0.5){
         return {"message": "You tied!", "color": "yellow"};
     }else{
         return{"message": "You won!", "color": "green"};
     }
 }

 function rpsFrontEnd(yourImageChoice, botImageChoice, finalMessage){
     let imagesDatabase ={
         "rock": document.getElementById("rock").src,
         "scissors": document.getElementById("scissors").src,
         "paper": document.getElementById("paper").src
     }

     document.getElementById("rock").remove();
     document.getElementById("paper").remove();
     document.getElementById("scissors").remove();

     let humanDiv = document.createElement("div");
     let botDiv = document.createElement("div");
     let messageDiv = document.createElement("div");


     humanDiv.innerHTML = "<img src='" + imagesDatabase[yourImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px blue'>";
     messageDiv.innerHTML ="<h1 style='color: " + finalMessage["color"] + "; font-size=60px; padding:30px; '>" + finalMessage["message"] + "</h1>";
     botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px red'>";
     
     document.getElementById("flex-box-rps-div").append(humanDiv);
     document.getElementById("flex-box-rps-div").append(messageDiv);
     document.getElementById("flex-box-rps-div").append(botDiv);
 }

 const allButtons = document.getElementsByTagName("button");

 const copyAllButtons = [];
 for(let i=0; i < allButtons.length; i++){
     copyAllButtons.push(allButtons[i].classList.value);
 }

 function buttonColorChange(buttonThingy){
     if(buttonThingy.value === "red"){
         buttonsRed();
     }else if(buttonThingy.value === "green"){
         buttonsGreen();
     }else if(buttonThingy.value === "random"){
         buttonsRandom();
     }else if(buttonThingy.value === "reset"){
         buttonsReset();
     }
 }

 function buttonsRed(){
     for(let i = 0; i < allButtons.length; i++){
        allButtons[i].setAttribute("class", "btn btn-danger");
     }
 }

 function buttonsGreen(){
     for(let i= 0; i < allButtons.length; i++){
         allButtons[i].setAttribute("class", "btn btn-success");
     }
 }

 function randomNumForButtons(){
     return Math.floor(Math.random() * 4);
 }

 function randomButton(number){
     return ["btn btn-primary", "btn btn-danger", "btn btn-success", "btn btn-warning"][number];
 }

 function buttonsRandom(){
     for(let i = 0; i < allButtons.length; i++){
         allButtons[i].setAttribute("class", randomButton(randomNumForButtons()));
     }
 }
 
 function buttonsReset(){
     for(let i = 0; i < allButtons.length; i++){
         allButtons[i].setAttribute("class", copyAllButtons[i])
     }
 } 