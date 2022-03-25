import { useState } from 'react';
import seed from './data/seed';
import Header from './components/Layout/Header';
import FeedbackList from './components/Feedback/FeedbackList';

function App() {
    const [feedback, setFeedback] = useState(seed);

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    return (
        <>
            <Header />

            <div className="container">
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
    );
}

export default App;
