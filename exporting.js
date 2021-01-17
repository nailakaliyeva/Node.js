const sum = (num1, num2)=>num1+num2;
module.exports = sum;
//or if you have multiple objects, functions or classes you want to acces from the same module,
//then you should do this
const diff = (num1, num2)=>num1-num2;
module.exports.sum = sum;
module.exports.diff = diff;
//or you can even do this so you dont have to copy module.exports many times:
module.exports = {sum: sum, 
                  diff: diff}