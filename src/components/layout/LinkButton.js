import styles from './LinkButton.module.css'
import React from 'react-router-dom'
import { Link } from 'react-router-dom'


function LinkButton({to, text}) {
    return (
        <Link className={styles.btn} to ={to}>
            {text}
        </Link>
    )
}

export default LinkButton