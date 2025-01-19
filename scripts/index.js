const profileSection = document.querySelector(".profile");
const addCardButton = profileSection.querySelector(".profile__add-button");

const cardContainer = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

const cardsLinks = initialCards.map((element) => {
  return element.link;
});
const cardsNames = initialCards.map((element) =>{
  return element.name;
});
let i = 0

// Функция создания карточки
function addCard(link, name, findDeleteButton) {
  const cardItem = cardTemplate.querySelector(".card").cloneNode(true);

  cardItem.querySelector(".card__image").src = link;
  cardItem.querySelector(".card__image").alt = name;
  cardItem.querySelector(".card__title").textContent = name;
  i = i + 1

  cardContainer.append(cardItem);
  findDeleteButton(cardItem);
};

// Функция удаления карточки
function findDeleteButton(cardItem) {
  const cardDeleteButton = cardItem.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", deleteCard);

  function deleteCard() {
    cardItem.remove();
  }
}
// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Вывести карточки на страницу

initialCards.forEach(() => {
  addCard(cardsLinks[i], cardsNames[i], findDeleteButton)
});