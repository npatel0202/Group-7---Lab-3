function largestPairSum(numbers)
{
  let first = numbers[0];
  let second = numbers[0];
  for (let i=0; i<numbers.length; i++)
  {
      if(numbers[i] > first)
      {
        second = first;
        first = numbers[i];
        continue;
      }
      if (numbers[i] > second) 
      {
        second = numbers[i];
      }
  }
  return first + second;
}