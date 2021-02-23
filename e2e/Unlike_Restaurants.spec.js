/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable linebreak-style */
const assert = require('assert');
Feature('Uniking Restaurants');

Before(({I}) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({I}) => {
  I.see('', '.restaurants');
});

Scenario('unliking one restaurant', async ({I}) => {
  I.amOnPage('/');
  I.seeElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurants');
  assert.strictEqual('', likedRestaurantTitle);
});
