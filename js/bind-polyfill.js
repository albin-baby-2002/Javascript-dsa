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

Function.prototype.customBind = function (context, ...arguments) {
  context = context || window;

  const key = Symbol();

  context[key] = this;

  return (...extraArguments) => {
    context[key](...arguments,...extraArguments);
  };
};

const bindedIntroduction = obj.introduce.customBind(obj2, 2355);
bindedIntroduction();
