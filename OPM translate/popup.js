
var greet = document.getElementById('greet');
var button = document.getElementById('check')
var translationApplied = false;

document.addEventListener("click", testURL);

function testURL() {
  if (translationApplied == true) {
    greet.innerHTML = "Translations should be applied";
    button.style = "display:none";
  } else {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {

      let url = tabs[0].url;

      if (url.search("https://tonarinoyj.jp/episode/") == -1) {
        greet.innerHTML = "Not on tonarinoyj.jp";
      } else {
        greet.innerHTML = "CHECKING...";
        var chapterCode = url.replace("https://tonarinoyj.jp/episode/", "");




        var newUrl =



        $.ajax({
          url:"https://storage.googleapis.com/opmtranslations/" + chapterCode + "/0.png",
          type:'HEAD',
          error: function()
          {
            greet.innerHTML = "There is no translation for the chapter yet (or there is a server error)";
          },
          success: function()
          {
            greet.innerHTML = "The chapter translation is being applied";
            translationApplied = true;
            button.style = "display: none;";
            chrome.tabs.executeScript({
              file: 'content.js'
            });
          }
        });
      }
    });
  }
}
