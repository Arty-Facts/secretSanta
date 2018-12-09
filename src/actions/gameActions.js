import { userDB } from '../db/users';

const all = ['arty', 'mamma', 'pappa', 'giedre', 'ruth', 'mårten', 'gabby']

export const becomeSanta = (seed, name) => dispatch =>{
    let seed = 943333;
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