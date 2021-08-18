const slider = document.querySelector("#slider");

slider.oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.backgroundImage = `linear-gradient(to right,  #f48434 0%, #f48434 ${value}%, #ffff ${value}%, #fff 100%)`;
};
