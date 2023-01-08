import React, { FC, memo, ReactNode } from "react";

import "./styles.scss";

interface IProps {
  children: ReactNode;
  closeMethod: () => void;
}

export const AlertWrapper: FC<IProps> = memo((props) => {
  const { children, closeMethod } = props;

  return (
    <div className={"regular-alert"} onClick={closeMethod}>
      <div className={"regular-alert--content"}>{children}</div>
    </div>
  );
});
