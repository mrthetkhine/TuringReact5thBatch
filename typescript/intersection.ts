type P = {
    x : number,
    y : number
};
type P3D = P & { z : number};
let k: P3D = {
    x : 10,
    y : 200,
    z : 300
}