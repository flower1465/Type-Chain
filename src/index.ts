const person = {
  name: "seung jun",
  age: 18,
  gender: "male",
};

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};

console.log(sayHi("seung jun", 18, "male"));

export {};
