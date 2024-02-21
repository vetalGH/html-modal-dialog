const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("#show");
const closeBtn = document.querySelector("#close");

showBtn.addEventListener("click", () => {
  dialog.showModal();
  dialog.addEventListener("click", onClickOutsideDialog);
});

const animationEndHandler = () => {
  dialog.classList.remove("hide");
  dialog.close();
  dialog.removeEventListener("animationend", animationEndHandler, false);
  dialog.removeEventListener("click", onClickOutsideDialog);
  //   ??
};

const onClickOutsideDialog = (e) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.classList.add("hide");
    dialog.addEventListener("animationend", animationEndHandler, false);
  }
};

closeBtn.addEventListener("click", () => {
  dialog.classList.add("hide");
  dialog.addEventListener("animationend", animationEndHandler, false);
});
