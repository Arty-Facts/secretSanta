import { userDB } from '../db/users';

// let all = ['gabby', 'arty', 'giedre', 'ruth', 'mårten', 'mamma', 'pappa']
let all = ['gabby', 'arty', 'theo', 'corinne', 'samanta', 'viktor', 'joanna', 'adam', 'brittmari', 'elias']

function shuffle(array, seed) {                // <-- ADDED ARGUMENT
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(random(seed) * m--);        // <-- MODIFIED LINE
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
      ++seed                                     // <-- ADDED LINE
    }
  
    return array;
  }
  
  function random(seed) {
    var x = Math.sin(seed++) * 10000; 
    return x - Math.floor(x);
  }

export const becomeSanta = (seed, name) => dispatch =>{
    let seed = 987;
    all = shuffle(all, seed);
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