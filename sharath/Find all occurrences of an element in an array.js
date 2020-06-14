const findAll = (array, n) => {
    let result = new Array();
    
    for (let i=0; i<array.length; i++) {
      if (array[i] === n) {
        result.push(i);
      }
    }
    
    return result;
  }