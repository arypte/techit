const myProfile = {
  name: "JDH",
  job: "pg",
  age: 29,
};

const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  sun: function (num1, num2) {
    return num1 - num2;
  },

  mul: function (num1, num2) {
    return num1 * num2;
  },

  div: function (num1, num2) {
    return num1 / num2;
  },
};

let result = div(2, 3);

let result2 = calculator.add(3, 4);

console.log(result2);
