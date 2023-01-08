import React, { ChangeEvent, FC, FocusEvent, memo, useState } from "react";

import { TextField, ThemeProvider } from "@mui/material";
import { themeMUI } from "../../static/themeMUI";

import "./styles.scss";

interface IProps {
  label: string;
  id: string;
  type: string;
  autoComplete?: boolean;
  disabled?: boolean;
  variant: "standard" | "filled" | "outlined";
  color: "error" | "primary" | "secondary" | "info" | "success" | "warning";
  changeMethod: (value: string) => void;
  error?: string;
  value?: string;
  required?: boolean;
  size?: "small" | "medium";
}

export const MyInput: FC<IProps> = memo((props) => {
  const {
    label,
    id,
    type,
    required = false,
    disabled = false,
    variant,
    color,
    size = "small",
    value,
    error = "",
    changeMethod,
    autoComplete = false,
  } = props;

  const [defaultValue, setValue] = useState("");

  const onBluerMethod = (
    event: FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    event.preventDefault();
    if (!value) {
      changeMethod(defaultValue);
    }
  };

  const changeValue = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = event.target.value;
    setValue(value);

    if (value) {
      changeMethod(value);
    }
  };
  return (
    <ThemeProvider theme={themeMUI}>
      <TextField
        className={"my-input"}
        id={id}
        label={label}
        type={type}
        required={required}
        disabled={disabled}
        variant={variant}
        color={color}
        size={size}
        defaultValue={defaultValue}
        onChange={changeValue}
        onBlur={onBluerMethod}
        autoComplete={autoComplete ? "" : "off"}
        error={!!error}
      />
      {error && <div className={"my-input--error"}>{error}</div>}
    </ThemeProvider>
  );
});
