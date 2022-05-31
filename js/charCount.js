exports.charCount = function(string) {
    let strObj = {};	
    string = string.toLowerCase();
    // iterate over string	
    for (let i = 0; i < string.length; i++){
        // if string is a space, remove it	
        if (string[i] === ' '){	
        continue;	
        }
        // if letter isn't in object, initialize it with value of one	
        if (strObj[string[i]] === undefined){	
            strObj[string[i]] = 1;
        // if letter already a key in object, increment it by one	
        } else {	
            strObj[string[i]] = strObj[string[i]] + 1;	
        }	
    }	
    let result = [];
    // push keys/values into array (there's a better way to do this with one command)
    for (key in strObj){
        let val = strObj[key];
        result.push([key, val]);
    }
    // need to determine the proper sort function to get seconday alphabetical sort **********
    result.sort((a,b) => b[1] - a[1]);
    // result.sort(([a, b], [c, d]) => d - b || c - a);
    return result;	
};
console.log(exports.charCount("an apple a day will keep the doctor away"))