import React from 'react';
import profilePicture from './profilepic.jpg';
import redLights from './red-lights.jpg';
import styles from './Header.module.css';
import layoutItems from './layout.png';
const Header = () => {
    return(
        <>
        <div className={styles.bg}>
            <div>
                <img src={layoutItems} className={styles.img}/>
                    {/* <div>
                        <h1 className={styles.text}>Hi, I'm Jonathan Najjar.</h1>
                        <p className={styles.animatedtext}> I am a{' '}
                            <Typical
                                // loop={Infinity}
                                steps={[
                                'Activist.',
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
                    </div> */}
            </div>
        </div>
        </>
    );
}

export default Header;