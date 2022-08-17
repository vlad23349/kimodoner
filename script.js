window.onload = function () {
  addTagsClickHandler();
};

const addTagsClickHandler = () => {
  document.querySelector('.menu__tags').addEventListener('click', (e) => {
    if (e.target.classList.contains('tag')) {
      let clickedTag = e.target;
      if (e.target.classList.contains('tag_selected')) {
        removeSelectedTags(clickedTag);
        filterMenuBySelectedTag(document.querySelector('.tag_selected'));
      } else {
        selectClickedTag(clickedTag);
        filterMenuBySelectedTag(clickedTag.innerText);
      }
    }
  });
};

const removeSelectedTags = (clickedTag) => {
  clickedTag.classList.remove('tag_selected');
  clickedTag.classList.add('tag_bordered');
};

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.add('tag_selected');
  clickedTag.classList.remove('tag_bordered');
};

const filterMenuBySelectedTag = (clickedTag) => {
  // Все ячейки меню
  const subtags = document.querySelectorAll('.menu__block');
  const allSelectedTags = document.querySelectorAll('.tag_selected');
  if (clickedTag === null) {
    subtags.forEach((subtags) => {
      subtags.classList.remove('menu__block_hidden');
    });
  } else {
    //Перебор ячееек меню
    subtags.forEach((subtags) => {
      let countTags = 0;
      let countSelect = 0;
      subtags.classList.add('menu__block_hidden');
      //Перебор тегов ячейки меню
      subtags.querySelectorAll('.tag').forEach((tag) => {
        //Перебор выделенных тегов
        allSelectedTags.forEach((selectedTag) => {
          //Если тег ячейки меню равняется выделенному тегу
          if (tag.innerText === selectedTag.innerText) {
            subtags.classList.remove('menu__block_hidden');
            countTags++;
          }
        });
      });
      if (countTags !== allSelectedTags.length)
        subtags.classList.add('menu__block_hidden');
      allSelectedTags.forEach((selectedTag) => {
        if (
          selectedTag.innerText === 'Курица' ||
          selectedTag.innerText === 'Говядина' ||
          selectedTag.innerText === 'Ветчина'
        )
          countSelect++;
      });
      if (countSelect === 1 && allSelectedTags[0].innerText === 'Курица') {
        subtags.querySelectorAll('.tag').forEach((tag) => {
          if (tag.innerText === 'Говядина' || tag.innerText === 'Ветчина')
            subtags.classList.add('menu__block_hidden');
        });
      } else if (
        countSelect === 1 &&
        allSelectedTags[0].innerText === 'Говядина'
      ) {
        subtags.querySelectorAll('.tag').forEach((tag) => {
          if (tag.innerText === 'Курица' || tag.innerText === 'Ветчина')
            subtags.classList.add('menu__block_hidden');
        });
      } else if (
        countSelect === 1 &&
        allSelectedTags[0].innerText === 'Ветчина'
      ) {
        subtags.querySelectorAll('.tag').forEach((tag) => {
          if (tag.innerText === 'Курица' || tag.innerText === 'Говядина')
            subtags.classList.add('menu__block_hidden');
        });
      }
    });
  }
};

//Прокрутка к элементу по нажатию на кнопку
const buttons = document.querySelector('.promo-block');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const fifth = document.querySelector('.fifth');
const sixth = document.querySelector('.sixth');

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('shaurma')) {
    first.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    });
  } else if (e.target.classList.contains('burger')) {
    second.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  } else if (e.target.classList.contains('pilaf')) {
    third.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  } else if (e.target.classList.contains('kebab')) {
    fourth.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  } else if (e.target.classList.contains('pancake')) {
    fifth.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  } else if (e.target.classList.contains('drinks')) {
    sixth.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  }
});

function fadeOut(el) {
  document.querySelector(el).style.opacity = 0;

  document.querySelector(el).style.display = 'none';
}

function fadeIn(el) {
  document.querySelector(el).style.opacity = 1;

  document.querySelector(el).style.display = 'block';
}

window.addEventListener('scroll', function () {
  var height = document.querySelector('.html').scrollTop;
  if (height > 200) {
    fadeIn('#back2Top');
  } else {
    fadeOut('#back2Top');
  }
});
document.querySelector('#back2Top').click(function (event) {
  event.preventDefault();
  document.querySelector('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});
