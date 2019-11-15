const assert = require('chai').assert
const GildedRose = require('./gilded-rose');

describe('GildedRose', () => {
  describe('Normal Item', () => {
    it('before sell date', () => {
      let gilded_rose = GildedRose.for("Normal Item", 5, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 4);
      assert.propertyVal(gilded_rose, 'quality', 9);
    })

    it('on sell date', () => {
      let gilded_rose = GildedRose.for("Normal Item", 0, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', -1);
      assert.propertyVal(gilded_rose, 'quality', 8);
    })

    it('after sell date', () => {
      let gilded_rose = GildedRose.for("Normal Item", -10, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', -11);
      assert.propertyVal(gilded_rose, 'quality', 8);
    })

    it('of zero quality', () => {
      let gilded_rose = GildedRose.for("Normal Item", 5, 0)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 4);
      assert.propertyVal(gilded_rose, 'quality', 0);
    })
  })

  describe('Aged Brie', () => {
    it('before sell date', () => {
      let gilded_rose = GildedRose.for("Aged Brie", 5, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 4);
      assert.propertyVal(gilded_rose, 'quality', 11);
    })

    it('with max quality', () => {
      let gilded_rose = GildedRose.for("Aged Brie", 5, 50)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 4);
      assert.propertyVal(gilded_rose, 'quality', 50);
    })

    it('on sell date', () => {
      let gilded_rose = GildedRose.for("Aged Brie", 0, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', -1);
      assert.propertyVal(gilded_rose, 'quality', 12);
    })

    it('on sell date near max quality', () => {
      let gilded_rose = GildedRose.for("Aged Brie", 0, 49)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', -1);
      assert.propertyVal(gilded_rose, 'quality', 50);
    })

    it('on sell date with max quality', () => {
      let gilded_rose = GildedRose.for("Aged Brie", 0, 50)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', -1);
      assert.propertyVal(gilded_rose, 'quality', 50);
    })

    it('after sell date', () => {
      let gilded_rose = GildedRose.for("Aged Brie", -10, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', -11);
      assert.propertyVal(gilded_rose, 'quality', 12);
    })

    it('after sell date with max quality', () => {
      let gilded_rose = GildedRose.for("Aged Brie", -10, 50)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', -11);
      assert.propertyVal(gilded_rose, 'quality', 50);
    })
  })

  describe('Sulfuras', () => {
    it('before sell date', () => {
      let gilded_rose = GildedRose.for("Sulfuras, Hand of Ragnaros", 5, 80)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 5);
      assert.propertyVal(gilded_rose, 'quality', 80);
    })

    it('on sell date', () => {
      let gilded_rose = GildedRose.for("Sulfuras, Hand of Ragnaros", 0, 80)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 0);
      assert.propertyVal(gilded_rose, 'quality', 80);
    })

    it('after sell date', () => {
      let gilded_rose = GildedRose.for("Sulfuras, Hand of Ragnaros", -10, 80)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', -10);
      assert.propertyVal(gilded_rose, 'quality', 80);
    })
  })

  describe('Backstage Pass', () => {
    it('long before sell date', () => {
      let gilded_rose = GildedRose.for("Backstage passes to a TAFKAL80ETC concert", 11, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 10);
      assert.propertyVal(gilded_rose, 'quality', 11);
    })

    it('long before sell date at max quality', () => {
      let gilded_rose = GildedRose.for("Backstage passes to a TAFKAL80ETC concert", 11, 50)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 10);
      assert.propertyVal(gilded_rose, 'quality', 50);
    })

    it('medium close to sell date upper bound', () => {
      let gilded_rose = GildedRose.for("Backstage passes to a TAFKAL80ETC concert", 10, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 9);
      assert.propertyVal(gilded_rose, 'quality', 12);
    })

    it('medium close to sell date upper bound at max quality', () => {
      let gilded_rose = GildedRose.for("Backstage passes to a TAFKAL80ETC concert", 10, 50)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 9);
      assert.propertyVal(gilded_rose, 'quality', 50);
    })

    it('medium close to sell date lower bound', () => {
      let gilded_rose = GildedRose.for("Backstage passes to a TAFKAL80ETC concert", 6, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 5);
      assert.propertyVal(gilded_rose, 'quality', 12);
    })

    it('medium close to sell date lower bound at max quality', () => {
      let gilded_rose = GildedRose.for("Backstage passes to a TAFKAL80ETC concert", 6, 50)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 5);
      assert.propertyVal(gilded_rose, 'quality', 50);
    })

    it('very close to sell date upper bound', () => {
      let gilded_rose = GildedRose.for("Backstage passes to a TAFKAL80ETC concert", 5, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 4);
      assert.propertyVal(gilded_rose, 'quality', 13);
    })

    it('very close to sell date upper bound at max quality', () => {
      let gilded_rose = GildedRose.for("Backstage passes to a TAFKAL80ETC concert", 5, 50)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 4);
      assert.propertyVal(gilded_rose, 'quality', 50);
    })

    it('very close to sell date lower bound', () => {
      let gilded_rose = GildedRose.for("Backstage passes to a TAFKAL80ETC concert", 1, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 0);
      assert.propertyVal(gilded_rose, 'quality', 13);
    })

    it('very close to sell date lower bound at max quality', () => {
      let gilded_rose = GildedRose.for("Backstage passes to a TAFKAL80ETC concert", 1, 50)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 0);
      assert.propertyVal(gilded_rose, 'quality', 50);
    })

    it('on sell date', () => {
      let gilded_rose = GildedRose.for("Backstage passes to a TAFKAL80ETC concert", 0, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', -1);
      assert.propertyVal(gilded_rose, 'quality', 0);
    })

    it('after sell date', () => {
      let gilded_rose = GildedRose.for("Backstage passes to a TAFKAL80ETC concert", -10, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', -11);
      assert.propertyVal(gilded_rose, 'quality', 0);
    })
  })

  describe('Conjured Mana', () => {
    it('before sell date', () => {
      let gilded_rose = GildedRose.for("Conjured Mana Cake", 5, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 4);
      assert.propertyVal(gilded_rose, 'quality', 8);
    })

    it('before sell date at zero quality', () => {
      let gilded_rose = GildedRose.for("Conjured Mana Cake", 5, 0)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', 4);
      assert.propertyVal(gilded_rose, 'quality', 0);
    })

    it('on sell date', () => {
      let gilded_rose = GildedRose.for("Conjured Mana Cake", 0, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', -1);
      assert.propertyVal(gilded_rose, 'quality', 6);
    })

    it('on sell date at zero quality', () => {
      let gilded_rose = GildedRose.for("Conjured Mana Cake", 0, 0)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', -1);
      assert.propertyVal(gilded_rose, 'quality', 0);
    })

    it('after sell date', () => {
      let gilded_rose = GildedRose.for("Conjured Mana Cake", -10, 10)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', -11);
      assert.propertyVal(gilded_rose, 'quality', 6);
    })

    it('after sell date at zero quality', () => {
      let gilded_rose = GildedRose.for("Conjured Mana Cake", -10, 0)

      gilded_rose.tick()

      assert.propertyVal(gilded_rose, 'daysRemaining', -11);
      assert.propertyVal(gilded_rose, 'quality', 0);
    })
  })
})
