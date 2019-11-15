class GildedRose {
  constructor(name, daysRemaining, quality){
    this.name = name;
    this.daysRemaining = daysRemaining;
    this.quality = quality;
  }

  tick() {
    if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (this.quality > 0) {
        if (this.name != 'Sulfuras, Hand of Ragnaros') {
          this.quality -= 1
        }
      }
    } else {
      if (this.quality < 50) {
        this.quality += 1
        if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.daysRemaining < 11) {
            if (this.quality < 50) {
              this.quality += 1
            }
          }
          if (this.daysRemaining < 6) {
            if (this.quality < 50) {
              this.quality += 1
            }
          }
        }
      }
    }
    if (this.name != 'Sulfuras, Hand of Ragnaros') {
      this.daysRemaining -= 1;
    }
    if (this.daysRemaining < 0) {
      if (this.name != 'Aged Brie') {
        if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.quality > 0) {
            if (this.name != 'Sulfuras, Hand of Ragnaros') {
              this.quality -= 1
            }
          }
        } else {
          this.quality -= this.quality;
        }
      } else {
        if (this.quality < 50) {
          this.quality += 1
        }
      }
    }
  }
}

module.exports = GildedRose;
