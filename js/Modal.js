const data = [
  {
    id: 1,
    title: 'МЕГА Королевская',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '2 кг',
    price: '22 РУБ',
    composition:
      'Лаваш, курица, ветчина, грибы, сыр, салат, помидор, огурец маринованный, чесночный соус, кетчуп',
  },
  {
    id: 2,
    title: 'Королевская',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '1 кг',
    price: '12 РУБ',
    composition:
      'Лаваш, курица, ветчина, грибы, сыр, салат, помидор, огурец маринованный, чесночный соус, кетчуп',
  },
  {
    id: 3,
    title: 'Мясная',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '500 г',
    price: '9 РУБ',
    composition:
      'Лаваш, говядина, салат, помидор, лук маринованный, огурец маринованный, чесночный соус, кетчуп',
  },
  {
    id: 4,
    title: 'Большая',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '600 г',
    price: '9 РУБ',
    composition:
      'Лаваш, курица, ветчина, грибы, сыр, салат, помидор, огурец маринованный, чесночный соус, кетчуп',
  },
  {
    id: 5,
    title: 'Стандарт',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '450 г',
    price: '6 РУБ',
    composition:
      'Лаваш, курица, ветчина, грибы, сыр, салат, помидор, огурец маринованный, чесночный соус, кетчуп',
  },
  {
    id: 6,
    title: 'Овощная',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '450 г',
    price: '6 РУБ',
    composition:
      'Лаваш, сыр, грибы, капуста, помидор, огурец маринованный, чесночный соус, кетчуп',
  },
  {
    id: 7,
    title: 'Терияки',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '550 г',
    price: '7 РУБ',
    composition:
      'Лаваш, курица, салат, помидор, огурец маринованный, чесночный соус, соус терияки',
  },
  {
    id: 8,
    title: 'Барбекю',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '550 г',
    price: '7 РУБ',
    composition:
      'Лаваш, курица, салат, помидор, огурец маринованный, чесночный соус, соус барбекю',
  },
  {
    id: 9,
    title: 'Горчичная',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '550 г',
    price: '7 РУБ',
    composition:
      'Лаваш, курица, салат, помидор, огурец маринованный, чесночный соус, соус гарчичный',
  },
  {
    id: 10,
    title: 'Грибная',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '550 г',
    price: '7 РУБ',
    composition:
      'Лаваш, курица, салат, помидор, огурец маринованный, чесночный соус, соус грибной',
  },
  {
    id: 11,
    title: 'Сырная',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '550 г',
    price: '7 РУБ',
    composition:
      'Лаваш, курица, салат, помидор, огурец маринованный, чесночный соус, соус сырный',
  },
  {
    id: 12,
    title: 'Итальяно',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '600 г',
    price: '8 РУБ',
    composition:
      'Лаваш сырный, курица, салат, помидор, сыр, грибы, огурец маринованный, чесночный соус, фирменный соус',
  },
  {
    id: 13,
    title: 'Фантазия',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '600 г',
    price: '8 РУБ',
    composition:
      'Лаваш, курица, салат, помидор, перец болгарский, сыр, оливки, огурец маринованный, чесночный соус, кетчуп',
  },
  {
    id: 14,
    title: 'Мексикано',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '600 г',
    price: '8 РУБ',
    composition:
      'Лаваш, курица, салат, помидор, огурец маринованный, халапеньо, чесночный соус, соус чили',
  },
  {
    id: 15,
    title: 'Мексикано',
    urlToImage: './images/menu/kebab.jpg',
    description: '150 г',
    price: '3 РУБ',
    composition:
      'Лаваш, говядина, салат, помидор, лук, огурец маринованный, чесночный соус, кетчуп',
  },
  {
    id: 16,
    title: 'Комплекс с курицей',
    urlToImage: './images/rsz_slider-image3.jpg',
    description: '150 г',
    price: '3 РУБ',
    composition:
      'Картофель фри, курица, салат, помидор, огурец маринованный, чесночный соус, кетчуп',
  },
  {
    id: 17,
    title: 'Бургер',
    urlToImage: './images/menu/burger.jpg',
    description: '350 г',
    price: '6.50 РУБ',
    composition:
      'Булка, котлета из говядины, лист салата, помидор, огурец маринованный, соус бургер, кетчуп',
  },
  {
    id: 18,
    title: 'Чизбургер',
    urlToImage: './images/menu/burger.jpg',
    description: '360 г',
    price: '7.50 РУБ',
    composition:
      'Булка, котлета из говядины, лист салата, помидор, огурец маринованный, сыр, соус бургер, кетчуп',
  },
  {
    id: 20,
    title: 'Хот-дог в лаваше',
    urlToImage: './images/menu/hot-dog.jpg',
    description: '350 г',
    price: '3.50 РУБ',
    composition:
      'Лаваш, сосиски, салат, помидор, огурец маринованный, чесночный соус, кетчуп',
  },
  {
    id: 20,
    title: 'Фалафель',
    urlToImage: './images/menu/falafel.jpg',
    description: '350 г',
    price: '5 РУБ',
    composition:
      'Лаваш, помидор, салат, огурец маринованный, хумус, чесночный соус',
  },
  {
    id: 21,
    title: 'Плов с курицей',
    urlToImage: './images/menu/plov.jpg',
    description: '550 г',
    price: '6 РУБ',
    composition:
      'Рис, курица, салат, помидор, огурец маринованный, чесночный соус, кетчуп',
  },
  {
    id: 22,
    title: 'Плов с говядиной',
    urlToImage: './images/menu/plov.jpg',
    description: '550 г',
    price: '7 РУБ',
    composition:
      'Рис, говядина, салат, помидор, лук маринованный, огурец маринованный, чесночный соус, кетчуп',
  },
  {
    id: 23,
    title: 'Картофель Фри',
    urlToImage: './images/menu/potatofree.png',
    description: '150 г',
    price: '3 РУБ',
    composition: '',
  },
  {
    id: 24,
    title: 'Блин с сыром',
    urlToImage: './images/menu/blin.jpg',
    description: '150 г',
    price: '3 РУБ',
    composition: '',
  },
  {
    id: 25,
    title: 'Блин с ветчиной и сыром',
    urlToImage: './images/menu/blin.jpg',
    description: '200 г',
    price: '4 РУБ',
    composition: '',
  },
  {
    id: 26,
    title: 'Блин с грибами и сыром',
    urlToImage: './images/menu/blin.jpg',
    description: '200 г',
    price: '4 РУБ',
    composition: '',
  },
  {
    id: 27,
    title: 'Блин с грибами, ветчиной и сыром',
    urlToImage: './images/menu/blin.jpg',
    description: '250 г',
    price: '5 РУБ',
    composition: '',
  },
  {
    id: 28,
    title: 'Coca-cola',
    urlToImage: './images/menu/cola.png',
    description: '0.5 л',
    price: '2 РУБ',
    composition: '',
  },
  {
    id: 29,
    title: 'Fanta',
    urlToImage: './images/menu/fanta.png',
    description: '0.5 л',
    price: '2 РУБ',
    composition: '',
  },
  {
    id: 30,
    title: 'Sprite',
    urlToImage: './images/menu/sprite.png',
    description: '0.5 л',
    price: '2 РУБ',
    composition: '',
  },
  {
    id: 31,
    title: 'BonAqua',
    urlToImage: './images/menu/bonaqua.png',
    description: '0.5 л',
    price: '2 РУБ',
    composition: '',
  },
  {
    id: 32,
    title: 'Pulpy',
    urlToImage: './images/menu/pulpy.jpg',
    description: '0.5 л',
    price: '2.50 РУБ',
    composition: '',
  },
  {
    id: 33,
    title: 'Burn',
    urlToImage: './images/menu/burn.jpg',
    description: '0.33 л',
    price: '3.50 РУБ',
    composition: '',
  },
  {
    id: 34,
    title: 'Сок Добрый',
    urlToImage: './images/menu/dobriy.jpg',
    description: '0.33 л',
    price: '2 РУБ',
    composition: '',
  },
];

