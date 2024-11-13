/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let numbers = [];
    let calc = 0;

    for (let i=0; i < tokens.length; i++) {
        if (['+', '-', '*', '/'].includes(tokens[i])) {
            switch (tokens[i]) {
                case '+':
                    calc = parseInt(numbers[numbers.length - 2]) + parseInt(numbers[numbers.length - 1]);
                    numbers.pop();
                    numbers.pop();
                    numbers.push(calc);
                    continue;
                case '*':
                    calc = parseInt(numbers[numbers.length - 2]) * parseInt(numbers[numbers.length - 1]);
                    numbers.pop();
                    numbers.pop();
                    numbers.push(calc);
                    continue;
                case '-':
                    calc = parseInt(numbers[numbers.length - 2]) - parseInt(numbers[numbers.length - 1]);
                    numbers.pop();
                    numbers.pop();
                    numbers.push(calc);
                    continue;
                case '/':
                    calc = Math.trunc(parseInt(numbers[numbers.length - 2]) / parseInt(numbers[numbers.length - 1]));
                    numbers.pop();
                    numbers.pop();
                    numbers.push(calc);
                    continue;
            }
        } else {
            numbers.push(tokens[i]);
        }
    }
    return parseInt(numbers[0]);
};
