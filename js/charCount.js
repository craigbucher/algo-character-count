exports.charCount = function(string) {
    let strObj = {};	
    string = string.toLowerCase();	
    for (let i = 0; i < string.length; i++){	
        if (string[i] === ' '){	
        continue;	
        }	
        if (strObj[string[i]] === undefined){	
            strObj[string[i]] = 1;	
        } else {	
            strObj[string[i]] = strObj[string[i]] + 1;	
        }	
    }	
    let result = [];
    for (key in strObj){
        let val = strObj[key];
        result.push([key, val]);
    }
    // result.sort((a,b) => b[1] - a[1]);
    result.sort();
    return result;	
};
console.log(exports.charCount("an apple a day will keep the doctor away"))