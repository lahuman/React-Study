import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import classNames from 'classnames/bind';
import styles from './Checkbox.module.css';

const cx = classNames.bind(styles);

function CheckBox({ checked, children, ...rest }) {
  return (
    <div className={cx('checkbox')}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={cx('icon')}>
          {checked ? (
            <MdCheckBox className={cx('checked')} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;
