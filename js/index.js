
// normal function - fn statement or declaration

const obj = {
  a: 10,
  x: () => {
    console.log(this); // {a:10,x:()=>{}}
  },
};

// refernce of the function

const xFunction = obj.x;

xFunction(); // window

// arrow function

const obj2 = {
  a: 10,
  x: () => {
    console.log(this); // window
  },
};
