import React from 'react';
import styles from './About.module.css';
import Typical from 'react-typical'

const About = () => {
    return(
        <div className={styles.bg}>
            <div className={styles.block}>
                <p className={styles.text}>Hi, I'm Jonathan Najjar. I am a                    <Typical
                        // loop={Infinity}
                        steps={[
                        ' Activist.',
                        5,
                        ' Traveler.',
                        5,
                        ' Student.',
                        5,
                        ' Developer.', 
                        1000,
                        ]}
                        wrapper="b"
                    />
                </p>
            </div>
            <div className={styles.code}>
                <div className={styles.console}>
                    <p>> Jonathan.origin</p>
                    <p>=> "Atlanta, Georgia"</p>

                    <p>> Jonathan.education</p>
                    <p>=> "The Georgia Institute of Technology"</p>

                    <p>> Jonathan.major</p>
                    <p>=> "Computer Science"</p>

                    <p>> Jonathan.expectedGraduation</p>
                    <p>=> "May, 2020</p>

                    <p>> Jonathan.interests</p>
                    <p>=> ["Rock Climbing", "Hiking", "Yoga", "Music", "Design", "Programming"]</p>

                    <p>> Jonathan.workExperience.mostRecent</p>
                    <p>=> Most Recent Work Experience
                            {<br></br>} 
                            {<br></br>}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;company: "Compassion International"
                            {<br></br>} 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: "Software Architect Intern"
                            {<br></br>} 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start date: "June 2019"
                            {<br></br>} 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end date: "August 2019"
                    </p>

                </div>
            </div> 
        </div>
    );

}

export default About;