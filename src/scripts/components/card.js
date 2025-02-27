const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
export function createCard(
  link,
  name,
  cardDeleteCallback,
  cardLikeCallback,
  cardImagePopupCallback
) {
  const cardItem = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardItem.querySelector(".card__image");
  const cardDeleteButton = cardItem.querySelector(".card__delete-button");
  const cardLikeButton = cardItem.querySelector(".card__like-button");

  cardImage.src = link;
  cardImage.alt = name;
  cardItem.querySelector(".card__title").textContent = name;

  cardDeleteButton.addEventListener("click", () =>
    cardDeleteCallback(cardItem)
  );
  cardLikeButton.addEventListener("click", () =>
    cardLikeCallback(cardLikeButton)
  );
  cardImage.addEventListener("click", () => cardImagePopupCallback(link, name));
  return cardItem;
}

// Функция удаления карточки
export function deleteCard(cardItem) {
  cardItem.remove();
}

// Функция лайка карточки
export function likeCard(cardLikeButton) {
  cardLikeButton.classList.toggle('card__like-button_is-active');
}
