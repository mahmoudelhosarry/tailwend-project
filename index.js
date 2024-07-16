let i = 0;
document.getElementById("menu").onclick = () => {
  document.getElementById("menu").classList.toggle("rotate");
  if (i === 0) {
    document.getElementById("board").classList.remove("hidden");
    document.getElementById("board").classList.toggle("flex");
    i = 1;
  } else {
    document.getElementById("board").classList.toggle("hidden");
    document.getElementById("board").classList.remove("flex");

    i = 0;
  }
};
