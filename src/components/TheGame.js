import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/authActions';
import { becomeSanta } from '../actions/gameActions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

class TheGame extends Component {
    componentWillMount() {
        if (!this.props.authReducer.loggedIn) {
            this.props.history.push('/');
        }
    }
    componentWillReceiveProps(nextProps) {
        if (!nextProps.authReducer.loggedIn) {
            this.props.history.push('/');
            this.props.updateLogInInfo('password', '');
        }
    }
    render() {
        const { img, img2 ,name} = this.props.gameReducer;
        const { seed, username } = this.props.authReducer;
        return (
            <div style={styles.LogInContainer}>
                <MuiThemeProvider >
                    <div>
                        <AppBar
                            style={styles.AppBar}
                            showMenuIconButton={false}
                            title="Secret Santa"

                        />
                        <div>
                            <Avatar alt="Remy Sharp" src={img} style={styles.bigAvatar} />
                            <Avatar alt="Remy Sharp" src={img2} style={styles.bigAvatar} />
                        </div>
                        <div>
                            <RaisedButton
                                id="logInButton"
                                label=" Du är secret santa till... "
                                onClick={() => this.props.becomeSanta(seed, username)}
                            />

                        </div>
                        <div>
                            <FlatButton
                                id="signOutButton"
                                style={styles.button}
                                label={name}
                            />
                        </div>

                        <div>
                            <RaisedButton
                                style={styles.out}
                                id="signOutButton"
                                label="Logga ut"
                                onClick={() => window.location.reload()}
                            />
                        </div>
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
        margin: '50px',
    },
    out: {
        bottom: '5%',
        position: 'fixed',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: '5%',
        maxWidth: '200px',
        width: '30%',
        height: 'auto',
    },
};

const mapStateToProps = ({ authReducer, gameReducer }) => (
    { authReducer, gameReducer }
);


export default connect(mapStateToProps, { actions, becomeSanta })(TheGame);
