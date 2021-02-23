/* eslint-disable linebreak-style */
const SliderInitiator = {
  async init({slides, dots}) {
    this._slides = slides;
    this._dots = dots;
    this._slideIndex = 1;
    this._showSlides(this._slideIndex);
  },

  // Next/previous controls
  _plusSlides(n) {
    this._showSlides(this._slideIndex += n);
  },

  // Thumbnail image controls
  _currentSlide(n) {
    this._showSlides(this._slideIndex = n);
  },

  _showSlides(n) {
    let i;
    const slides = this._slides;
    const dots = this._dots;
    if (n > slides.length) {
      this._slideIndex = 1;
    }
    if (n < 1) {
      this._slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this._slideIndex-1].style.display = 'block';
    dots[this._slideIndex-1].className += ' active';
  },
};

export default SliderInitiator;
