import Stack from "./stack.js";

// function isParenthesisValid(validationString) {
//   let stack = new Stack();

//   for (let i = 0; i < validationString.length; i++) {
//     let currentChar = validationString.charAt(i);
//     if (currentChar === "(") {
//       stack.push(currentChar);
//     } else if (currentChar === ")") {
//       if (stack.isEmpty()) {
//         return false;
//       }
//       stack.pop();
//     }
//   }
//   console.log(stack.isEmpty());
//   return stack.isEmpty();
// }

function isParenthesisValid(validationString) {
  let stack = [];

  for (let i = 0; i < validationString.length; i++) {
    let currentChar = validationString[i];
    if (currentChar === "(") {
      stack.push(currentChar);
    } else if (currentChar === ")") {
      stack.pop();
    }
  }
  console.log(stack.length === 0);
  //   return !!stack.length;
}

isParenthesisValid("(((())");
