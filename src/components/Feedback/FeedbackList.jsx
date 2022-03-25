import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback, handleDelete }) => {
    if (!feedback || feedback.length === 0) {
        <p>No feedback yet</p>;
    }

    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
            ))}
        </div>
    );
};

FeedbackList.propTypes = {
    feedback: PropTypes.array.isRequired,
    handleDelete: PropTypes.func,
};

export default FeedbackList;
