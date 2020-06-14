function countAdjacentPairs(searchString) {
    let arr = searchString.toLowerCase().split(" ");
    let temp_count = 1;
    let counter = 0;

    if (arr.length == 0 || arr.length == 1) {
      return counter;
    }

    for (let i=0; i<arr.length-1; i++) {
      if (arr[i] === arr[i+1]) {
        temp_count += 1;
      } else {
        if (temp_count > 1) {
          counter++;
          temp_count = 1;
        }
      }
    }

    if (temp_count > 1) {
      counter++;
    }

    return counter;
  }