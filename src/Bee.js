var Bee = function() {
  Grub.call(this);
  // Grub.call(this, food);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.constructor = Bee;

// var newBee = new Bee();
// console.log(newBee);