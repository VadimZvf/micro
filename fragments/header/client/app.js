import * as React from 'react';
import Button from './components/button';
import styles from './app.css';

const eventType = 'FIRST_EVENT';

class App extends React.Component {
    state = {
        count: 0
    };

    handleClick = () => {
        this.setState({ count: this.state.count + 1 }, () => {
            window.__EVENT_BUS__.publish(eventType, `message from header: ${this.state.count}`);
        });
    };

    render() {
        return (
            <div className={styles.wrap}>
                Header fragment!!! <Button onClick={this.handleClick}>Test</Button>
            </div>
        );
    }
}

export default App;
