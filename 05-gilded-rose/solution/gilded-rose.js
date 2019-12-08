class Item {
  constructor(daysRemaining, quality){
    this.daysRemaining = daysRemaining;
    this.quality = quality;
  }

  tick() {}
}

class Normal extends Item {
  tick() {
    this.daysRemaining -= 1;

    if (this.quality == 0) return;

    this.quality -= 1;
    if (this.daysRemaining <= 0) {
      this.quality -= 1;
    }
  }
}

class Brie extends Item {
  tick() {
    this.daysRemaining -= 1;

    if (this.quality == 50) return;

    this.quality += 1;
    if (this.daysRemaining <= 0 && this.quality < 50) {
      this.quality += 1;
    }
  }
}

class BackstagePass extends Item {
  tick() {
    this.daysRemaining -= 1;

    if (this.quality == 50) return;
    if (this.daysRemaining < 0) {
      this.quality = 0;
      return;
    }

    this.quality += 1;
    if (this.daysRemaining < 10 && this.quality < 50) {
      this.quality += 1;
    }
    if (this.daysRemaining < 5 && this.quality < 50) {
      this.quality += 1;
    }
  }
}

class Conjured extends Item {
  tick() {
    this.daysRemaining -= 1;

    if (this.quality <= 0) return;

    this.quality -= 2;
    if (this.daysRemaining < 0) {
      this.quality -= 2;
    }
  }
}

const DEFAULT_CLASS = Item;
const ITEM_CLASSES = {
  'Normal Item': Normal,
  'Aged Brie': Brie,
  'Backstage passes to a TAFKAL80ETC concert': BackstagePass,
  'Conjured Mana Cake': Conjured,
};

class ItemFactory {
  static for(name, daysRemaining, quality){
    let klass = ITEM_CLASSES[name] || DEFAULT_CLASS;
    return new klass(daysRemaining, quality);
  }
}

module.exports = ItemFactory;
