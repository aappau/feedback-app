import { FeedbackProvider } from '../context/FeedbackContext';
import FeedbackList from '../components/Feedback/FeedbackList';
import FeedbackStats from '../components/Feedback/FeedbackStats';
import FeedbackForm from '../components/Feedback/FeedbackForm';
import AboutIconLink from '../components/Layout/AboutIconLink';

const Home = () => {
    return (
        <FeedbackProvider>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />

            <AboutIconLink />
        </FeedbackProvider>
    );
};

export default Home;
