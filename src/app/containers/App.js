import React from "react";
import { User } from '../components/User';
import { Main } from '../components/Main';
import { connect } from 'react-redux';
import { setName } from '../actions/userActions';

class App extends React.Component {


    render() {
        return (
            <div className="container" id="app">
                <Main changeUsername={() => this.props.setName("Alex")} />
                <User username={this.props.user.name} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);