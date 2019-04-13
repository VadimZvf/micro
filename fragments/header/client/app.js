import * as React from 'react';
import Button from './components/button';
import styles from './app.css';

const App = () => (
    <div className={styles.wrap}>
        Header fragment! <Button>Test</Button>
    </div>
);

export default App;
