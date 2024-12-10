import React, { useEffect, useState } from 'react';
import "../../pages/exercisePage/exercisePage.css";
import { videoOptions,exerciseOptions, fetchData } from "../../utils/fetchData";
import {ExerciseFeaturette} from "../../components";
import leftArrow from "../../assets/icons/leftArrow.svg"
import rightArrow from "../../assets/icons/rightArrow.svg"

const parseViews = (viewCountText) => {
    return parseInt(viewCountText.replace(/[^\d]/g, ''), 10);
};

const CapitalizeExercise = (text) => {
    const textArray = text.split(" ");
    const capitalizedArray = textArray.map(word => word.charAt(0).toUpperCase() + word.substring(1));
    return capitalizedArray.join(" ");
}

// const OpenVideo = (videoLink)=>{
//     window.open(`https://www.youtube.com/watch?v=${videoLink}`);
// };

const ExercisePage = ({ exerciseDetail, exerciseName }) => {
    const [exercise, setExercise] = useState(null);
    const [targetExercise, setTargetExercise] = useState(null);
    const [similiarExercise, setSimiliarExercise] = useState(null);
    const [exerciseVideo, setExerciseVideo] = useState(null);
    const [currentTargetIndex, setCurrentTargetIndex] = useState(0);
    const [currentSimiliarIndex, setCurrentSimiliarIndex] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchExerciseData = async () => {
            try {
                const exerciseData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseDetail}`,
                    exerciseOptions
                );
                setExercise(exerciseData);
                console.log(exerciseName);
               // console.log(exerciseData);
            } catch (error) {
                console.error('Error fetching exercise data:', error);
            }
        };

        if (exerciseDetail) { // Ensure `exerciseDetail` exists before fetching
            fetchExerciseData();
        }
    }, [exerciseDetail]); // Add `exerciseDetail` to the dependency array

    useEffect(()=>{
        const fetchExerciseData = async () => {
            try{
                const exerciseVideoData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseName}`,videoOptions);
                console.log(exerciseVideoData);

                const sortedVideos = exerciseVideoData.contents.sort((a, b) => {
                    const viewsA = parseViews(a.video.viewCountText);
                    const viewsB = parseViews(b.video.viewCountText);
                    return viewsB - viewsA;}
                );
                setExerciseVideo(sortedVideos);

            }
            catch(error){
                console.error('Error fetching exercise video:', error);
            }
        };

        if (exerciseName) { // Ensure `exerciseName` exists before fetching
            fetchExerciseData();
        }
    }, [exerciseName]);

    useEffect(() => {
        const fetchExerciseData = async () => {
            try {
                const targetExerciseData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/target/${exercise.target}?limit=500&offset=0`,
                    exerciseOptions
                );
                setTargetExercise(targetExerciseData);
                //console.log(targetExerciseData);
            } catch (error) {
                console.error('Error fetching exercise data:', error);
            }
        };

        if (exerciseDetail) { // Ensure `exerciseDetail` exists before fetching
            fetchExerciseData();
        }
    },[exercise?.target]);//Changed condition so that this runs whenever the first fetch request is done

    useEffect(() => {
        const fetchExerciseData = async () => {
            try {
                const targetExerciseData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/target/${exercise.target}?limit=500&offset=0`, exerciseOptions
                );
                const filteredExercise=targetExerciseData.filter(
                    (sameExercise) => sameExercise.equipment === exercise.equipment
                )
                setSimiliarExercise(filteredExercise);
                console.log(filteredExercise);
            } catch (error) {
                console.error('Error fetching exercise data:', error);
            }
        };

        if (exerciseDetail) { // Ensure `exerciseDetail` exists before fetching
            fetchExerciseData();
        }
    },[exercise?.target]);//Changed condition so that this runs whenever the first fetch request is done

    const handleNextTarget = () => {
            if (currentTargetIndex + itemsPerPage < targetExercise.length) {
                setCurrentTargetIndex(currentTargetIndex + itemsPerPage);
            }
        };

    const handlePreviousTarget = () => {
        if (currentTargetIndex > 0) {
            setCurrentTargetIndex(currentTargetIndex - itemsPerPage);
        }
    };

    const handleNextSimiliar = () => {
        if (currentSimiliarIndex + itemsPerPage < similiarExercise.length) {
            setCurrentSimiliarIndex(currentSimiliarIndex + itemsPerPage);
        }
    };

    const handlePreviousSimiliar = () => {
        if (currentSimiliarIndex > 0) {
            setCurrentSimiliarIndex(currentSimiliarIndex - itemsPerPage);
        }
    };


    const visibleTargetExercises = targetExercise?.slice(currentTargetIndex, currentTargetIndex + itemsPerPage);
    const visibleSimiliarExercises = similiarExercise?.slice(currentSimiliarIndex, currentSimiliarIndex + itemsPerPage);

    return (
        <div className="gym__exercise_page app__bg">
            <div className="gym__exercise_page-container section_gradient">
                {exercise ? ( // Code to have a display while the page loads
                    <div className="gym__exercise_page-generic">
                        <div className="gym__exercise_page-upper_container">
                            <div className="gym__exercise_page-gif" >
                                <img src={exercise.gifUrl} alt="Exercise"/>
                            </div>

                            <div className="gym__exercise_page-info">

                                <div className="gym__exercise_page-title">
                                    <h1>{CapitalizeExercise(exercise.name)}</h1>
                                </div>
                                <div className="gym__exercise_page-gif-small">
                                    <img src={exercise.gifUrl} alt="Exercise"/>
                                </div>
                                <div className="gym__exercise-info">
                                    <p>{CapitalizeExercise(exercise.name)} is undoubtedly one of the best exercises to
                                        not
                                        only
                                        target your {CapitalizeExercise(exercise.target)} but also better your overall
                                        health.
                                        The way you perform this exercise is </p>
                                </div>

                                <div className="gym__exercise_page-muscle_container">
                                    <div className="gym__exercise_page-muscle_info">
                                        <div className="gym__exercise_page-muscle_image">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                 viewBox="0 0 127.41 103.2">
                                                <defs>
                                                    <radialGradient id="armGradient" cx="0%" cy="0%" r="100%" fx="0%"
                                                                    fy="0%">
                                                        <stop offset="0%"
                                                              style={{stopColor: "rgba(255, 255, 255, 1)"}}/>
                                                        <stop offset="50%"
                                                              style={{stopColor: "rgba(177, 231, 251, 1)"}}/>
                                                        <stop offset="100%"
                                                              style={{stopColor: "rgba(178, 126, 218, 1)"}}/>
                                                    </radialGradient>
                                                </defs>
                                                <g>
                                                    <g id="Layer_1">
                                                        <g>
                                                            <rect fill="url(#armGradient)" x="36.86" y="46.99"
                                                                  width="54.11"
                                                                  height="9.21"/>
                                                            <rect fill="url(#armGradient)" x="27.46" y="18.79"
                                                                  width="8.83"
                                                                  height="65.62" rx="2.64" ry="2.64"/>
                                                            <rect fill="url(#armGradient)" x="18.06" y="25.31"
                                                                  width="8.83"
                                                                  height="52.58" rx="2.64" ry="2.64"/>
                                                            <rect fill="url(#armGradient)" x="8.66" y="31.83"
                                                                  width="8.83"
                                                                  height="39.53" rx="2.64" ry="2.64"/>
                                                            <path fill="url(#armGradient)"
                                                                  d="M5.39,49.42v4.36c0,1.34,1.09,2.43,2.43,2.43h.26v-9.21h-.26c-1.34,0-2.43,1.09-2.43,2.43Z"/>
                                                            <rect fill="url(#armGradient)" x="91.74" y="18.79"
                                                                  width="8.83"
                                                                  height="65.62" rx="2.64" ry="2.64"/>
                                                            <rect fill="url(#armGradient)" x="101.14" y="25.31"
                                                                  width="8.83"
                                                                  height="52.58" rx="2.64" ry="2.64"/>
                                                            <rect fill="url(#armGradient)" x="110.55" y="31.83"
                                                                  width="8.83"
                                                                  height="39.53" rx="2.64" ry="2.64"/>
                                                            <path fill="url(#armGradient)"
                                                                  d="M120.21,46.99h-.26v9.21h.26c1.34,0,2.43-1.09,2.43-2.43v-4.36c0-1.34-1.09-2.43-2.43-2.43Z"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <h4>{CapitalizeExercise(exercise.target)}</h4>
                                    </div>

                                    <div className="gym__exercise_page-muscle_info">
                                        <div className="gym__exercise_page-muscle_image">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                 viewBox="0 0 127.41 103.2">
                                                <defs>
                                                    <radialGradient id="armGradient" cx="0%" cy="0%" r="100%" fx="0%"
                                                                    fy="0%">
                                                        <stop offset="0%"
                                                              style={{stopColor: "rgba(255, 255, 255, 1)"}}/>
                                                        <stop offset="50%"
                                                              style={{stopColor: "rgba(177, 231, 251, 1)"}}/>
                                                        <stop offset="100%"
                                                              style={{stopColor: "rgba(178, 126, 218, 1)"}}/>
                                                    </radialGradient>
                                                </defs>
                                                <g>
                                                    <g id="Layer_1">
                                                        <g>
                                                            <path fill="url(#armGradient)"
                                                                  d="M121.11,63.61h-1.59v-10.71c0-1.71-1.38-3.09-3.09-3.09h-12.71c-1.71,0-3.09,1.38-3.09,3.09v10.71h-42.62v-10.71c0-1.71-1.38-3.09-3.09-3.09h-12.71c-1.71,0-3.09,1.38-3.09,3.09v10.71h-1.59c-1.8,0-3.25,1.46-3.25,3.25v6.57c0,1.8,1.46,3.25,3.25,3.25h1.59v10.71c0,1.71,1.38,3.09,3.09,3.09h12.71c1.71,0,3.09-1.38,3.09-3.09v-10.71h42.62v10.71c0,1.71,1.38,3.09,3.09,3.09h12.71c1.71,0,3.09-1.38,3.09-3.09v-10.71h1.59c1.8,0,3.25-1.46,3.25-3.25v-6.57c0-1.8-1.46-3.25-3.25-3.25Z"/>
                                                            <path fill="url(#armGradient)"
                                                                  d="M70.11,39.87v10.71c0,1.71,1.38,3.09,3.09,3.09h12.71c1.71,0,3.09-1.38,3.09-3.09v-10.71h1.59c1.8,0,3.25-1.46,3.25-3.25v-6.57c0-1.8-1.46-3.25-3.25-3.25h-1.59v-10.71c0-1.71-1.38-3.09-3.09-3.09h-12.71c-1.71,0-3.09,1.38-3.09,3.09v10.71H27.48v-10.71c0-1.71-1.38-3.09-3.09-3.09h-12.71c-1.71,0-3.09,1.38-3.09,3.09v10.71h-1.59c-1.8,0-3.25,1.46-3.25,3.25v6.57c0,1.8,1.46,3.25,3.25,3.25h1.59v10.71c0,1.71,1.38,3.09,3.09,3.09h12.71c1.71,0,3.09-1.38,3.09-3.09v-10.71h42.62Z"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>

                                        </div>
                                        {exercise.secondaryMuscles.slice(0, 1).map((muscle, index) => (
                                            <div key={index}>
                                                <h4>{CapitalizeExercise(muscle)}</h4>
                                            </div>
                                        ))}
                                    </div>
                                    {exercise.secondaryMuscles.slice(1, 2).length > 0 ? (
                                        <div className="gym__exercise_page-muscle_info">
                                            <div className="gym__exercise_page-muscle_image">
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                     viewBox="0 0 127.41 103.2">
                                                    <defs>
                                                        <radialGradient id="armGradient" cx="0%" cy="0%" r="100%"
                                                                        fx="0%"
                                                                        fy="0%">
                                                            <stop offset="0%"
                                                                  style={{stopColor: "rgba(255, 255, 255, 1)"}}/>
                                                            <stop offset="50%"
                                                                  style={{stopColor: "rgba(177, 231, 251, 1)"}}/>
                                                            <stop offset="100%"
                                                                  style={{stopColor: "rgba(178, 126, 218, 1)"}}/>
                                                        </radialGradient>
                                                    </defs>
                                                    <g>
                                                        <g id="Layer_1">
                                                            <g>
                                                                <path fill="url(#armGradient)"
                                                                      d="M121.11,63.61h-1.59v-10.71c0-1.71-1.38-3.09-3.09-3.09h-12.71c-1.71,0-3.09,1.38-3.09,3.09v10.71h-42.62v-10.71c0-1.71-1.38-3.09-3.09-3.09h-12.71c-1.71,0-3.09,1.38-3.09,3.09v10.71h-1.59c-1.8,0-3.25,1.46-3.25,3.25v6.57c0,1.8,1.46,3.25,3.25,3.25h1.59v10.71c0,1.71,1.38,3.09,3.09,3.09h12.71c1.71,0,3.09-1.38,3.09-3.09v-10.71h42.62v10.71c0,1.71,1.38,3.09,3.09,3.09h12.71c1.71,0,3.09-1.38,3.09-3.09v-10.71h1.59c1.8,0,3.25-1.46,3.25-3.25v-6.57c0-1.8-1.46-3.25-3.25-3.25Z"/>
                                                                <path fill="url(#armGradient)"
                                                                      d="M70.11,39.87v10.71c0,1.71,1.38,3.09,3.09,3.09h12.71c1.71,0,3.09-1.38,3.09-3.09v-10.71h1.59c1.8,0,3.25-1.46,3.25-3.25v-6.57c0-1.8-1.46-3.25-3.25-3.25h-1.59v-10.71c0-1.71-1.38-3.09-3.09-3.09h-12.71c-1.71,0-3.09,1.38-3.09,3.09v10.71H27.48v-10.71c0-1.71-1.38-3.09-3.09-3.09h-12.71c-1.71,0-3.09,1.38-3.09,3.09v10.71h-1.59c-1.8,0-3.25,1.46-3.25,3.25v6.57c0,1.8,1.46,3.25,3.25,3.25h1.59v10.71c0,1.71,1.38,3.09,3.09,3.09h12.71c1.71,0,3.09-1.38,3.09-3.09v-10.71h42.62Z"/>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>

                                            </div>
                                            {exercise.secondaryMuscles.slice(1, 2).map((muscle, index) => (
                                                <div key={index}>
                                                    <h4>{CapitalizeExercise(muscle)}</h4>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null
                                    }
                                </div>

                                <div className="gym__exercise_page-instruction">
                                    {exercise.instructions.map((sentence, index) => (
                                        <p key={index}>{sentence}</p>
                                    ))}
                                </div>

                            </div>

                        </div>
                        <div className="gym__exercise_page-lower_container">
                            <div className="gym__exercise_page-section_title">
                                <h1>Alternate Target Exercises </h1>
                            </div>
                            <div className="gym__exercise_page-line_segment section_reverse_gradient"></div>


                            <div className="gym__exercise_page-display_container">
                            <button className="gym__exercise_page-arrow_buttons" onClick={handlePreviousTarget} disabled={currentTargetIndex === 0}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-left">
                                    <path fill="#FFFFFF"
                                          d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"></path>
                                </svg>
                            </button>
                                <div className="gym__exercise_page-bodyparts">
                                    {visibleTargetExercises?.map((exercise, index) => (
                                        <div key={index}>
                                            <ExerciseFeaturette name={exercise.name} gif={exercise.gifUrl} id={exercise.id}/>
                                        </div>
                                    ))}
                            </div>
                            <button className="gym__exercise_page-arrow_buttons" onClick={handleNextTarget}
                                    disabled={currentTargetIndex + itemsPerPage >= targetExercise?.length}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-right">
                                    <path fill="#FFFFFF"
                                          d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"></path>
                                </svg>
                            </button>
                            </div>

                            <div className="gym__exercise_page-section_title">
                                <h1>Similiar Target & Equipment </h1>
                            </div>
                            <div className="gym__exercise_page-line_segment section_reverse_gradient"></div>

                            <div className="gym__exercise_page-display_container">
                            <button className="gym__exercise_page-arrow_buttons" onClick={handlePreviousSimiliar} disabled={currentSimiliarIndex === 0}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-left">
                                    <path fill="#FFFFFF"
                                          d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"></path>
                                </svg>
                            </button>
                                <div className="gym__exercise_page-bodyparts">
                                    {visibleSimiliarExercises?.map((exercise, index) => (
                                        <div key={index}>
                                        <ExerciseFeaturette name={exercise.name} gif={exercise.gifUrl} id={exercise.id}/>
                                    </div>
                                ))}
                            </div>
                            <button className="gym__exercise_page-arrow_buttons" onClick={handleNextSimiliar}
                                    disabled={currentSimiliarIndex + itemsPerPage >= similiarExercise?.length}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="angle-right">
                                    <path fill="#FFFFFF"
                                          d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"></path>
                                </svg>
                            </button>
                            </div>

                            <div className="gym__exercise_page-section_title">
                                <h1>About Videos </h1>
                            </div>
                            <div className="gym__exercise_page-line_segment section_reverse_gradient"></div>
                            <div className="gym__exercise_page-bodyparts">
                                {exerciseVideo?.slice(0,3).map((youtube, index) => (
                                    <div key={index} /*onClick={OpenVideo(youtube.video.videoId)}*/>
                                        <ExerciseFeaturette name={youtube.video.title} gif={youtube.video.thumbnails[0].url} videoLink={`https://www.youtube.com/watch?v=${youtube.video.videoId}`}/>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                ) : (
                    <p>Loading exercise data...</p>
                )}
            </div>
        </div>
    );
};

export default ExercisePage;
