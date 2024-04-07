export function basicCalc2(s) {
  const calculator = s.match(/(\d+)|[+-/*]/g);
  const addition = [+calculator.shift()];
  const operator = {
    '+': (num) => addition.push(num),
    '-': (num) => addition.push(-num),
    '*': (num) => addition[addition.length - 1] = addition[addition.length - 1] * num,
    '/': (num) => addition[addition.length - 1] = Math.trunc(addition[addition.length - 1] / num),
  };

  calculator.forEach((str, index) => operator[str]?.(+calculator[index + 1]));
  return addition.reduce((result, num) => result + num);
};