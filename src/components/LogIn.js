import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/authActions';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';



class LogIn extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.authReducer.loggedIn) {
            this.props.history.push('/TheGame');
            this.props.updateLogInInfo('password', '');
        }
    }
    render() {
        const { username, password , unAuth} = this.props.authReducer;
        return (
            <div style={styles.LogInContainer}>
                <MuiThemeProvider >
                    <div>
                        <AppBar
                            style={styles.AppBar}
                            showMenuIconButton={false}
                            title="Secret Santa"
                        />
                        <div className="LogIn-logo">
                            <TextField
                                id="username"
                                floatingLabelText="Namn"
                                value={username}
                                onChange={
                                    event => this.props.updateLogInInfo('username', event.target.value.toLowerCase())
                                }
                            />
                        </div>
                        <div>
                            <TextField
                                id="password"
                                type="password"
                                floatingLabelText="Lösenord"
                                value={password}
                                onChange={
                                    event => this.props.updateLogInInfo('password', event.target.value)
                                }
                            />
                        </div>
                        <div>
                            <RaisedButton
                                id="logInButton"
                                style={styles.button}
                                onClick={() => this.props.validateUser(username, password)}
                            >
                                Log in!
                            </RaisedButton>
                        </div>
                        <Snackbar
                            open={unAuth}
                            onClose={() => this.props.closeError(username, password)}
                            message='Fel användarnamen eller lösenord'
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

const mapStateToProps = ({ data, authReducer }) => {
    return { data, authReducer };
};

export default connect(mapStateToProps, actions)(LogIn);
