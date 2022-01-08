import Checkbox from "components/Checkbox";
import { FC, MouseEventHandler } from "react";

import styles from "./Confirmation.module.scss";

type Props = {
  name: string;
  isGoing: boolean;
  onClick: MouseEventHandler;
};

const ConfirmationBox: FC<Props> = ({ name, isGoing, onClick }) => {
  return (
    <div className={`${styles["confirmation-box"]}`}>
      <Checkbox key={name} name={name} checked={isGoing} onClick={onClick} />
    </div>
  );
};

export default ConfirmationBox;
