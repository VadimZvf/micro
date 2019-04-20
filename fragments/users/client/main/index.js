import * as React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchUsers from './actions/users-fetch';
import startWatchEventsFromHeader from './actions/handle-event';

class Main extends React.Component {
    static propTypes = {
        users: propTypes.array,
        isPending: propTypes.bool,
        fetchUsers: propTypes.func,
        startWatchEventsFromHeader: propTypes.func
    };
    static defaultProps = {
        fetchUsers: () => {}
    };
    static fetchData = fetchUsers;

    state = {};

    componentDidMount() {
        this.props.fetchUsers();
        this.props.startWatchEventsFromHeader();
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <div>
                    {this.props.isPending
                        ? 'Loading...'
                        : this.props.users.map((user, index) => <div key={`${user.id}-${index}`}>{user.name}</div>)}
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
    { fetchUsers, startWatchEventsFromHeader }
)(Main);
