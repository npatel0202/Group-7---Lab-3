function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let filtered = new Array();
  
  for (let i=0; i<birds.length; i++)
  {
    if (!geese.includes(birds[i]))
    {
      filtered.push(birds[i]);
    }
  }
  
  return filtered;
};