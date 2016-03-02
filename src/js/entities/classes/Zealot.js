import Character from '../Character';

class Zealot extends Character {
  constructor(config = Zealot.defaultConfig) {
    super(config);
  }
}

Zealot.defaultConfig = Character.defaultConfig;
Zealot.defaultConfig.MAX_MOVES = 1;
Zealot.defaultConfig.BASE_DAMAGE = 10;
Zealot.defaultConfig.BASE_DEFENSE = 5;
Zealot.defaultConfig.MAX_FAITH = 20;

export default Zealot;
