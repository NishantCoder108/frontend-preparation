/*Given an array of n element ,Find  duplicate in an array */

let arr = [34, 87, 90, 4, 34, 87, 87, 87, 5, 2, 89, 90, 5, 1, 6];

function find_duplicate_in_array(array) {
  const count = {};
  const result = [];

  array.forEach((item) => {
    if (count[item]) {
      count[item] += 1;
      return;
    }
    count[item] = 1;
  });

  for (let prop in count) {
    if (count[prop] >= 2) {
      result.push(prop);
    }
  }

  console.log(count);
  console.log('Duplicate Number are :-',result);
}

find_duplicate_in_array(arr);

/*how to duplicate find and push to array and How many numbers of duplicate

First iterate with the help of array.forEach function and that iteration item push to object ,if not present that equal to 1 , if it was their then we increase by 1 . It give ,how many number is duplicate ,

Now push to array , we use for in loop ,iteration of key and checks its value =>2 , They will push to array.
*/
