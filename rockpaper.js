function rps(user , computer){

  if(user === computer) return "draw";
  if(user === "rock" && computer === "scissors")return "user win";
  if(user === "paper" && computer === "rock") return "user win";
   if(user === "scissors" && computer === "paper")return "user win";

   return "computer win";
}
  
console.log(rps("rock" , "scissors"));