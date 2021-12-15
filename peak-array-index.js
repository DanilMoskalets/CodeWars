function peak(arr) {
    let res = -1;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr.slice(0, i).reduce((acc, cur) => acc + cur, 0) 
        === arr.slice(i + 1).reduce((acc, cur) => acc + cur, 0)) {
          res = i;
      }
    }
    
    return res;
  }