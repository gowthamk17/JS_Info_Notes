// recursion

// recursion for pow function
function pow(x, n) {
  return (n == 1 ? x : x * pow(x, n - 1));
}

console.log(pow(2, 2));
console.log(pow(1, 1202));

let company = {
  dept1: [
    { id: 1, salary: 2000 },
    { id: 2, salary: 3000 },
  ],
  dept2: {
    dept3: [
      { id: 3, salary: 1000 },
      { id: 4, salary: 1000 }
    ]
  }
};

function calcSalary(obj) {
  if (Array.isArray(obj)) {
    return obj.reduce( (prev, curr) => prev + curr.salary , 0);
  } else {
    let sum = 0;
    for (let value of Object.values(obj)) {
      sum += calcSalary(value);
    }
    return sum;
  }
}

console.log(calcSalary(company));
