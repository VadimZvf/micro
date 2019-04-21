import * as React from 'react';
import Container from '../../components/container';
import styles from './index.css';

const NotFound = () => {
    return (
        <Container>
            <h1 className={styles.title}>Product not found :(</h1>
        </Container>
    );
};

NotFound.defaultProps = {};

export default NotFound;
