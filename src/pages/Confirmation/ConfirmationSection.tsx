import { FC, useCallback, useEffect, useState } from "react";

import Alert from "components/Alert";
import Button from "components/Button";
import Title from "components/Title";
import getGuest, { updateGuestAttendance } from "firebase/getGuest";
import useAuth from "hooks/useAuth";

import styles from "./Confirmation.module.scss";
import ConfirmationBox from "./ConfirmationBox";
import { useLocation } from "react-router-dom";

const ConfirmationSection: FC = () => {
  const [guestList, setGuestList] = useState<
    Record<string, Record<string, string | boolean | number>>
  >({});
  const { token } = useAuth();
  // const [tableNumber, setTableNumber] = useState(0);
  const location = useLocation();

  const [isSent, setIsSent] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    if (token) {
      getGuest(token)
        .then((guest) => {
          guest?.group.forEach(
            (item: {
              first_name: string;
              last_name: string;
              isAttending: boolean;
              number_of_additional_guests?: number;
            }) => {
              let defaultAnswer = !!item.isAttending;
              if (location?.state?.attend) {
                defaultAnswer = location.state.attend === "NO" ? false : true;
              }

              setGuestList(
                (
                  prevState: Record<
                    string,
                    Record<string, string | boolean | number>
                  >
                ) => ({
                  ...prevState,
                  [`${item.first_name} ${item.last_name}`]: {
                    first_name: item.first_name,
                    last_name: item.last_name,
                    isAttending: defaultAnswer,
                    number_of_additional_guests:
                      item.number_of_additional_guests
                        ? item.number_of_additional_guests
                        : 0,
                  },
                })
              );
            }
          );

          // setTableNumber(guest?.table_number);
        })
        .catch((err) => console.log(err));
    }

    return () => {
      setGuestList({});
    };
  }, [location.pathname, location?.state?.attend, token]);

  const handleBoxClick = useCallback(
    (e) => {
      if (isSent) {
        setIsSent(false);
      }

      if (hasErrors) {
        setHasErrors(false);
      }

      setGuestList({
        ...guestList,
        [e.target.name]: {
          ...guestList[e.target.name],
          isAttending: e.target.checked,
        },
      });
    },
    [guestList, hasErrors, isSent]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const submitGuest: Record<string, string | number | boolean>[] =
        Object.values(guestList).map((value) => value);

      if (token) {
        updateGuestAttendance(token, submitGuest)
          .then(() => {
            setIsSent(true);
          })
          .catch(() => {
            setHasErrors(true);
          });
      }
    },
    [guestList, token]
  );

  return (
    <div className={`${styles["confirmation"]}`}>
      <Title header={`R.S.V.P.`} />

      <Alert className={`${styles["instructions"]}`}>
        <p>
          * We would like to see you there on our special day. Please check the
          names of the guests who would be joining us and click on SUBMIT.
        </p>
      </Alert>

      {(isSent || hasErrors) && (
        <Alert type={hasErrors ? "error" : "success"}>
          {hasErrors ? (
            <span>Something went wrong, please try again later</span>
          ) : (
            <span>Successfully updated your confirmation! See you there!</span>
          )}
        </Alert>
      )}

      <div className={`${styles["confirmation-section"]}`}>
        <h6 className={`${styles["information"]}`}>Yes, we'll be there</h6>
        <form
          name="confirmationForm"
          onSubmit={handleSubmit}
          className={`${styles["form-container"]}`}
        >
          <div className={`${styles["confirmation-box-group"]}`}>
            {Object.keys(guestList).length > 0 ? (
              Object.keys(guestList).map((name) => (
                <ConfirmationBox
                  key={name}
                  onClick={handleBoxClick}
                  name={name}
                  isGoing={!!guestList[name].isAttending}
                  hasAdditionalGuest={
                    guestList[name].number_of_additional_guests
                  }
                />
              ))
            ) : (
              <div></div>
            )}
          </div>
          <Button
            type="submit"
            className={`${styles["confirmation-button"]} text--lg`}
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmationSection;
