class RomanNumerals {
  static toRoman(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
​
    let result = "";
for(let i = 0; i < values.length; i++){
  while(num >= values[i]){
    result += symbols[i]
    num -= values[i]
  }
    
}
    return result;
  }
​
  static fromRoman(str) {
    const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
​
    let result = 0;