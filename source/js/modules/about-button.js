const aboutButton = document.querySelector('.about__accordion-button');
const mobileSpan = document.querySelector('.is-closed');

const buttonToggle = () => {
  if (mobileSpan && aboutButton && aboutButton.textContent === 'Подробнее') {
    aboutButton.textContent = 'Свернуть';
    mobileSpan.classList.remove('is-closed');
    mobileSpan.classList.add('is-opened');
  } else {
    aboutButton.textContent = 'Подробнее';
    mobileSpan.classList.remove('is-opened');
    mobileSpan.classList.add('is-closed');
  }
};

const addButtonToggle = () => {
  aboutButton.addEventListener('click', buttonToggle);
};

export {addButtonToggle};
