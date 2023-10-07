let a = [1, 1, 2];
//let a = [1,2];

//method - 1
const lonely = a.filter(
  (item, index) => a.indexOf(item) === a.lastIndexOf(item)//checks the first and last occurance of the item
);
console.log(lonely);

//method - 2
const loneliest = a.reduce((acc, curr) => acc ^ curr);
console.log(loneliest);