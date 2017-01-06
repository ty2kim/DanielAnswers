$(document).ready(function(){
  var dotOn = false;
  var message = "Daniel please answer the following question".split("");
  var count = 0;
  var danielsAnswer = '';

  $('#petition').on('keypress', function(e){
    var curVar = String.fromCharCode(e.keyCode);
    if (e.keyCode === 46) {
      dotOn = dotOn ? false : true;
    }
    if (dotOn) {
      if (e.keyCode != 46) danielsAnswer += curVar;
      if (count < message.length) {
        this.value += message[count];
        count++;
      } else {
        this.value += ' ';
      }
    } else if (e.keyCode === 46){
      if (count < message.length) {
        this.value += message[count];
        count++;
      } else {
        this.value += curVar;
      }
    } else {
      this.value += curVar;
    }
    return false;
  });

  $('#petition').on('keyup', function(e){
    if(e.keyCode === 8 && dotOn) danielsAnswer = danielsAnswer.slice(0, -1);
  });

  $('#cancel').on('click', function(e){
    dotOn = false;
    count = 0;
    danielsAnswer = '';
    this.value = '';
  });

  $('#go').on('click', function(e){
    $('#danielsAnswer').html('');
    var msg = '';
    if (!$('#petition').val()) {
      msg = 'You must enter a valid petition.'
    } else if (!$('#question').val()) {
      msg = 'You must enter a valid question.'
    } else if (!danielsAnswer) {
      msg = 'Why must you mock me?';
    } else {
      msg = danielsAnswer;
    }
    $('#danielsAnswer').append(`<h3 class="col-md-offset-2">Daniel answers: ${msg}</h3>`);
    return false;
  });
});
