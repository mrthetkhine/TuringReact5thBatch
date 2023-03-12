interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
//c.y = 10;