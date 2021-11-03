import classNames from 'classnames';

export const selectClass = (className, classNameActive, boolean) =>
  classNames(className, { [classNameActive]: boolean });
