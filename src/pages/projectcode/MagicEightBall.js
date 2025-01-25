import React, { useState } from 'react';
import styles from '../styles/projectcode.module.css';

const Magic8Ball = () => {
    // code that does the work
    // const replies = ['Cannot predict now', 'It is certain', 'It is deciely so', 'Reply hazy try again', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes']
    // returned
    return (
        <div className={styles.landing}>
            <h2>Magic 8-Ball</h2>
            <div className={styles.main}>
                {/* code that displays the magic 8-ball */}
                <label>
                    Ask a question:<br/>
                    <input
                        type="text"
                        placeholder="Ask your question..."
                    />
                </label>
            </div>
            
        </div>
    )
}

export default Magic8Ball;