// Get the modal
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const menu = document.querySelectorAll('.menu__block');

menu.forEach((menu) => {
  menu.addEventListener('click', (e) => {
    overlay.style.display = 'flex';
    let template = '';
    modal.innerText = '';
    let modalContent = document.createElement('div');
    modalContent.className = 'modal__content';

    template += `<span class="modal__close-icon">&times;</span>`;

    template += `<img class="menu__image" src=${
      data[menu.id - 1].urlToImage
    } alt="strategy">`;

    template += `<div class="menu__content">`;

    template += `<h4 class="menu__name">${data[menu.id - 1].title}</h4>`;

    template += `<p class="menu__description">${
      data[menu.id - 1].description
    }</p>`;
    template += `<p class="menu__composition">${
      data[menu.id - 1].composition
    }</p>`;
    template += `<div class="menu__bottom">`;
    template += `<span class="menu__price">${data[menu.id - 1].price}</span>`;
    template += `<a href="tel:+375259995953" class="menu__phone" href="#no_scroll">`;
    template += `<button class="menu__button">+375259995953</button>`;
    template += `</a>`;
    template += `</div>`;
    template += `</div>`;

    modalContent.innerHTML = template;
    modal.append(modalContent);
    document
      .querySelector('.modal__close-icon')
      .addEventListener('click', (e) => {
        overlay.style.display = 'none';
      });
  });
});
// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});
