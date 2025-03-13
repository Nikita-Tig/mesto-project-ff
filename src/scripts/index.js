import "./components/card.js";
import "./components/modal.js";
import "./components/validation.js";
import "./components/api.js";
import "../pages/index.css";

import {
  deleteCardApi,
  getInitialCards,
  getUserInfo,
  likeApi,
  unlikeApi,
  uploadNewCard,
  uploadUserAvatar,
  uploadUserInfo,
} from "./components/api.js";
import {
  openModal,
  closeModal,
  closePopupHandler,
} from "./components/modal.js";
import {
  createCard,
  deleteCard,
  likeCard,
  removeDeleteBtn,
} from "./components/card.js";
import {
  enableValidation,
  clearValidation,
  validationConfig,
} from "./components/validation.js";

const cardFunctions = {
  deleteCard,
  likeCard,
  removeDeleteBtn,
  openCardImage,
  deleteCardApi,
  likeApi,
  unlikeApi
};

enableValidation(validationConfig);

const editAvatarButton = document.querySelector(".profile__avatar-edit-button")
const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const editProfilePopup = document.querySelector(".popup_type_edit");
const newCardPopup = document.querySelector(".popup_type_new-card");
const editAvatarPopup = document.querySelector(".popup_type_edit-avatar")

const profileImage = document.querySelector(".profile__image");

const formEditProfile = document.querySelector("[name='edit-profile']");
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(
  ".popup__input_type_description"
);
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// запрос и загрузка данных пользователя
let userId = null;
getUserInfo()
  .then((res) => {
    profileName.textContent = res.name;
    profileDescription.textContent = res.about;
    profileImage.style.backgroundImage = `URL(${res.avatar})`;
    userId = res._id;
  })
  .catch((err) => {
    console.log(err);
  });

const updateUserInfo = () => {
  getUserInfo()
  .then((res) => {
    profileName.textContent = res.name;
    profileDescription.textContent = res.about;
  })
  .catch((err) => {
    console.log(err);
  });
}

const updateUserAvatar = () => {
  getUserInfo()
  .then((res) => {
    profileImage.style.backgroundImage = `URL(${res.avatar})`;
  })
  .catch((err) => {
    console.log(err);
  });
}

// Форма для обновления аватара
const formEditAvatar = document.querySelector("[name='edit-avatar']");
const avatarUrlInput = formEditAvatar.querySelector(".popup__input_type_url");
const avatarPopupButton = formEditAvatar.querySelector(".popup__button")


editAvatarButton.addEventListener("click", function () {
  avatarPopupButton.textContent = "Сохранить"
  openModal(editAvatarPopup);
});

function handleAvatarFormSubmit(evt) {
  const avatarUrl = avatarUrlInput.value;
  evt.preventDefault();
  uploadUserAvatar(avatarUrl, avatarPopupButton, updateUserAvatar, closeModal, editAvatarPopup)
  formEditAvatar.reset();
  clearValidation(formEditAvatar, validationConfig);
}
formEditAvatar.addEventListener("submit", handleAvatarFormSubmit);  

// Форма для редоктирования профиля
const profilePopupButton = formEditProfile.querySelector(".popup__button")
editProfileButton.addEventListener("click", function () {
  profilePopupButton.textContent = "Сохранить"
  handleProfileForm();
  openModal(editProfilePopup);
  clearValidation(formEditProfile, validationConfig);
});

function handleProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  uploadUserInfo(nameInput.value, jobInput.value, profilePopupButton, updateUserInfo, closeModal, editProfilePopup);
}
formEditProfile.addEventListener("submit", handleProfileFormSubmit);

// Форма для добавления новой карточки
const cardContainer = document.querySelector(".places__list");
const formAddCard = document.querySelector("[name='new-place']");
const cardNameInput = formAddCard.querySelector(".popup__input_type_card-name");
const cardUrlInput = formAddCard.querySelector(".popup__input_type_url");
const cardPopupButton = formAddCard.querySelector(".popup__button")

addCardButton.addEventListener("click", function () {
  cardPopupButton.textContent = "Сохранить"
  openModal(newCardPopup);
});

function handleCardFormSubmit(evt) {
  const cardUrl = cardUrlInput.value;
  const cardName = cardNameInput.value;
  evt.preventDefault();
  uploadNewCard(cardUrl, cardName, cardContainer, cardPopupButton, createCard, userId, cardFunctions, closeModal, newCardPopup)
  formAddCard.reset();
  clearValidation(formAddCard, validationConfig);
}
formAddCard.addEventListener("submit", handleCardFormSubmit);

// Функция открытия попапа карточки
const cardImagePopup = document.querySelector(".popup_type_image");
const popupImage = cardImagePopup.querySelector(".popup__image");
const popupText = cardImagePopup.querySelector(".popup__caption");

function openCardImage(link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupText.textContent = name;
  openModal(cardImagePopup);
}

const popup = document.querySelectorAll(".popup");
popup.forEach((popup) => {
  closePopupHandler(popup);
});



Promise.all([getInitialCards(), getUserInfo()])
  .then(([cards, user]) => {
    if ([cards.ok && user.ok]) {
      console.log(cards);
      console.log(user);
      

      // Вывести карточки на страницу
      cards.forEach((card) => {
        cardContainer.append(
          createCard(
            userId,
            card,
            cardFunctions,
          )
        );
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });
