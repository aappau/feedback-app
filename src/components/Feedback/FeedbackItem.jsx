import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from '../Layout/Card';

const FeedbackItem = ({ item, deleteFeedback }) => {
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => deleteFeedback(item.id)}>
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
    deleteFeedback: PropTypes.func,
};

export default FeedbackItem;
