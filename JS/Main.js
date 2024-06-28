let Div1 = document.querySelector(".Burger-Icon");
Div1.onclick = function () {
  let ul = document.querySelector("ul");

  if (ul.style.display === "none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
};
 