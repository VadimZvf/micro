import * as React from 'react';
import styles from './index.css';

const Button = ({ children, onClick }) => {
    return (
        <button className={styles.component} onClick={onClick}>
            {children}
        </button>
    );
};

Button.defaultProps = {};

export default Button;
