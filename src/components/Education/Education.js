import React from 'react';
import styles from './Education.module.css';
import gtSeal from './gt-seal.png';

const Education = () => {
    return(
        <div>
            <h1>Education</h1>
            <div className={styles.divider}></div>
            <div className={styles.outerblock}>
                <img src={gtSeal} className={styles.img}/>
                <div className={styles.block}>
                    <p>The Georgia Institute of Technology</p> 
                </div>
            </div>
        </div>
        
        
    );
}

export default Education;