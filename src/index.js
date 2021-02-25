module.exports = function check(str, bracketsConfig) {

  let strArr = str.split(''),
      stack = [],
      countVL = 0,
      seven = 0,
      eight = 0;


  for (let i = 0; i < strArr.length; i++) {                                                                                             

    if (strArr[i] == '(' || strArr[i] == '[' || strArr[i] == '{' || strArr[i] == '1' || strArr[i] == '3' || strArr[i] == '5') {         
      stack.push(strArr[i]);
    } else if (strArr[i] == '|' && countVL == 0) {
      stack.push(strArr[i]);
      countVL = 1;
    } else if (strArr[i] == '7' && seven == 0) {
      stack.push(strArr[i]);
      seven = 1;
    } else if (strArr[i] == '8' && eight == 0) {
      stack.push(strArr[i]);
      eight = 1;
    } else if (strArr[i] == ')' && stack[stack.length - 1] == '(') {                                                                    
      stack.pop(stack[stack.length - 1]);
    } else if (strArr[i] == ']' && stack[stack.length - 1] == '[') {
      stack.pop(stack[stack.length - 1]);
    } else if (strArr[i] == '}' && stack[stack.length - 1] == '{') {
      stack.pop(stack[stack.length - 1]);
    } else if (strArr[i] == '2' && stack[stack.length - 1] == '1') {
      stack.pop(stack[stack.length - 1]);
    } else if (strArr[i] == '4' && stack[stack.length - 1] == '3') {
      stack.pop(stack[stack.length - 1]);
    } else if (strArr[i] == '6' && stack[stack.length - 1] == '5') {
      stack.pop(stack[stack.length - 1]);
    } else if (strArr[i] == '|' && stack[stack.length - 1] == '|') {
      stack.pop(stack[stack.length - 1]);
      countVL = 0;
    } else if (strArr[i] == '7' && stack[stack.length - 1] == '7') {
      stack.pop(stack[stack.length - 1]);
      seven = 0;
    } else if (strArr[i] == '8' && stack[stack.length - 1] == '8') {
      stack.pop(stack[stack.length - 1]);
      eight = 0;
    } else {
      return false;
    }

  }

  
  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }

}
