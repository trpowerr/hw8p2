class Character {
  constructor(name) {
    this.name = name;
    this.health = 2;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
    } else {
      throw ('Нельзя повысить level умершего');
    }
  }
}

const newPerson = new Character('MIsha');

export { newPerson, Character };
