import * as React from 'react';
import propTypes from 'prop-types';
import cls from 'classnames';
import styles from './index.css';

const Container = props => {
    return <div className={cls(styles.component, props.className)}>{props.children}</div>;
};

Container.propTypes = {
    className: propTypes.string,
    children: propTypes.node
};

Container.defaultProps = {
    className: ''
};

export default Container;
