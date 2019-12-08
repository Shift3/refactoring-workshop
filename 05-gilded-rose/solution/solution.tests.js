const assert = require('chai').assert;
const ItemFactory = require('./gilded-rose');

describe('ItemFactory', () => {
  describe('Normal Item', () => {
    it('before sell date', () => {
      let item = ItemFactory.for("Normal Item", 5, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 4);
      assert.propertyVal(item, 'quality', 9);
    });

    it('on sell date', () => {
      let item = ItemFactory.for("Normal Item", 0, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', -1);
      assert.propertyVal(item, 'quality', 8);
    });

    it('after sell date', () => {
      let item = ItemFactory.for("Normal Item", -10, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', -11);
      assert.propertyVal(item, 'quality', 8);
    });

    it('of zero quality', () => {
      let item = ItemFactory.for("Normal Item", 5, 0);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 4);
      assert.propertyVal(item, 'quality', 0);
    });
  });

  describe('Aged Brie', () => {
    it('before sell date', () => {
      let item = ItemFactory.for("Aged Brie", 5, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 4);
      assert.propertyVal(item, 'quality', 11);
    });

    it('with max quality', () => {
      let item = ItemFactory.for("Aged Brie", 5, 50);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 4);
      assert.propertyVal(item, 'quality', 50);
    });

    it('on sell date', () => {
      let item = ItemFactory.for("Aged Brie", 0, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', -1);
      assert.propertyVal(item, 'quality', 12);
    });

    it('on sell date near max quality', () => {
      let item = ItemFactory.for("Aged Brie", 0, 49);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', -1);
      assert.propertyVal(item, 'quality', 50);
    });

    it('on sell date with max quality', () => {
      let item = ItemFactory.for("Aged Brie", 0, 50);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', -1);
      assert.propertyVal(item, 'quality', 50);
    });

    it('after sell date', () => {
      let item = ItemFactory.for("Aged Brie", -10, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', -11);
      assert.propertyVal(item, 'quality', 12);
    });

    it('after sell date with max quality', () => {
      let item = ItemFactory.for("Aged Brie", -10, 50);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', -11);
      assert.propertyVal(item, 'quality', 50);
    });
  });

  describe('Sulfuras', () => {
    it('before sell date', () => {
      let item = ItemFactory.for("Sulfuras, Hand of Ragnaros", 5, 80);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 5);
      assert.propertyVal(item, 'quality', 80);
    });

    it('on sell date', () => {
      let item = ItemFactory.for("Sulfuras, Hand of Ragnaros", 0, 80);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 0);
      assert.propertyVal(item, 'quality', 80);
    });

    it('after sell date', () => {
      let item = ItemFactory.for("Sulfuras, Hand of Ragnaros", -10, 80);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', -10);
      assert.propertyVal(item, 'quality', 80);
    });
  });

  describe('Backstage Pass', () => {
    it('long before sell date', () => {
      let item = ItemFactory.for("Backstage passes to a TAFKAL80ETC concert", 11, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 10);
      assert.propertyVal(item, 'quality', 11);
    });

    it('long before sell date at max quality', () => {
      let item = ItemFactory.for("Backstage passes to a TAFKAL80ETC concert", 11, 50);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 10);
      assert.propertyVal(item, 'quality', 50);
    });

    it('medium close to sell date upper bound', () => {
      let item = ItemFactory.for("Backstage passes to a TAFKAL80ETC concert", 10, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 9);
      assert.propertyVal(item, 'quality', 12);
    });

    it('medium close to sell date upper bound at max quality', () => {
      let item = ItemFactory.for("Backstage passes to a TAFKAL80ETC concert", 10, 50);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 9);
      assert.propertyVal(item, 'quality', 50);
    });

    it('medium close to sell date lower bound', () => {
      let item = ItemFactory.for("Backstage passes to a TAFKAL80ETC concert", 6, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 5);
      assert.propertyVal(item, 'quality', 12);
    });

    it('medium close to sell date lower bound at max quality', () => {
      let item = ItemFactory.for("Backstage passes to a TAFKAL80ETC concert", 6, 50);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 5);
      assert.propertyVal(item, 'quality', 50);
    });

    it('very close to sell date upper bound', () => {
      let item = ItemFactory.for("Backstage passes to a TAFKAL80ETC concert", 5, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 4);
      assert.propertyVal(item, 'quality', 13);
    });

    it('very close to sell date upper bound at max quality', () => {
      let item = ItemFactory.for("Backstage passes to a TAFKAL80ETC concert", 5, 50);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 4);
      assert.propertyVal(item, 'quality', 50);
    });

    it('very close to sell date lower bound', () => {
      let item = ItemFactory.for("Backstage passes to a TAFKAL80ETC concert", 1, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 0);
      assert.propertyVal(item, 'quality', 13);
    });

    it('very close to sell date lower bound at max quality', () => {
      let item = ItemFactory.for("Backstage passes to a TAFKAL80ETC concert", 1, 50);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 0);
      assert.propertyVal(item, 'quality', 50);
    });

    it('on sell date', () => {
      let item = ItemFactory.for("Backstage passes to a TAFKAL80ETC concert", 0, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', -1);
      assert.propertyVal(item, 'quality', 0);
    });

    it('after sell date', () => {
      let item = ItemFactory.for("Backstage passes to a TAFKAL80ETC concert", -10, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', -11);
      assert.propertyVal(item, 'quality', 0);
    });
  });

  describe('Conjured Mana', () => {
    it('before sell date', () => {
      let item = ItemFactory.for("Conjured Mana Cake", 5, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 4);
      assert.propertyVal(item, 'quality', 8);
    });

    it('before sell date at zero quality', () => {
      let item = ItemFactory.for("Conjured Mana Cake", 5, 0);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', 4);
      assert.propertyVal(item, 'quality', 0);
    });

    it('on sell date', () => {
      let item = ItemFactory.for("Conjured Mana Cake", 0, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', -1);
      assert.propertyVal(item, 'quality', 6);
    });

    it('on sell date at zero quality', () => {
      let item = ItemFactory.for("Conjured Mana Cake", 0, 0);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', -1);
      assert.propertyVal(item, 'quality', 0);
    });

    it('after sell date', () => {
      let item = ItemFactory.for("Conjured Mana Cake", -10, 10);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', -11);
      assert.propertyVal(item, 'quality', 6);
    });

    it('after sell date at zero quality', () => {
      let item = ItemFactory.for("Conjured Mana Cake", -10, 0);

      item.tick();

      assert.propertyVal(item, 'daysRemaining', -11);
      assert.propertyVal(item, 'quality', 0);
    });
  });
});
