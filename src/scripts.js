
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


const fileUploader = document.getElementById('file');
const reader = new FileReader();
const imageGrid = document.getElementById('image-grid');

fileUploader.addEventListener('change', (event) => {
  const files = event.target.files;
  const file = files[0];
  reader.readAsDataURL(file);
  
  reader.addEventListener('load', (event) => {
    const img = document.createElement('img');
    imageGrid.appendChild(img);
    img.src = event.target.result;
    img.alt = file.name;
  });
});