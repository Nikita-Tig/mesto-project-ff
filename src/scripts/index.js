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
  unlikeApi,
};

enableValidation(validationConfig);

const editAvatarButton = document.querySelector(".profile__avatar-edit-button");
const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const editProfilePopup = document.querySelector(".popup_type_edit");
const newCardPopup = document.querySelector(".popup_type_new-card");
const editAvatarPopup = document.querySelector(".popup_type_edit-avatar");

const profileImage = document.querySelector(".profile__image");

const formEditProfile = document.querySelector("[name='edit-profile']");
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(
  ".popup__input_type_description"
);
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// обновление данных пользователя
let userId = null;
const updateUserInfo = () => {
  getUserInfo()
    .then((res) => {
      profileName.textContent = res.name;
      profileDescription.textContent = res.about;
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateUserAvatar = () => {
  getUserInfo()
    .then((res) => {
      profileImage.style.backgroundImage = `URL(${res.avatar})`;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Форма для обновления аватара
const formEditAvatar = document.querySelector("[name='edit-avatar']");
const avatarUrlInput = formEditAvatar.querySelector(".popup__input_type_url");
const avatarPopupButton = formEditAvatar.querySelector(".popup__button");

editAvatarButton.addEventListener("click", function () {
  avatarPopupButton.textContent = "Сохранить";
  openModal(editAvatarPopup);
  clearValidation(formEditAvatar, validationConfig);
});

function handleAvatarFormSubmit(evt) {
  const avatarUrl = avatarUrlInput.value;
  evt.preventDefault();
  uploadUserAvatar(avatarUrl)
    .then(() => {
      avatarPopupButton.textContent = "Сохранение...";
      updateUserAvatar();
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      closeModal(editAvatarPopup);
    });
  formEditAvatar.reset();
}
formEditAvatar.addEventListener("submit", handleAvatarFormSubmit);

// Форма для редоктирования профиля
const profilePopupButton = formEditProfile.querySelector(".popup__button");
editProfileButton.addEventListener("click", function () {
  profilePopupButton.textContent = "Сохранить";
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
  uploadUserInfo(nameInput.value, jobInput.value)
    .then(() => {
      profilePopupButton.textContent = "Сохранение...";
      updateUserInfo()
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      closeModal(editProfilePopup);
    });
}
formEditProfile.addEventListener("submit", handleProfileFormSubmit);

// Форма для добавления новой карточки
const cardContainer = document.querySelector(".places__list");
const formAddCard = document.querySelector("[name='new-place']");
const cardNameInput = formAddCard.querySelector(".popup__input_type_card-name");
const cardUrlInput = formAddCard.querySelector(".popup__input_type_url");
const cardPopupButton = formAddCard.querySelector(".popup__button");

addCardButton.addEventListener("click", function () {
  cardPopupButton.textContent = "Сохранить";
  openModal(newCardPopup);
  clearValidation(formAddCard, validationConfig);
});

function handleCardFormSubmit(evt) {
  const cardUrl = cardUrlInput.value;
  const cardName = cardNameInput.value;
  evt.preventDefault();
  uploadNewCard(cardUrl, cardName)
    .then((res) => {
      cardContainer.prepend(createCard(userId, res, cardFunctions));
      cardPopupButton.textContent = "Сохранение...";
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      closeModal(newCardPopup);
    });
  formAddCard.reset();
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
      profileName.textContent = user.name;
      profileDescription.textContent = user.about;
      profileImage.style.backgroundImage = `URL(${user.avatar})`;
      userId = user._id;

      // Вывести карточки на страницу
      cards.forEach((card) => {
        cardContainer.append(createCard(userId, card, cardFunctions));
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });
