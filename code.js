function show1() {
  document.getElementById("lobby1").classList.toggle("show");
  console.log("pressed1");
}

function show2() {
  document.getElementById("lobby2").classList.toggle("show");
  console.log("pressed2");
}

function show3() {
  document.getElementById("lobby3").classList.toggle("show");
  console.log("pressed3");
}

window.onclick = function(event) {
  if (!event.target.matches('.lobby')) {
    console.log("stop");
  }
}
