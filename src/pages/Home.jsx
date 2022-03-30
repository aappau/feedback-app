import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import seed from '../data/seed';
import FeedbackList from '../components/Feedback/FeedbackList';
import FeedbackStats from '../components/Feedback/FeedbackStats';
import FeedbackForm from '../components/Feedback/FeedbackForm';

const Home = () => {
    const [feedback, setFeedback] = useState(seed);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    return (
        <>
            <FeedbackForm addFeedback={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
        </>
    );
};

export default Home;
