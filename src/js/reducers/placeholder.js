import Cleric from '../entities/classes/Cleric';
import Crusader from '../entities/classes/Crusader';
import Missionary from '../entities/classes/Missionary';
import Preacher from '../entities/classes/Preacher';
import Zealot from '../entities/classes/Zealot';
const playerChars = [
  new Cleric(),
  new Crusader(),
  new Missionary(),
  new Preacher(),
  new Zealot()
];
const invaderChars = [
  new Missionary(),
  new Missionary(),
  new Missionary(),
  new Missionary(),
  new Missionary()
];

import Battle from '../entities/Battle';

const b1 = new Battle({
  playerChars: playerChars,
  invaderChars: invaderChars
});
console.log(b1);

export default function placeholder(state = {}, action) {
  return state;
};
