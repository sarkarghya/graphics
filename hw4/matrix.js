let multiply = (matrix1, matrix2) => {
    const result = new Array(16);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let sum = 0;
            for (let k = 0; k < 4; k++) {
                sum += matrix1[i*4 + k] * matrix2[k*4 + j];
            }
            result[i*4 + j] = sum;
        }
    }
    return result;
};

let identity = () => [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];

let translation = (x, y, z) => [1,0,0,0, 0,1,0,0, 0,0,1,0, x,y,z,1];

let rotationX = (theta) => {
    const c = Math.cos(theta);
    const s = Math.sin(theta);
    return [1,0,0,0, 0,c,s,0, 0,-s,c,0, 0,0,0,1];
};

let rotationY = (theta) => {
    const c = Math.cos(theta);
    const s = Math.sin(theta);
    return [c,0,-s,0, 0,1,0,0, s,0,c,0, 0,0,0,1];
};

let rotationZ = (theta) => {
    const c = Math.cos(theta);
    const s = Math.sin(theta);
    return [c,s,0,0, -s,c,0,0, 0,0,1,0, 0,0,0,1];
};

let scale = (x, y, z) => [x,0,0,0, 0,y,0,0, 0,0,z,0, 0,0,0,1];

let perspective = (x, y, z) => [1,0,0,x, 0,1,0,y, 0,0,1,z, 0,0,0,1];

let transpose = (matrix) => {
    return [
        matrix[0], matrix[4], matrix[8], matrix[12],
        matrix[1], matrix[5], matrix[9], matrix[13],
        matrix[2], matrix[6], matrix[10], matrix[14],
        matrix[3], matrix[7], matrix[11], matrix[15]
    ];
};

// Test
console.log(multiply(identity(), translation(1, 2, 3)));