function betterThanAverage() {
    // const classScores = ;
    // const myScore = 80;
    // classScores.push(myScore);
    // let numOfScores = classScores.length;
    // let rounded = 0;
    // let total = 0;
    // let totalAvg = 0;
   for ( let i =0 ; i <= classScores.length-1; i++) {
        total += classScores[i];
       totalAvg = total/ numOfScores;
       rounded = Math.floor(totalAvg);
       }
   if(myScore >= rounded) {
       console.log("My score is better than the average class score")
   }else if(myScore <= rounded) {
       console.log("My score is worse than the average class score")
   }else if (myScore === rounded) {
       console.log("My score is equal to the average class score")
   }
   
}

module.exports = { betterThanAverage };
