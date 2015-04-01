// define class (instance properties)
Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.positionY = top;
  this.positionX = left;
  this.stepPosition(this.positionY, this.positionX);
}

// psuedoclassical plumbing
Dancer.prototype = Object.create(Dancer.prototype);
Dancer.prototype.constructor = Dancer;

// define class methods (instance behaviors shared at class level)
Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.movement();
  this.deletion();
};

Dancer.prototype.deletion = function(){
  for(var i = 0 ; i<window.dancers.length ; i++){
    if(window.dancers[i].positionX === this.positionX && window.dancers[i] !== this){
      if(this.timeBetweenSteps < window.dancers[i].timeBetweenSteps){
        window.dancers[i].$node.remove();
        window.dancers.splice(i, 1);
      }
    }
  }
}

Dancer.prototype.movement = function(){
  if(this.positionX > 1000){
    this.$node.remove();
  } else{
    this.positionX = this.positionX + 10;
    this.stepPosition(this.positionY, this.positionX);
  }
}



Dancer.prototype.stepPosition = function(top, left){
  var position = {
    top: top,
    left: left
  };
  this.$node.css(position);
};

Dancer.prototype.move = function(){
  var position = {
    top: top,
    left: left
  };
  this.$node.css(position);
}







// // BOILERPLATE
// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps){

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');


//   dancer.step = function(){
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left){
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };
