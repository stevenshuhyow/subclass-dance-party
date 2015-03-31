// define class
BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

// psueudoclassical plumbing
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// define instance methods
BlinkyDancer.prototype.step = function(){
  this.$node.toggle();
}

function useBlinkyDancer (top, left, timeBetweenSteps) {
  var dancer = new BlinkyDancer(top, left, timeBetweenSteps);
  return dancer;
}


// BOILERPLATE
var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };
  console.log("oldStep " + oldStep)

  return blinkyDancer;
};

