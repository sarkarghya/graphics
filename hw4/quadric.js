const sphere = new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, -1
]);


const xParaboloid = new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 0, -1,
    0, 0, -1, 0
]);

const yParaboloid = new Float32Array([
    1, 0, 0, 0,
    0, 0, 0, -1,
    0, 0, 1, 0,
    0, -1, 0, 0
]);

const zParaboloid = new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 0, -1,
    0, 0, -1, 0
]);

const xSlab = new Float32Array([
    1, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, -1
]);

const ySlab = new Float32Array([
    0, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, -1
]);

const zSlab = new Float32Array([
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, -1
]);

const xCylinder = new Float32Array([
    0, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, -1
]);

const yCylinder = new Float32Array([
    1, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, -1
]);

const zCylinder = new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, -1
]);

const everywhere = new Float32Array([
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, -1
]);