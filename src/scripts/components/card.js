import initialCards from "./cards.js";
import { openCardImage } from "../index.js";

export const cardContainer = document.querySelector(".places__list");
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
  if (cardLikeButton.classList.contains("card__like-button_is-active")) {
    cardLikeButton.classList.remove("card__like-button_is-active");
  } else {
    cardLikeButton.classList.add("card__like-button_is-active");
  }
}

// Вывести карточки на страницу
initialCards.forEach((initialCards) => {
  cardContainer.append(
    createCard(
      initialCards.link,
      initialCards.name,
      deleteCard,
      likeCard,
      openCardImage
    )
  );
});
