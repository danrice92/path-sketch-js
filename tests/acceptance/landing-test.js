import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | landing', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Course of Life');
    assert.dom('h2').hasText('Welcome to Course of Life');
    const aboutButton = document.querySelector('.menu-about');
    assert.dom(aboutButton).hasText('About');
    await click(aboutButton);

    assert.equal(currentURL(), '/about');
  });

  test('visiting /about', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Course of Life');
    assert.dom('h2').hasText('About Course of Life');
    const contactButton = document.querySelector('.menu-contact');
    assert.dom(contactButton).hasText('Contact');
    await click(contactButton);

    assert.equal(currentURL(), '/getting-in-touch');
  });

  test('visiting /getting-in-touch', async function(assert) {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Course of Life');
    assert.dom('h2').hasText('Contact Us');
    const homeButton = document.querySelector('a h1');
    assert.dom(homeButton).hasText('Course of Life');
    await click(homeButton);

    assert.equal(currentURL(), '/');
  });

  test('navigating using the nav-bar', async function(assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('Course of Life')
    assert.dom('nav a.menu-about').hasText('About');
    assert.dom('nav a.menu-contact').hasText('Contact');

    await click('nav a.menu-about');
    assert.equal(currentURL(), '/about');

    await click('nav a.menu-contact');
    assert.equal(currentURL(), '/getting-in-touch');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });
});
