
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix ||matrix.length===0) return [];
  let result=matrix[0];
  for (let i=1; i<matrix.length; i++) {
    if(i%2===1) {result=result.concat(matrix[i].reverse());}
    else {result=result.concat(matrix[i]);}
  }
  return result;
}
