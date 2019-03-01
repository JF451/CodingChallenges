var isOpen = function(c){

    if(c === '{' || c === '[' || c === '(')
    {
        return true;
    }
    return false
};

var isClosed = function(c){

    if(c === '}' || c === ']' || c === ')')
    {
        return true;
    }
    return false
};

var isMatching = function(top,c)
{
    switch(c)
    {
        case ')':
            if(top === '(')
            {
                return true;
            }
            return false;
            break;
        case '}':
            if(top === '{')
            {
                return true;
            }
            return false;
            break;
        case ']':
            if(top === '[')
            {
                return true;
            }
            return false;
            break;
        default:
            return false;

    }
};

var isValid = function(s){

    if(s === ""){return true;}

    stack = []

    for(var i = 0;i<s.length;i++)
    {
        if(isOpen(s[i]))
        {
            stack.push(s[i])
        }
        else if(isClosed(s[i]))
        {
            
            if(isMatching(stack[stack.length - 1],s[i]))
            {
                stack.pop();
            }
            else
            {   
                return false;
            }
        }

    }


    if(stack.length != 0)
    {
        return false
    }

    return true;
};

console.log(isValid(''));
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('()}'));
console.log(isValid('{()'));
console.log(isValid('}()'));