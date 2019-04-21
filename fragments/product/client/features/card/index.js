import * as React from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchProduct from './actions/fetch-product';

import Container from '../../components/container';

const eventAddToCart = 'ADD_PRODUCT_TO_CART';

class Product extends React.Component {
    static propTypes = {
        isPending: propTypes.bool,
        product: propTypes.shape({
            name: propTypes.string,
            price: propTypes.number,
            images: propTypes.arrayOf(propTypes.string)
        }),
        match: propTypes.shape({
            params: propTypes.shape({
                id: propTypes.string
            })
        }),
        fetchProduct: propTypes.func
    };
    static defaultProps = {
        fetchProduct: () => {}
    };
    static fetchData = fetchProduct;

    state = {};

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params);
    }

    handleAdd = () => {
        window.__EVENT_BUS__.publish(eventAddToCart, this.props.product);
    };

    render() {
        const { product, isPending } = this.props;

        if (isPending) {
            return 'Loading...';
        }

        if (!product) {
            return <Redirect to="/" />;
        }

        return (
            <Container>
                <h1>{product.name}</h1>
                <div>price: {product.price}</div>
                <button onClick={this.handleAdd}>Add to card</button>
            </Container>
        );
    }
}

const mapStateToProps = ({ card }) => {
    return {
        isPending: card.isPending,
        product: card.product
    };
};

export default connect(
    mapStateToProps,
    { fetchProduct }
)(Product);
