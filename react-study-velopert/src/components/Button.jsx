import React from 'react';
import classNames from 'classnames';
import './Button.scss';

const Button = ({
  children,
  size,
  color,
  outline,
  fullWidth,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={classNames(
        'Button',
        size,
        color,
        {
          outline,
          fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
