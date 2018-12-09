
const DEFAULT = {
    password: '',
    username: '',
    loggedIn: false,
    unAuth: false,
    seed: Math.floor((Math.random() * 1000) + 1),
  };
  
  export default (state = DEFAULT, action) => {
    switch (action.type) {
      case 'UPDATE_LOGIN_INFO': {
        const newState = { ...state,
            unAuth: false,
        };
        newState[action.payload.key] = action.payload.value;
        return newState;
      }
      case 'LOGIN_SUCCESS': {
        return {...state,
            loggedIn: true,
            unAuth: false
        };
      }
      case 'LOGIN_FAILED': {
        return {...state,
            loggedIn: false,
            unAuth: true
        };
      }
      case 'ERROR_HANDELD': {
        return {...state,
            unAuth: false
        };
      }
      default:
        return state;
    }
  }
  