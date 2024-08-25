// You are given a 2D array of integers matrix. Write a function that returns the transpose of the matrix.
// The transpose of a matrix is a flipped version of the original matrix  across its main diagonal( which runs from top-left to bottom-right), it switches the role and column indices of the original matrix.
// You can assume the input matrix always has at least 1 value; however its width and height are not necessarily  the same,


function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];
    
    for (let col = 0; col < cols; col++) {
        const newRow = [];
        
        for (let row = 0; row < rows; row++) {
            newRow.push(matrix[row][col]);
        }
        transposed.push(newRow);
    }
    return transposed;
}