import * as React from 'react';
import styles from './index.css';

const Button = ({ children }) => {
    return <button className={styles.component}>{children}</button>;
};

Button.defaultProps = {};

export default Button;
