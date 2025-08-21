/* 
Boilerplate code:

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines = [];

rl.on('line', (line) => {
    lines.push(line);
    if (lines.length === 2) {
        const s = lines[0];
        const t = lines[1];
        console.log(areIsomorphic(s,t));
    }
});

function areIsomorphic(s,t){
    
    return false;
} */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines = [];

rl.on('line', (line) => {
    lines.push(line);
    if (lines.length === 2) {
        const s = lines[0];
        const t = lines[1];
        console.log(areIsomorphic(s, t));
    }
});

function areIsomorphic(s, t) {
    /* 
        if char1 is not present in word1 and char2 is not present in word2,
        we map
        if char1 is present in word1 
        we take key of it and match it in map2 then we match map2 char with char2
        if char2 is present in word2
    */
    /* 
         object:
             {'char1.1':'char2.1'},
             {'char1.2':'char2.2'},
             //obstruction false
         object:
             {'char2.1':'char1.1'},
             {'char2.2':'char1.2'},
             //obstruction false
    */
    const schars = s.split('');
    const tchars = t.split('');
    if (schars.length != tchars.length) {
        return false
    }
    const sObj = {};
    const tObj = {};
    for (let i = 0; i < schars.length; i++) {
        if (sObj.hasOwnProperty(s[i])) {
            if(sObj[s[i]] != t[i]){
                return false;
            }
        }
        else {
            sObj[s[i]] = t[i];
        }
        if (tObj.hasOwnProperty(t[i])) {
            if(tObj[t[i]] != s[i]){
                return false;
            }
        }
        else {
            tObj[t[i]] = s[i];
        }
    }
    return true;
}