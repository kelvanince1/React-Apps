import React, { useState, useEffect, useRef } from 'react';

const Flashcard = ({ flashcard }) => {
    const [flip, setFlip] = useState(false);
    const [height, setHeight] = useState('initial');

    const frontEle = useRef();
    const backEle = useRef();

    const setMaxHeight = () => {
        const frontHeight = frontEle.current.getBoundingClientRect().height;
        const backHeight = backEle.current.getBoundingClientRect().height;

        setHeight(Math.max(frontHeight, backHeight, 100));
    }

    useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options]);
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight);
        return () => window.removeEventListener('resize', setMaxHeight);
    }, []);

    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
            style={{ height: height }}
        >
            <div className="front" ref={frontEle}>
                {flashcard.question}
                <div className="flashcard-options">
                    {
                        flashcard.options.map(option => (
                            <div className="flashcard-option" key={option}>
                                {option}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="back" ref={backEle}>
                {flashcard.answer}
            </div>
        </div>
    );
}

export default Flashcard;