type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails ;

// const getProfile (input:Employee):string => { return "Name : [name] , Role: [role]"};

// type getProfile (input:Employee):string => { return `Name : {input.name} , Role: {input.role}`};
// 

function getProfile (input:Employee):string { return `Name : ${input.name} , Role: ${input.role}`};

console.log(getProfile);