export const createSortTemplate = () => {
  return (
    ` <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <span class="trip-sort__item  trip-sort__item--day"></span>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event">
              <label class="trip-sort__btn" for="sort-event">Event</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--time">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" checked>
              <label class="trip-sort__btn  trip-sort__btn--active  trip-sort__btn--by-increase" for="sort-time">
                Time
              </label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
              <label class="trip-sort__btn" for="sort-price">
                Price
              </label>
            </div>

            <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
          </form>
          <ul class="trip-days">
            <li class="trip-days__item  day">
              <div class="day__info">
                  <span class="day__counter">1</span>
                  <time class="day__date" datetime="2019-03-18">MAR 18</time>
               </div>
              <ul class="trip-events__list"></ul>
            </li>
          </ul>`
  );
};
