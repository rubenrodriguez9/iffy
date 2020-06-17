// Your code here!
let colorCombinator = require("./color-combinator")
let colorDeconstructor = require("./color-deconstructor")

let color1 = getInput(0);
let color2 = getInput(1);

if(color1 === undefined && color2 === undefined){
  console.log("Please enter a color.")
}
if(color1 === 'orange' || color1 === 'purple' || color1 === 'green' && color2 === undefined){
  console.log(colorDeconstructor(color1))
} else if(color1 === 'red' && color2 === 'yellow'){
  console.log(colorCombinator(color1, color2))
} else if(color1 === 'red' && color2 === 'blue'){
  console.log(colorCombinator(color1, color2))
}else if(color1 === 'yellow' && color2 === 'blue'){
  console.log(colorCombinator(color1, color2))
}else if(color1 === 'yellow' && color2 === 'red'){
  console.log(colorCombinator(color1, color2))
}else if(color1 === 'blue' && color2 === 'red'){
  console.log(colorCombinator(color1, color2))
}else if(color1 === 'blue' && color2 === 'yellow'){
  console.log(colorCombinator(color1, color2))
}else console.log("Sorry, that's not a secondary color!")





// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
