function decToBase(decNumber,base) {
    var answer = [];
    var keysForHex = ["A", "B", "C", "D", "E", "F"];
    var convert = () => {
        for (i = decNumber; 0 < i; i = Math.floor(i / base)) {
            if (i % base >= 10) {
                answer.push(keysForHex[i % base - 10]);
            } else {
                answer.push(i % base);
            }
        }

        answer.reverse();
        return answer.join("");
    };

    
    return convert();
    
}

function baseToDec(baseOfNumber,number) {

var numberArray = [];

for (var i of number) {
  numberArray.push(i);
}

numberArray.reverse();


var convertedNum = [];
for (var i = 0; i < numberArray.length; i++) {
  convertedNum.push(numberArray[i] * (baseOfNumber ** i));
}



return convertedNum.reduce(function myFunc(total, num) {
  return total + num;
});
}





function runConvert() {
  document.getElementById("change").innerHTML = decToBase(baseToDec(document.getElementById("input").elements[0].value, document.getElementById("input").elements[1].value), document.getElementById("input").elements[2].value);
}
