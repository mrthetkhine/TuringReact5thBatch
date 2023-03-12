class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary 
    /*
     *this.x = x;
     this.y = y; 
     */
  }
}
const a = new Params(1, 2, 3);
console.log(a.x);