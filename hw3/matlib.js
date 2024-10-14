function Matrix() {
    let value = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];

    this.identity = () => value = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];

    this.translate = (x,y,z) => value = multiply(value, [1,0,0,0, 0,1,0,0, 0,0,1,0, x,y,z,1]);

    this.rotateX = (theta) => {
        const c = Math.cos(theta);
        const s = Math.sin(theta);
        console.log(c, theta);
        value = multiply(value, [1,0,0,0, 0,c,s,0, 0,-s,c,0, 0,0,0,1]);
    };

    this.rotateY = (theta) => {
        const c = Math.cos(theta);
        const s = Math.sin(theta);
        value = multiply(value, [c,0,-s,0, 0,1,0,0, s,0,c,0, 0,0,0,1]);
    };

    this.rotateZ = (theta) => {
        const c = Math.cos(theta);
        const s = Math.sin(theta);
        value = multiply(value, [c,s,0,0, -s,c,0,0, 0,0,1,0, 0,0,0,1]);
    };

    this.scale = (x,y,z) => {
        value = multiply(value, [x,0,0,0, 0,y,0,0, 0,0,z,0, 0,0,0,1]);
    };

    this.perspective = (x,y,z) => {
        value = multiply(value, [1,0,0,x, 0,1,0,y, 0,0,1,z, 0,0,0,1]);
    };

    this.get = () => value;
  
    this.set = v => value = v;
  
    this.transform = (vector) => {
        const [x, y, z, w] = vector;
        const result = [0, 0, 0, 0];
        for (let i = 0; i < 4; i++) {
            result[i] = value[i*4] * x + value[i*4+1] * y + value[i*4+2] * z + value[i*4+3] * w;
        }
        return result;
    };

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
}

// Test
const matrix = new Matrix();
matrix.rotateY(Math.PI / 2); 
console.log(matrix.get());
