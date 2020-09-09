var element = document.getElementsByClassName("image-container")[0];

let positions = element.getElementsByTagName('p');


var length = positions.length;

var chapterCode = location.href.replace("https://tonarinoyj.jp/episode/", "");;


chrome.storage.sync.get(['currentHost'], function(result) {

  var host = result.currentHost;

  for (var i = 0; i < length; i++) {
    positions[i].style = "position: relative;";

    var newImg = new Image();
    newImg.src = host + chapterCode + "/"+i+".png";
    newImg.style = "position: absolute; z-index: 1;";
    newImg.className = "page-image js-page-image";
    positions[i].appendChild(newImg);
  }
});
