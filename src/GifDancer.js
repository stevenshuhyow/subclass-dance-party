// define class
GifDancer = function(top, left, timeBetweenSteps, face){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$face = $('<img>').prop('src', 'images/dancer-'+ face +'.gif');
  this.$node.append(this.$face);
};

// psueudoclassical plumbing
GifDancer.prototype = Object.create(Dancer.prototype);
GifDancer.prototype.constructor = GifDancer;

// define instance methods
GifDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // this.$node.
};
