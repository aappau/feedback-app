import { useState, useContext } from 'react';
import Button from '../Layout/Button';
import Card from '../Layout/Card';
import FeedbackRatingSelect from './FeedbackRatingSelect';
import FeedbackContext from '../../context/FeedbackContext';

const FeedbackForm = () => {
    const { addFeedback } = useContext(FeedbackContext);

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);

    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        setBtnDisabled(true);

        if (text === '') {
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters');
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }

        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 10) {
            const newFeedback = { text, rating };

            addFeedback(newFeedback);

            setText('');
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>

                <FeedbackRatingSelect select={(rating) => setRating(rating)} />

                <div className="input-group">
                    <input type="text" placeholder="Write a review" value={text} onChange={handleTextChange} />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;
