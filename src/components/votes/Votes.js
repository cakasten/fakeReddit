import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./votes.module.css";

const Votes = (props) => {
  const { votes } = props;

  const smallVotes =
    votes > 1000 ? `${Math.round((votes / 1000) * 10) / 10} K` : votes;

  return (
    <div className={props.styles}>
      <FontAwesomeIcon icon={faAngleUp} className={styles.arrow} />
      <p>{votes ? smallVotes : "-"}</p>
      <FontAwesomeIcon icon={faAngleDown} className={styles.arrow} />
    </div>
  );
};

export default Votes;
