import React from 'react'
import "../exercise/exercise.css"

const CapitalizeExercise = (text)=> {
        const textArray= text.split(" ");
        const capitalizedArray = textArray.map(word => word.charAt(0).toUpperCase() + word.substring(1))

        return capitalizedArray.join(" ")
}

const ExerciseCard = ({name,equipment,instruction,gifURL,target,secondaryMuscles}) => {
    return (
        <div className="gym__exercise-container">
            <div className="gym__exercise-display">
                <div className="gym__exercise-display_gif">
                    <img src={gifURL} alt="ExercisePage Gif"/>
                </div>
                {/*<div className="gym__exercise-display_info">*/}
                {/*    <div className="gym__exercise-muscle_info">*/}
                {/*        <p>{target}</p>*/}
                {/*    </div>*/}
                {/*    {secondaryMuscles.slice(0,2).map((muscle) => (*/}
                {/*        <div className="gym__exercise-muscle_info">*/}
                {/*            <p>{CapitalizeExercise(muscle)}</p>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
            <div className="gym__exercise-info_container">
                <div className="gym__exercise-title">
                    <h1>{CapitalizeExercise(name)}</h1>
                    {/*<h4>Equipment:{CapitalizeExercise(equipment)}</h4>*/}
                </div>
                <div className="gym__exercise-description">
                    {instruction.map((sentence, index) => (
                        <p key={index}>{sentence}</p>
                    ))}
                </div>
                <div className="gym__exercise-container_info">
                    <div className="gym__exercise-muscle_info">
                        <p>{CapitalizeExercise(target)}</p>
                    </div>
                    {secondaryMuscles.slice(0, 2).map((muscle) => (
                        <div className="gym__exercise-muscle_info">
                            <p>{CapitalizeExercise(muscle)}</p>
                        </div>
                    ))}
                    <div className="gym__exercise-muscle_info">
                        <p>{CapitalizeExercise(equipment)}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ExerciseCard
