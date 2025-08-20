/* boilerplate code:

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let inputLines = [];

rl.on('line', (line) => {
    inputLines.push(line);
    if (inputLines.length === 3) {
        rl.close();
    }
});

rl.on('close',()=>{
    const size = parseInt(inputLines[0]);
    const array = inputLines[1].split( ' ').map(Number);
    const target = parseInt(inputLines[2]);

    const pairs = findPairsWithGivenSum(array, target);
    pairs.forEach(pair=>{
        console.log(pair[0],pair[1]);
    });
});

function findPairsWithGivenSum(array, target){
    
    return [];
}
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let inputLines = [];

rl.on('line', (line) => {
    inputLines.push(line);
    if (inputLines.length === 3) {
        rl.close();
    }
});

rl.on('close', () => {
    const size = parseInt(inputLines[0]);
    const array = inputLines[1].split(' ').map(Number);
    const target = parseInt(inputLines[2]);

    const pairs = findPairsWithGivenSum(array, target);
    pairs.forEach(pair => {
        console.log(pair[0], pair[1]);
    });
});

function findPairsWithGivenSum(array, target) {
    let newarr = [];
    let newsecondarr = [];
    let r = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == target) {
                newarr[r] = i;
                newsecondarr[r] = j;
                r++;
            }
        }
    }
    return [newarr, newsecondarr];
}