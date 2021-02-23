/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Kategori</h4>
    <p>${restaurant.categories.map((kategori) => kategori.name)}</p>
  </div>
  <div class="restaurant__info">
  <h3>Menu Makanan</h3>
  <div id="menu-makanan"></div>  
  <br>
  <h3>Menu Minuman</h3>
  <div id="menu-minuman"></div>
  </div>
  
  <div class="restaurant__overview">
    <h3>description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div id="review-container" class="restaurant__overview">
  <h3>Review</h3>
  </div>
`;

const createMenuMakanan = (food) => `
  <h4>-${food.name}</h4>
`;

const createMenuMinuman = (drink) => `
  <h4>-${drink.name}</h4>
`;

const createReviewCard = (review) => `
<div class="card">
<div class="container">
  <h4><b>${review.name}</b></h4>
  <p>${review.review}</p>
  -
  <p>Review pada tanggal ${review.date}</p>
</div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>Kota : ${restaurant.city}</p>
        <br>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createMenuMakanan,
  createMenuMinuman,
  createReviewCard,
};
