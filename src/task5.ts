
// function logLength<T> (input:T) {};

// function logLength<T> (input:T extends typeof number):number {};


// function logLength<T extends number> (input:T):number {return input};


function logLength<T extends {length:number}> (input:T):number {return input.length};


// type value<T> = logLength<55>;

// type value<T> : logLength<6>;


console.log(logLength);

// console.log(value);