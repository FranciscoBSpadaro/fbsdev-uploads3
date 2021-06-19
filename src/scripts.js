//disable submit button if no image add on input
var input = document.querySelector(".file");
var button = document.querySelector(".button");
button.disabled = true;
input.addEventListener("change", stateHandle);
function stateHandle() {
  if (document.querySelector(".file").value === "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

//create image preview
var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};
