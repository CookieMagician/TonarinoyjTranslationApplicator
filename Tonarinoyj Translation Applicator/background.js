chrome.webNavigation.onCompleted.addListener(function() {
  console.log("HELLO");
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {

  let url = tabs[0].url;

  chapterCode = url.replace("https://tonarinoyj.jp/episode/", "");

  chrome.storage.sync.get(null, function(result) {

      for (i = 1; i < 6; i++) {
        console.log(i);
        var toGet = "host" + i;
        var testing =  result[toGet];
        console.log(toGet + " is " + testing);

        if (result[toGet] === undefined) {

        } else {
          console.log("testing: " + testing + chapterCode + "/0.png");
          $.ajax({
            url:testing + chapterCode + "/0.png",
            type:'HEAD',
            error: function()
            {
              console.log("NOT FOUND");
            },
            success: function()
            {
              console.log("FOUND");

              chrome.storage.sync.set({currentHost: testing}, function() {
                console.log("saving: " + testing + ".");
                inject();
              });
              return
            }
          });
        }
      }
    });
  });
}, {url: [{urlMatches : 'https://tonarinoyj.jp/episode/'}]});

function checkHost(host, chapterCode) {

  if (host === undefined) {
    return false;
  } else {
    console.log("testing: " + host + chapterCode + "/0.png");
    $.ajax({
      url:host + chapterCode + "/0.png",
      type:'HEAD',
      error: function()
      {
        console.log("NOT FOUND");
        return false;
      },
      success: function()
      {
        console.log("FOUND");
        chrome.storage.sync.set({currentHost: host}, function() {


        });
        return true;
      }
    });
  }
}

function inject() {
  console.log("INJECTION");
  chrome.tabs.executeScript({
      file: 'content.js'
  });
}
