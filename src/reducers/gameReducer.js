const DEFAULT = {
    img: '',
    img2: 'https://img.icons8.com/dotty/2x/question-mark.png',
    name: '',
  };
  
  export default (state = DEFAULT, action) => {
    switch (action.type) {
      case 'BUTTON_PRESS': {
        return {...state,
            img2: action.payload.img,
            name: action.payload.name,
        };
      }
      case 'GAME_START': {
        return {...state,
            img: action.payload,
        };
      }
      default:
        return state;
    }
  }