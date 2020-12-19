function divClick(e) {
  //e.target.style.backgroundColor = "red";

  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
