import { userDB } from '../db/users';

let all = ['gabby', 'theo', 'corinne', 'samanta', 'joanna', 'adam', 'brittmari', 'elias']

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

export const becomeSanta = (seed, name) => dispatch =>{
    let seed = 9835470;
    let index = all.indexOf(name);
    let rand = seed%(all.length-1) + 1;
    let pick = (rand + index)%(all.length);
    dispatch({
        type: 'BUTTON_PRESS',
        payload: {
            img: userDB[all[pick]].img,
            name: all[pick]
        },
        });
    
  }