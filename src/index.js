
// You should implement your task here.

module.exports = function towelSort (matrix) {
  /* let openArr = matrix.flat(Infinity).sort(function(a, b){return a-b}); */
if (!Array.isArray(matrix)){
  return []
} else if (!matrix[0]) {
  return []
}
  let result=[];
  for (let i in matrix){
    if (i % 2 === 0){
      matrix[i].forEach(el => {result.push(el)        
      });
    } else {
      let r = matrix[i].reverse()
      r.forEach(el => {result.push(el)        
      });
    }
  }
  return result
}
