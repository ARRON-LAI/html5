  var p1 = document.getElementById("p1");
  var p3 = document.getElementById("p3");
  function changeScene() {
    p1.setAttribute('class', 'page effectOut');
    // p2.setAttribute('class', 'page effectIn');
  }

  function changeBack() {
    p3.setAttribute('class', 'page effectIn');
  }

  //audio
  var audio = new Audio("./assets/christmas.mp3");
  audio.loop = true;
  audio.play();
