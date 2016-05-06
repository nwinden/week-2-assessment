$(document).ready(function(){
  //the counter used to show how many times generate has been pushed
  var counter = 0;

  //puts the generate button on the DOM
  $('body').append('<button class="generate" type="button">Generate</button>');

  //when the generate button is clicked, it appends a div with two buttons and a counter to the DOM
  $('body').on('click', '.generate', function(){

    $('body').append('<div class="btn-container"><button class="delete" type="button">Delete</button><button class="change" type="button">Change Color</button><p># of times Generate Button clicked: ' + counter + '</p></div>' );
    counter++;

  });

  //when the delete button is clicked, it delets the container holding the said button
  $('body').on('click', '.delete', function(){

    $(this).parent().remove();

  });

  //when the change color button is clicked, the color toggles from yellow to red
  $('body').on('click', '.change', function(){

    $(this).parent().toggleClass('red');

  });

});
