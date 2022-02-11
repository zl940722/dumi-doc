import React, { useState } from 'react';
import './index.scss';
import { BarChartPropsType } from './PropsType';
import classNames from 'classnames';

const prefixCls = 'h-button';

const Button: React.FC<BarChartPropsType> = props => {
  const {
    type,
    children,
  } = props;
  const [cls, setCls] = useState({
    [prefixCls]: true,
    [`${prefixCls}-active`]: false,
  });
  const innerCls = classNames({
    ...cls,
    [`${prefixCls}-${type}`]: true,
  });
  return (
    <div className={innerCls}>
      <div className={`${prefixCls}-loading-container`}>
        <div className={`${prefixCls}-loading-main`} />
      </div>
      <div className={`${prefixCls}-text-container`}>
        <span>{children}</span>
      </div>
    </div>
  );
};


export default Button;
