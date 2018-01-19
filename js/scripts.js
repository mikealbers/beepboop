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
    var numberOutput = [];
    console.log("numberNumber = " + numberNumber);
    //Loop through numbers counting up to input and push to array.
    if (isNaN(numberNumber) === true) {
      numberOutput = ["<li>Quit trying to break it. Please enter a number.</li>"];
    } else {
      for (i = 1; i < numberNumber; i++) {
        var counter = i.toString();
        if (counter.indexOf("0") > -1) {
          numberOutput.push("<li>Beep!</li>");
        } else if (counter.indexOf("1") > -1) {
          numberOutput.push("<li>Boop!</li>");
        } else if (i === 0) {
          numberOutput.push("Beep! ");
        } else if (i % 3 === 0) {
          numberOutput.push("<li>I'm sorry, Dave. I'm afraid I can't do that.</li>");
        } else {
          numberOutput.push("<li>" + counter + "</li>");
        }
      }
    }
    console.log(numberOutput);
  //User logic
    var resultList = numberOutput.join('');
    $('#resultList').html(resultList);
  });
});
