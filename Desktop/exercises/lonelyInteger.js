let a = [1, 1, 2];
//let a = [1, 2];

const lonely = a.filter(
  (item, index) => a.indexOf(item) === a.lastIndexOf(item) //checks the first and last occurance of the item
);
console.log(lonely);

//alternative implementation

const loneliest = a.reduce((acc, curr) => acc ^ curr);
console.log(loneliest);

//filter method is efficient more than the xor method when the elements in the array are all unique.
//in that case filter method would return an array of unique elements where as XOR/reduce method would return a single accumulated result