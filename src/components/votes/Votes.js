import styles from './votes.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Votes = (props) => {
    return (
        <div className={props.styles}>
            <FontAwesomeIcon icon={faAngleUp} />
            <p>{props.votes ? props.votes : '-'}</p>
            <FontAwesomeIcon icon={faAngleDown} />
        </div>
    )
}

export default Votes;