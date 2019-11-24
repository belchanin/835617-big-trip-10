import {createCardTemplate} from './components/card.js';
import {createFilterTemplate} from './components/filter.js';
import {createFormEditTemplate} from './components/form-edit.js';
import {createSiteMenuTemplate} from './components/site-menu.js';
import {createSortTemplate} from './components/sorting.js';
import {createTripInfoTemplate} from './components/trip-info.js';

const CARD_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripInfoElement = document.querySelector(`.trip-info`);
render(tripInfoElement, createTripInfoTemplate(), `afterbegin`);

const siteMenuElement = document.querySelector(`.trip-controls`);
const siteMenuFirstTitleElement = siteMenuElement.querySelector(`.visually-hidden:first-child`);
render(siteMenuFirstTitleElement, createSiteMenuTemplate(), `afterend`);
render(siteMenuElement, createFilterTemplate(), `beforeend`);

const tripEvents = document.querySelector(`.trip-events`);
render(tripEvents, createSortTemplate(), `afterbegin`);

const tripSorting = tripEvents.querySelector(`.trip-sort`);
render(tripSorting, createFormEditTemplate(), `afterend`);

const tripMainList = tripEvents.querySelector(`.trip-events__list`);

new Array(CARD_COUNT)
  .fill(``)
  .forEach(
      () => render(tripMainList, createCardTemplate(), `beforeend`)
  );
