let fragmentShader = `
precision mediump float;

uniform float uTime;
uniform vec3 uCursor;
uniform mat4 uA[6];

varying vec3 vPos;

void main() {
    vec3 V = vec3(0.0, 0.0, 3.0); // Camera position
    vec3 W = normalize(vPos - V); // Ray direction

    vec3 center = vec3(0.0, 0.0, -20.0);
    float radius = 1.5;

    vec3 oc = V - center;
    float a = dot(W, W);
    float b = 2.0 * dot(oc, W);
    float c = dot(oc, oc) - radius * radius;
    float discriminant = b * b - 4.0 * a * c;

    if (discriminant > 0.0) {
        float t = (-b - sqrt(discriminant)) / (2.0 * a);
        if (t > 0.0) {
            vec3 hitPoint = V + t * W;
            vec3 normal = normalize(hitPoint - center);
            
            vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
            float diffuse = max(dot(normal, lightDir), 0.0);
            vec3 color = vec3(0.8, 0.4, 0.2) * diffuse;
            
            gl_FragColor = vec4(color, 1.0);
            return;
        }
    }

    gl_FragColor = vec4(0.0, 0.0, 0.05, 1.0);
}
`;