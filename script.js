function streetGreeting() {
  console.log("*head nod*");
}

streetGreeting();

function friendGreeting(friend) {
  console.log("Hey " + friend + "!")
}

friendGreeting("Dylan");
friendGreeting("Nathaniel");

// Parameters are the way the function is defined for example friend is the parameter
function awkwardGreeting(yourName, friendsName) {
  console.log(`Hey ${friendsName}, It's me, ${yourName}`)
}

awkwardGreeting("Dylan", "Nathaniel");

/* Function that : 
Doesn't require any parameters
Does require 1 parameter
Requires 2 parameters */

/* The Parameters in this case are :
Friends
Your name 
Friends name */

/* The Arguments in this case are :
Dylan
Nathaniel
Kim
Matt */