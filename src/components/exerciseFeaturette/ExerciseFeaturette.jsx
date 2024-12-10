import React, { useState } from 'react';
import "./exerciseFeaturette.css";
import { ExercisePage } from "../../pages";

const CapitalizeExercise = (text) => {
    const textArray = text.split(" ");
    const capitalizedArray = textArray.map(word => word.charAt(0).toUpperCase() + word.substring(1));
    return capitalizedArray.join(" ");
}

const OpenVideo = (videoLink) => {
    if (videoLink) {
        window.open(videoLink, '_blank');
        console.log(videoLink);
    }
};

const ExerciseFeaturette = ({ gif, name, videoLink, id }) => {
    const [showExercisePage, setShowExercisePage] = useState(false);
    const [windowPosition, setWindowPosition] = useState(0);

    const handleOpenExercisePage = () => {
        setShowExercisePage(true);
        setWindowPosition(window.scrollY);
        window.scrollTo(0, 0);
    };

    const handleCloseExercisePage = () => {
        setShowExercisePage(false);
        window.scrollTo(0, windowPosition);
    };

    const handleClick = () => {
        if (videoLink) {
            OpenVideo(videoLink);
        } else {
            handleOpenExercisePage();
        }
    };

    return (
        <div className="gym__exercise_featurette-container" onClick={handleClick}>
            <div className="gym__exercise_featurette-container-gif">
                <img src={gif} alt="Exercise Gif" />
            </div>
            <h1>{CapitalizeExercise(name)}</h1>

            {showExercisePage && (
                <div className="gym__exercisePage">
                    <div className="gym__exercisePage-logo" onClick={handleCloseExercisePage}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dumbbell">
                            <path d="M17.48,6.55v0h0L14.64,3.71a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l2.12,2.12-8.1,8.1L5.12,13.22a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l2.81,2.81v0h0l2.81,2.81a1,1,0,0,0,.71.3,1,1,0,0,0,.71-1.71L8.66,16.76l8.1-8.1,2.12,2.12a1,1,0,1,0,1.41-1.42ZM3.71,17.46a1,1,0,0,0-1.42,1.42l2.83,2.83a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Zm18-12.34L18.88,2.29a1,1,0,0,0-1.42,1.42l2.83,2.83a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,5.12Z"></path>
                        </svg>
                    </div>
                    <ExercisePage exerciseDetail={id} exerciseName={name} />
                </div>
            )}
        </div>
    );
};

export default ExerciseFeaturette;

