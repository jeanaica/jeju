import { FC, MouseEventHandler, ReactNode } from "react";

import styles from "./Button.module.scss";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
};

const Button: FC<Props> = ({
  onClick,
  children,
  className,
  type,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      disabled={disabled}
      className={`${styles["button"]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
