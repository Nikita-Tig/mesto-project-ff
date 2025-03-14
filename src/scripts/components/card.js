const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
export function createCard(
  userId,
  card,
  {
    deleteCard,
    likeCard,
    removeDeleteBtn,
    openCardImage,
    deleteCardApi,
    likeApi,
    unlikeApi,
  }
) {
  const cardItem = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardItem.querySelector(".card__image");
  const cardDeleteButton = cardItem.querySelector(".card__delete-button");
  const cardLikeButton = cardItem.querySelector(".card__like-button");
  const cardLikeCounter = cardItem.querySelector(".card__like-counter");

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardItem.querySelector(".card__title").textContent = card.name;
  cardLikeCounter.textContent = card.likes.length;

  if (userId != card.owner._id) {
    removeDeleteBtn(cardDeleteButton);
  } else {
    cardDeleteButton.addEventListener("click", () =>
      deleteCard(cardItem, card._id, deleteCardApi)
  );
}

  if(likeAlreadyAdded(card.likes ,userId)) {
    cardLikeButton.classList.add("card__like-button_is-active")
  }

  cardLikeButton.addEventListener("click", () =>
    likeCard(
      cardLikeButton,
      cardLikeCounter,
      card._id,
      likeApi,
      unlikeApi,
    )
  );

  cardImage.addEventListener("click", () =>
    openCardImage(card.link, card.name)
  );
  return cardItem;
}

export const removeDeleteBtn = (cardDeleteButton) => {
  cardDeleteButton.remove();
};

// Функция удаления карточки
export function deleteCard(cardItem, cardId, deleteCardApi) {
  deleteCardApi(cardId)
    .then(() => {
      cardItem.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

// проверка на ранее поставленный лайк
const likeAlreadyAdded = (likes ,userId) => {
    return likes.some(function(like) {
      return like._id === userId;
    });
}

// Функция лайка карточки
export function likeCard(
  cardLikeButton,
  cardLikeCounter,
  cardId,
  likeApi,
  unlikeApi,
) {
  if(cardLikeButton.classList.contains("card__like-button_is-active"))
    {
      unlikeApi(cardId)
      .then((res) => {
        cardLikeButton.classList.toggle("card__like-button_is-active");
        cardLikeCounter.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      likeApi(cardId)
      .then((res) => {
        cardLikeButton.classList.toggle("card__like-button_is-active");
        cardLikeCounter.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
    }
}
