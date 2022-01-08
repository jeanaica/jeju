import { FC, MouseEventHandler } from "react";

import styles from "./Checkbox.module.scss";

type Props = { name: string; checked: boolean; onClick: MouseEventHandler };

const Checkbox: FC<Props> = ({ name, checked, onClick }) => {
  return (
    <div>
      <label className={`${styles["container"]}`}>
        <span className={`${styles["label"]}`}>{name}</span>
        <input
          name={name}
          type="checkbox"
          checked={checked}
          onClick={onClick}
        />
        <span className={`${styles["checkmark"]}`}></span>
      </label>
    </div>
  );
};

export default Checkbox;
