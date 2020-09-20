document.getElementsByClassName('addBtn')[0].addEventListener('click', newElement);
document.addEventListener('DOMContentLoaded', restore_options);

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;

    remove_options(this.id);
    div.remove();
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  if (myNodelist.length < 5) {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span.id = close.length;
    li.appendChild(span);
    save_options(myNodelist.length, inputValue);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;

        remove_options(this.id);
        div.remove();
      }
    }
  } else {
    alert("Only five hosts at one time!");
  }
}









// Saves options to chrome.storage
function save_options(i, save) {
  var obj = {};

  var keyToSet = "host" + i;
  obj[keyToSet] = save;
  console.log("saving: " + keyToSet + ".");
  chrome.storage.sync.set(obj, function(result) {

    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function DB_setValue(name, value, callback) {


    console.log("Data Saved!");
    chrome.storage.local.set(obj, function() {
        if(callback) callback();
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {

    chrome.storage.sync.get(null, function(result) {
      for (i = 1; i < 6; i++) {
        var toGet = "host" + i;
        console.log(toGet + " is " + result[toGet]);
        if (result[toGet] === undefined) {

        } else {
          document.getElementById("myInput").value = result[toGet];
          console.log("Restoring:" + result[toGet]);
          newElement();
        }
      }
    });
}


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function remove_options(i) {
  // Use default value color = 'red' and likesColor = true.
  i++;
  var toRemove = "host" + i;
  console.log("Attempting to remove: " + toRemove);
  chrome.storage.sync.remove(toRemove, function(result) {

  });
}
