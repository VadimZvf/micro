import * as React from 'react';
import styles from './app.css';

const eventAddToCart = 'ADD_PRODUCT_TO_CART';

class Header extends React.Component {
    state = {
        product: null
    };

    componentDidMount() {
        window.__EVENT_BUS__.subscribe(eventAddToCart, product => {
            this.setState({ product });
        });
    }

    render() {
        return (
            <div className={styles.wrap}>
                <a href="/" className={styles.logo}>
                    Logo
                </a>
                {this.state.product && <div className={styles.cart}>Product in basket: {this.state.product.name}</div>}
            </div>
        );
    }
}

export default Header;
