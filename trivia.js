 
var score = 0
var percentage = 0
var i = 1
var ans = 1
 
 
function resetForm(){
 hideShowImage(true)
 i=1;
 ans=1;
 score=0;
 percentage=0;
 main();
}
 
function hideShowImage(hide){
 document.getElementById("resultImage").hidden = hide
}
 
function playSound(good) {
 var mySound = document.getElementById("mySound");
 if(good)
   mySound.src = "goodSound.mp3"
 else
   mySound.src = "badSound.mp3"
 
 mySound.play();
}
 
function answerResult(good) {
 var image = document.getElementById("resultImage")
 var sound = document.getElementById("mySound");
 if(good){
   image.src = "happyface.jpg"
   sound.src = "goodSound.mp3"
 }
 else{
   image.src = "sadface.jpg"
   sound.src = "badSound.mp3"
 }
 
 sound.play();
}
 
function submitAnswer(){
 hideShowImage(false)
 y = document.getElementById("qans").value
 var yy=y.toUpperCase();
 x = document.getElementById("question").value
 
 if (ans===1){
   y = document.getElementById("qans").value
   if(yy==="D"){
     document.getElementById("question").value="You are right"    
     score++
     answerResult(true)
   }
   else {
     document.getElementById("question").value="You are wrong"       
     answerResult(false)  
   }
   document.view.qscore.value=score
 }
 else if (ans===2){
   y = document.getElementById("qans").value
     if(yy==="B"){
       document.getElementById("question").value="You are right"
       score++
       answerResult(true)         
     }
     else {
       document.getElementById("question").value="You are wrong"
       answerResult(false)  
     }
     document.view.qscore.value=score
 }
 
 else if (ans===3){
   y = document.getElementById("qans").value
   if(yy==="A"){
     document.getElementById("question").value="You are right"           
     score++
     answerResult(true)
   }
   else {
     document.getElementById("question").value="You are wrong"
     answerResult(false)
   }
   document.view.qscore.value=score
 }
 
 else if (ans===4){
   y = document.getElementById("qans").value
   if(yy==="D"){
     document.getElementById("question").value="You are right"        
     score++
     answerResult(true)   
   }
   else {
     document.getElementById("question").value="You are wrong"
     answerResult(false)     
   }
   document.view.qscore.value=score
 }
 
 else if (ans===5){
   y = document.getElementById("qans").value
   if(yy==="C"){
     document.getElementById("question").value="You are right"        
     score++
     answerResult(true)         
   }
   else {
     document.getElementById("question").value="You are wrong"
     answerResult(false) 
   }
   document.view.qscore.value=score
 }
 
 else if (ans===6){
   y = document.getElementById("qans").value
   if(yy==="A"){
     document.getElementById("question").value="You are right"
     score++
     answerResult(true)
   }
   else {
     document.getElementById("question").value="You are wrong"
     answerResult(false)
   }
   document.view.qscore.value=score
 }
 
 else if (ans===7){
   y = document.getElementById("qans").value
   if(yy==="C"){
     document.getElementById("question").value="You are right"
     score++
     answerResult(true)     
   }
   else {
     document.getElementById("question").value="You are wrong"
     answerResult(false)
   }
   document.view.qscore.value=score
 }
 
 else if (ans===8){
   y = document.getElementById("qans").value
   if(yy==="B"){
     document.getElementById("question").value="You are right"
     score++
     answerResult(true)     
   }
   else {
     document.getElementById("question").value="You are wrong"       
     answerResult(false)
   }
   document.view.qscore.value=score
 }
 
 else if (ans===9){
   y = document.getElementById("qans").value
   if(yy==="D"){
     document.getElementById("question").value="You are right"
     score++
     answerResult(true)
   }
   else {
     document.getElementById("question").value="You are wrong"
     answerResult(false)
   }
   document.view.qscore.value=score
 }
 
 else if (ans===10){
   y = document.getElementById("qans").value
   if(yy==="C"){
     document.getElementById("question").value="You are right"
     score++
     answerResult(true)
   }
   else {
     document.getElementById("question").value="You are wrong"
     answerResult(false)
   }
   document.view.qscore.value=score
 }
 
 ans++;
}
      
function main(){
 if (i===1){
   document.view.qnum.value=i;
   document.view.question.value ="Who has the most Ballon D’or then any other soccer player in the world?\na)Suarez \nb)Iniesta \nc)Xavi \nd)Messi";
   document.view.qans.value=""
 }
 else if (i===2){
   document.view.qnum.value=i; 
   document.view.question.value ="How many League titles has Fc Barcelona won?\na)30 \nb)26 \nc)21 \nd)40";
   document.view.qans.value=""
 }
 else if (i===3){
   document.view.qnum.value=i; 
   document.view.question.value ="How many league titles have Fc Barcelona won in the last 11 years? \na)8 \nb)7 \nc)4 \nd)6";
   document.view.qans.value=""
 }
 else if (i===4){
   document.view.qnum.value=i; 
   document.view.question.value ="Who is the all time top Uruguayan goal scorer in La Liga? \na)Diego Forlan \nb)Jorge de silva \nc)Cristhian Stuani \nd)Luis Suarez";
   document.view.qans.value=""
 }
 else if (i===5){
   document.view.qnum.value=i; 
   document.view.question.value ="Who is the Frenchman who played in the most years with Fc Barcelona? \na)Samuel Umtiti \nb)Ludovic Guily \nc)Eric Abidal \nd)Antoine Griezmann";
   document.view.qans.value=""
 }
 else if (i===6){
   document.view.qnum.value=i; 
   document.view.question.value ="Who plays for Fc Barcelona had played the most games for the French national team? \na)Lilian Thuram \nb)Eric Abidal \nc)Thierry Henry \nd)Antoine Griezmann";
   document.view.qans.value=""
 }
 else if (i===7){
   document.view.qnum.value=i; 
   document.view.question.value ="Who was the 20th Frenchman to ever sign for Fc Barcelona? \na)Clement Lenglet \nb)Jean Clair Todibo \nc)Digne \nd)Eric Abidal";
   document.view.qans.value=""
 }
 else if (i===8){
   document.view.qnum.value=i; 
   document.view.question.value ="In which of the following seasons did Messi score the most Goals? \na)2014/2015 \nb)2011/2012 \nc)2013/2014 \nd)2018/2019";
   document.view.qans.value=""
 }
 else if (i===9){
   document.view.qnum.value=i; 
   document.view.question.value ="What is Messi’s record goals tally in a calendar year? \na)96 \nb)50 \nc)100 \nd)91";
   document.view.qans.value=""
 }
 else if (i===10){
   document.view.qnum.value=i; 
   document.view.question.value ="How many times has Messi won the golden shoe award? \na)6 \nb)8 \nc)5 \nd)3";
   document.view.qans.value=""
    
 }
 else {
   percentage=score/10*100
   document.view.question.value = "You got " + percentage+"% correct questions"
   var image = document.getElementById("resultImage")
   hideShowImage(false)
   var good = score > 7
   if(good)
     image.src = "goodjob.gif"
   else
     image.src = "badjob.gif"
 }
 
  i++;
}
