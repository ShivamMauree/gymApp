import React, {useEffect} from 'react';
import {BsFillPlayFill, BsFillPauseFill} from "react-icons/bs";
import './blog.css';
import video from '../../assets/video.mp4';
import {Feature} from '../../components';

const Blog = () => {
    // const vidRef = React.useRef();
    // const [playVideo, setPlayVideo] =React.useState(false)
    //
    // useEffect(() => {
    //     if (vidRef.current) {
    //         vidRef.current.play();
    //     }
    // }, []);
    //
    // const handleVideo=()=>{
    //     setPlayVideo(!playVideo);
    //     if (playVideo){
    //         vidRef.current.pause();
    //     }else {
    //         vidRef.current.play();
    //     }
    //
    // }
    return (
        <div className="gym__blog-container app__bg">

            <div className="gym__blog-container_title ">
                <h1> Achieve Your Dream Physique</h1>
            </div>

            <div className="gym__blog-information section_gradient">
                <div className="gym__blog-information_feature">
                    <Feature title="What is GymLyb ?" text="GymLyb is your ultimate gym companion, designed to make your workout sessions smooth and effective
                                                            . With this intuitive app, you can instantly find exercises for any body part, eliminating the need for
                                                            search online while at the gym. Whether you are looking to target specific muscle groups or just need
                                                            some fresh ideas for your workout routine, GymLyb provides a comprehensive, user-friendly platform to get
                                                            you moving right." />
                </div>

                <div className="gym__blog-information_section_text">
                    <h1>Stop Wasting Your Time !</h1>
                </div>

                <div className="gym__blog-information_features_container">
                    <Feature title="Exercise Database" text="GymLyb offers a vast database of exercises categorized by body part, making it simple to find the right workout for any muscle group. Each exercise comes with detailed graphics that demonstrate proper form and technique, ensuring you perform each movement safely and effectively." />

                    <Feature title="Instructional Guides" text="Learn how to execute exercises correctly with GymLyb’s instructional guides. Each guide provides step-by-step instructions, helping you to maximize the effectiveness of your workout while minimizing the risk of injury." />

                    <Feature title="Fitness Articles" text="Stay informed and inspired with a variety of fitness articles available on GymLyb. These articles cover topics ranging from workout tips to nutritional advice, giving you the knowledge you need to support your fitness journey and lead a healthier lifestyle." />
                </div>

            </div>



        </div>
    )
}
export default Blog
{/*<div className="gym__blog-video app__altbg">*/}

{/*    <video*/}
{/*        src={video}*/}
{/*        loop*/}
{/*        ref={vidRef}*/}
{/*        typeof="video/mp4"*/}
{/*        loop*/}
{/*        controls={false}*/}
{/*        muted={true}*/}
{/*    />*/}

{/*    <div className="gym__blog-video_overlay ">*/}
{/*        <div className="gym__blog-video_overlay_circle flex__center"*/}
{/*             onClick={handleVideo}>*/}
{/*            {playVideo ? (*/}
{/*                <BsFillPauseFill color="#fff" fontSize={27}/>*/}
{/*            ) : (<BsFillPlayFill color="#fff" fontSize={27}/>)}*/}
{/*        </div>*/}

{/*    </div>*/}

{/*</div>*/}