const createScream = function (logger) {
  return function (message) {
    logger(message + "!!!");
  };
};

const scream = createScream(function (message) {
  console.log(message);
});

const scream2 = createScream((message) => console.log(message));

const createScream2 = (logger) => (message) => {
  logger(message.toUpperCase() + "!!!");
};

scream(() => console.log("123"));
