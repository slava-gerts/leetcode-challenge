export function basicCalc(s) {
  let res=0
  let sign=1
  let sum=0

  let stack=[sign]
  for(let x of s){
      if (x >= '0' && x <= '9') {
          sum = sum * 10 + Number(x)
      }
      else {
          res += sum * sign * stack[stack.length - 1];
          sum = 0;
          if (x === '-') sign = -1
          else if (x === '+') sign = 1
          else if (x === '(') {
              stack.push(stack[stack.length - 1] * sign); sign = 1
          }
          else if (x === ')') stack.pop()
      }
          
  }
  return res += (sign * sum)
};