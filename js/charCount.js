exports.charCount = function() {
    function charCount(string){	
        let result = {};	
        string = string.toLowerCase();	
        for (let i = 0; i < string.length; i++){	
          if (string[i] === ' '){	
            continue;	
          }	
          if (result[string[i]] === undefined){	
            result[string[i]] = 1;	
          } else {	
            result[string[i]] = result[string[i]] + 1;	
          }	
        }	
        let objArr = Object.entries(temp).sort((a,b) => b[1] - a[1]);	
        let result = {}	
        for (let j = 0; j < objArr.length; j++){	
          result[objArr[j][0]] = objArr[j][1];	
        }	
        return result;	
      }
};
