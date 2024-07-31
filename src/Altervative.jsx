import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

const App = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = reviews[index];

    const nextReview = () => {
        setIndex((currentIndex) => {
            return (currentIndex + 1) % reviews.length;
        });
    };
    const prevReview = () => {
        setIndex((currentIndex) => {
            return (currentIndex - 1 + reviews.length) % reviews.length;
        });
    };
    const randomReview = () => {
        let randomNumber = Math.floor(Math.random() * reviews.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(randomNumber % reviews.length);
    };

    return (
        <main>
            <article className="review">
                <div className="img-container">
                    <img src={image} alt={name} className="person-img" />
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className="author">{name}</h4>
                <p className="job">{job}</p>
                <p className="info">{text}</p>
                <div className="btn-container">
                    <button className="prev-btn" onClick={prevReview}>
                        <FaChevronLeft />
                    </button>
                    <button className="next-btn" onClick={nextReview}>
                        <FaChevronRight />
                    </button>
                </div>
                <button className="btn btn-hipster" onClick={randomReview}>
                    surprise me
                </button>
            </article>
        </main>
    );
};
export default App;
