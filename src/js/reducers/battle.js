import Cleric from '../entities/classes/Cleric';
import Crusader from '../entities/classes/Crusader';
import Missionary from '../entities/classes/Missionary';
import Preacher from '../entities/classes/Preacher';
import Zealot from '../entities/classes/Zealot';
import Battle from '../entities/Battle';

const Bob = new Cleric({name: 'Bob'});
const playerChars = [
  Bob,
  new Crusader({name: 'Billy'}),
  new Missionary({name: 'Ben'}),
  new Preacher({name: 'Balaban'}),
  new Zealot({name: 'Belieber'})
];
const invaderChars = [
  new Missionary(),
  new Missionary(),
  new Missionary(),
  new Missionary(),
  new Missionary()
];

const booty = new Battle({ playerChars, invaderChars });

const initialState = booty;

Bob.move(9, 1);


const b1 = new Battle({
  playerChars: playerChars,
  invaderChars: invaderChars
});
console.log(b1);

export default function battle(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};
