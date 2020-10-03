const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(sampleActivity instanceof String){
  ParseFloat(sampleActivity)
  let k=Math.log(2)/HALF_LIFE_PERIOD;
 let period=Math.log(MODERN_ACTIVITY/sampleActivity)/k;
 return period;
  } else {
    return false
  }
};
