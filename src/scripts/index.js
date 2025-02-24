import "./components/cards.js";
import "./components/card.js";
import "./components/modal.js";
import "../pages/index.css";

import { openModal, closeModal } from "./components/modal.js";
import {
  cardContainer,
  createCard,
  deleteCard,
  likeCard,
} from "./components/card.js";

const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const editProfilePopup = document.querySelector(".popup_type_edit");
const newCardPopup = document.querySelector(".popup_type_new-card");

editProfileButton.addEventListener("click", () => openModal(editProfilePopup));
addCardButton.addEventListener("click", () => openModal(newCardPopup));

// Форма для редоктирования профиля
const formEditProfile = document.querySelector("[name='edit-profile']");
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
nameInput.value = document.querySelector(".profile__title").textContent;
const jobInput = formEditProfile.querySelector(
  ".popup__input_type_description"
);
jobInput.value = document.querySelector(".profile__description").textContent;

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  // элементы, куда должны быть вставлены значения полей
  const profileName = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");
  // новые значения
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(editProfilePopup);
}
formEditProfile.addEventListener("submit", handleProfileFormSubmit);

// Форма для добавления новой карточки
const formAddCard = document.querySelector("[name='new-place']");
const cardNameInput = formAddCard.querySelector(".popup__input_type_card-name");
const cardUrlInput = formAddCard.querySelector(".popup__input_type_url");

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  cardContainer.append(
    createCard(
      cardUrlInput.value,
      cardNameInput.value,
      deleteCard,
      likeCard,
      openCardImage
    )
  );
  closeModal(newCardPopup);
}
formAddCard.addEventListener("submit", handleCardFormSubmit);

// Функция открытия попапа карточки
export function openCardImage(link, name) {
  const cardImagePopup = document.querySelector(".popup_type_image");
  const popupImage = cardImagePopup.querySelector(".popup__image");
  const popupText = cardImagePopup.querySelector(".popup__caption");
  popupImage.src = link;
  popupImage.alt = name;
  popupText.textContent = name;
  openModal(cardImagePopup);
}
