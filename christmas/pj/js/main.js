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
  // audio.play();

  //draw cloud
  // var canvas = document.getElementsByClassName("cloud")[0];
  // var ctx = canvas.getContext("2d");
  // ctx.arc(50, 50, 50, 0, 2*Math.pi);
  // ctx.fillStyle = "blue";
  // ctx.fill();
