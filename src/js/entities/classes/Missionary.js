import Character from '../Character';

class Missionary extends Character {
  constructor(config = Missionary.defaultConfig) {
    super(config);
  }
}

Missionary.defaultConfig = Character.defaultConfig;
Missionary.defaultConfig.MAX_MOVES = 4;
Missionary.defaultConfig.BASE_DAMAGE = 3;
Missionary.defaultConfig.BASE_DEFENSE = 0;
Missionary.defaultConfig.MAX_FAITH = 20;

export default Missionary;
