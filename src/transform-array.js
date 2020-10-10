const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(arr instanceof Array){
    return Error;
  } 
  else{
    for(let i=0; i<arr.length; i++){
      if(arr[i]==='--double-next'){
        arr[i+1]=arr[i+1]*2;
      }
    }
  }
  return arr;
};
