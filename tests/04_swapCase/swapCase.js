function swapCase(str) {
    
    const arr = str.split(' ');
    const result = [];
    let joined = '';
    for ( let i =0 ; i <= arr.length-1; i++) {
    const word = arr[i];
         {
            const firstLetter = word[0].toLowerCase();
            const restOfWord = word.slice(1).toUpperCase();
            result.push(firstLetter+restOfWord);
            joined = result.join(' ');
        } 
    }return joined;
}
module.exports = { swapCase };
