const slider = document.querySelector("#slider");

slider.oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background = `linear-gradient(to right,  #fE9A15 0%, #fE9A15 ${value}%, #ecf0f3 ${value}%, #ecf0f3 100%)`;
};
