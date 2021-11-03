import classNames from 'classnames';

export const pickClass = (className, classNameActive, arg) => classNames(className, {
    classNameActive: arg,
  });

// const isActive = classNames('navigation__item', {
//   navigation__item_active: pathname === '/arrivals',
// });
