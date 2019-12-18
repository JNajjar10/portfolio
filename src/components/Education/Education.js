import React from 'react';
import styles from './Education.module.css';
import gtSeal from './gt-seal.png';
import cLogo from './compassion logo.png';

const Education = () => {
    return(
        <div className={styles.resume}>
            <span className={styles.title}>Resume</span>
            <p className={styles.section}>Education</p>
            <p>
                <img src={gtSeal} className={styles.img}></img>
                <span className={styles.schoolInlineLeft}>The Georgia Institute of Technology</span>
                <span className={styles.schoolInlineRight}>Graduation: May 2020</span>
            </p>
            <p className={styles.school}>BS Computer Science</p>
            <p className={styles.school}>GPA: 3.68</p>
            <p className={styles.list}>
                Relevant Coursework:
                <ul>
                    <li>Data Structures and Algorithms</li>
                    <li>Introduction to Discrete Math for CS</li>
                    <li>Media Device Architectures</li>
                    <li>Objects and Design</li>
                    <li>Computer Graphics</li>
                    <li>Introduction to Object-Oriented Programming</li>
                    <li>Research Methods and Practices</li>
                    <li>Information Visualization</li>
                    <li>Robots and Society</li>
                    <li>Technical Communication Strategies and Approaches</li>
                    <li>Project Design and Implementation</li>
                    <li>Statistics and Applications</li>
                    <li>Applied Combinatorics</li>
                </ul>
            </p>
            <span className={styles.skill}>Javascript</span>
            <span className={styles.skill}>Typescript</span>
            <span className={styles.skill}>HTML</span>
            <span className={styles.skill}>CSS</span>
            <span className={styles.skill}>Java</span>
            <span className={styles.skill}>Git</span>
            <span className={styles.skill}>C</span>

            <p className={styles.section}>Work Experience</p>
            <p>
                <img src={cLogo} className={styles.img}></img>
                <span className={styles.schoolInlineLeft}>Compassion International</span>
                <span className={styles.schoolInlineRight}>June 2019 - August 2019</span>
            </p>
            <p className={styles.school}>Position: Software Architect Intern</p>
            <p className={styles.list}>
                <ul>
                    <li>Developed a CLI application using Golang and the Cobra library with the intent of streamlining developer workflow</li>
                    <li> The application consisted of the following features:
                        <ul> 
                            <li>Retrieve Golang microservice templates from a Gitlab repository then storing the template locally</li> 
                            <li>run a local pipeline for local microservice testing via minikube and docker</li> 
                            <li>Automated developer environment setup</li>
                         </ul>
                    </li>

                    <li>Worked on a team following SAFe Agile Principles</li>

                </ul>
            </p>

        </div>
        
        
    );
}

export default Education;