import React, { useState } from 'react';
import "../exercise/exercise.css";
import { ExercisePage } from "../../pages";

const CapitalizeExercise = (text) => {
    const textArray = text.split(" ");
    const capitalizedArray = textArray.map(word => word.charAt(0).toUpperCase() + word.substring(1));
    return capitalizedArray.join(" ");
}

const ExerciseCard = ({ name, equipment, instruction, gifURL, target, secondaryMuscles,id }) => {
    const [showExercisePage, setShowExercisePage] = useState(false);
    const [windowPosition, setWindowPosition] = useState(0.000);

    const handleOpenExercisePage = () => {
        setShowExercisePage(true);
        window.scrollTo(0, 0);
        setWindowPosition(window.scrollY);
        console.log(windowPosition);
        console.log(window.scrollY);
    };

    const handleCloseExercisePage =()=>{
        setShowExercisePage(false);
        // What we could do is maybe save the y position when we open the page and then use that to scroll back down
        window.scrollTo(0, windowPosition);

    }

    return (
        <div className="gym__exercise-container">
            <div className="gym__exercise-display">
                <div className="gym__exercise-display_gif">
                    <img src={gifURL} alt="Exercise Gif"/>
                </div>
            </div>
            <div className="gym__exercise-info_container">
                <div className="gym__exercise-title" onClick={() => handleOpenExercisePage(name)}>
                    <h1>{CapitalizeExercise(name)}</h1>
                </div>
                {/*<div className="gym__exercise-description">*/}
                {/*    {instruction.map((sentence, index) => (*/}
                {/*        <p key={index}>{sentence}</p>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <div className="gym__exercise-container_info">
                    <div className="gym__exercise-muscle_info">
                        <p>{CapitalizeExercise(target)}</p>
                    </div>
                    {secondaryMuscles.slice(0, 2).map((muscle, index) => (
                        <div className="gym__exercise-muscle_info" key={index}>
                            <p>{CapitalizeExercise(muscle)}</p>
                        </div>
                    ))}
                    <div className="gym__exercise-muscle_info">
                        <p>{CapitalizeExercise(equipment)}</p>
                    </div>
                </div>
            </div>

            {showExercisePage &&
                <div className="gym__exercisePage">
                    <div className="gym__exercisePage-logo" onClick={()=>handleCloseExercisePage()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dumbbell">
                            <path
                                d="M17.48,6.55v0h0L14.64,3.71a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l2.12,2.12-8.1,8.1L5.12,13.22a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l2.81,2.81v0h0l2.81,2.81a1,1,0,0,0,.71.3,1,1,0,0,0,.71-1.71L8.66,16.76l8.1-8.1,2.12,2.12a1,1,0,1,0,1.41-1.42ZM3.71,17.46a1,1,0,0,0-1.42,1.42l2.83,2.83a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Zm18-12.34L18.88,2.29a1,1,0,0,0-1.42,1.42l2.83,2.83a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,5.12Z"></path>
                        </svg>
                    </div>
                    <ExercisePage exerciseDetail={id}
                                  exerciseName={name}/>
                </div>
            }
        </div>
    )
}
export default ExerciseCard;
