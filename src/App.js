import { useState } from 'react';
import seed from './data/seed';
import Header from './components/Layout/Header';
import FeedbackList from './components/Feedback/FeedbackList';

function App() {
    const [feedback, setFeedback] = useState(seed);

    return (
        <>
            <Header />

            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
    );
}

export default App;
