/* eslint-disable linebreak-style */
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import {createRestaurantItemTemplate} from '../templates/template-creator';
import SliderInitiator from '../../utils/slider-initiator';
const List = {
  async render() {
    return `
    <!-- Slideshow container -->
    <div class="slideshow-container">
    
      <!-- Full-width images with number and caption text -->
      <div class="mySlides fade" style="">
        <div class="numbertext">1 / 4</div>
        <img class="banner-img" 
        src="images/heros/hero-image_1-large.jpg" 
        srcset="images/heros/hero-image_1-small.jpg 480w, 
        images/heros/hero-image_1-large.jpg 800w"
        sizes="(max-width: 600px) 480px, 800px"
        alt="Banner 1" style="width:100%">
        <div class="text">Makan yang Mantap Mantap</div>
      </div>
    
      <div class="mySlides fade" style="">
        <div class="numbertext">2 / 4</div>
        <img class="banner-img" 
        src="images/heros/hero-image_2-large.jpg" 
        srcset="images/heros/hero-image_2-small.jpg 480w, 
        images/heros/hero-image_2-large.jpg 800w"
        sizes="(max-width: 600px) 480px, 800px"
        alt="Banner 2" style="width:100%">
        <div class="text">Banyak Pilihan</div>
      </div>
    
      <div class="mySlides fade" style="">
        <div class="numbertext">3 / 4</div>
        <img class="banner-img" 
        src="images/heros/hero-image_3-large.jpg" 
        srcset="images/heros/hero-image_3-small.jpg 480w, 
        images/heros/hero-image_3-large.jpg 800w"
        sizes="(max-width: 600px) 480px, 800px"
        alt="Banner 3" style="width:100%">
        <div class="text">Banyak Cita Rasa</div>
      </div>

      <div class="mySlides fade" style="">
        <div class="numbertext">4 / 4</div>
        <img class="banner-img" 
        src="images/heros/hero-image_4-large.jpg" 
        srcset="images/heros/hero-image_4-small.jpg 480w, 
        images/heros/hero-image_4-large.jpg 800w"
        sizes="(max-width: 600px) 480px, 800px"
        alt="Banner 4" style="width:100%">
        <div class="text">Sangat Lezat</div>
      </div>
    
      <!-- Next and previous buttons -->
      <a class="prev" >&#10094;</a>
      <a class="next" >&#10095;</a>
    </div>
    <br>
    
    <!-- The dots/circles -->
    <div style="text-align:center">
      <span class="dot" data-slide="1"></span>
      <span class="dot" data-slide="2"></span>
      <span class="dot" data-slide="3"></span>
      <span class="dot" data-slide="4"></span>
    </div>
      <div class="content space-banner">
      <h2 class="content__heading">List All Restaurant</h2>
      <div id="restaurants" class="restaurants">

      </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.list();
    const restaurantContainer = document.querySelector('#restaurants');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const dot = document.querySelectorAll('.dot');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    SliderInitiator.init({
      slides: document.querySelectorAll('.mySlides'),
      dots: document.querySelectorAll('.dot'),
    });
    prev.addEventListener('click', () => {
      SliderInitiator._plusSlides(-1);
    });
    next.addEventListener('click', () => {
      SliderInitiator._plusSlides(1);
    });
    for (let i = 0; i < dot.length; i++) {
      dot[i].addEventListener('click', () => {
        const slide = dot[i].getAttribute('data-slide');
        SliderInitiator._currentSlide(slide);
      });
    }
  },
};

export default List;
