const isPair = (open, close) => {
    if (open == '(' && close == ')') {
        return true;
    }
    else if (open == '{' && close == '}') {
        return true
    }
    else if (open == '[' && close == ']') {
        return true
    }
    return 'false'
}
const areBalanced = (exp) => {
    let stack = []
    for (let i = 0; i < exp.length; i++) {
        if (exp[i] == '(' || exp[i] == '{' || exp[i] == '[') {
            stack.push(exp[i])
        } else if (exp[i] == ')' || exp[i] == '}' || exp[i] == ']') {
            if (stack.length == 0 || !isPair(stack, exp[i])) {
                return false
            } else {
                stack.pop()
            }
        }
    }
    return stack.length == 0 ? 'Balanced' : 'Not Balanced';
}
var expr = "([{}])"
console.log(areBalanced(expr)); //Balanced
var expr = "([{])"
console.log(areBalanced(expr)); //Not Balanced
