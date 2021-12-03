function sum(args){
    let sum_of_args = 0;
    for (const i of args){
        sum_of_args = sum_of_args + i
    }
    return sum_of_args;
}

console.log(sum([2, 3]))
const sum = (...args) => {
  let total = 0;
  for (const x of args) {
    total += x;
  }
  return total;
};

const ages = [2, 3];
const result = sum(ages);
console.log({ result });
