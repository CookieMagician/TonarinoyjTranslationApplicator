chrome.webNavigation.onCompleted.addListener(function() {
console.log("HELLO1");
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {

    let url = tabs[0].url;
    console.log("HELLO2");
    if (url.search("https://tonarinoyj.jp/episode/") == -1) {

    } else {
      chapterCode = url.replace("https://tonarinoyj.jp/episode/", "");

      chrome.storage.sync.get(['currentHost'], function(result) {

      var host = result.currentHost;

      if (host === undefined) {


      } else {


          $.ajax({
            url:host + chapterCode + "/0.png",
            type:'HEAD',
            error: function()
            {

            },
            success: function()
            {

              inject();

            }
          });
        }
      });
    }
  });



}, {url: [{urlMatches : 'https://tonarinoyj.jp/episode/'}]});


function inject() {

  chrome.tabs.executeScript({
      file: 'content.js'
  });
}
