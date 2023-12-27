// create a mapping between keys and audio files
var keyToAudio = {
    'a': {button: 'btn1', audio: new Audio('a3.mp3')},
    'b': {button: 'btn2', audio: new Audio('b3.mp3')},
    'c': {button: 'btn3', audio: new Audio('c3.mp3') },
    'd': {button: 'btn4', audio: new Audio('d3.mp3') },
    'e': {button: 'btn5', audio: new Audio('e3.mp3') },
    'f': {button: 'btn6', audio: new Audio('f3.mp3') },
    'g': {button: 'btn7', audio: new Audio('g3.mp3') }
  };
  
  document.addEventListener('keydown', function(event) {
    var key = event.key;
    var mapping = keyToAudio[key];
  
    if (mapping) {
      // get the button
      var button = document.getElementById(mapping.button);
  
      // create a new 'click' event
      var clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
  
      // dispatch the event
      button.dispatchEvent(clickEvent);
  
      // play the audio
      mapping.audio.play();
    }
  });

