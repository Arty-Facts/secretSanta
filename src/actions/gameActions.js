import { userDB } from '../db/users';

const all = ['arty', 'lina', 'arturas', 'giedre', 'ruth', 'mårten']

export const becomeSanta = (seed, name) => dispatch =>{
    let index = all.indexOf(name);
    console.log("START")
    console.log(index);
    let rand = seed%(all.length-1) + 1;
    console.log(rand);
    console.log(all.length-1);
    let pick = (rand + index)%(all.length);
    console.log(pick)
    dispatch({
        type: 'BUTTON_PRESS',
        payload: {
            img: userDB[all[pick]].img,
            name: all[pick]
        },
        });
    
  }