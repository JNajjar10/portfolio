import React from 'react';
import profilePicture from './profilepic.jpg';
import redLights from './red-lights.jpg';
import styles from './Header.module.css';
import Typical from 'react-typical'

const Header = () => {
    return(
        <>
        <div className={styles.bgImg}>
            <div>
                <h1 className={styles.text}>Hi, I'm Jonathan Najjar.</h1>
                <p className={styles.animatedtext}> I am a{' '}
                    <Typical
                        // loop={Infinity}
                        steps={[
                        'Rock Climber.',
                        5,
                        'Activist.',
                        5,
                        'Hiker.',
                        5,
                        'Blogger.',
                        5,
                        'Traveler.',
                        5,
                        'Student.',
                        5,
                        'Developer.', 
                        1000,
                        ]}
                        wrapper="b"
                    />
                </p>
            </div>
        </div>
        </>
    );
}

export default Header;