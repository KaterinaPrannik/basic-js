const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members.length==0||members instanceof !Array){
    return false
  } else{
    let teamName="";
    let sortTeam=members.sort();
    for(let i=0; i<sortTeam.length;i++){
      let sortUpperTeam=sortTeam[i].toUpperCase();
      teamName+=sortUpperTeam[0];
    }

  }
  return teamName
};
