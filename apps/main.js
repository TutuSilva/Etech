const btnMenuMobile = document.getElementById("btn_mobile_menu_icon");
btnMenuMobile.addEventListener("click", () => {
  menuShow();
});
function menuShow() {
  let menuMobile = document.querySelector(".mobile_menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
  } else {
    menuMobile.classList.add("open");
  }
}
