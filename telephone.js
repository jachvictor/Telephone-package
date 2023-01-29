class Telephone {
  constructor() {
    this.phoneNumberList = [];
    this.observerList = new Set();
  }

  //telephone system
  AddPhoneNumber(phonenumber) {
    this.phoneNumberList.push(phonenumber);
  }

  RemovePhoneNumber(phonenumber) {
    const index = this.phoneNumberList.indexOf(phonenumber);
    this.phoneNumberList.splice(index, 1);
  }

  DialPhoneNumber(phonenumber) {
    if (this.phoneNumberList.includes(phonenumber)) {
      this.notify(phonenumber);
    } else {
      console.log("number is not added");
    }
  }

  //observer system
  addObserver(observer) {
    this.observerList.add(observer);
  }

  removeObserver(observer) {
    this.observerList.delete(observer);
  }

  notify(phonenumber) {
    this.observerList.forEach((observer) => observer.update(phonenumber));
  }
}

class Observer {
  constructor(observername) {
    this.observername = observername;
  }

  update(phonenumber) {
    console.log(this.observername + "  is being notified of a new call");
    console.log(phonenumber);
    console.log("now dailing  " + phonenumber);
    console.log("         ");
  }
}

const telephone = new Telephone();

const observer1 = new Observer("observer1");
const observer2 = new Observer("observer2");

telephone.addObserver(observer1);
telephone.addObserver(observer2);
// telephone.removeObserver(observer2);

telephone.AddPhoneNumber("2347023232");
telephone.DialPhoneNumber("2347023232");
