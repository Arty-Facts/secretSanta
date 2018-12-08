import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/authActions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';

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
                        <div>
                        <Avatar alt="Remy Sharp" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/31081711_2130308393652502_7549969284168941568_n.jpg?_nc_cat=104&_nc_ht=scontent-arn2-1.xx&oh=0685caf5c315009ee3d65043758ea519&oe=5C9AD7C4" style={styles.bigAvatar}/>
                        <Avatar alt="Remy Sharp" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/31081711_2130308393652502_7549969284168941568_n.jpg?_nc_cat=104&_nc_ht=scontent-arn2-1.xx&oh=0685caf5c315009ee3d65043758ea519&oe=5C9AD7C4" style={styles.bigAvatar}/>
                        </div>
                        <RaisedButton
                                id="logInButton"
                                style={styles.button}
                                //onClick={() => this.props.validateUser(username, password)}
                            >
                                Du är secret santa till...
                            </RaisedButton>
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
        //backgroundImage: "url('https://www.google.se/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwitkb3Pm5HfAhWKCiwKHdJYBSIQjRx6BAgBEAU&url=https%3A%2F%2Fopenclipart.org%2Fdetail%2F188775%2Fanimated-christmas-tree&psig=AOvVaw1nEyYfoG1DjMKXRB_z5MhZ&ust=1544392199798288')"
    },
    button: {
        //color: '#009900',
        width: 200
    },
    avatar: {
        margin: 10,
      },
    bigAvatar: {
        margin: '5%',
        width: '30%',
        height: 'auto',
      },
};

const mapStateToProps = ({ authReducer }) => {
    return { authReducer };
};

export default connect(mapStateToProps, actions)(TheGame);
