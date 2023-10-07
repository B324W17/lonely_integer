# lonely_integer

- The task is to find the element that occurs only once in an array of integers with an odd number of elements, where every other element occurs twice.

- To solve the task, I employed two methods: filter and XOR. 

- The XOR method is preferable because it cancels out identical numbers and returns the original number when XORed with 0. Additionally, XOR is commutative and associative, meaning that the order of elements does not matter. This feature saves execution time that would have been used on sorting the elements. 

- However, the filter method is suitable than the XOR method when the array's elements are all unique. In such cases, the filter method will return an array of unique elements, while the XOR/reduce method will return a single accumulated result.