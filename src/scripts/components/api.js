const apiConfig = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-33",
  headers: {
    authorization: "cfc518a6-9a4a-4de1-b829-7c2468561a9d",
    "Content-Type": "application/json",
  },
};

const checkServerStatus = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

// запрос карточек
export const getInitialCards = () => {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    method: "GET",
    headers: apiConfig.headers,
  }).then((res) => {
    return checkServerStatus(res);
  });
};

// запрос имени пользователя
export const getUserInfo = () => {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    method: "GET",
    headers: apiConfig.headers,
  }).then((res) => {
    return checkServerStatus(res);
  });
};

//отправка новой карточки
export const uploadNewCard = (cardLink, cardName) => {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({
      link: cardLink,
      name: cardName,
    }),
  }).then((res) => {
    return checkServerStatus(res);
  });
};

// отправка имени и описания пользователя
export const uploadUserInfo = (userName, userDescription) => {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: userName,
      about: userDescription,
    }),
  }).then((res) => {
    return checkServerStatus(res);
  });
};

export const uploadUserAvatar = (userAvatar) => {
  return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: userAvatar,
    }),
  }).then((res) => {
    return checkServerStatus(res);
  });
};

// удаление карточки с сервера
export const deleteCardApi = (deletingCardId) => {
  return fetch(`${apiConfig.baseUrl}/cards/${deletingCardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then((res) => {
    return checkServerStatus(res);
  });
};

// отправка лайка
export const likeApi = (likeCardId) => {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${likeCardId}`, {
    method: "PUT",
    headers: apiConfig.headers,
  }).then((res) => {
    return checkServerStatus(res);
  });
};

// снятие лайка
export const unlikeApi = (unlikeCardId) => {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${unlikeCardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then((res) => {
    return checkServerStatus(res);
  });
};
