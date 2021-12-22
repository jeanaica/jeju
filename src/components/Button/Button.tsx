import React from "react";

import styles from "./Button.module.scss";

type Props = {
  onClick(): void;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<Props> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`${styles["button"]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
