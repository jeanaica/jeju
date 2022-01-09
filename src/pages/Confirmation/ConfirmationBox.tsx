import Checkbox from "components/Checkbox";
import { FC, MouseEventHandler } from "react";

import styles from "./Confirmation.module.scss";

type Props = {
  name: string;
  isGoing: boolean;
  onClick: MouseEventHandler;
  hasAdditionalGuest?: string | number | boolean;
};

const ConfirmationBox: FC<Props> = ({
  name,
  isGoing,
  onClick,
  hasAdditionalGuest,
}) => {
  return (
    <div className={`${styles["confirmation-box"]}`}>
      <Checkbox key={name} name={name} checked={isGoing} onClick={onClick} />
      {hasAdditionalGuest ? (
        <span
          className={`${styles["add-guest"]}`}
        >{`* You have ${hasAdditionalGuest} additional guest/s`}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default ConfirmationBox;
