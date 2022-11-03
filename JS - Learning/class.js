class dispositive {
  constructor(name){
    this.name = name;
    this.powerOn = false;
  }

  turnOn() {
    if(this.powerOn){
      console.log('this dispostivo is already on')
      return;
    }
    this.powerOn = true;
  }
}

class smartPhone extends dispositive {
  constructor(name,color,model){
    super(name);
    this.color = color;
    this.model = model;
  }
}

let s1 = new smartPhone('Xiaomi','Black',' Note 9 pro');
console.log(s1)
s1.turnOn();
s1.turnOn();
