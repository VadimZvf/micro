import * as React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchUsers from './actions/users-fetch';

class Main extends React.Component {
    static propTypes = {
        users: propTypes.array,
        isPending: propTypes.bool,
        fetchUsers: propTypes.func
    };
    static defaultProps = {
        fetchUsers: () => {}
    };
    static fetchData = fetchUsers;

    state = {};

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <div>
                    {this.props.isPending
                        ? 'Loading...'
                        : this.props.users.map(user => <div key={user.id}>{user.name}</div>)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = globalState => {
    return {
        isPending: globalState.main.isPending,
        users: globalState.main.users
    };
};

export default connect(
    mapStateToProps,
    { fetchUsers }
)(Main);
