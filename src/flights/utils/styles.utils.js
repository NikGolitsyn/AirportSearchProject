const getBtnClass = targetButtonClass => targetButtonClass === '.navigation__item-departures'
    ? '.navigation__item-arrivals'
    : '.navigation__item-departures';

const removeClasses = element => {
  element.classList.remove('navigation__item_active');
  element.firstChild.classList.remove('icon_active');
  element.classList.add('navigation__item');
  element.firstChild.classList.add('icon');
};

const addClasses = element => {
  element.classList.remove('navigation__item');
  element.firstChild.classList.remove('icon');
  element.classList.add('navigation__item_active');
  element.firstChild.classList.add('icon_active');
};

export const setButtonActive = targetButtonClass => {
  if (targetButtonClass === '.navigation__item-') {
    return null;
  }
  
  const targetBtn = document.querySelector(targetButtonClass);
  const otherBtnClass = getBtnClass(targetButtonClass);
  const otherBtn = document.querySelector(otherBtnClass);

  if (otherBtn.classList.contains('navigation__item_active')) {
    removeClasses(otherBtn);
  }

  return addClasses(targetBtn);
};
