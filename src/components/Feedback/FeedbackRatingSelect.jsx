import { React, useState } from 'react';
import PropTypes from 'prop-types';

const FeedbackRatingSelect = ({ select }) => {
    const [selected, setSelected] = useState(10);

    const handleChange = (e) => {
        const rating = +e.currentTarget.value;

        setSelected(rating);
        select(rating);
    };

    return (
        <ul className="rating">
            {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                    <input type="radio" id={`num${i + 1}`} name="rating" value={i + 1} onChange={handleChange} checked={selected === i + 1} />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
    );
};

FeedbackRatingSelect.propTypes = {
    select: PropTypes.func,
};

export default FeedbackRatingSelect;
