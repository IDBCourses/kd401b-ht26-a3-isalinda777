const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "style2.css";
  link.setAttribute("href", dark ? "style.css" : "style2.css");
});

const linkType = document.querySelector("#type");
const buttonType = document.querySelector("#reading");

buttonType.addEventListener("click", function () {
  if (linkType.getAttribute("href") === "") {
    linkType.setAttribute("href", "type.css");
  } else {
    linkType.setAttribute("href", "");
  }
});
