// DOM узлы
const cardContainer = document.querySelector(".places__list");
// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
const cardsLinks = initialCards.map((element) => {
  return element.link;
});
const cardsNames = initialCards.map((element) => {
  return element.name;
});
let i = 0;

// Функция создания карточки
function addCard(link, name, functionFindDeleteButton) {
  const cardItem = cardTemplate.querySelector(".card").cloneNode(true);

  cardItem.querySelector(".card__image").src = link;
  cardItem.querySelector(".card__image").alt = name;
  cardItem.querySelector(".card__title").textContent = name;

  cardContainer.append(cardItem);
  functionFindDeleteButton(cardItem);
}

// Функция удаления карточки
function findDeleteButton(cardItem) {
  const cardDeleteButton = cardItem.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", deleteCard);

  function deleteCard() {
    cardItem.remove();
  }
}

// Вывести карточки на страницу
initialCards.forEach(() => {
  addCard(cardsLinks[i], cardsNames[i], findDeleteButton);
  i = i + 1;
});