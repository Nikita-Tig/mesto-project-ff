// DOM узлы
const cardContainer = document.querySelector(".places__list");
// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
function createCard(link, name, cardDeleteCallback) {
  const cardItem = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardItem.querySelector(".card__image");
  const cardDeleteButton = cardItem.querySelector(".card__delete-button");

  cardImage.src = link;
  cardImage.alt = name;
  cardItem.querySelector(".card__title").textContent = name;

  cardDeleteButton.addEventListener("click", () =>
    cardDeleteCallback(cardItem)
  );
  return cardItem;
}

// Функция удаления карточки
function deleteCard(cardItem) {
  cardItem.remove();
}

// Вывести карточки на страницу
initialCards.forEach((initialCards) => {
  cardContainer.append(
    createCard(initialCards.link, initialCards.name, deleteCard)
  );
});
