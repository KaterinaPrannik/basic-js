const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //let newSampleActivity=ParseFloat(sampleActivity);
  if(  typeof(sampleActivity) !=="string" || sampleActivity==undefined ||isNaN(sampleActivity) || Number(sampleActivity)>MODERN_ACTIVITY ) {
      return false;
      
      
  } else  if (sampleActivity instanceof String) {
      let period=Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/Math.log(2)/HALF_LIFE_PERIOD);
      return period;
  }
  
};
