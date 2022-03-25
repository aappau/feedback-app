import PropTypes from 'prop-types';

const FeedbackStats = ({ feedback }) => {
    // calculating ratings average
    const sum = feedback.reduce((acc, cur) => {
        return acc + cur.rating;
    }, 0);

    const average = (sum / feedback.length).toFixed(1);

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    );
};

FeedbackStats.propTypes = {
    feeback: PropTypes.array.isRequired,
};

export default FeedbackStats;
