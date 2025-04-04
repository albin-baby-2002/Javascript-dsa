// debouncing

const debounce = function (func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(
      function () {
        func.apply(this, args);
      }.bind(this),
      delay
    );
  };
};

// simple throttling

const throttle = function (func, delay) {
  let latestInvocation;
  let countOfCall = 0;
  let countofInvocation = 0;

  return function (...args) {
    countOfCall++;
    const timeNow = new Date();

    if (!latestInvocation) {
      func.apply(this.args);
      console.log(countOfCall, countofInvocation);
      countofInvocation++;
      latestInvocation = new Date();
    }

    if (timeNow - latestInvocation >= delay) {
      func.apply(this, args);
      countofInvocation++;
      console.log(countOfCall, countofInvocation);

      latestInvocation = new Date();
    }
  };
};

// throttling with edge cases

const throttle2 = function (func, delay) {
  let timeout = null;
  let latestArguments = null;

  return function (...args) {
    if (!timeout) {
      func.apply(this, args);

      timeout = setTimeout(() => {
        if (latestArguments) {
          func.apply(this, latestArguments);
          latestArguments = null;
        }
        timeout = null;
      },delay);

    } else {
      latestArguments = args;
    }
  };
};

// object

const obj = {
  name: "albin",
  hello: function () {
    console.log("Hello i am", this.name);
  },
};

// debounced functions

const debouncedHello = debounce(obj.hello, 300);
const debouncedHello2 = debounce(obj.hello, 300);

// throttled functions

const throttledHello = throttle(obj.hello, 300);
const throttledHello2 = throttle(obj.hello, 300);

document
  .getElementsByTagName("input")[0]
  .addEventListener("keydown", throttledHello);

// this will not work because we are not calling this on an obj so no this

// document
//   .getElementsByTagName("input")[0]
//   .addEventListener("keydown", debouncedHello);

// // correct way

// document.getElementsByTagName("input")[0].addEventListener("keydown", () => {
//   debouncedHello2.call(obj);
// });
