const apiConfig = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-33",
  headers: {
    authorization: "cfc518a6-9a4a-4de1-b829-7c2468561a9d",
    "Content-Type": "application/json",
  },
};

// запрос карточек
export const getInitialCards = () => {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    method: "GET",
    headers: apiConfig.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

// запрос имени пользователя
export const getUserInfo = () => {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    method: "GET",
    headers: apiConfig.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//отправка новой карточки
export const uploadNewCard = (cardLink, cardName, cardContainer, popupButton, createCard, userId, cardFunctions, closeModal, popup) => {
  fetch(`${apiConfig.baseUrl}/cards`, {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({
      link: cardLink,
      name: cardName,
    }),
  }).then((res) => {
    if (res.ok) {
      popupButton.textContent = "Сохранение...";
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }).then((res) => {
    cardContainer.prepend(createCard(userId, res, cardFunctions));
  }).catch((err) => {
    console.log(err);
  }).finally(() => {
    closeModal(popup)
  })
};

// отправка имени и описания пользователя
export const uploadUserInfo = (userName, userDescription, popupButton, updateUserInfo, closeModal, popup) => {
  fetch(`${apiConfig.baseUrl}/users/me`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: userName,
      about: userDescription,
    }),
  }).then((res) => {
    if (res.ok) {
      popupButton.textContent = "Сохранение...";
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }).then(() => {
    updateUserInfo()
  }).catch((err) => {
    console.log(err);
  }).finally(() => {
    closeModal(popup)
  })
};

export const uploadUserAvatar = (userAvatar, popupButton, updateUserAvatar, closeModal, popup) => {
  fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: userAvatar,
    }),
  }).then((res) => {
    if (res.ok) {
      popupButton.textContent = "Сохранение...";
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }).then(() => {
    updateUserAvatar()
  }).catch((err) => {
    console.log(err);
  }).finally(() => {
    closeModal(popup)
  })
};

// удаление карточки с сервера
export const deleteCardApi = (deletingCardId) => {
  return fetch(`${apiConfig.baseUrl}/cards/${deletingCardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

// отправка лайка
export const likeApi = (likeCardId) => {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${likeCardId}`, {
    method: "PUT",
    headers: apiConfig.headers
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

// снятие лайка
export const unlikeApi = (unlikeCardId) => {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${unlikeCardId}`, {
    method: "DELETE",
    headers: apiConfig.headers
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

