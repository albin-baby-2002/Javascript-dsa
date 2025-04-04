// Currying is a functional programming technique where a function is transformed into a sequence of nested functions, each taking one argument at a time.

function multiply(x, y) {
  return x * y;
}

// currying by bind

const multiplyByTwo = multiply.bind(this, 2);

multiplyByTwo(10);

// custom currying

function curriedMultiply(a) {
  return (b) => {
    return multiply(a, b);
  };
}

// infinite currying - multiply

function multiplyInfinite(a) {
  return function (b) {
    if (b !== undefined) {
      return multiplyInfinite(a * b);
    } else {
      return a;
    }
  };
}
// fn to convert a fn to curried function;

function toCurried(func) {
  // don't use variable arguments is a keyword

  const args = [];

  return function back(a) {
    args.push(a);

    // func.length gives the length of arguemtns its expecting

    if (args.length === func.length) {
      return func(...args);
    } else {
      return back;
    }
  };
}
