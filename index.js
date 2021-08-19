const slider = document.querySelector("#slider");

slider.oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background = `linear-gradient(to right,  #f48434 0%, #f48434 ${value}%, #ecf0f3 ${value}%, #ecf0f3 100%)`;
};
