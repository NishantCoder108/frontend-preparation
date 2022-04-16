function terniarySearch(arr, ans) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid1 = start +Math.floor( (end - start) / 3);
    let mid2 = end -Math.floor( (end - start) / 3);

    if (ans === arr[mid1]) {
      return mid1;
    }
    else if (ans === arr[mid2]) {
      return mid2;
    }

    else if (ans < arr[mid1]) {
      end = mid1 - 1;
    } else if (ans > arr[mid2]) {
      start = mid2 + 1;
    } else {
      start = mid1 + 1;
      end = mid2 - 1;
    }
  }
  return -1
}

console.log(terniarySearch([3, 4, 5, 7, 34, 56, 59], 7));
