(function(){
  var docEl = document.documentElement;
  function resize(){
    var docWidth = document.documentElement.clientWidth || document.body.clientWidth;
    console.log(docWidth);
    docEl.style.fontSize = 20 * docWidth / 320 + "px";

    var pages = document.getElementsByClassName("page");
    var container = document.getElementsByClassName("container")[0];
    container.style.height = container.clientWidth *991/1441 + "px";
    for (var i = 0; i < pages.length; i++) {
      // pages[i].style.width = pages[i].clientWidth + "px";
      //
      // console.log(pages[i].style.width);
      // console.log(pages[i].clientWidth);
      // console.log(pages[i].clientWidth * 991 / 1441);
      pages[i].style.height = pages[i].clientWidth * 991 / 1441 + "px";
      // console.log(pages[i].clientHeight);
      // console.log(pages[i].style.height);
    }
  }
  window.addEventListener('resize', resize, false);
  resize();
})();
