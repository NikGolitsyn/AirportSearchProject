const getBtnClass = (targetButtonClass) =>
  targetButtonClass.includes("departures")
    ? ".navigation__item-arrivals"
    : ".navigation__item-departures";

const removeClasses = (element) => {
  element.classList.remove("navigation__item_active");
  element.firstChild.classList.remove("icon_active");
  element.classList.add("navigation__item");
  element.firstChild.classList.add("icon");
};

const addClasses = (element) => {
  element.classList.remove("navigation__item");
  element.firstChild.classList.remove("icon");
  element.classList.add("navigation__item_active");
  element.firstChild.classList.add("icon_active");
};

export const setButtonActive = (targetButtonClass) => {
  let btnClass;
  if (targetButtonClass === "") {
    return null;
  }

  btnClass = `.navigation__item-${targetButtonClass}`;

  const targetBtn = document.querySelector(btnClass);
  const otherBtnClass = getBtnClass(btnClass);
  const otherBtn = document.querySelector(otherBtnClass);

  if (otherBtn.classList.contains("navigation__item_active")) {
    removeClasses(otherBtn);
  }

  return addClasses(targetBtn);
};
