// Calculate the number of inversions in array
function countInversions(array) {
    let numInversions = 0;
    
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        numInversions += array[i] > array[j];
      }
    }
    
    return numInversions;
  }
  