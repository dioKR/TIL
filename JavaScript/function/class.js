function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}

Vacation.prototype.print = function () {
  console.log(this.destination + "은(는)" + this.length + "일 걸립니다.");
};

const maui = new Vacation("마우이", 7);
maui.print();

class Vacation2 {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  print() {
    console.log(this.destination + "은(는)" + this.length + "일 걸립니다.");
  }
}
const maui2 = new Vacation2("파리", 8);
maui2.print();
