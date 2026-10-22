class car{

  constructor (color,model,year){
    this.color=color;
    this.model=model;
    this.year=year;
    this.speed=0;
  }
start(){
this.speed =40;
console.log(`${this.model}starts!`);
}
speedup(amount){
this.speed+=amount;
console.log(` speed: ${this.speed} km/h`);

}
}
const car1=new car('red','toyota','2000');
car1.start();
car1.speedup(33);
