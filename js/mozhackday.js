
window.addEventListener('DOMContentLoaded', function CameraInit() {
  var config = {
    height: document.body.clientHeight,
    width: document.body.clientWidth,
    camera: 0
  };

  var viewfinder = document.getElementById("viewfinder");

  viewfinder.style.width = config.width + "px";
  viewfinder.style.height = config.height + "px";
  viewfinder.style.MozTransform = "rotate(90deg)";

  var button = document.getElementById("capture_button");
  button.addEventListener("click", function() {
    var w = viewfinder.videoWidth;
    var h = viewfinder.videoHeight;
    var canvas = document.getElementById("capture");
    canvas.width = w;
    canvas.height = h;

    viewfinder.style.display = "none";

    var ctx = canvas.getContext("2d");
    ctx.drawImage(viewfinder, 0, 0, w, h);
  });

  if(navigator.mozCamera) {
    viewfinder.src = navigator.mozCamera.getCameraURI(config);
  }
});

