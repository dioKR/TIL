const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age;
  } else {
    return max;
  }
}, 0);

console.log("maxAge", maxAge);

const colors = ["red", "red", "green", "blue", "green"];

const uniqueColors = colors.reduce(
  (unique, color) =>
    unique.indexOf(color) !== -1 ? unique : [...unique, color],
  []
);

console.log(uniqueColors);

const userLogs = function (userName) {
  return function (message) {
    console.log(`${userName} -> ${message}`);
  };
};

const log = userLogs("grandpa23");

log("attempted to load 20 fake members");

const dan = {
  type: "person",
  data: {
    gender: "male",
    info: {
      id: 22,
      fullname: {
        first: "Dan",
        last: "Deacon",
      },
    },
  },
};

const addOne = (a) => a + 1;
const multitwo = (a) => a * 2;
const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((composed, f) => f(composed), arg);

const compose2 = function (...fns) {
  return function (arg) {
    return fns.reduce((composed, f) => f(composed), arg);
  };
};

const both = compose(addOne, multitwo);
console.log(both(3));
