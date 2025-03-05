/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/card.js":
/*!****************************************!*\
  !*** ./src/scripts/components/card.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard)\n/* harmony export */ });\nvar cardTemplate = document.querySelector(\"#card-template\").content;\n\n// Функция создания карточки\nfunction createCard(link, name, cardDeleteCallback, cardLikeCallback, cardImagePopupCallback) {\n  var cardItem = cardTemplate.querySelector(\".card\").cloneNode(true);\n  var cardImage = cardItem.querySelector(\".card__image\");\n  var cardDeleteButton = cardItem.querySelector(\".card__delete-button\");\n  var cardLikeButton = cardItem.querySelector(\".card__like-button\");\n  cardImage.src = link;\n  cardImage.alt = name;\n  cardItem.querySelector(\".card__title\").textContent = name;\n  cardDeleteButton.addEventListener(\"click\", function () {\n    return cardDeleteCallback(cardItem);\n  });\n  cardLikeButton.addEventListener(\"click\", function () {\n    return cardLikeCallback(cardLikeButton);\n  });\n  cardImage.addEventListener(\"click\", function () {\n    return cardImagePopupCallback(link, name);\n  });\n  return cardItem;\n}\n\n// Функция удаления карточки\nfunction deleteCard(cardItem) {\n  cardItem.remove();\n}\n\n// Функция лайка карточки\nfunction likeCard(cardLikeButton) {\n  cardLikeButton.classList.toggle(\"card__like-button_is-active\");\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/components/card.js?");

/***/ }),

/***/ "./src/scripts/components/cards.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/cards.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialCards);\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/components/cards.js?");

/***/ }),

/***/ "./src/scripts/components/modal.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   closePopupHandler: () => (/* binding */ closePopupHandler),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nvar handleEscKeyUp = function handleEscKeyUp(e) {\n  if (e.key === \"Escape\") {\n    var popup = document.querySelector(\".popup_is-opened\"); // находим открытый попап\n    closeModal(popup);\n  }\n};\nvar openModal = function openModal(modal) {\n  modal.classList.add(\"popup_is-opened\");\n  document.addEventListener(\"keyup\", handleEscKeyUp);\n};\nvar closeModal = function closeModal(modal) {\n  modal.classList.remove(\"popup_is-opened\");\n  document.removeEventListener(\"keyup\", handleEscKeyUp);\n};\nvar closePopupHandler = function closePopupHandler(modal) {\n  var closeButton = modal.querySelector(\".popup__close\");\n  closeButton.addEventListener(\"click\", function () {\n    return closeModal(modal);\n  });\n  modal.addEventListener(\"mousedown\", function (evt) {\n    if (evt.target.classList.contains(\"popup\")) {\n      closeModal(modal);\n    }\n  });\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/components/modal.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openCardImage: () => (/* binding */ openCardImage)\n/* harmony export */ });\n/* harmony import */ var _components_cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/cards.js */ \"./src/scripts/components/cards.js\");\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card.js */ \"./src/scripts/components/card.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal.js */ \"./src/scripts/components/modal.js\");\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n\n\n\n\n\n\n\nvar editProfileButton = document.querySelector(\".profile__edit-button\");\nvar addCardButton = document.querySelector(\".profile__add-button\");\nvar editProfilePopup = document.querySelector(\".popup_type_edit\");\nvar newCardPopup = document.querySelector(\".popup_type_new-card\");\n\n// Форма для редоктирования профиля\nvar formEditProfile = document.querySelector(\".popup_type_edit .popup__form\");\nvar nameInput = formEditProfile.querySelector(\".popup__input_type_name\");\nvar jobInput = formEditProfile.querySelector(\".popup__input_type_description\");\nvar profileName = document.querySelector(\".profile__title\");\nvar profileDescription = document.querySelector(\".profile__description\");\neditProfileButton.addEventListener(\"click\", function () {\n  handleProfileForm();\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(editProfilePopup);\n});\nfunction handleProfileForm() {\n  nameInput.value = profileName.textContent;\n  jobInput.value = profileDescription.textContent;\n}\nfunction handleProfileFormSubmit(evt) {\n  evt.preventDefault();\n  profileName.textContent = nameInput.value;\n  profileDescription.textContent = jobInput.value;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(editProfilePopup);\n}\nformEditProfile.addEventListener(\"submit\", handleProfileFormSubmit);\n\n// Вывести карточки на страницу\nvar cardContainer = document.querySelector(\".places__list\");\n_components_cards_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(function (initialCards) {\n  cardContainer.append((0,_components_card_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(initialCards.link, initialCards.name, _components_card_js__WEBPACK_IMPORTED_MODULE_1__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_1__.likeCard, openCardImage));\n});\n\n// Форма для добавления новой карточки\nvar formAddCard = document.querySelector(\"[name='new-place']\");\nvar cardNameInput = formAddCard.querySelector(\".popup__input_type_card-name\");\nvar cardUrlInput = formAddCard.querySelector(\".popup__input_type_url\");\naddCardButton.addEventListener(\"click\", function () {\n  return (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(newCardPopup);\n});\nfunction handleCardFormSubmit(evt) {\n  evt.preventDefault();\n  cardContainer.prepend((0,_components_card_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(cardUrlInput.value, cardNameInput.value, _components_card_js__WEBPACK_IMPORTED_MODULE_1__.deleteCard, _components_card_js__WEBPACK_IMPORTED_MODULE_1__.likeCard, openCardImage));\n  formAddCard.reset();\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(newCardPopup);\n}\nformAddCard.addEventListener(\"submit\", handleCardFormSubmit);\n\n// Функция открытия попапа карточки\nvar cardImagePopup = document.querySelector(\".popup_type_image\");\nvar popupImage = cardImagePopup.querySelector(\".popup__image\");\nvar popupText = cardImagePopup.querySelector(\".popup__caption\");\nfunction openCardImage(link, name) {\n  popupImage.src = link;\n  popupImage.alt = name;\n  popupText.textContent = name;\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(cardImagePopup);\n}\nvar popup = document.querySelectorAll(\".popup\");\npopup.forEach(function (popup) {\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_2__.closePopupHandler)(popup);\n});\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;