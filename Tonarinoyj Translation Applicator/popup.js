console.log("HELLO");
var greet = document.getElementById('greet');
var options = document.getElementById('options');
var hostTag = document.getElementById('host');
var translationApplied = false;




document.addEventListener("DOMContentLoaded", checkURL);
options.addEventListener("click", openOptions);

var chapterCode;

function checkURL() {

  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {

    let url = tabs[0].url;

    if (url.search("https://tonarinoyj.jp/episode/") == -1) {
      greet.innerHTML = "Not on tonarinoyj.jp";
    } else {
      chapterCode = url.replace("https://tonarinoyj.jp/episode/", "");

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
              greet.innerHTML = "No translation for this chapter!";
            },
            success: function()
            {
              greet.innerHTML = "Chapter translation found and applied!";

            }
          });
        }
      });
    }
  });
}

function inject() {
  greet.innerHTML = "The chapter translation is applied!";
  translationApplied = true;
  button.style = "display: none;";
  chrome.tabs.executeScript({
      file: 'content.js'
  });
}


function openOptions() {
  chrome.runtime.openOptionsPage();
}
