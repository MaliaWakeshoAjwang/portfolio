import React, { useState } from 'react';
import styles from '../../styles/projectcode.module.css';

const DogYears = () => {
    const [humanAge, setHumanAge] = useState('');
    const [dogYears, setDogYears] = useState(null);

    const handleConvert = () => {
        const humanValue = parseFloat(humanAge);
        if (isNaN(humanValue)) {
            alert('Please enter a valid number');
            return;
        }

        let dogValue = 0;

        if(humanValue < 2){
            dogValue = humanValue * 10.5;
        } else {
            dogValue = (humanValue - 2) * 4 + 21;
        }

        setDogYears(dogValue);

    };

    return(
        <div className={styles.landing}>
            <h2>Dog Years Calculator</h2>
            <div className={styles.main}>
                <label>
                    Enter your human age:<br/>
                    <input
                        type="number"
                        value={humanAge}
                        onChange={(e) => setHumanAge(e.target.value)}
                    />
                </label>
            </div>
            <button
                onClick={handleConvert}
            >
                Convert
            </button>
            {dogYears && (
                <div className={styles.results}>
                    <p><strong>Dog years:</strong> {dogYears}</p>
                </div>
            )}
        </div>
    )
}

export default DogYears;