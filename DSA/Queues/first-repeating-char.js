let s = "abab";
let map = {};

for (let i = 0; i < s.length; i++) {
  if (map[s[i]] == undefined) {
    map[s[i]] = 1;
  } else {
    // nonrepeatingChar = s[j]
    map[s[i]]++;
    break;
  }

  let nonrepeatingChar = -1;
  for (let j = 0; j <= i; j++) {
    if (map[s[j]] == 1) {
      nonrepeatingChar = s[j];
      break;
    }
  }

  // console.log(map)
  // console.log(nonrepeatingChar);
}

// --------

function nonrepeat() {
  let s = "abacacb";
  let map = {};
let finalArray = new Array(s.length)
  let k = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == undefined) {
      map[s[i]] = 1;
     

    } else {
      map[s[i]]++;
    }

    let nonrepeatingChar = -1;
    while (k <= i) {
      if (map[s[k]] == 1) {
        nonrepeatingChar = s[k];
        finalArray[i] = nonrepeatingChar
        console.log("final Arry",finalArray[i])
        break;
      }
      else{
        finalArray[i] = nonrepeatingChar
        console.log("Else Part", nonrepeatingChar)
        console.log("Final Array", finalArray[i])
      }
      k++;
    }

    
    console.log(map);
    console.log(nonrepeatingChar);
  }
  console.log(finalArray)
}

nonrepeat();
