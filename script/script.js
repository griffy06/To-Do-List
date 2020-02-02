var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var input = document.createElement("input");
  input.type = "button";
  input.className = "close";
  input.value = "Remove item";
  span.appendChild(input);
  myNodelist[i].appendChild(span);
}


var addBtn = document.getElementById("add-btn");

addBtn.addEventListener('click', handleAdd);

function handleAdd(e)
{
  var li = document.createElement("li");
  var inputValue = document.getElementById("add-txt").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Write something");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("add-txt").value = "";

  var span = document.createElement("SPAN");
  var input = document.createElement("input");
  input.type = "button";
  input.className = "close";
  input.value = "Remove item";
  span.appendChild(input);
  li.appendChild(span);
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement.parentElement;
    div.style.display = "none";
  }
  }
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement.parentElement;
    div.style.display = "none";
  }
}