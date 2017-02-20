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

  function deerRun() {
      run({
          "style" : {
            "top" : "120rem",
            "right" : "300rem",
            "scale" : "2.5"
          },
          "time" : "9000"
      }).then(function() {
          return run({
            "style" : {
              "rotateY":"180"
            },
            "time" : "300"
          });
        }).then(function(){
            return run({
              "style" : {
                "top" : "180rem",
                "right" : "30rem",
                "scale" : "4"
              },
              "time" : "9000"
            });
          }).then(function(){
            $(".deer").removeClass("deerAnimation");
            $("#cs").css("display", "inline-block");
            $("#cs2").css("display", "inline-block");
          });
  }

  function run(cond) {
      var deferred = $.Deferred();
      $('.deer').transition(cond.style, cond.time, "linear", function() {
          deferred.resolve();
      });
      return deferred;
  }
