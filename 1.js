const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const name = this.potions[i];

      if (oldName === name.name) {
        name.name = newName;
      }
      console.log(name);
    }
  },
};

atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
