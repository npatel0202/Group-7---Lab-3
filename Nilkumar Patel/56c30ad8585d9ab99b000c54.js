function createObject(a) {
    let obj = new Object();

    for (let i=0; i<a.length; i++) {
        let ch = a[i].toLowerCase();
        if (ch in obj) {
        obj[ch] += 1;
        } else {
        obj[ch] = 1;
        }
    }

    return obj;
}

  function changeString(str, obj) {
    let new_str = "";
    for (let i=0; i<str.length; i++) {
      let ch = str.charAt(i);
      if (ch.toLowerCase() in obj) {
        if (obj[ch.toLowerCase()] % 2 === 1) {
          if (ch === ch.toUpperCase()) {
            new_str += ch.toLowerCase();
          } else {
            new_str += ch.toUpperCase();
          }
        } else {
          new_str += ch;
        }
      } else {
        new_str += ch;
      }
    }
    return new_str;
  }

  function workOnStrings(a,b){
    let obj_a = createObject(a);
    let obj_b = createObject(b);

    console.log(obj_a);
    console.log(obj_b);

    let new_b = changeString(b, obj_a);
    let new_a = changeString(a, obj_b);

    return new_a + new_b;
  }