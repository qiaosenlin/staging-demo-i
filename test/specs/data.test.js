const getstockprice = require('../../server/config/stocksData');

test('correct retrieve data', () => {
    expect(getstockprice("Apple", "2020-11-23")).toBe("Apple -- 2020-11-23 -- 8274");
  });
  