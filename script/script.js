const menuBtns = document.querySelectorAll(".menuBtn");
const menuList = document.querySelectorAll(".menuList");

menuBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const btnIndx = e.target.dataset.btnindex;

    menuList.forEach((list) => list.classList.remove("visible"));

    if (menuList[btnIndx].dataset.isopen == "false") {
      menuList.forEach((list) => (list.dataset.isopen = "false"));

      menuList[btnIndx].classList.add("visible");
      menuList[btnIndx].dataset.isopen = "true";
    } else {
      menuList[btnIndx].dataset.isopen = "false";
    }
  })
);
