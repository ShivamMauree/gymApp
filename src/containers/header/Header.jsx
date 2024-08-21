import React, { useEffect, useRef } from 'react';
import './header.css';

const Header = () => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.style.backgroundPosition = '-100% 100%';
                } else {
                    entry.target.style.backgroundPosition = '0% 100%';
                }
            },
            {
                root: null, // observing for viewport
                rootMargin: '0px',
                threshold: 0.6 // Trigger when 50% of the element is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div className="gym__header-container app__bg" id="home">
            <div className="gym__header-container_title">
                <h4> Take Control </h4>
                <h1>Now</h1>
            </div>

            <div className="gym__header-container_content">
                <h1>Conquer The Gym !</h1>
                <p ref={ref}>
                    Ever confused as to what exercise to use? Well worry no more, cause we got you!
                    Browse through our expansive ware of different exercises each with a descriptive graphic
                    to show you how it is properly done!
                </p>
            </div>


            <div className="gym__header-container_sliding_text">
                <h1>move.breath.workout.live.repeat.move.breath.workout.live.repeat.move.breath.workout.live.repeat.move.breath.workout.live.repeat.</h1>
            </div>
        </div>
    )
}

export default Header;
