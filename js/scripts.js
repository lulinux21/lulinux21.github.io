function openNav() {
  var x = document.getElementById("navigation");

  if (x.className === "navigation") {
    x.className += " menujs";
    document.getElementById("threeline-icon").innerHTML = "&Cross;";
  } else {
    x.className = "navigation";
    document.getElementById("threeline-icon").innerHTML = "&#9776;";
  }
}

// window.onload = function () {
//   const url = document.URL;
//   if (url !== "http://192.168.0.6:5500") {
//     const navigator = document.querySelector(".navigation ul");
//     navigator.classList.remove("right");
//     navigator.classList.add("left");
//   } else {
//     const navigator = document.querySelector(".navigation ul");
//     navigator.classList.remove("left");
//     navigator.classList.add("right");
//   }
// };
