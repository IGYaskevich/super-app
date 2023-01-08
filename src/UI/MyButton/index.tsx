import React, { FC, memo, ReactNode } from "react";

import { Button, ThemeProvider } from "@mui/material";
import { themeMUI } from "../../static/themeMUI";

import style from "./styles.module.scss";

interface IProps {
  variant: "text" | "contained" | "outlined";
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  title: string;
  method: () => void;
  disabled?: boolean;
  startIcon?: ReactNode;
  id: string;
}

export const MyButton: FC<IProps> = memo((props) => {
  const { variant, color, disabled, title, startIcon, id, method } = props;
  return (
    <ThemeProvider theme={themeMUI}>
      <Button
        variant={variant}
        color={color}
        disabled={disabled}
        className={style.myButton}
        startIcon={startIcon ? startIcon : ""}
        onClick={method}
        id={id}
      >
        {title}
      </Button>
    </ThemeProvider>
  );
});
