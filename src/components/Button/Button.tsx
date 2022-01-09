import { FC, MouseEventHandler, ReactNode } from "react";

import styles from "./Button.module.scss";

type Props = {
  onClick?: MouseEventHandler;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button: FC<Props> = ({ onClick, children, className, type }) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={`${styles["button"]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
