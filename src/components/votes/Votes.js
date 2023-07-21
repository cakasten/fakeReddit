import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./votes.module.css";

const Votes = (props) => {
  const { upVote, downVote, votes } = props;

  const smallVotes =
    votes > 999 || votes < -999
      ? `${Math.round((votes / 1000) * 10) / 10}K`
      : votes;

  return (
    <div className={props.styles}>
      <FontAwesomeIcon
        icon={faAngleUp}
        className={styles.arrow}
        onClick={upVote}
      />
      <p data-testid="votes">{votes ? smallVotes : "-"}</p>
      <FontAwesomeIcon
        icon={faAngleDown}
        className={styles.arrow}
        onClick={downVote}
      />
    </div>
  );
};

export default Votes;
