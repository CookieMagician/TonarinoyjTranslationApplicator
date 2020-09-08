var element = document.getElementsByClassName("image-container")[0];

let positions = element.getElementsByTagName('p');

var length = positions.length;

var chapterCode = location.href.replace("https://tonarinoyj.jp/episode/", "");;


for (var i = 0; i < length; i++) {
  var newImg = new Image();
  newImg.src = "https://storage.googleapis.com/opmtranslations/"+ chapterCode + "/"+i+".png";
  newImg.style = "position: absolute; width: 800px;"
  newImg.className = "page-image js-page-image";
  positions[i].appendChild(newImg);
}
