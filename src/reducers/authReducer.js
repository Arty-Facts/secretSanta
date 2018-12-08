
const DEFAULT = {
    username: '',
    name: '',
    loggedIn: false,
  };
  
  export default (state = DEFAULT, action) => {
    switch (action.type) {
      case 'UPDATE_LOGIN_INFO': {
        const newState = { ...state };
        newState[action.payload.key] = action.payload.value;
        return newState;
      }
      case 'LOGIN_SUCCESS': {
        return {...state,
            loggedIn: action.payload,
        };
      }
      default:
        return state;
    }
  }
  