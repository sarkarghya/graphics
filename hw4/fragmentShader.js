let fragmentShader = `
precision mediump float;

uniform float uTime, uFL;
uniform vec3 uCursor;
uniform vec3 uL[2];
uniform mat4 uA;

varying vec3 vPos;

const vec3 bgColor = vec3(0.0, 0.0, 0.05);

vec2 rayQ(vec3 V, vec3 W, mat4 Q) {
    vec4 V1 = vec4(V, 1.0);
    vec4 W0 = vec4(W, 0.0);
    float a = dot(W0, Q * W0);
    float b = dot(V1, Q * W0) + dot(W0, Q * V1);
    float c = dot(V1, Q * V1);
    float d = b * b - 4.0 * a * c;
    if (d < 0.0) return vec2(-1.0, -1.0);
    float sqrtD = sqrt(d);
    return vec2((-b - sqrtD) / (2.0 * a), (-b + sqrtD) / (2.0 * a));
}

void main() {
    vec3 V = vec3(0.0, 0.0, uFL);
    vec3 W = normalize(vec3(vPos.xy, -uFL));
    
    vec2 t = rayQ(V, W, uA);
    
    if (t.x > 0.0) {
        vec3 P = V + t.x * W;
        vec4 P1 = vec4(P, 1.0);
        vec3 N = normalize((uA * P1 + P1 * uA).xyz);
        
        vec3 material = vec3(0.6, 0.4, 0.2);
        vec3 ambient = 0.2 * material;
        vec3 diffuse = max(dot(N, uL[1]), 0.0) * material;
        vec3 R = reflect(-uL[1], N);
        vec3 specular = pow(max(dot(R, -W), 0.0), 32.0) * vec3(1.0);
        
        vec3 color = ambient + diffuse + specular;
        gl_FragColor = vec4(sqrt(color), 1.0);
    } else {
        gl_FragColor = vec4(bgColor, 1.0);
    }
}

`;