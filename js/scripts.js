
//Business logic
$(document).ready(function() {
  //Replace all non whole numbers with empty character when typed.
  $('#numberInput').keyup(function() {
    this.value = this.value.replace(/[^0-9]/g,'');
  })
  $('#beep-form').submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($('#numberInput').val());
    var numberNumber = numberInput + 1;
    var numberOutput = ["Beep! "];
    console.log(numberNumber);
    for (i = 1; i < numberNumber; i++) {
      var counter = i.toString();
      if (counter.indexOf("0") > -1) {
        numberOutput.push("Beep! ");
      } else if (counter.indexOf("1") > -1) {
        numberOutput.push("Boop! ");
      } else if (i === 0) {
        numberOutput.push("Beep! ");
      } else if (i % 3 === 0) {
        numberOutput.push("I'm sorry, Dave. I'm afraid I can't do that. ");
      } else {
        numberOutput.push(counter + " ");
      }
    }
    console.log(numberOutput);

  });


//User logic


});
