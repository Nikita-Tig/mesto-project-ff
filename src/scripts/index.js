import "./components/cards.js";
import "./components/card.js";
import "./components/modal.js";
import "../pages/index.css";

import initialCards from "./components/cards.js";
import { openModal, closeModal, closePopupHandler } from "./components/modal.js";
import {
  createCard,
  deleteCard,
  likeCard,
} from "./components/card.js";

const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const editProfilePopup = document.querySelector(".popup_type_edit");
const newCardPopup = document.querySelector(".popup_type_new-card");

// Форма для редоктирования профиля
const formEditProfile = document.querySelector(".popup_type_edit .popup__form");
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(".popup__input_type_description");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

editProfileButton.addEventListener("click", function () {
  handleProfileForm();
  openModal(editProfilePopup);
});

function handleProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(editProfilePopup);
}
formEditProfile.addEventListener("submit", handleProfileFormSubmit);

// Вывести карточки на страницу
const cardContainer = document.querySelector(".places__list");
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

// Форма для добавления новой карточки
const formAddCard = document.querySelector("[name='new-place']");
const cardNameInput = formAddCard.querySelector(".popup__input_type_card-name");
const cardUrlInput = formAddCard.querySelector(".popup__input_type_url");

addCardButton.addEventListener("click", () => openModal(newCardPopup));

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  cardContainer.prepend(
    createCard(
      cardUrlInput.value,
      cardNameInput.value,
      deleteCard,
      likeCard,
      openCardImage
    )
  );
  formAddCard.reset();
  closeModal(newCardPopup);
}
formAddCard.addEventListener("submit", handleCardFormSubmit);

// Функция открытия попапа карточки
const cardImagePopup = document.querySelector(".popup_type_image");
const popupImage = cardImagePopup.querySelector(".popup__image");
const popupText = cardImagePopup.querySelector(".popup__caption");

export function openCardImage(link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupText.textContent = name;
  openModal(cardImagePopup);
}

const popup = document.querySelectorAll(".popup");
popup.forEach((popup) => {
  closePopupHandler(popup)
});