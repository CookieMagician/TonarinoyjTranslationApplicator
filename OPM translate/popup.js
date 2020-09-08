
var greet = document.getElementById('greet');
var button = document.getElementById('check');
var options = document.getElementById('options');
var hostTag = document.getElementById('host');
var translationApplied = false;

document.addEventListener("click", testURL);
options.addEventListener("click", openOptions);

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


        chrome.storage.sync.get(['currentHost'], function(result) {

          var host = result.currentHost;


          if (host === undefined) {
            greet.innerHTML = "You have not applied a host for images. Please do so in settings";
            options.style = "display: inline;"
          } else {

            $.ajax({
              url:host + chapterCode + "/0.png",
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
    });
  }
}

function openOptions() {
  chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });
}
