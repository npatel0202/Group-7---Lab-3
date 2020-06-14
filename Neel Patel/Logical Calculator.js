function logicalCalc(array, op){

for (let i=0; i<array.length-1; i++)
  {
    if (op === "AND")
    {
      if (array[i] == true && array[i+1] == true)
      {
        array[i+1] = true
      }
      else
      {
        array[i+1] = false
      }
    }
    if (op === "OR")
    {
      if (array[i] == true || array[i+1] == true)
      {
        array[i+1] = true
      }
      else
      {
        array [i+1] = false
      }
    }
    if (op === "XOR")
    {
      if (array[i] == array[i+1])
      {
        array[i+1] = false
      }
      else
      {
        array[i+1] = true
      }
    }
      
  }
  return array[array.length-1]
}