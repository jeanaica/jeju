import { FC, ReactNode } from "react";
import styles from "./Alert.module.scss";

type Props = {
  type: "error" | "success";
  children: ReactNode | string;
};

const Alert: FC<Props> = ({ type, children }) => {
  return <div className={`${styles["alert"]} ${styles[type]}`}>{children}</div>;
};

export default Alert;
