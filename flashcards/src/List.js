import React from 'react';
import Flashcard from './Flashcard';

const List = ({ flashcards }) => {
    return (
        <div className="card-grid">
            {
                flashcards.map(flashcard => (
                    <Flashcard
                        key={flashcard.id}
                        flashcard={flashcard}
                    />
                ))
            }
        </div>
    );
}

export default List;