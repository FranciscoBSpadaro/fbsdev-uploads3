
let input = document.querySelector(".file");
let button = document.querySelector(".button");
button.disabled = true;
input.addEventListener("change", stateHandle);
function stateHandle() {
  if (document.querySelector(".file").value === "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}


let loadFile = function(event) {
	let image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};