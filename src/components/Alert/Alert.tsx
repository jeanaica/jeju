import { FC, ReactNode } from "react";
import styles from "./Alert.module.scss";

type Props = {
  type?: "error" | "success" | "info";
  children: ReactNode | string;
  className?: string;
};

const Alert: FC<Props> = ({ type = "info", children, className }) => {
  return (
    <div className={`${styles["alert"]} ${styles[type]} ${className}`}>
      {children}
    </div>
  );
};

export default Alert;
