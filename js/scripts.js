//Business logic
function beepBoop() {
  var numberInput = parseInt($('#numberInput').val());
  var numberNumber = numberInput + 1;
  var numberOutput = [];
  //HTML inserts
  var listItems = ["<li>Beep!</li>","<li>Boop!</li>","<li>Quit trying to break it. Please enter a whole number.</li>","<li>I'm sorry, Dave. I'm afraid I can't do that.</li>","<li>Woah! That's a lot to compute! Try something smaller.</li>"]
  //Loop through numbers counting up to input and push to array.
  if (isNaN(numberNumber) === true) {
    numberOutput = [listItems[2]];
  } else if (numberNumber > 10000){
    numberOutput = [listItems[4]]
  } else {
    for (i = 0; i < numberNumber; i++) {
      var counter = i.toString();
      if (counter.indexOf("0") > -1) {
        numberOutput.push(listItems[0]);
      } else if (counter.indexOf("1") > -1) {
        numberOutput.push(listItems[1]);
      } else if (i === 0) {
        numberOutput.push("Beep! ");
      } else if (i % 3 === 0) {
        numberOutput.push(listItems[3]);
      } else {
        numberOutput.push("<li>" + counter + "</li>");
      }
    }
  }
  var resultList = numberOutput.join('');
  return resultList;
}

//User
$(document).ready(function() {
  //Replace all non whole numbers with empty character when typed.
  $('#numberInput').keyup(function() {
    this.value = this.value.replace(/[^0-9]/g,'');
  })
  $('#beep-form').submit(function(event) {
    event.preventDefault();
    beepBoop();
    $('#resultList').html(beepBoop());
  });
});
