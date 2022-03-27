import { useState } from 'react';
import Button from '../Layout/Button';
import Card from '../Layout/Card';

const FeedbackForm = () => {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/* @todo: rating select component */}
                <div className="input-group">
                    <input type="text" placeholder="Write a review" value={text} onChange={handleTextChange} />
                    <Button type="submit">Send</Button>
                </div>
            </form>
        </Card>
    );
};

export default FeedbackForm;
