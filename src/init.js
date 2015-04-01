$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var xPos = $("body").height()/2
    var yPos = 20;

    // make a dancer with a random position
    var gifs = ['alien', 'ballerina', 'belly', 'break', 'hula', 'leprechaun'];
    var gifIndex = Math.floor(Math.random() * gifs.length);
    var dancer = new dancerMakerFunction(
      xPos,
      yPos,
      Math.random() * 1000,
      gifs[gifIndex]
    );
    window.dancers.push(dancer)
    $('body').append(dancer.$node);
  });



});

