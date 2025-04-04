
const obj = {
  name: "albin baby",
  age: 23,
  country: "India",
  introduce: function (id) {
    console.log(
      `I am ${this.name} from ${this.country} and i am ${this.age} years old`,
      id
    );
  },
};

const obj2 = {
  name: "John Doe",
  age: 30,
  country: "USA",
};

// create a poly fill for call that can be used by obj2 for calling introduce

Function.prototype.customApply = function (context, arguments) {
  context = context || window;

  // create a unique key name

  const key = Symbol();

  // add the method to the context (object)

  context[key] = this;

  // call the object and get result

  const result = context[key](...arguments);

  // remove the method after calling

  delete context[key];

  // return the result

  return result;
};

obj.introduce.customApply(obj2, [23452345]);
