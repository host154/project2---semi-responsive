function on() {
    document.getElementById("overlay").style.display = "block";
  }
function set(img){
  document.getElementById("overlayimage").src=img;
  console.log(img);
}
  function off() {
    document.getElementById("overlay").style.display = "none";
  }