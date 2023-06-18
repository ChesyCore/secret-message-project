let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.pop());
console.log(secretMessage.length)

secretMessage.push('to','Program')
console.log(secretMessage)

secretMessage.splice(7,1,'right');
console.log(secretMessage);

// secretMessage.slice(1);
// console.log(secretMessage.slice(1))
console.log(secretMessage.shift(1))

console.log(secretMessage.unshift('Programming'));

secretMessage.splice(6,5,'know')
console.log(secretMessage);

console.log(secretMessage.join());
