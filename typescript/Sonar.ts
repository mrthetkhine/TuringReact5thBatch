interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
/*
class Ball implements Pingable {
  
    pong() {
      console.log("pong!");
    }
}
*/