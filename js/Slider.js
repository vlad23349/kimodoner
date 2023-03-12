let position = 0;

const slidesToShow = 1;
const slidesToScroll = 1;

const container = document.querySelector('.slider__container');
const track = document.querySelector('.slider__track');
const items = document.querySelectorAll('.slider__item');
const itemsCount = items.length;
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const sliderDots = document.querySelectorAll('.dot');
let movePosition = slidesToScroll * (container.clientWidth / slidesToShow);

container.addEventListener('click', () => {
  movePosition = slidesToScroll * (container.clientWidth / slidesToShow);
  items.forEach((item) => {
    item.style.minWidth = `${container.clientWidth / slidesToShow}px`;
  });
});

btnPrev.addEventListener('click', () => {
  if (position === 0) {
    position = -(container.clientWidth / slidesToShow) * itemsCount;
  }

  const itemsLeft = Math.abs(position) / (container.clientWidth / slidesToShow);

  position +=
    itemsLeft >= slidesToScroll
      ? movePosition
      : itemsLeft * (container.clientWidth / slidesToShow);

  setPosition();
  setDots();
});

btnNext.addEventListener('click', () => {
  nextSlide();
  setDots();
});

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].addEventListener('click', (element) => {
    for (let i = 0; i < sliderDots.length; i++) {
      sliderDots[i].className = sliderDots[i].className.replace(' active', '');
    }
    sliderDots[i].className += ' active';
    position = (-i * container.clientWidth) / slidesToShow;
    setPosition();
  });
}

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const nextSlide = () => {
  const itemsLeft =
    itemsCount -
    (Math.abs(position) +
      slidesToShow * (container.clientWidth / slidesToShow)) /
      (container.clientWidth / slidesToShow);

  position -=
    itemsLeft >= slidesToScroll
      ? movePosition
      : itemsLeft * (container.clientWidth / slidesToShow);

  if (itemsLeft === 0) {
    position = 0;
  }

  setPosition();
};

const setDots = () => {
  for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].className = sliderDots[i].className.replace(' active', '');
  }
  sliderDots[
    Math.abs(position) / container.clientWidth / slidesToShow
  ].className += ' active';
};

setInterval(function () {
  movePosition = slidesToScroll * (container.clientWidth / slidesToShow);
  items.forEach((item) => {
    item.style.minWidth = `${container.clientWidth / slidesToShow}px`;
  });
  nextSlide();
  setDots();
}, 7000);
