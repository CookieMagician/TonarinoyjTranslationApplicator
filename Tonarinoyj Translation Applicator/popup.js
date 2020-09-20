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

      chrome.storage.sync.get(null, function(result) {

      var host = result.currentHost;

      for (i = 1; i < 6; i++) {
        var toGet = "host" + i;
        console.log(toGet + " is " + result[toGet]);

        if (checkHost(result[toGet])) {
          greet.innerHTML = "Chapter translation found and applied!";
          inject();
          return;
        } else {

        }
      }
      greet.innerHTML = "No chapter translation found in any given host";
      });
    }
  });
}

function checkHost(host) {

  if (host === undefined) {
    return false;
  } else {
    $.ajax({
      url:host + chapterCode + "/0.png",
      type:'HEAD',
      error: function()
      {
        return false;
      },
      success: function()
      {
        chrome.storage.sync.set({currentHost: host}, function() {

          return true;
        });
      }
    });
  }
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
