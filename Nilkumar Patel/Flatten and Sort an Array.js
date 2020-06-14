function flattenAndSort(array) {
  let new_arr = new Array();
  for (let i=0; i<array.length; i++) {
    for (let j=0; j<array[i].length; j++) {
      new_arr.push(array[i][j]);
    }
  }

  return new_arr.sort(function(a, b) {
    return a-b;
  });
}