import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/authActions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

class TheGame extends Component {
    componentWillReceiveProps(nextProps) {
        if (!nextProps.authReducer.loggedIn) {
            this.props.history.push('/');
            this.props.authReducer('password', '');
        }
    }
    render() {
        return (
            <div style={styles.LogInContainer}>
                <MuiThemeProvider >
                    <div>
                        <AppBar
                            style={styles.AppBar}
                            showMenuIconButton={false}
                            title="Secret Santa"
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
  

const styles = {
    AppBar: {
        background: '#990000',
    },
    LogInContainer: {
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#009900',
    },
};

const mapStateToProps = ({ authReducer }) => {
    return { authReducer };
};

export default connect(mapStateToProps, actions)(TheGame);
