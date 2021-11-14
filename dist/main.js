/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ui/addProductPage/store/types.js":
/*!******************************************!*\
  !*** ./ui/addProductPage/store/types.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WRITE_PHOTO_URL": function() { return /* binding */ WRITE_PHOTO_URL; }
/* harmony export */ });
var WRITE_PHOTO_URL = 'ADD_PRODUCT_PAGE/WRITE_PHOTO_URL';

/***/ }),

/***/ "./api/api.ts":
/*!********************!*\
  !*** ./api/api.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAuctions": function() { return /* binding */ loadAuctions; },
/* harmony export */   "loadProduct": function() { return /* binding */ loadProduct; },
/* harmony export */   "loadCurrentPrice": function() { return /* binding */ loadCurrentPrice; },
/* harmony export */   "modificatedCurrentPrice": function() { return /* binding */ modificatedCurrentPrice; },
/* harmony export */   "addNewProfile": function() { return /* binding */ addNewProfile; },
/* harmony export */   "loadProfile": function() { return /* binding */ loadProfile; },
/* harmony export */   "loadCategories": function() { return /* binding */ loadCategories; },
/* harmony export */   "sendUserData": function() { return /* binding */ sendUserData; },
/* harmony export */   "addNewAuction": function() { return /* binding */ addNewAuction; },
/* harmony export */   "loadProductsByCategory": function() { return /* binding */ loadProductsByCategory; },
/* harmony export */   "sendUserCash": function() { return /* binding */ sendUserCash; },
/* harmony export */   "loadUserCash": function() { return /* binding */ loadUserCash; },
/* harmony export */   "buyCurrentProduct": function() { return /* binding */ buyCurrentProduct; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "../node_modules/js-cookie/dist/js.cookie.mjs");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://localhost:5000",
  headers: {}
});
var loadAuctions = function loadAuctions() {
  return instance.get("api/fetch-auctions");
};
var loadProduct = function loadProduct(auctionId) {
  return instance.get("api/fetch-product/".concat(auctionId));
};
var loadCurrentPrice = function loadCurrentPrice(auctionId) {
  return instance.get("api/fetch-currentPrice/".concat(auctionId));
};
var modificatedCurrentPrice = function modificatedCurrentPrice(auctionId, stepPrice, seePrice) {
  return instance.get("api/modificated-currentPrice/".concat(auctionId, "&").concat(stepPrice, "&").concat(seePrice), {
    headers: {
      token: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get('token')
    }
  });
};
var addNewProfile = function addNewProfile(profile) {
  return instance.post("api/add-profile", {
    profile: profile
  });
};
var loadProfile = function loadProfile(email) {
  return instance.get("api/fetch-profile/".concat(email));
};
var loadCategories = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", instance.get("api/fetch-categories", {
              headers: {
                token: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get('token')
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadCategories() {
    return _ref.apply(this, arguments);
  };
}();
var sendUserData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(token) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", instance.post('api/save-user', {
              token: token
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function sendUserData(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var addNewAuction = function addNewAuction(data) {
  return instance.post("api/add-auction", {
    data: data
  });
};
var loadProductsByCategory = function loadProductsByCategory(category) {
  return instance.get("api/fetch-products-by-category/".concat(category), {
    headers: {
      token: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get('token')
    }
  });
};
var sendUserCash = function sendUserCash(cash, token) {
  return instance.post("api/update-user-cash", {
    cash: cash,
    token: token
  });
};
var loadUserCash = function loadUserCash(email, token) {
  return instance.post("api/fetch-user-cash", {
    email: email,
    token: token
  });
};
var buyCurrentProduct = function buyCurrentProduct(currentPrice, productData, userData, token) {
  return instance.post("api/buy-product", {
    currentPrice: currentPrice,
    productData: productData,
    userData: userData,
    token: token
  });
};

/***/ }),

/***/ "./firebase/firebase.ts":
/*!******************************!*\
  !*** ./firebase/firebase.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": function() { return /* binding */ auth; }
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ "../node_modules/firebase/compat/app/dist/index.esm.js");
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ "../node_modules/firebase/compat/auth/dist/index.esm.js");


var firebaseApp = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp({
  apiKey: "AIzaSyCSLwVZhQFnhGahpyu1rCyEz9HB6Wd1dNA",
  authDomain: "shop-6d93c.firebaseapp.com",
  projectId: "shop-6d93c",
  storageBucket: "shop-6d93c.appspot.com",
  messagingSenderId: "317748600857",
  appId: "1:317748600857:web:34fd908995ad85d7b54a88",
  measurementId: ({"REACT_APP_API_URL":"http://localhost:5000","REACT_APP_FIREBASE_KEY":"AIzaSyCSLwVZhQFnhGahpyu1rCyEz9HB6Wd1dNA","REACT_APP_AUTH_DOMAIN":"shop-6d93c.firebaseapp.com","REACT_APP_PROJECT_ID":"shop-6d93c","REACT_APP_STORAGE_BUCKET":"shop-6d93c.appspot.com","REACT_APP_MESSAGING_SENDER_ID":"317748600857","REACT_APP_APP_ID":"1:317748600857:web:34fd908995ad85d7b54a88"}).REACT_APP_MEASUREMENT_ID
});
var auth = firebaseApp.auth();
/* harmony default export */ __webpack_exports__["default"] = (firebaseApp);

/***/ }),

/***/ "./store.ts":
/*!******************!*\
  !*** ./store.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");
/* harmony import */ var _ui_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/ui/navigation */ "./ui/navigation/index.ts");
/* harmony import */ var _ui_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/products */ "./ui/products/index.ts");
/* harmony import */ var _ui_addProductPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/addProductPage */ "./ui/addProductPage/index.ts");
/* harmony import */ var _ui_auctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/ui/auctions */ "./ui/auctions/index.ts");
/* harmony import */ var _ui_productPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/ui/productPage */ "./ui/productPage/index.ts");
/* harmony import */ var _ui_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/ui/profile */ "./ui/profile/index.ts");








var reducers = (0,redux__WEBPACK_IMPORTED_MODULE_7__.combineReducers)({
  loginData: _ui_navigation__WEBPACK_IMPORTED_MODULE_1__.reducer,
  categoriesData: _ui_products__WEBPACK_IMPORTED_MODULE_2__.reducer,
  addProductPageData: _ui_addProductPage__WEBPACK_IMPORTED_MODULE_3__.reducer,
  auctionsData: _ui_auctions__WEBPACK_IMPORTED_MODULE_4__.reducer,
  productData: _ui_productPage__WEBPACK_IMPORTED_MODULE_5__.reducer,
  profileData: _ui_profile__WEBPACK_IMPORTED_MODULE_6__.reducer
});
// @ts-ignore;
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_7__.compose;
var store = (0,redux__WEBPACK_IMPORTED_MODULE_7__.createStore)(reducers, composeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_7__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_0__["default"]))); // @ts-ignore

window.store = store;
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/validate.ts":
/*!***********************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/validate.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "../node_modules/yup/es/index.js");

var numberOnlyReg = /^[0-9]*$/;
var validate = yup__WEBPACK_IMPORTED_MODULE_0__.object({
  productName: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(4, 'Должно быть не менее 4 символов').max(35, 'Должно быть не более 35 символов').required('Поле не должно быть пустым'),
  category: yup__WEBPACK_IMPORTED_MODULE_0__.string().max(50, 'Должно быть не более 50 символов').required('Выберите одну из категорий'),
  description: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(10, 'Должно быть не менее 10 символов').max(300, 'Описание может содержать максимум 300 символов').required('Поле не должно быть пустым'),
  startPrice: yup__WEBPACK_IMPORTED_MODULE_0__.string().matches(numberOnlyReg, 'Цена может быть только числовым значением').max(11, 'Цена может быть не более 999,999,999').required('Поле не должно быть пустым'),
  priceStep: yup__WEBPACK_IMPORTED_MODULE_0__.string().matches(numberOnlyReg, 'Шаг цены может быть только числовым значением').max(10, 'Шаг цены ограничен 10 символами').required('Поле не должно быть пустым'),
  seePrice: yup__WEBPACK_IMPORTED_MODULE_0__.string().matches(numberOnlyReg, 'Цена может быть только числовым значением').max(15, 'Описание может содержать максимум 20 символов').required('Поле не должно быть пустым'),
  stepTime: yup__WEBPACK_IMPORTED_MODULE_0__.string().matches(numberOnlyReg, 'Время в секундах можно указывать только в виде числовых значений').max(10, 'Максимальное количество символов: 10').required('Поле не должно быть пустым'),
  percentTimeStep: yup__WEBPACK_IMPORTED_MODULE_0__.string().matches(numberOnlyReg, 'Допускаються только числовые значения').max(2, 'Значение процента должно быть от 0 до 99').required('Поле не должно быть пустым')
});

/***/ }),

/***/ "./ui/addProductPage/hooks/useAddProductForm.ts":
/*!******************************************************!*\
  !*** ./ui/addProductPage/hooks/useAddProductForm.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAddProductForm": function() { return /* binding */ useAddProductForm; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

var useAddProductForm = function useAddProductForm() {
  var categoriesData = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.categoriesData.categories;
  });
  var photoUrlsData = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.addProductPageData.photoUrls;
  });
  var userData = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.loginData.userData;
  });
  return {
    categoriesData: categoriesData,
    photoUrlsData: photoUrlsData,
    userData: userData
  };
};

/***/ }),

/***/ "./ui/addProductPage/index.ts":
/*!************************************!*\
  !*** ./ui/addProductPage/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductPage": function() { return /* reexport safe */ _pages_AddProductPage__WEBPACK_IMPORTED_MODULE_0__.AddProductPage; },
/* harmony export */   "reducer": function() { return /* reexport safe */ _store_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer; }
/* harmony export */ });
/* harmony import */ var _pages_AddProductPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/AddProductPage */ "./ui/addProductPage/pages/AddProductPage/index.ts");
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/reducer */ "./ui/addProductPage/store/reducer.ts");



/***/ }),

/***/ "./ui/addProductPage/pages/AddProductPage/index.ts":
/*!*********************************************************!*\
  !*** ./ui/addProductPage/pages/AddProductPage/index.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductPage": function() { return /* reexport safe */ _AddProductPage__WEBPACK_IMPORTED_MODULE_0__.AddProductPage; }
/* harmony export */ });
/* harmony import */ var _AddProductPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProductPage */ "./ui/addProductPage/pages/AddProductPage/AddProductPage.tsx");


/***/ }),

/***/ "./ui/addProductPage/store/action.ts":
/*!*******************************************!*\
  !*** ./ui/addProductPage/store/action.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "writePhotoUrlAction": function() { return /* binding */ writePhotoUrlAction; },
/* harmony export */   "writePhotoUrl": function() { return /* binding */ writePhotoUrl; },
/* harmony export */   "addAuction": function() { return /* binding */ addAuction; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./ui/addProductPage/store/types.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/api */ "./api/api.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var writePhotoUrlAction = function writePhotoUrlAction(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.WRITE_PHOTO_URL,
    data: data
  };
};
var writePhotoUrl = function writePhotoUrl(url) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(writePhotoUrlAction(url));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var addAuction = function addAuction(formValues, startDate, finishDate, photoUrlsData, auctionId, userData) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var obj;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              obj = {
                userEmail: userData[0].email,
                userUid: userData[0].uid,
                productName: formValues.productName,
                category: formValues.category,
                description: formValues.description,
                startPrice: formValues.startPrice,
                priceStep: formValues.priceStep,
                seePrice: formValues.seePrice,
                stepTime: formValues.stepTime,
                percentTimeStep: formValues.percentTimeStep,
                startDate: startDate,
                finishDate: finishDate,
                photoUrlsData: photoUrlsData,
                auctionId: auctionId,
                isInStock: true
              };
              (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.addNewAuction)(obj);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./ui/addProductPage/store/reducer.ts":
/*!********************************************!*\
  !*** ./ui/addProductPage/store/reducer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./ui/addProductPage/store/types.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  photoUrls: []
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.WRITE_PHOTO_URL:
      return _objectSpread(_objectSpread({}, state), {}, {
        photoUrls: [].concat(_toConsumableArray(state.photoUrls), [action.data])
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./ui/auctions/hooks/useAuctionPage.ts":
/*!*********************************************!*\
  !*** ./ui/auctions/hooks/useAuctionPage.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAuctionPage": function() { return /* binding */ useAuctionPage; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

var useAuctionPage = function useAuctionPage() {
  var auctionsData = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.auctionsData.auctions;
  });
  return {
    auctionsData: auctionsData
  };
};

/***/ }),

/***/ "./ui/auctions/index.ts":
/*!******************************!*\
  !*** ./ui/auctions/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuctionsPage": function() { return /* reexport safe */ _pages_AuctionsPage__WEBPACK_IMPORTED_MODULE_0__.AuctionsPage; },
/* harmony export */   "reducer": function() { return /* reexport safe */ _store_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer; },
/* harmony export */   "Auction": function() { return /* reexport safe */ _components_Auction_Auction__WEBPACK_IMPORTED_MODULE_2__.Auction; },
/* harmony export */   "fetchAuctions": function() { return /* reexport safe */ _store_action__WEBPACK_IMPORTED_MODULE_3__.fetchAuctions; }
/* harmony export */ });
/* harmony import */ var _pages_AuctionsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/AuctionsPage */ "./ui/auctions/pages/AuctionsPage/index.ts");
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/reducer */ "./ui/auctions/store/reducer.ts");
/* harmony import */ var _components_Auction_Auction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Auction/Auction */ "./ui/auctions/components/Auction/Auction.tsx");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/action */ "./ui/auctions/store/action.ts");





/***/ }),

/***/ "./ui/auctions/pages/AuctionsPage/index.ts":
/*!*************************************************!*\
  !*** ./ui/auctions/pages/AuctionsPage/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuctionsPage": function() { return /* reexport safe */ _AuctionsPage__WEBPACK_IMPORTED_MODULE_0__.AuctionsPage; }
/* harmony export */ });
/* harmony import */ var _AuctionsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuctionsPage */ "./ui/auctions/pages/AuctionsPage/AuctionsPage.tsx");


/***/ }),

/***/ "./ui/auctions/store/action.ts":
/*!*************************************!*\
  !*** ./ui/auctions/store/action.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "writeAuctions": function() { return /* binding */ writeAuctions; },
/* harmony export */   "fetchAuctions": function() { return /* binding */ fetchAuctions; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./ui/auctions/store/types.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/api */ "./api/api.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var writeAuctions = function writeAuctions(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.WRITE_AUCTIONS,
    data: data
  };
};
var fetchAuctions = function fetchAuctions() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var response, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.loadAuctions)();

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.data;

            case 5:
              data = _context.sent;
              dispatch(writeAuctions(data.auctions));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./ui/auctions/store/reducer.ts":
/*!**************************************!*\
  !*** ./ui/auctions/store/reducer.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./ui/auctions/store/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  auctions: []
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.WRITE_AUCTIONS:
      return _objectSpread(_objectSpread({}, state), {}, {
        auctions: action.data
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./ui/auctions/store/types.ts":
/*!************************************!*\
  !*** ./ui/auctions/store/types.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WRITE_AUCTIONS": function() { return /* binding */ WRITE_AUCTIONS; }
/* harmony export */ });
var WRITE_AUCTIONS = 'ADD_AUCTIONS/WRITE_AUCTIONS';

/***/ }),

/***/ "./ui/footer/pages/FooterPage/index.ts":
/*!*********************************************!*\
  !*** ./ui/footer/pages/FooterPage/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterPage": function() { return /* reexport safe */ _FooterPage__WEBPACK_IMPORTED_MODULE_0__.FooterPage; }
/* harmony export */ });
/* harmony import */ var _FooterPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterPage */ "./ui/footer/pages/FooterPage/FooterPage.tsx");


/***/ }),

/***/ "./ui/home/index.ts":
/*!**************************!*\
  !*** ./ui/home/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* reexport safe */ _pages_homePage__WEBPACK_IMPORTED_MODULE_0__.HomePage; }
/* harmony export */ });
/* harmony import */ var _pages_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/homePage */ "./ui/home/pages/homePage/index.ts");


/***/ }),

/***/ "./ui/home/pages/homePage/index.ts":
/*!*****************************************!*\
  !*** ./ui/home/pages/homePage/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* reexport safe */ _HomePage__WEBPACK_IMPORTED_MODULE_0__.HomePage; }
/* harmony export */ });
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage */ "./ui/home/pages/homePage/HomePage.tsx");


/***/ }),

/***/ "./ui/navigation/components/GetCashModal/validate.ts":
/*!***********************************************************!*\
  !*** ./ui/navigation/components/GetCashModal/validate.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "../node_modules/yup/es/index.js");

var numberOnlyReg = /^[0-9]*$/;
var validate = yup__WEBPACK_IMPORTED_MODULE_0__.object({
  cash: yup__WEBPACK_IMPORTED_MODULE_0__.string().matches(numberOnlyReg, 'Сумму нужно указать числом').min(1, 'Должно быть не менее 1 символа').max(10, 'Должно быть не более 10 символов').required('Поле не может быть пустым')
});

/***/ }),

/***/ "./ui/navigation/const/routes.ts":
/*!***************************************!*\
  !*** ./ui/navigation/const/routes.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": function() { return /* binding */ Routes; }
/* harmony export */ });
var Routes = {
  Home: '/',
  Products: '/products',
  AddProductPage: '/add-product',
  AuctionsPage: '/auctions-page',
  AuctionsPageItem: '/auctions-page/:auctionId?',
  ProfilePage: '/profile'
};

/***/ }),

/***/ "./ui/navigation/forms/LoginForm/validate.ts":
/*!***************************************************!*\
  !*** ./ui/navigation/forms/LoginForm/validate.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "../node_modules/yup/es/index.js");

var emailReg = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
var validate = yup__WEBPACK_IMPORTED_MODULE_0__.object({
  email: yup__WEBPACK_IMPORTED_MODULE_0__.string().matches(emailReg, 'Email должен иметь вид: xxx@zzz.cc').required('Email не может быть пустым'),
  password: yup__WEBPACK_IMPORTED_MODULE_0__.string().required('Введите пароль')
});

/***/ }),

/***/ "./ui/navigation/forms/RegForm/validate.ts":
/*!*************************************************!*\
  !*** ./ui/navigation/forms/RegForm/validate.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "../node_modules/yup/es/index.js");

var emailReg = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
var validate = yup__WEBPACK_IMPORTED_MODULE_0__.object({
  email: yup__WEBPACK_IMPORTED_MODULE_0__.string().matches(emailReg, 'Есть ошибочка! Email должен иметь вид: xxx@zzz.cc').required('Email не может быть пустым'),
  login: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(4, 'Логин должен быть не менее 4 символов').max(15, 'Логин должен быть не более 15 символов').required('Логин не может быть пустым'),
  reg_password: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(6, 'Пароль должень иметь не менее 6 символов').required('Введите пароль'),
  confirmPassword: yup__WEBPACK_IMPORTED_MODULE_0__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_0__.ref('reg_password'), null], 'Пароли не совпадают').required('Повторите пароль')
});

/***/ }),

/***/ "./ui/navigation/hooks/useNavigationPage/useNavigationPage.ts":
/*!********************************************************************!*\
  !*** ./ui/navigation/hooks/useNavigationPage/useNavigationPage.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useNavigationPage": function() { return /* binding */ useNavigationPage; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

var useNavigationPage = function useNavigationPage() {
  var userData = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.loginData.userData;
  });
  var userCash = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.loginData.currentCash;
  });
  return {
    userData: userData,
    userCash: userCash
  };
};

/***/ }),

/***/ "./ui/navigation/index.ts":
/*!********************************!*\
  !*** ./ui/navigation/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationPage": function() { return /* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_0__.NavigationPage; },
/* harmony export */   "reducer": function() { return /* reexport safe */ _store_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer; },
/* harmony export */   "useNavigationPage": function() { return /* reexport safe */ _hooks_useNavigationPage_useNavigationPage__WEBPACK_IMPORTED_MODULE_2__.useNavigationPage; },
/* harmony export */   "fetchUserCash": function() { return /* reexport safe */ _store_action__WEBPACK_IMPORTED_MODULE_3__.fetchUserCash; }
/* harmony export */ });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./ui/navigation/pages/index.ts");
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/reducer */ "./ui/navigation/store/reducer.ts");
/* harmony import */ var _hooks_useNavigationPage_useNavigationPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useNavigationPage/useNavigationPage */ "./ui/navigation/hooks/useNavigationPage/useNavigationPage.ts");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/action */ "./ui/navigation/store/action.ts");





/***/ }),

/***/ "./ui/navigation/pages/index.ts":
/*!**************************************!*\
  !*** ./ui/navigation/pages/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationPage": function() { return /* reexport safe */ _NavigationPage__WEBPACK_IMPORTED_MODULE_0__.NavigationPage; }
/* harmony export */ });
/* harmony import */ var _NavigationPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationPage */ "./ui/navigation/pages/NavigationPage.tsx");


/***/ }),

/***/ "./ui/navigation/store/action.ts":
/*!***************************************!*\
  !*** ./ui/navigation/store/action.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "writeCurrentUserData": function() { return /* binding */ writeCurrentUserData; },
/* harmony export */   "writeCashData": function() { return /* binding */ writeCashData; },
/* harmony export */   "updateUserRole": function() { return /* binding */ updateUserRole; },
/* harmony export */   "cleanUserData": function() { return /* binding */ cleanUserData; },
/* harmony export */   "updateUserCash": function() { return /* binding */ updateUserCash; },
/* harmony export */   "fetchUserCash": function() { return /* binding */ fetchUserCash; },
/* harmony export */   "clearUserData": function() { return /* binding */ clearUserData; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./ui/navigation/store/types.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/api */ "./api/api.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var writeCurrentUserData = function writeCurrentUserData(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.WRITE_CURRENT_USER_DATA,
    data: data
  };
};
var writeCashData = function writeCashData(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.WRITE_CASH_DATA,
    data: data
  };
};
var updateUserRole = function updateUserRole(token) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var response, newObj;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.sendUserData)(token);

            case 2:
              response = _context.sent;
              newObj = {
                auth_time: response.data.auth_time,
                email: response.data.email,
                email_verified: response.data.email_verified,
                name: response.data.name,
                picture: response.data.picture,
                roles: response.data.roles,
                uid: response.data.uid
              };
              dispatch(writeCurrentUserData(newObj));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var cleanUserData = function cleanUserData() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.CLEAN_USER_DATA,
    data: []
  };
};
var updateUserCash = function updateUserCash(cash, token) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.sendUserCash)(cash, token);

            case 2:
              response = _context2.sent;
              dispatch(writeCashData(response.data.cash));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var fetchUserCash = function fetchUserCash(email, token) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      var response;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.loadUserCash)(email, token);

            case 2:
              response = _context3.sent;
              dispatch(writeCashData(response.data.cash));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var clearUserData = function clearUserData() {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // @ts-ignore
              dispatch(cleanUserData());

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./ui/navigation/store/reducer.ts":
/*!****************************************!*\
  !*** ./ui/navigation/store/reducer.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./ui/navigation/store/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  userData: [],
  currentCash: 0
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.WRITE_CURRENT_USER_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        userData: [action.data]
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__.WRITE_CASH_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentCash: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__.CLEAN_USER_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        userData: [],
        currentCash: 0
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./ui/navigation/store/types.ts":
/*!**************************************!*\
  !*** ./ui/navigation/store/types.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WRITE_CURRENT_USER_DATA": function() { return /* binding */ WRITE_CURRENT_USER_DATA; },
/* harmony export */   "WRITE_CASH_DATA": function() { return /* binding */ WRITE_CASH_DATA; },
/* harmony export */   "CLEAN_USER_DATA": function() { return /* binding */ CLEAN_USER_DATA; }
/* harmony export */ });
var WRITE_CURRENT_USER_DATA = 'NAVIGATION/WRITE_CURRENT_USER_DATA';
var WRITE_CASH_DATA = 'NAVIGATION/WRITE_CASH_DATA';
var CLEAN_USER_DATA = 'NAVIGATION/CLEAN_USER_DATA';

/***/ }),

/***/ "./ui/productPage/hooks/useProductPage.ts":
/*!************************************************!*\
  !*** ./ui/productPage/hooks/useProductPage.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProductPage": function() { return /* binding */ useProductPage; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

var useProductPage = function useProductPage() {
  var productData = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.productData.product[0];
  });
  return {
    productData: productData
  };
};

/***/ }),

/***/ "./ui/productPage/hooks/useProductPageWithData.ts":
/*!********************************************************!*\
  !*** ./ui/productPage/hooks/useProductPageWithData.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProductPageWithData": function() { return /* binding */ useProductPageWithData; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

var useProductPageWithData = function useProductPageWithData() {
  var currentPrice = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.productData.currentPrice;
  });
  return {
    currentPrice: currentPrice
  };
};

/***/ }),

/***/ "./ui/productPage/index.ts":
/*!*********************************!*\
  !*** ./ui/productPage/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPage": function() { return /* reexport safe */ _pages_ProductPage__WEBPACK_IMPORTED_MODULE_0__.ProductPage; },
/* harmony export */   "reducer": function() { return /* reexport safe */ _store_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer; }
/* harmony export */ });
/* harmony import */ var _pages_ProductPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/ProductPage */ "./ui/productPage/pages/ProductPage/index.ts");
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/reducer */ "./ui/productPage/store/reducer.ts");



/***/ }),

/***/ "./ui/productPage/pages/ProductPage/index.ts":
/*!***************************************************!*\
  !*** ./ui/productPage/pages/ProductPage/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPage": function() { return /* reexport safe */ _ProductPage__WEBPACK_IMPORTED_MODULE_0__.ProductPage; }
/* harmony export */ });
/* harmony import */ var _ProductPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductPage */ "./ui/productPage/pages/ProductPage/ProductPage.tsx");


/***/ }),

/***/ "./ui/productPage/store/action.ts":
/*!****************************************!*\
  !*** ./ui/productPage/store/action.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setProduct": function() { return /* binding */ setProduct; },
/* harmony export */   "setCurrentPrice": function() { return /* binding */ setCurrentPrice; },
/* harmony export */   "fetchProduct": function() { return /* binding */ fetchProduct; },
/* harmony export */   "fetchCurrentPrice": function() { return /* binding */ fetchCurrentPrice; },
/* harmony export */   "clearCurrentPrice": function() { return /* binding */ clearCurrentPrice; },
/* harmony export */   "buyProduct": function() { return /* binding */ buyProduct; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./ui/productPage/store/types.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/api */ "./api/api.ts");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation */ "./ui/navigation/index.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var setProduct = function setProduct(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.FETCH_PRODUCT,
    data: data
  };
};
var setCurrentPrice = function setCurrentPrice(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.FETCH_CURRENT_PRICE,
    data: data
  };
};
var fetchProduct = function fetchProduct(auctionId) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var response, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.loadProduct)(auctionId);

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.data;

            case 5:
              data = _context.sent;
              dispatch(setProduct(data));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var fetchCurrentPrice = function fetchCurrentPrice(auctionId) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var response, data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.loadCurrentPrice)(auctionId);

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return response.data.currentPrice;

            case 5:
              data = _context2.sent;
              dispatch(setCurrentPrice(data));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var clearCurrentPrice = function clearCurrentPrice() {
  return function (dispatch) {
    dispatch(setCurrentPrice(''));
  };
};
var buyProduct = function buyProduct(currentPrice, productData, userData, token) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      var response, data;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.buyCurrentProduct)(currentPrice, productData, userData, token);

            case 2:
              response = _context3.sent;
              _context3.next = 5;
              return response.data;

            case 5:
              data = _context3.sent;

              if (data.status === 'good') {
                // @ts-ignore
                dispatch(fetchProduct(productData.auctionId)); // @ts-ignore

                dispatch((0,_navigation__WEBPACK_IMPORTED_MODULE_2__.fetchUserCash)(userData.email, token));
              }

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./ui/productPage/store/reducer.ts":
/*!*****************************************!*\
  !*** ./ui/productPage/store/reducer.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./ui/productPage/store/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  product: [],
  currentPrice: ''
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.FETCH_PRODUCT:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__.FETCH_CURRENT_PRICE:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentPrice: action.data
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./ui/productPage/store/types.ts":
/*!***************************************!*\
  !*** ./ui/productPage/store/types.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FETCH_PRODUCT": function() { return /* binding */ FETCH_PRODUCT; },
/* harmony export */   "FETCH_CURRENT_PRICE": function() { return /* binding */ FETCH_CURRENT_PRICE; },
/* harmony export */   "DELETE_CURRENT_PRICE": function() { return /* binding */ DELETE_CURRENT_PRICE; }
/* harmony export */ });
var FETCH_PRODUCT = 'PRODUCT_PAGE/FETCH_PRODUCT';
var FETCH_CURRENT_PRICE = 'PRODUCT_PAGE/FETCH_CURRENT_PRICE';
var DELETE_CURRENT_PRICE = 'PRODUCT_PAGE/DELETE_CURRENT_PRICE';

/***/ }),

/***/ "./ui/products/hooks/useCategoriesPage.ts":
/*!************************************************!*\
  !*** ./ui/products/hooks/useCategoriesPage.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCategoriesPage": function() { return /* binding */ useCategoriesPage; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

var useCategoriesPage = function useCategoriesPage() {
  var categoriesData = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.categoriesData.categories;
  });
  var productsData = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.categoriesData.productsByCategory;
  });
  return {
    categoriesData: categoriesData,
    productsData: productsData
  };
};

/***/ }),

/***/ "./ui/products/index.ts":
/*!******************************!*\
  !*** ./ui/products/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPage": function() { return /* reexport safe */ _pages_CategoriesPage__WEBPACK_IMPORTED_MODULE_0__.CategoriesPage; },
/* harmony export */   "reducer": function() { return /* reexport safe */ _store_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer; },
/* harmony export */   "fetchCategories": function() { return /* reexport safe */ _store_action__WEBPACK_IMPORTED_MODULE_2__.fetchCategories; }
/* harmony export */ });
/* harmony import */ var _pages_CategoriesPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/CategoriesPage */ "./ui/products/pages/CategoriesPage/index.ts");
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/reducer */ "./ui/products/store/reducer.ts");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/action */ "./ui/products/store/action.ts");




/***/ }),

/***/ "./ui/products/pages/CategoriesPage/index.ts":
/*!***************************************************!*\
  !*** ./ui/products/pages/CategoriesPage/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPage": function() { return /* reexport safe */ _CategoriesPage__WEBPACK_IMPORTED_MODULE_0__.CategoriesPage; }
/* harmony export */ });
/* harmony import */ var _CategoriesPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriesPage */ "./ui/products/pages/CategoriesPage/CategoriesPage.tsx");


/***/ }),

/***/ "./ui/products/store/action.ts":
/*!*************************************!*\
  !*** ./ui/products/store/action.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCategories": function() { return /* binding */ setCategories; },
/* harmony export */   "setProducts": function() { return /* binding */ setProducts; },
/* harmony export */   "fetchCategories": function() { return /* binding */ fetchCategories; },
/* harmony export */   "fetchProductsByCategory": function() { return /* binding */ fetchProductsByCategory; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./ui/products/store/types.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/api */ "./api/api.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var setCategories = function setCategories(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.FETCH_CATEGORIES_DATA,
    data: data
  };
};
var setProducts = function setProducts(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.FETCH_PRODUCTS_DATA,
    data: data
  };
};
var fetchCategories = function fetchCategories() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var response, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.loadCategories)();

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.data.categories;

            case 5:
              data = _context.sent;
              dispatch(setCategories(data));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var fetchProductsByCategory = function fetchProductsByCategory(category) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var response, data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.loadProductsByCategory)(category);

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return response.data;

            case 5:
              data = _context2.sent;
              dispatch(setProducts(data));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./ui/products/store/reducer.ts":
/*!**************************************!*\
  !*** ./ui/products/store/reducer.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./ui/products/store/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  categories: [],
  productsByCategory: []
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.FETCH_CATEGORIES_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        categories: action.data
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__.FETCH_PRODUCTS_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        productsByCategory: action.data
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./ui/products/store/types.ts":
/*!************************************!*\
  !*** ./ui/products/store/types.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FETCH_CATEGORIES_DATA": function() { return /* binding */ FETCH_CATEGORIES_DATA; },
/* harmony export */   "FETCH_PRODUCTS_DATA": function() { return /* binding */ FETCH_PRODUCTS_DATA; }
/* harmony export */ });
var FETCH_CATEGORIES_DATA = 'CATEGORIES/FETCH_CATEGORIES_DATA';
var FETCH_PRODUCTS_DATA = 'CATEGORIES/FETCH_PRODUCTS_DATA';

/***/ }),

/***/ "./ui/profile/forms/validate.ts":
/*!**************************************!*\
  !*** ./ui/profile/forms/validate.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": function() { return /* binding */ validate; }
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "../node_modules/yup/es/index.js");

var validate = yup__WEBPACK_IMPORTED_MODULE_0__.object({
  login: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(6, 'Должно быть не менее 6 символов').max(15, 'Должно быть не более 15 символов'),
  name: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(6, 'Должно быть не менее 6 символов').max(20, 'Должно быть не более 20 символов'),
  secondName: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(6, 'Должно быть не менее 6 символов').max(20, 'Должно быть не более 20 символов')
});

/***/ }),

/***/ "./ui/profile/hooks/useProfilePage.ts":
/*!********************************************!*\
  !*** ./ui/profile/hooks/useProfilePage.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProfilePage": function() { return /* binding */ useProfilePage; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

var useProfilePage = function useProfilePage() {
  var userProfile = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
    return state.profileData.profileData;
  });
  return {
    userProfile: userProfile
  };
};

/***/ }),

/***/ "./ui/profile/index.ts":
/*!*****************************!*\
  !*** ./ui/profile/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": function() { return /* reexport safe */ _pages_ProfilePage__WEBPACK_IMPORTED_MODULE_0__.ProfilePage; },
/* harmony export */   "reducer": function() { return /* reexport safe */ _store_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer; }
/* harmony export */ });
/* harmony import */ var _pages_ProfilePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/ProfilePage */ "./ui/profile/pages/ProfilePage/index.ts");
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/reducer */ "./ui/profile/store/reducer.ts");



/***/ }),

/***/ "./ui/profile/pages/ProfilePage/index.ts":
/*!***********************************************!*\
  !*** ./ui/profile/pages/ProfilePage/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": function() { return /* reexport safe */ _ProfilePage__WEBPACK_IMPORTED_MODULE_0__.ProfilePage; }
/* harmony export */ });
/* harmony import */ var _ProfilePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfilePage */ "./ui/profile/pages/ProfilePage/ProfilePage.tsx");


/***/ }),

/***/ "./ui/profile/store/action.ts":
/*!************************************!*\
  !*** ./ui/profile/store/action.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "writeProfile": function() { return /* binding */ writeProfile; },
/* harmony export */   "addProfile": function() { return /* binding */ addProfile; },
/* harmony export */   "addPhotoToProfile": function() { return /* binding */ addPhotoToProfile; },
/* harmony export */   "fetchProfileData": function() { return /* binding */ fetchProfileData; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./ui/profile/store/types.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/api */ "./api/api.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var writeProfile = function writeProfile(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.WRITE_PROFILE_DATA,
    data: data
  };
};
var addProfile = function addProfile(formValues, email, photoUrl, currentUserProfile) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var obj;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              obj = {
                email: email,
                login: formValues.login,
                name: formValues.login,
                secondName: formValues.secondName,
                photoUrl: photoUrl
              };

              if (obj.photoUrl == '' && currentUserProfile[0] !== undefined) {
                if (currentUserProfile[0].photoUrl !== undefined) {
                  if (currentUserProfile[0].photoUrl.length > 0) {
                    obj.photoUrl = currentUserProfile[0].photoUrl;
                  }
                }
              }

              (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.addNewProfile)(obj);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var addPhotoToProfile = function addPhotoToProfile(email, photoUrl, currentUserProfile) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var obj;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              obj = {
                email: email,
                login: currentUserProfile[0].login,
                name: currentUserProfile[0].name,
                secondName: currentUserProfile[0].secondName,
                photoUrl: photoUrl
              };
              _context2.next = 3;
              return (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.addNewProfile)(obj);

            case 3:
              // @ts-ignore
              dispatch(fetchProfileData(email));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var fetchProfileData = function fetchProfileData(email) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      var res, data;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,_api_api__WEBPACK_IMPORTED_MODULE_1__.loadProfile)(email);

            case 2:
              res = _context3.sent;
              _context3.next = 5;
              return res.data;

            case 5:
              data = _context3.sent;
              dispatch(writeProfile(data));

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./ui/profile/store/reducer.ts":
/*!*************************************!*\
  !*** ./ui/profile/store/reducer.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./ui/profile/store/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  profileData: []
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.WRITE_PROFILE_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        profileData: [action.data]
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./ui/profile/store/types.ts":
/*!***********************************!*\
  !*** ./ui/profile/store/types.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WRITE_PROFILE_DATA": function() { return /* binding */ WRITE_PROFILE_DATA; }
/* harmony export */ });
var WRITE_PROFILE_DATA = 'PROFILE/WRITE_PROFILE_DATA';

/***/ }),

/***/ "./App.tsx":
/*!*****************!*\
  !*** ./App.tsx ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ui_navigation_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/navigation/pages */ "./ui/navigation/pages/index.ts");
/* harmony import */ var _ui_footer_pages_FooterPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/footer/pages/FooterPage */ "./ui/footer/pages/FooterPage/index.ts");
/* harmony import */ var _ui_navigation_components_AppRoutes_AppRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/navigation/components/AppRoutes/AppRoutes */ "./ui/navigation/components/AppRoutes/AppRoutes.tsx");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _context_SettingsUserModalContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/SettingsUserModalContext */ "./context/SettingsUserModalContext.tsx");
/* harmony import */ var _context_GetCashModalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context/GetCashModalContext */ "./context/GetCashModalContext.tsx");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.module.scss */ "./App.module.scss");










var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_GetCashModalContext__WEBPACK_IMPORTED_MODULE_6__.GetCashModalProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_SettingsUserModalContext__WEBPACK_IMPORTED_MODULE_5__.UserModalProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_navigation_pages__WEBPACK_IMPORTED_MODULE_1__.NavigationPage, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_navigation_components_AppRoutes_AppRoutes__WEBPACK_IMPORTED_MODULE_3__.AppRoutes, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_footer_pages_FooterPage__WEBPACK_IMPORTED_MODULE_2__.FooterPage, null))))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./context/AuthContext.tsx":
/*!*********************************!*\
  !*** ./context/AuthContext.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContext": function() { return /* binding */ AuthContext; },
/* harmony export */   "AuthUpdateContext": function() { return /* binding */ AuthUpdateContext; },
/* harmony export */   "IsAuthContext": function() { return /* binding */ IsAuthContext; },
/* harmony export */   "AuthUpdateTokenContext": function() { return /* binding */ AuthUpdateTokenContext; },
/* harmony export */   "AuthProvider": function() { return /* binding */ AuthProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "../node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _ui_navigation_store_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/navigation/store/action */ "./ui/navigation/store/action.ts");
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/firebase */ "./firebase/firebase.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)('');
var AuthUpdateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
var IsAuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
var AuthUpdateTokenContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
var AuthProvider = function AuthProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      token = _useState2[0],
      setToken = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isAuth = _useState4[0],
      setIsAuth = _useState4[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var cookieToken = js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get('token');

  var checkUserAuth = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__["default"].auth().onAuthStateChanged(function (user) {
                if (user) {
                  dispatch((0,_ui_navigation_store_action__WEBPACK_IMPORTED_MODULE_3__.updateUserRole)(token));
                  setIsAuth(true);
                } else js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].remove('token');
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkUserAuth(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (cookieToken) {
      checkUserAuth(cookieToken);
    }
  }, [cookieToken, token]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (token === '' && cookieToken !== undefined) {
      setToken(cookieToken);
    }
  }, [token]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(IsAuthContext.Provider, {
    value: isAuth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AuthContext.Provider, {
    value: token
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AuthUpdateContext.Provider, {
    value: setIsAuth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AuthUpdateTokenContext.Provider, {
    value: setToken
  }, children))));
};

/***/ }),

/***/ "./context/GetCashModalContext.tsx":
/*!*****************************************!*\
  !*** ./context/GetCashModalContext.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetCashModalShowContext": function() { return /* binding */ GetCashModalShowContext; },
/* harmony export */   "GetCashModalCloseContext": function() { return /* binding */ GetCashModalCloseContext; },
/* harmony export */   "GetCashModalStatusContext": function() { return /* binding */ GetCashModalStatusContext; },
/* harmony export */   "GetCashModalProvider": function() { return /* binding */ GetCashModalProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var GetCashModalShowContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(function () {});
var GetCashModalCloseContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(function () {});
var GetCashModalStatusContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
var GetCashModalProvider = function GetCashModalProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isActiveModal = _useState2[0],
      setIsActiveModal = _useState2[1];

  var closeModal = function closeModal() {
    setIsActiveModal(false);
  };

  var showModal = function showModal() {
    setIsActiveModal(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GetCashModalShowContext.Provider, {
    value: showModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GetCashModalCloseContext.Provider, {
    value: closeModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GetCashModalStatusContext.Provider, {
    value: isActiveModal
  }, children)));
};

/***/ }),

/***/ "./context/SettingsUserModalContext.tsx":
/*!**********************************************!*\
  !*** ./context/SettingsUserModalContext.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalShowContext": function() { return /* binding */ ModalShowContext; },
/* harmony export */   "ModalCloseContext": function() { return /* binding */ ModalCloseContext; },
/* harmony export */   "ModalStatusContext": function() { return /* binding */ ModalStatusContext; },
/* harmony export */   "UserModalProvider": function() { return /* binding */ UserModalProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var ModalShowContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(function () {});
var ModalCloseContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(function () {});
var ModalStatusContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(false);
var UserModalProvider = function UserModalProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isActiveModal = _useState2[0],
      setIsActiveModal = _useState2[1];

  var closeModal = function closeModal() {
    setIsActiveModal(false);
  };

  var showModal = function showModal() {
    setIsActiveModal(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalShowContext.Provider, {
    value: showModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalCloseContext.Provider, {
    value: closeModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalStatusContext.Provider, {
    value: isActiveModal
  }, children)));
};

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./store.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./App.tsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./index.css");






react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
  store: _store__WEBPACK_IMPORTED_MODULE_2__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], null))), document.getElementById('app'));

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/AddProductForm.tsx":
/*!******************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/AddProductForm.tsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductForm": function() { return /* binding */ AddProductForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/firebase/firebase */ "./firebase/firebase.ts");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ "../node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validate */ "./ui/addProductPage/form/AddProductForm/validate.ts");
/* harmony import */ var _hooks_useAddProductForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useAddProductForm */ "./ui/addProductPage/hooks/useAddProductForm.ts");
/* harmony import */ var src_ui_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/ui/products */ "./ui/products/index.ts");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/action */ "./ui/addProductPage/store/action.ts");
/* harmony import */ var _LoadingImageInForm_LoadingImageInForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LoadingImageInForm/LoadingImageInForm */ "./ui/addProductPage/form/AddProductForm/LoadingImageInForm/LoadingImageInForm.tsx");
/* harmony import */ var _Datepicker_Datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Datepicker/Datepicker */ "./ui/addProductPage/form/AddProductForm/Datepicker/Datepicker.tsx");
/* harmony import */ var _TextField_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TextField/TextField */ "./ui/addProductPage/form/AddProductForm/TextField/TextField.tsx");
/* harmony import */ var _DescriptionField_DescriptionField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DescriptionField/DescriptionField */ "./ui/addProductPage/form/AddProductForm/DescriptionField/DescriptionField.tsx");
/* harmony import */ var _SelectCategoryField_SelectCategoryField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SelectCategoryField/SelectCategoryField */ "./ui/addProductPage/form/AddProductForm/SelectCategoryField/SelectCategoryField.tsx");
/* harmony import */ var _SettingAuctionField_SettingAuctionField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SettingAuctionField/SettingAuctionField */ "./ui/addProductPage/form/AddProductForm/SettingAuctionField/SettingAuctionField.tsx");
/* harmony import */ var _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AddProductForm.module.scss */ "./ui/addProductPage/form/AddProductForm/AddProductForm.module.scss");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "../node_modules/react-datepicker/dist/react-datepicker.css");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















var AddProductForm = function AddProductForm() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useAddProductForm = (0,_hooks_useAddProductForm__WEBPACK_IMPORTED_MODULE_6__.useAddProductForm)(),
      categoriesData = _useAddProductForm.categoriesData,
      photoUrlsData = _useAddProductForm.photoUrlsData,
      userData = _useAddProductForm.userData;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      auctionId = _useState2[0],
      setAuctionId = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      filePath = _useState4[0],
      setFilePath = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      isUploaded = _useState6[0],
      setIsUploaded = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      startDate = _useState8[0],
      setStartDate = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      finishDate = _useState10[0],
      setFinishDate = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isDownButton = _useState12[0],
      setIsDownButton = _useState12[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,src_ui_products__WEBPACK_IMPORTED_MODULE_7__.fetchCategories)());
    setAuctionId(shortid__WEBPACK_IMPORTED_MODULE_4___default().generate());
  }, []);

  var saveFile = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var file, storageRef, pathPhoto, fileRef, metadata;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsUploaded(false);
              file = e.target.files[0];
              storageRef = _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage().ref();
              pathPhoto = "assets/images/auctions/".concat(auctionId, "/").concat(file.name);
              fileRef = storageRef.child(pathPhoto);
              metadata = {
                contentType: 'image/jpeg'
              };
              _context.next = 8;
              return fileRef.put(file, metadata);

            case 8:
              _context.t0 = dispatch;
              _context.t1 = _store_action__WEBPACK_IMPORTED_MODULE_8__.writePhotoUrl;
              _context.next = 12;
              return fileRef.getDownloadURL();

            case 12:
              _context.t2 = _context.sent;
              _context.t3 = (0, _context.t1)(_context.t2);
              (0, _context.t0)(_context.t3);
              setFilePath(pathPhoto);
              _context.next = 18;
              return fileRef.getDownloadURL();

            case 18:
              if (!_context.sent) {
                _context.next = 20;
                break;
              }

              setIsUploaded(true);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function saveFile(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: {
      productName: '',
      category: '',
      description: '',
      startPrice: '',
      priceStep: '',
      seePrice: '',
      stepTime: '',
      percentTimeStep: ''
    },
    validationSchema: _validate__WEBPACK_IMPORTED_MODULE_5__.validate,
    onSubmit: function onSubmit(values) {
      if (startDate !== null && finishDate !== null) {
        dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_8__.addAuction)(values, startDate, finishDate, photoUrlsData, auctionId, userData));
        setIsDownButton(true);
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].auctionHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0430\u0443\u043A\u0446\u0438\u043E\u043D\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].infoBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "\u0422\u043E\u0440\u0433\u0438 \u043D\u0430 \u043F\u043E\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u0441\u043E \u0441\u043A\u0440\u044B\u0442\u043E\u0439 \u0446\u0435\u043D\u043E\u0439")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].text
  }, "\u0422\u0438\u043F \u0430\u0443\u043A\u0446\u0438\u043E\u043D\u0430, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u043E\u043C \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u0446\u0435\u043D\u0430 \u043D\u0430 \u043B\u043E\u0442 \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u0441\u043D\u0438\u0436\u0430\u0435\u0442\u0441\u044F \u0434\u043E \u0442\u043E\u0439, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0442\u0441\u044F \u043F\u0435\u0440\u0432\u044B\u0439 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C. \u042D\u0442\u043E\u0442 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C \u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u0435\u043C \u0430\u0443\u043A\u0446\u0438\u043E\u043D\u0430 \u0438 \u043E\u0431\u043B\u0430\u0434\u0430\u0442\u0435\u043B\u0435\u043C \u043B\u043E\u0442\u0430. \u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0446\u0435\u043D\u044B \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043B\u0430\u0442\u043D\u044B\u043C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].generalCharacteristic
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField_TextField__WEBPACK_IMPORTED_MODULE_11__.TextField, {
    label: 'Название продукта',
    name: 'productName',
    type: 'input'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SelectCategoryField_SelectCategoryField__WEBPACK_IMPORTED_MODULE_13__.SelectCategoryField, {
    categoriesData: categoriesData,
    label: 'Выберите категорию продукта',
    name: 'category',
    type: 'input'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].fieldName
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u043E\u0442\u043E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].fieldInput
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].loadImageContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    onChange: saveFile,
    component: "input",
    type: "file",
    className: "form-control",
    id: "photo",
    name: "photo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].spinner
  }, !isUploaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__["default"], {
    animation: "border",
    size: "sm"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingImageInForm_LoadingImageInForm__WEBPACK_IMPORTED_MODULE_9__.LoadingImageInForm, {
    photoUrlsData: photoUrlsData
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DescriptionField_DescriptionField__WEBPACK_IMPORTED_MODULE_12__.DescriptionField, {
    label: 'Описание продукта',
    name: 'description',
    type: 'input'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].auctionParametersLine
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0430\u0443\u043A\u0446\u0438\u043E\u043D\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].priceParameters
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SettingAuctionField_SettingAuctionField__WEBPACK_IMPORTED_MODULE_14__.SettingAuctionField, {
    label: 'Стартовая цена',
    name: 'startPrice',
    type: 'input',
    triggerText: '$'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SettingAuctionField_SettingAuctionField__WEBPACK_IMPORTED_MODULE_14__.SettingAuctionField, {
    label: 'Шаг цены',
    name: 'priceStep',
    type: 'input',
    triggerText: '$'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SettingAuctionField_SettingAuctionField__WEBPACK_IMPORTED_MODULE_14__.SettingAuctionField, {
    label: 'Стоимость просмотра цены',
    name: 'seePrice',
    type: 'input',
    triggerText: '$'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].stepTimeParameters
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SettingAuctionField_SettingAuctionField__WEBPACK_IMPORTED_MODULE_14__.SettingAuctionField, {
    label: 'Время шага',
    name: 'stepTime',
    type: 'input',
    triggerText: 'сек'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField_TextField__WEBPACK_IMPORTED_MODULE_11__.TextField, {
    label: 'Проценты временного шага',
    name: 'percentTimeStep',
    type: 'input'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Datepicker_Datepicker__WEBPACK_IMPORTED_MODULE_10__.DatepickerBlock, {
    startDate: startDate,
    finishDate: finishDate,
    setStartDate: setStartDate,
    setFinishDate: setFinishDate
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].btn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btn btn-success"
  }, "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductForm_module_scss__WEBPACK_IMPORTED_MODULE_15__["default"].messageAddProduct
  }, isDownButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u0422\u043E\u0432\u0430\u0440 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D!"))))));
};

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/Datepicker/Datepicker.tsx":
/*!*************************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/Datepicker/Datepicker.tsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatepickerBlock": function() { return /* binding */ DatepickerBlock; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ "../node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_locale_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale/es */ "../node_modules/date-fns/esm/locale/es/index.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "../node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var _Datepicker_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Datepicker.module.scss */ "./ui/addProductPage/form/AddProductForm/Datepicker/Datepicker.module.scss");





var DatepickerBlock = function DatepickerBlock(_ref) {
  var startDate = _ref.startDate,
      finishDate = _ref.finishDate,
      setFinishDate = _ref.setFinishDate,
      setStartDate = _ref.setStartDate;
  (0,react_datepicker__WEBPACK_IMPORTED_MODULE_3__.registerLocale)('es', date_fns_locale_es__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Datepicker_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Datepicker_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].dateDatepicker
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Datepicker_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].fieldName
  }, "\u041D\u0430\u0447\u0430\u043B\u043E \u0430\u0443\u043A\u0446\u0438\u043E\u043D\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: _Datepicker_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].datepicker,
    selected: startDate,
    onChange: function onChange(date) {
      return setStartDate(date);
    },
    locale: "es",
    showTimeSelect: true,
    timeFormat: "p",
    timeIntervals: 15,
    dateFormat: "Pp",
    isClearable: true,
    placeholderText: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F"
  }), startDate === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Datepicker_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].error
  }, "\u0412\u0440\u0435\u043C\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0430\u0443\u043A\u0446\u0438\u043E\u043D\u0430 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Datepicker_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].dateDatepicker
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Datepicker_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].fieldName
  }, "\u041A\u043E\u043D\u0435\u0446 \u0430\u0443\u043A\u0446\u0438\u043E\u043D\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: _Datepicker_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].datepicker,
    selected: finishDate,
    onChange: function onChange(date) {
      return setFinishDate(date);
    },
    locale: "es",
    showTimeSelect: true,
    timeFormat: "p",
    timeIntervals: 15,
    dateFormat: "Pp",
    isClearable: true,
    placeholderText: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F"
  }), finishDate === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Datepicker_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].error
  }, "\u0412\u0440\u0435\u043C\u044F \u043A\u043E\u043D\u0446\u0430 \u0430\u0443\u043A\u0446\u0438\u043E\u043D\u0430 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E")));
};

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/DescriptionField/DescriptionField.tsx":
/*!*************************************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/DescriptionField/DescriptionField.tsx ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescriptionField": function() { return /* binding */ DescriptionField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _DescriptionField_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DescriptionField.module.scss */ "./ui/addProductPage/form/AddProductForm/DescriptionField/DescriptionField.module.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var DescriptionField = function DescriptionField(_ref) {
  var props = _extends({}, _ref);

  var _useField = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _DescriptionField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: field.name
  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", _extends({
    className: "form-control shadow-none ".concat(meta.touched && meta.error && 'is-invalid')
  }, field, props, {
    autoComplete: "off"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {
    component: 'div',
    name: field.name,
    className: _DescriptionField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].error
  }));
};

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/LoadingImageInForm/LoadingImageInForm.tsx":
/*!*****************************************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/LoadingImageInForm/LoadingImageInForm.tsx ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingImageInForm": function() { return /* binding */ LoadingImageInForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _LoadingImageInForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingImageInForm.module.scss */ "./ui/addProductPage/form/AddProductForm/LoadingImageInForm/LoadingImageInForm.module.scss");


var LoadingImageInForm = function LoadingImageInForm(_ref) {
  var photoUrlsData = _ref.photoUrlsData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _LoadingImageInForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }, photoUrlsData.map(function (photo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: photo,
      className: _LoadingImageInForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: _LoadingImageInForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].image,
      src: photo,
      alt: "loadImage"
    }));
  }));
};

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/SelectCategoryField/SelectCategoryField.tsx":
/*!*******************************************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/SelectCategoryField/SelectCategoryField.tsx ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCategoryField": function() { return /* binding */ SelectCategoryField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _ui_addProductPage_form_AddProductForm_SetCategoryField_SetCategoryField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/addProductPage/form/AddProductForm/SetCategoryField/SetCategoryField */ "./ui/addProductPage/form/AddProductForm/SetCategoryField/SetCategoryField.tsx");
/* harmony import */ var _SelectCategoryField_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectCategoryField.module.scss */ "./ui/addProductPage/form/AddProductForm/SelectCategoryField/SelectCategoryField.module.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var SelectCategoryField = function SelectCategoryField(_ref) {
  var props = _extends({}, _ref);

  var _useField = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _SelectCategoryField_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].label
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: field.name
  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    component: "select",
    className: "form-control shadow-none ".concat(meta.touched && meta.error && 'is-invalid'),
    id: "category",
    name: "category",
    placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0442\u043E\u0432\u0430\u0440\u0430"
  }, props.categoriesData !== [] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_addProductPage_form_AddProductForm_SetCategoryField_SetCategoryField__WEBPACK_IMPORTED_MODULE_2__.SetCategoryField, {
    categoriesData: props.categoriesData
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {
    component: 'div',
    name: field.name,
    className: _SelectCategoryField_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].error
  }));
};

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/SetCategoryField/SetCategoryField.tsx":
/*!*************************************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/SetCategoryField/SetCategoryField.tsx ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetCategoryField": function() { return /* binding */ SetCategoryField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ "../node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_locale_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/locale/es */ "../node_modules/date-fns/esm/locale/es/index.js");



var SetCategoryField = function SetCategoryField(_ref) {
  var categoriesData = _ref.categoriesData;
  (0,react_datepicker__WEBPACK_IMPORTED_MODULE_1__.registerLocale)('es', date_fns_locale_es__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "",
    label: "..."
  }), categoriesData.map(function (cat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: cat.id,
      value: cat.name
    }, cat.name);
  }));
};

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/SettingAuctionField/SettingAuctionField.tsx":
/*!*******************************************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/SettingAuctionField/SettingAuctionField.tsx ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingAuctionField": function() { return /* binding */ SettingAuctionField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/InputGroup.js");
/* harmony import */ var _SettingAuctionField_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingAuctionField.module.scss */ "./ui/addProductPage/form/AddProductForm/SettingAuctionField/SettingAuctionField.module.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var SettingAuctionField = function SettingAuctionField(_ref) {
  var props = _extends({}, _ref);

  var _useField = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _SettingAuctionField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: field.name
  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Field, {
    component: "input",
    className: "form-control shadow-none ".concat(meta.touched && meta.error && 'is-invalid'),
    name: props.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Text, null, props.triggerText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {
    component: 'div',
    name: field.name,
    className: _SettingAuctionField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].error
  }));
};

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/TextField/TextField.tsx":
/*!***********************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/TextField/TextField.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextField": function() { return /* binding */ TextField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _TextField_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField.module.scss */ "./ui/addProductPage/form/AddProductForm/TextField/TextField.module.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var TextField = function TextField(_ref) {
  var props = _extends({}, _ref);

  var _useField = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _TextField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: field.name
  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
    className: "form-control shadow-none ".concat(meta.touched && meta.error && 'is-invalid')
  }, field, props, {
    autoComplete: "off"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {
    component: 'div',
    name: field.name,
    className: _TextField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].error
  }));
};

/***/ }),

/***/ "./ui/addProductPage/pages/AddProductPage/AddProductPage.tsx":
/*!*******************************************************************!*\
  !*** ./ui/addProductPage/pages/AddProductPage/AddProductPage.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductPage": function() { return /* binding */ AddProductPage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _form_AddProductForm_AddProductForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form/AddProductForm/AddProductForm */ "./ui/addProductPage/form/AddProductForm/AddProductForm.tsx");
/* harmony import */ var _AddProductPage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddProductPage.module.scss */ "./ui/addProductPage/pages/AddProductPage/AddProductPage.module.scss");



var AddProductPage = function AddProductPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AddProductPage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form_AddProductForm_AddProductForm__WEBPACK_IMPORTED_MODULE_1__.AddProductForm, null));
};

/***/ }),

/***/ "./ui/auctions/components/Auction/Auction.tsx":
/*!****************************************************!*\
  !*** ./ui/auctions/components/Auction/Auction.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Auction": function() { return /* binding */ Auction; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_images_empty_image_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/empty_image.png */ "./assets/images/empty_image.png");
/* harmony import */ var _assets_images_timer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/timer.png */ "./assets/images/timer.png");
/* harmony import */ var _assets_images_sold_out_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/sold_out.png */ "./assets/images/sold_out.png");
/* harmony import */ var _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Auction.module.scss */ "./ui/auctions/components/Auction/Auction.module.scss");






var Auction = function Auction(_ref) {
  var auct = _ref.auct;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].item,
    key: auct.auctionId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].photo,
    to: "/auctions-page/".concat(auct.auctionId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].photo
  }, !auct.isInStock && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_sold_out_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].isInStock,
    alt: 'sold out'
  }), auct.photoUrlsData[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: !auct.isInStock ? "".concat(_Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].image, " ").concat(_Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].soldOut) : _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].image,
    src: auct.photoUrlsData[0],
    alt: 'img'
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: !auct.isInStock ? "".concat(_Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].image, " ").concat(_Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].soldOut) : _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].image,
    src: _assets_images_empty_image_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: 'img'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].itemContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].productName
  }, auct.productName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].price
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].priceName
  }, "\u0428\u0430\u0433 \u0432\u0440\u0435\u043C\u0435\u043D\u0438:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].priceData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].timer,
    src: _assets_images_timer_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: 'timer'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, auct.stepTime, " \u0441"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].price
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].priceName
  }, "\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0446\u0435\u043D\u0430:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].priceData
  }, auct.startPrice, " $")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].price
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].priceName
  }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0441\u043C. \u0446\u0435\u043D\u044B:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].priceData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, auct.seePrice, " $")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].link,
    to: "/auctions-page/".concat(auct.auctionId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Auction_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0442\u043E\u0432\u0430\u0440"))));
};

/***/ }),

/***/ "./ui/auctions/pages/AuctionsPage/AuctionsPage.tsx":
/*!*********************************************************!*\
  !*** ./ui/auctions/pages/AuctionsPage/AuctionsPage.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuctionsPage": function() { return /* binding */ AuctionsPage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/action */ "./ui/auctions/store/action.ts");
/* harmony import */ var _hooks_useAuctionPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useAuctionPage */ "./ui/auctions/hooks/useAuctionPage.ts");
/* harmony import */ var _components_Auction_Auction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Auction/Auction */ "./ui/auctions/components/Auction/Auction.tsx");
/* harmony import */ var _AuctionsPage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuctionsPage.module.scss */ "./ui/auctions/pages/AuctionsPage/AuctionsPage.module.scss");






var AuctionsPage = function AuctionsPage() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useAuctionPage = (0,_hooks_useAuctionPage__WEBPACK_IMPORTED_MODULE_3__.useAuctionPage)(),
      auctionsData = _useAuctionPage.auctionsData;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_2__.fetchAuctions)());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AuctionsPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _AuctionsPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].itemsContainer
  }, auctionsData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, auctionsData.map(function (auct) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _AuctionsPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Auction_Auction__WEBPACK_IMPORTED_MODULE_4__.Auction, {
      auct: auct,
      key: auct.auctionId
    }));
  }))));
};

/***/ }),

/***/ "./ui/footer/pages/FooterPage/FooterPage.tsx":
/*!***************************************************!*\
  !*** ./ui/footer/pages/FooterPage/FooterPage.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterPage": function() { return /* binding */ FooterPage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _FooterPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterPage.module.scss */ "./ui/footer/pages/FooterPage/FooterPage.module.scss");
/* harmony import */ var _context_GetCashModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/GetCashModalContext */ "./context/GetCashModalContext.tsx");



var FooterPage = function FooterPage() {
  var closeModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_GetCashModalContext__WEBPACK_IMPORTED_MODULE_2__.GetCashModalCloseContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: closeModal,
    className: _FooterPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _FooterPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].copyright
  }, "\xA9 Boncho"));
};

/***/ }),

/***/ "./ui/home/components/ItemsCarousel3Position/ItemsCarousel3Position.tsx":
/*!******************************************************************************!*\
  !*** ./ui/home/components/ItemsCarousel3Position/ItemsCarousel3Position.tsx ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsCarousel3Position": function() { return /* binding */ ItemsCarousel3Position; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Carousel */ "../node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _ui_auctions_hooks_useAuctionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/auctions/hooks/useAuctionPage */ "./ui/auctions/hooks/useAuctionPage.ts");
/* harmony import */ var _ui_auctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/auctions */ "./ui/auctions/index.ts");
/* harmony import */ var _assets_images_HomePage_ItemsCarousel_prev_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/HomePage/ItemsCarousel/prev.png */ "./assets/images/HomePage/ItemsCarousel/prev.png");
/* harmony import */ var _assets_images_HomePage_ItemsCarousel_next_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/HomePage/ItemsCarousel/next.png */ "./assets/images/HomePage/ItemsCarousel/next.png");
/* harmony import */ var _ItemsCarousel3Position_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ItemsCarousel3Position.module.scss */ "./ui/home/components/ItemsCarousel3Position/ItemsCarousel3Position.module.scss");
/* harmony import */ var _scss_custom_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/scss/custom.scss */ "./scss/custom.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var ItemsCarousel3Position = function ItemsCarousel3Position() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useAuctionPage = (0,_ui_auctions_hooks_useAuctionPage__WEBPACK_IMPORTED_MODULE_2__.useAuctionPage)(),
      auctionsData = _useAuctionPage.auctionsData;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_ui_auctions__WEBPACK_IMPORTED_MODULE_3__.fetchAuctions)());
  }, []);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var handleSelect = function handleSelect(selectedIndex) {
    setIndex(selectedIndex);
  };

  var prevSlide = function prevSlide() {
    if (index > 0 || index <= 2) setIndex(index - 1);
    if (index === 0) setIndex(2);
  };

  var nextSlide = function nextSlide() {
    if (index >= 0 || index < 2) setIndex(index + 1);
    if (index === 2) setIndex(0);
  };

  var firstBl = [];
  var secondBl = [];
  var thirdBl = [];

  if (auctionsData.length > 0) {
    if (auctionsData.length > 2) {
      for (var i = 0; i <= 2; i++) {
        firstBl.push(auctionsData[i]);
      }
    }

    if (auctionsData.length > 4) {
      for (var _i2 = 3; _i2 <= 5; _i2++) {
        secondBl.push(auctionsData[_i2]);
      }
    }

    if (auctionsData.length >= 8) {
      for (var _i3 = 6; _i3 <= 8; _i3++) {
        thirdBl.push(auctionsData[_i3]);
      }
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel3Position_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeIndex: index,
    onSelect: handleSelect,
    prevLabel: "",
    nextLabel: "",
    interval: null,
    indicators: false,
    controls: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel3Position_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].itemsContainer
  }, firstBl.map(function (block) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_auctions__WEBPACK_IMPORTED_MODULE_3__.Auction, {
      auct: block,
      key: block.auctionId
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel3Position_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].itemsContainer
  }, secondBl.map(function (block) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_auctions__WEBPACK_IMPORTED_MODULE_3__.Auction, {
      auct: block,
      key: block.auctionId
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel3Position_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].itemsContainer
  }, thirdBl.map(function (block) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_auctions__WEBPACK_IMPORTED_MODULE_3__.Auction, {
      auct: block,
      key: block.auctionId
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel3Position_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].prevButton,
    onClick: prevSlide
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_HomePage_ItemsCarousel_prev_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "prev"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel3Position_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].nextButton,
    onClick: nextSlide
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_HomePage_ItemsCarousel_next_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "next"
  })));
};

/***/ }),

/***/ "./ui/home/components/ItemsCarousel4Position/ItemsCarousel4Position.tsx":
/*!******************************************************************************!*\
  !*** ./ui/home/components/ItemsCarousel4Position/ItemsCarousel4Position.tsx ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsCarousel4Position": function() { return /* binding */ ItemsCarousel4Position; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Carousel */ "../node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var _assets_images_HomePage_ItemsCarousel_prev_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/HomePage/ItemsCarousel/prev.png */ "./assets/images/HomePage/ItemsCarousel/prev.png");
/* harmony import */ var _assets_images_HomePage_ItemsCarousel_next_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/HomePage/ItemsCarousel/next.png */ "./assets/images/HomePage/ItemsCarousel/next.png");
/* harmony import */ var _ItemsCarousel4Position_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemsCarousel4Position.module.scss */ "./ui/home/components/ItemsCarousel4Position/ItemsCarousel4Position.module.scss");
/* harmony import */ var _scss_custom_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/scss/custom.scss */ "./scss/custom.scss");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _auctions_hooks_useAuctionPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auctions/hooks/useAuctionPage */ "./ui/auctions/hooks/useAuctionPage.ts");
/* harmony import */ var _auctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auctions */ "./ui/auctions/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var ItemsCarousel4Position = function ItemsCarousel4Position() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  var _useAuctionPage = (0,_auctions_hooks_useAuctionPage__WEBPACK_IMPORTED_MODULE_6__.useAuctionPage)(),
      auctionsData = _useAuctionPage.auctionsData;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_auctions__WEBPACK_IMPORTED_MODULE_7__.fetchAuctions)());
  }, []);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var handleSelect = function handleSelect(selectedIndex) {
    setIndex(selectedIndex);
  };

  var prevSlide = function prevSlide() {
    if (index > 0 || index <= 2) setIndex(index - 1);
    if (index === 0) setIndex(2);
  };

  var nextSlide = function nextSlide() {
    if (index >= 0 || index < 2) setIndex(index + 1);
    if (index === 2) setIndex(0);
  };

  var firstBl = [];
  var secondBl = [];
  var thirdBl = [];

  if (auctionsData.length > 0) {
    if (auctionsData.length > 3) {
      for (var i = 0; i <= 3; i++) {
        firstBl.push(auctionsData[i]);
      }
    }

    if (auctionsData.length > 7) {
      for (var _i2 = 4; _i2 <= 7; _i2++) {
        secondBl.push(auctionsData[_i2]);
      }
    }

    if (auctionsData.length >= 14) {
      for (var _i3 = 8; _i3 <= 11; _i3++) {
        thirdBl.push(auctionsData[_i3]);
      }
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel4Position_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeIndex: index,
    onSelect: handleSelect,
    prevLabel: "",
    nextLabel: "",
    interval: null,
    indicators: false,
    controls: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel4Position_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].itemsContainer
  }, firstBl.map(function (block) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_auctions__WEBPACK_IMPORTED_MODULE_7__.Auction, {
      auct: block,
      key: block.auctionId
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel4Position_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].itemsContainer
  }, secondBl.map(function (block) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_auctions__WEBPACK_IMPORTED_MODULE_7__.Auction, {
      auct: block,
      key: block.auctionId
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel4Position_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].itemsContainer
  }, thirdBl.map(function (block) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_auctions__WEBPACK_IMPORTED_MODULE_7__.Auction, {
      auct: block,
      key: block.auctionId
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel4Position_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].prevButton,
    onClick: prevSlide
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_HomePage_ItemsCarousel_prev_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "prev"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel4Position_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].nextButton,
    onClick: nextSlide
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_HomePage_ItemsCarousel_next_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "next"
  })));
};

/***/ }),

/***/ "./ui/home/components/ItemsCarousel5Position/ItemsCarousel5Position.tsx":
/*!******************************************************************************!*\
  !*** ./ui/home/components/ItemsCarousel5Position/ItemsCarousel5Position.tsx ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsCarousel5Position": function() { return /* binding */ ItemsCarousel5Position; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Carousel */ "../node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var _assets_images_HomePage_ItemsCarousel_prev_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/HomePage/ItemsCarousel/prev.png */ "./assets/images/HomePage/ItemsCarousel/prev.png");
/* harmony import */ var _assets_images_HomePage_ItemsCarousel_next_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/HomePage/ItemsCarousel/next.png */ "./assets/images/HomePage/ItemsCarousel/next.png");
/* harmony import */ var _ItemsCarousel5Position_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemsCarousel5Position.module.scss */ "./ui/home/components/ItemsCarousel5Position/ItemsCarousel5Position.module.scss");
/* harmony import */ var _scss_custom_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/scss/custom.scss */ "./scss/custom.scss");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _auctions_hooks_useAuctionPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auctions/hooks/useAuctionPage */ "./ui/auctions/hooks/useAuctionPage.ts");
/* harmony import */ var _auctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auctions */ "./ui/auctions/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var ItemsCarousel5Position = function ItemsCarousel5Position() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  var _useAuctionPage = (0,_auctions_hooks_useAuctionPage__WEBPACK_IMPORTED_MODULE_6__.useAuctionPage)(),
      auctionsData = _useAuctionPage.auctionsData;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_auctions__WEBPACK_IMPORTED_MODULE_7__.fetchAuctions)());
  }, []);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var handleSelect = function handleSelect(selectedIndex) {
    setIndex(selectedIndex);
  };

  var prevSlide = function prevSlide() {
    if (index > 0 || index <= 2) setIndex(index - 1);
    if (index === 0) setIndex(2);
  };

  var nextSlide = function nextSlide() {
    if (index >= 0 || index < 2) setIndex(index + 1);
    if (index === 2) setIndex(0);
  };

  var firstBl = [];
  var secondBl = [];
  var thirdBl = [];

  if (auctionsData.length > 0) {
    if (auctionsData.length > 4) {
      for (var i = 0; i <= 4; i++) {
        firstBl.push(auctionsData[i]);
      }
    }

    if (auctionsData.length > 9) {
      for (var _i2 = 5; _i2 <= 9; _i2++) {
        secondBl.push(auctionsData[_i2]);
      }
    }

    if (auctionsData.length >= 14) {
      for (var _i3 = 10; _i3 <= 14; _i3++) {
        thirdBl.push(auctionsData[_i3]);
      }
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel5Position_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeIndex: index,
    onSelect: handleSelect,
    prevLabel: "",
    nextLabel: "",
    interval: null,
    indicators: false,
    controls: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel5Position_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].itemsContainer
  }, firstBl.map(function (block) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_auctions__WEBPACK_IMPORTED_MODULE_7__.Auction, {
      auct: block,
      key: block.auctionId
    });
  }))), secondBl[0] !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel5Position_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].itemsContainer
  }, secondBl.map(function (block) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_auctions__WEBPACK_IMPORTED_MODULE_7__.Auction, {
      auct: block,
      key: block.auctionId
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"].Item, null, thirdBl[0] !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel5Position_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].itemsContainer
  }, thirdBl.map(function (block) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_auctions__WEBPACK_IMPORTED_MODULE_7__.Auction, {
      auct: block,
      key: block.auctionId
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel5Position_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].prevButton,
    onClick: prevSlide
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_HomePage_ItemsCarousel_prev_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "prev"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ItemsCarousel5Position_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].nextButton,
    onClick: nextSlide
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_HomePage_ItemsCarousel_next_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "next"
  })));
};

/***/ }),

/***/ "./ui/home/components/ProductsNavigation/ProductsNavigation.tsx":
/*!**********************************************************************!*\
  !*** ./ui/home/components/ProductsNavigation/ProductsNavigation.tsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsNavigation": function() { return /* binding */ ProductsNavigation; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _ProductsNavigation_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsNavigation.module.scss */ "./ui/home/components/ProductsNavigation/ProductsNavigation.module.scss");


var ProductsNavigation = function ProductsNavigation() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductsNavigation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navButtonsContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductsNavigation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u041D\u043E\u0432\u044B\u0435")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductsNavigation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductsNavigation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u0421\u043A\u043E\u0440\u043E \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F"))));
};

/***/ }),

/***/ "./ui/home/components/Slider/Slider.tsx":
/*!**********************************************!*\
  !*** ./ui/home/components/Slider/Slider.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slider": function() { return /* binding */ Slider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Carousel */ "../node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var _assets_images_HomePage_Slider_slide1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/HomePage/Slider/slide1.jpg */ "./assets/images/HomePage/Slider/slide1.jpg");
/* harmony import */ var _assets_images_HomePage_Slider_slide2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/HomePage/Slider/slide2.jpg */ "./assets/images/HomePage/Slider/slide2.jpg");
/* harmony import */ var _assets_images_HomePage_Slider_slide3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/HomePage/Slider/slide3.jpg */ "./assets/images/HomePage/Slider/slide3.jpg");
/* harmony import */ var _Slider_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slider.module.scss */ "./ui/home/components/Slider/Slider.module.scss");
/* harmony import */ var _scss_custom_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/scss/custom.scss */ "./scss/custom.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Slider = function Slider() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var handleSelect = function handleSelect(selectedIndex) {
    setIndex(selectedIndex);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Slider_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    activeIndex: index,
    onSelect: handleSelect,
    prevLabel: "",
    nextLabel: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    interval: 2500
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "d-block w-100",
    src: _assets_images_HomePage_Slider_slide1_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "First slide"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    interval: 2500
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "d-block w-100",
    src: _assets_images_HomePage_Slider_slide2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Second slide"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    interval: 2500
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "d-block w-100",
    src: _assets_images_HomePage_Slider_slide3_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "Third slide"
  }))));
};

/***/ }),

/***/ "./ui/home/pages/homePage/HomePage.tsx":
/*!*********************************************!*\
  !*** ./ui/home/pages/homePage/HomePage.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _components_Slider_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Slider/Slider */ "./ui/home/components/Slider/Slider.tsx");
/* harmony import */ var _components_ItemsCarousel5Position_ItemsCarousel5Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ItemsCarousel5Position/ItemsCarousel5Position */ "./ui/home/components/ItemsCarousel5Position/ItemsCarousel5Position.tsx");
/* harmony import */ var _components_ProductsNavigation_ProductsNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ProductsNavigation/ProductsNavigation */ "./ui/home/components/ProductsNavigation/ProductsNavigation.tsx");
/* harmony import */ var _components_ItemsCarousel4Position_ItemsCarousel4Position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ItemsCarousel4Position/ItemsCarousel4Position */ "./ui/home/components/ItemsCarousel4Position/ItemsCarousel4Position.tsx");
/* harmony import */ var _components_ItemsCarousel3Position_ItemsCarousel3Position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ItemsCarousel3Position/ItemsCarousel3Position */ "./ui/home/components/ItemsCarousel3Position/ItemsCarousel3Position.tsx");
/* harmony import */ var _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HomePage.module.scss */ "./ui/home/pages/homePage/HomePage.module.scss");







var HomePage = function HomePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_1__.Slider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].productNavigation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ProductsNavigation_ProductsNavigation__WEBPACK_IMPORTED_MODULE_3__.ProductsNavigation, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].itemCarousel5Position
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ItemsCarousel5Position_ItemsCarousel5Position__WEBPACK_IMPORTED_MODULE_2__.ItemsCarousel5Position, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].itemCarousel4Position
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ItemsCarousel4Position_ItemsCarousel4Position__WEBPACK_IMPORTED_MODULE_4__.ItemsCarousel4Position, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].itemCarousel3Position
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ItemsCarousel3Position_ItemsCarousel3Position__WEBPACK_IMPORTED_MODULE_5__.ItemsCarousel3Position, null)));
};

/***/ }),

/***/ "./ui/navigation/components/AppRoutes/AppRoutes.tsx":
/*!**********************************************************!*\
  !*** ./ui/navigation/components/AppRoutes/AppRoutes.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": function() { return /* binding */ AppRoutes; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/routes */ "./ui/navigation/const/routes.ts");
/* harmony import */ var _ui_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/home */ "./ui/home/index.ts");
/* harmony import */ var _ui_products_pages_CategoriesPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui/products/pages/CategoriesPage */ "./ui/products/pages/CategoriesPage/index.ts");
/* harmony import */ var _ui_addProductPage_pages_AddProductPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/ui/addProductPage/pages/AddProductPage */ "./ui/addProductPage/pages/AddProductPage/index.ts");
/* harmony import */ var _ui_auctions_pages_AuctionsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/ui/auctions/pages/AuctionsPage */ "./ui/auctions/pages/AuctionsPage/index.ts");
/* harmony import */ var _ui_productPage_pages_ProductPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/ui/productPage/pages/ProductPage */ "./ui/productPage/pages/ProductPage/index.ts");
/* harmony import */ var _ui_profile_pages_ProfilePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/ui/profile/pages/ProfilePage */ "./ui/profile/pages/ProfilePage/index.ts");
/* harmony import */ var _context_SettingsUserModalContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/SettingsUserModalContext */ "./context/SettingsUserModalContext.tsx");










var AppRoutes = function AppRoutes() {
  var closeSettingsUserModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_SettingsUserModalContext__WEBPACK_IMPORTED_MODULE_8__.ModalCloseContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: closeSettingsUserModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: _const_routes__WEBPACK_IMPORTED_MODULE_1__.Routes.Home,
    exact: true,
    component: _ui_home__WEBPACK_IMPORTED_MODULE_2__.HomePage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: _const_routes__WEBPACK_IMPORTED_MODULE_1__.Routes.Products,
    exact: true,
    component: _ui_products_pages_CategoriesPage__WEBPACK_IMPORTED_MODULE_3__.CategoriesPage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: _const_routes__WEBPACK_IMPORTED_MODULE_1__.Routes.AddProductPage,
    exact: true,
    component: _ui_addProductPage_pages_AddProductPage__WEBPACK_IMPORTED_MODULE_4__.AddProductPage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: _const_routes__WEBPACK_IMPORTED_MODULE_1__.Routes.AuctionsPage,
    exact: true,
    component: _ui_auctions_pages_AuctionsPage__WEBPACK_IMPORTED_MODULE_5__.AuctionsPage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: _const_routes__WEBPACK_IMPORTED_MODULE_1__.Routes.AuctionsPageItem,
    exact: true,
    component: _ui_productPage_pages_ProductPage__WEBPACK_IMPORTED_MODULE_6__.ProductPage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: _const_routes__WEBPACK_IMPORTED_MODULE_1__.Routes.ProfilePage,
    exact: true,
    component: _ui_profile_pages_ProfilePage__WEBPACK_IMPORTED_MODULE_7__.ProfilePage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {
    to: _const_routes__WEBPACK_IMPORTED_MODULE_1__.Routes.Home
  })));
};

/***/ }),

/***/ "./ui/navigation/components/Button/Button.tsx":
/*!****************************************************!*\
  !*** ./ui/navigation/components/Button/Button.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.scss */ "./ui/navigation/components/Button/Button.module.scss");


var Button = function Button(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btnContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btn
  }, text))));
};

/***/ }),

/***/ "./ui/navigation/components/DropDownSettingsList/DropDownSettingsList.tsx":
/*!********************************************************************************!*\
  !*** ./ui/navigation/components/DropDownSettingsList/DropDownSettingsList.tsx ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropDownSettingsList": function() { return /* binding */ DropDownSettingsList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/routes */ "./ui/navigation/const/routes.ts");
/* harmony import */ var _assets_images_userIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/userIcon.png */ "./assets/images/userIcon.png");
/* harmony import */ var _assets_images_salesIcon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/salesIcon.png */ "./assets/images/salesIcon.png");
/* harmony import */ var _assets_images_outIcon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/outIcon.png */ "./assets/images/outIcon.png");
/* harmony import */ var _DropDownSettingsList_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropDownSettingsList.module.scss */ "./ui/navigation/components/DropDownSettingsList/DropDownSettingsList.module.scss");







var DropDownSettingsList = function DropDownSettingsList(_ref) {
  var exit = _ref.exit,
      hideSettingsList = _ref.hideSettingsList;

  var clearLocalStorage = function clearLocalStorage() {
    localStorage.clear();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _DropDownSettingsList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _DropDownSettingsList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].item
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _DropDownSettingsList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].icon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_userIcon_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "u"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: hideSettingsList,
    className: _DropDownSettingsList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: _const_routes__WEBPACK_IMPORTED_MODULE_1__.Routes.ProfilePage
  }, "\u041C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _DropDownSettingsList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].item
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _DropDownSettingsList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].icon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_salesIcon_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "u"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _DropDownSettingsList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].link
  }, "\u041F\u043E\u043A\u0443\u043F\u043A\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      exit();
      hideSettingsList();
    },
    className: _DropDownSettingsList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].item
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _DropDownSettingsList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].icon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_outIcon_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "u"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: clearLocalStorage,
    className: _DropDownSettingsList_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].link
  }, "\u0412\u044B\u0439\u0442\u0438")));
};

/***/ }),

/***/ "./ui/navigation/components/GetCashModal/GetCashModal.tsx":
/*!****************************************************************!*\
  !*** ./ui/navigation/components/GetCashModal/GetCashModal.tsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetCashModal": function() { return /* binding */ GetCashModal; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _context_GetCashModalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/GetCashModalContext */ "./context/GetCashModalContext.tsx");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate */ "./ui/navigation/components/GetCashModal/validate.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/action */ "./ui/navigation/store/action.ts");
/* harmony import */ var _GetCashModal_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GetCashModal.module.scss */ "./ui/navigation/components/GetCashModal/GetCashModal.module.scss");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var GetCashModal = function GetCashModal() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  var isActiveModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_GetCashModalContext__WEBPACK_IMPORTED_MODULE_1__.GetCashModalStatusContext);
  var closeGetCashModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_GetCashModalContext__WEBPACK_IMPORTED_MODULE_1__.GetCashModalCloseContext);
  var token = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: isActiveModal ? _GetCashModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].cashModal : _GetCashModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].hide
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _GetCashModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].title
  }, "\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043F\u043E\u043B\u043E\u043D\u0435\u043D\u0438\u044F:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
    initialValues: {
      cash: 0
    },
    validationSchema: _validate__WEBPACK_IMPORTED_MODULE_2__.validate,
    onSubmit: function onSubmit(values) {
      dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_7__.updateUserCash)(Number(values.cash), token));
      setTimeout(closeGetCashModal, 1000);
    }
  }, function (_ref) {
    var errors = _ref.errors,
        touched = _ref.touched;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Form, {
      className: _GetCashModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].form
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Field, {
      name: "cash",
      type: "input",
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_GetCashModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].input, _defineProperty({}, _GetCashModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].inputError, errors.cash && touched.cash))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage, {
      component: 'div',
      name: "cash",
      className: _GetCashModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].errorMessage
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: _GetCashModal_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].button,
      type: "submit"
    }, "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C"));
  })));
};

/***/ }),

/***/ "./ui/navigation/components/LoginAndRegistrationBlock/LoginAndRegistrationBlock.tsx":
/*!******************************************************************************************!*\
  !*** ./ui/navigation/components/LoginAndRegistrationBlock/LoginAndRegistrationBlock.tsx ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAndRegistrationBlock": function() { return /* binding */ LoginAndRegistrationBlock; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _assets_images_login_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/login.png */ "./assets/images/login.png");
/* harmony import */ var _assets_images_registration_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/registration.png */ "./assets/images/registration.png");
/* harmony import */ var _LoginAndRegistrationBlock_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginAndRegistrationBlock.module.scss */ "./ui/navigation/components/LoginAndRegistrationBlock/LoginAndRegistrationBlock.module.scss");




var LoginAndRegistrationBlock = function LoginAndRegistrationBlock(_ref) {
  var openLoginModal = _ref.openLoginModal,
      openRegModal = _ref.openRegModal;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _LoginAndRegistrationBlock_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].loginBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    onClick: openLoginModal,
    src: _assets_images_login_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    className: _LoginAndRegistrationBlock_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].button,
    alt: 'log'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    onClick: openRegModal,
    src: _assets_images_registration_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    className: _LoginAndRegistrationBlock_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].button,
    alt: 'reg'
  })));
};

/***/ }),

/***/ "./ui/navigation/components/LoginModal/LoginModal.tsx":
/*!************************************************************!*\
  !*** ./ui/navigation/components/LoginModal/LoginModal.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModal": function() { return /* binding */ LoginModal; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _forms_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms/LoginForm/LoginForm */ "./ui/navigation/forms/LoginForm/LoginForm.tsx");
/* harmony import */ var _assets_images_user_auth_model_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/user_auth_model.png */ "./assets/images/user_auth_model.png");
/* harmony import */ var _LoginModal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginModal.module.scss */ "./ui/navigation/components/LoginModal/LoginModal.module.scss");





var LoginModal = function LoginModal(_ref) {
  var showModal = _ref.showModal,
      closeModal = _ref.closeModal;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _LoginModal_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container,
    show: showModal,
    onHide: closeModal,
    backdrop: "static",
    keyboard: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _LoginModal_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "\u0412\u043E\u0439\u0442\u0438 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Body, {
    className: _LoginModal_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_user_auth_model_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    className: _LoginModal_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_forms_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_1__.LoginForm, {
    closeModal: closeModal
  }))));
};

/***/ }),

/***/ "./ui/navigation/components/LogoAndNavButtons/LogoAndNavButtons.tsx":
/*!**************************************************************************!*\
  !*** ./ui/navigation/components/LogoAndNavButtons/LogoAndNavButtons.tsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoAndNavButtons": function() { return /* binding */ LogoAndNavButtons; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_images_logo_boncho_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/logo_boncho.png */ "./assets/images/logo_boncho.png");
/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const/routes */ "./ui/navigation/const/routes.ts");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button */ "./ui/navigation/components/Button/Button.tsx");
/* harmony import */ var _LogoAndNavButtons_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LogoAndNavButtons.module.scss */ "./ui/navigation/components/LogoAndNavButtons/LogoAndNavButtons.module.scss");






var LogoAndNavButtons = function LogoAndNavButtons() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _LogoAndNavButtons_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].logoAndNavButtons
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: _const_routes__WEBPACK_IMPORTED_MODULE_2__.Routes.Home
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: _LogoAndNavButtons_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].logo,
    src: _assets_images_logo_boncho_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: 'logo'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _LogoAndNavButtons_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].navButtonsContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _LogoAndNavButtons_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: _const_routes__WEBPACK_IMPORTED_MODULE_2__.Routes.Home
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
    text: 'Главная'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _LogoAndNavButtons_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: _const_routes__WEBPACK_IMPORTED_MODULE_2__.Routes.AuctionsPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
    text: 'Аукционы'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _LogoAndNavButtons_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: _const_routes__WEBPACK_IMPORTED_MODULE_2__.Routes.Products
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
    text: 'Категории'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _LogoAndNavButtons_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: _const_routes__WEBPACK_IMPORTED_MODULE_2__.Routes.AddProductPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {
    text: 'Добавить аукцион'
  })))));
};

/***/ }),

/***/ "./ui/navigation/components/MoneyAndNameUserBlock/MoneyAndNameUserBlock.tsx":
/*!**********************************************************************************!*\
  !*** ./ui/navigation/components/MoneyAndNameUserBlock/MoneyAndNameUserBlock.tsx ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyAndNameUserBlock": function() { return /* binding */ MoneyAndNameUserBlock; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _assets_images_purse_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/purse.png */ "./assets/images/purse.png");
/* harmony import */ var _GetCashModal_GetCashModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GetCashModal/GetCashModal */ "./ui/navigation/components/GetCashModal/GetCashModal.tsx");
/* harmony import */ var _assets_images_configure_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/configure.png */ "./assets/images/configure.png");
/* harmony import */ var _DropDownSettingsList_DropDownSettingsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DropDownSettingsList/DropDownSettingsList */ "./ui/navigation/components/DropDownSettingsList/DropDownSettingsList.tsx");
/* harmony import */ var _MoneyAndNameUserBlock_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MoneyAndNameUserBlock.module.scss */ "./ui/navigation/components/MoneyAndNameUserBlock/MoneyAndNameUserBlock.module.scss");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var MoneyAndNameUserBlock = function MoneyAndNameUserBlock(_ref) {
  var props = _extends({}, _ref);

  var showGetCashModal = props.showGetCashModal,
      userCash = props.userCash,
      userProfile = props.userProfile,
      showModal = props.showModal,
      isActiveModal = props.isActiveModal,
      closeModal = props.closeModal,
      exit = props.exit;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _MoneyAndNameUserBlock_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].exitBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    className: _MoneyAndNameUserBlock_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].moneyBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: showGetCashModal,
    className: _MoneyAndNameUserBlock_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].money
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_purse_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "$"
  }), userCash === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, localStorage.getItem('userCash'), " $") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, userCash, " $")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _MoneyAndNameUserBlock_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].cashContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GetCashModal_GetCashModal__WEBPACK_IMPORTED_MODULE_2__.GetCashModal, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _MoneyAndNameUserBlock_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].exitButtonContainer
  }, userProfile[0] !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _MoneyAndNameUserBlock_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].userNameBlock
  }, userProfile[0].login && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _MoneyAndNameUserBlock_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].configureIconContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: _MoneyAndNameUserBlock_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].userName
  }, "".concat(userProfile[0].login)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick(e) {
      e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    onClick: showModal,
    className: _MoneyAndNameUserBlock_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].configureIcon,
    src: _assets_images_configure_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "c"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: isActiveModal ? _MoneyAndNameUserBlock_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].configureList : _MoneyAndNameUserBlock_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].hide
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DropDownSettingsList_DropDownSettingsList__WEBPACK_IMPORTED_MODULE_4__.DropDownSettingsList, {
    exit: exit,
    hideSettingsList: closeModal
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _MoneyAndNameUserBlock_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].hiddenExit,
    onClick: exit
  }, "x"))));
};

/***/ }),

/***/ "./ui/navigation/components/RegModal/RegModal.tsx":
/*!********************************************************!*\
  !*** ./ui/navigation/components/RegModal/RegModal.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegModal": function() { return /* binding */ RegModal; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _forms_RegForm_RegForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms/RegForm/RegForm */ "./ui/navigation/forms/RegForm/RegForm.tsx");
/* harmony import */ var _assets_images_reg_user_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/reg_user.png */ "./assets/images/reg_user.png");
/* harmony import */ var _RegModal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegModal.module.scss */ "./ui/navigation/components/RegModal/RegModal.module.scss");





var RegModal = function RegModal(_ref) {
  var showModal = _ref.showModal,
      closeModal = _ref.closeModal;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: showModal,
    onHide: closeModal,
    backdrop: "static",
    keyboard: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _RegModal_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Body, {
    className: _RegModal_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_reg_user_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    className: _RegModal_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _RegModal_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].bodyContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_forms_RegForm_RegForm__WEBPACK_IMPORTED_MODULE_1__.RegForm, {
    closeModal: closeModal
  })))));
};

/***/ }),

/***/ "./ui/navigation/forms/LoginForm/LoginForm.tsx":
/*!*****************************************************!*\
  !*** ./ui/navigation/forms/LoginForm/LoginForm.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForm": function() { return /* binding */ LoginForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "../node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/app */ "../node_modules/firebase/compat/app/dist/index.esm.js");
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/firebase/firebase */ "./firebase/firebase.ts");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/action */ "./ui/navigation/store/action.ts");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validate */ "./ui/navigation/forms/LoginForm/validate.ts");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _TextlField_TextlField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TextlField/TextlField */ "./ui/navigation/forms/LoginForm/TextlField/TextlField.tsx");
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LoginForm.module.scss */ "./ui/navigation/forms/LoginForm/LoginForm.module.scss");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var LoginForm = function LoginForm(_ref) {
  var closeModal = _ref.closeModal;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var setIsAuth = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_8__.AuthUpdateContext);
  var setToken = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_8__.AuthUpdateTokenContext);
  var isAuth = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_8__.IsAuthContext);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      errorMessage = _useState2[0],
      setErrorMessage = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isAuth) {
      closeModal();
    }
  }, [isAuth]);

  var addUser = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(email, password) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _firebase_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].auth().setPersistence(firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.Auth.Persistence.SESSION);

            case 3:
              _context2.next = 5;
              return _firebase_firebase__WEBPACK_IMPORTED_MODULE_5__.auth.signInWithEmailAndPassword(email, password);

            case 5:
              _context2.next = 7;
              return _firebase_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].auth().onAuthStateChanged( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userCred) {
                  var idToken;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return userCred === null || userCred === void 0 ? void 0 : userCred.getIdToken();

                        case 2:
                          idToken = _context.sent;
                          setIsAuth(true);
                          setToken(idToken);
                          js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].set('token', idToken, {
                            expires: 5
                          });
                          dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_6__.updateUserRole)(idToken));

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x3) {
                  return _ref3.apply(this, arguments);
                };
              }());

            case 7:
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              setErrorMessage('Логин и пароль не совпадают!');

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function addUser(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: _validate__WEBPACK_IMPORTED_MODULE_7__.validate,
    onSubmit: function onSubmit(values) {
      addUser(values.email, values.password);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextlField_TextlField__WEBPACK_IMPORTED_MODULE_9__.TextlField, {
    label: 'Введите email',
    name: 'email',
    type: 'input'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextlField_TextlField__WEBPACK_IMPORTED_MODULE_9__.TextlField, {
    label: 'Введите пароль',
    name: 'password',
    type: 'password'
  }), errorMessage !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].error
  }, errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].button
  }, "\u0412\u043E\u0439\u0442\u0438"))));
};

/***/ }),

/***/ "./ui/navigation/forms/LoginForm/TextlField/TextlField.tsx":
/*!*****************************************************************!*\
  !*** ./ui/navigation/forms/LoginForm/TextlField/TextlField.tsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextlField": function() { return /* binding */ TextlField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _TextField_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField.module.scss */ "./ui/navigation/forms/LoginForm/TextlField/TextField.module.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var TextlField = function TextlField(_ref) {
  var props = _extends({}, _ref);

  var _useField = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _TextField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: field.name
  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
    className: "form-control shadow-none ".concat(meta.touched && meta.error && 'is-invalid', " ").concat(_TextField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input)
  }, field, props, {
    autoComplete: "off"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {
    component: 'div',
    name: field.name,
    className: _TextField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].error
  }));
};

/***/ }),

/***/ "./ui/navigation/forms/RegForm/RegForm.tsx":
/*!*************************************************!*\
  !*** ./ui/navigation/forms/RegForm/RegForm.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegForm": function() { return /* binding */ RegForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/firebase/firebase */ "./firebase/firebase.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validate */ "./ui/navigation/forms/RegForm/validate.ts");
/* harmony import */ var _LoginForm_TextlField_TextlField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LoginForm/TextlField/TextlField */ "./ui/navigation/forms/LoginForm/TextlField/TextlField.tsx");
/* harmony import */ var _ui_profile_store_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/ui/profile/store/action */ "./ui/profile/store/action.ts");
/* harmony import */ var _RegForm_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RegForm.module.scss */ "./ui/navigation/forms/RegForm/RegForm.module.scss");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var RegForm = function RegForm(_ref) {
  var closeModal = _ref.closeModal;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isRegister = _useState2[0],
      setIsRegister = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var addUser = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email, password) {
      var _errorMessage;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].auth().createUserWithEmailAndPassword(email, password);

            case 3:
              setErrorMessage('');
              setIsRegister(true);
              setTimeout(closeModal, 2500);
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              _errorMessage = _context.t0.message;

              if (_errorMessage === 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).') {
                setErrorMessage('Указанный Вами email уже используется');
              }

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function addUser(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: {
      email: '',
      login: '',
      reg_password: '',
      confirmPassword: ''
    },
    validationSchema: _validate__WEBPACK_IMPORTED_MODULE_4__.validate,
    onSubmit: function onSubmit(values) {
      addUser(values.email, values.reg_password);
      dispatch((0,_ui_profile_store_action__WEBPACK_IMPORTED_MODULE_6__.addProfile)({
        login: values.login,
        name: '',
        secondName: ''
      }, values.email, '', []));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _RegForm_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
    className: _RegForm_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoginForm_TextlField_TextlField__WEBPACK_IMPORTED_MODULE_5__.TextlField, {
    label: 'Введите email',
    name: 'email',
    type: 'input'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoginForm_TextlField_TextlField__WEBPACK_IMPORTED_MODULE_5__.TextlField, {
    label: 'Введите логин',
    name: 'login',
    type: 'input'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoginForm_TextlField_TextlField__WEBPACK_IMPORTED_MODULE_5__.TextlField, {
    label: 'Введите пароль',
    name: 'reg_password',
    type: 'password'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoginForm_TextlField_TextlField__WEBPACK_IMPORTED_MODULE_5__.TextlField, {
    label: 'Повторите пароль',
    name: 'confirmPassword',
    type: 'password'
  }), errorMessage !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _RegForm_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].error
  }, errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: _RegForm_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].button
  }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C"), isRegister && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _RegForm_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].userIsRegistred
  }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D"))));
};

/***/ }),

/***/ "./ui/navigation/pages/NavigationPage.tsx":
/*!************************************************!*\
  !*** ./ui/navigation/pages/NavigationPage.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationPage": function() { return /* binding */ NavigationPage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "../node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_RegModal_RegModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RegModal/RegModal */ "./ui/navigation/components/RegModal/RegModal.tsx");
/* harmony import */ var _components_LoginModal_LoginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LoginModal/LoginModal */ "./ui/navigation/components/LoginModal/LoginModal.tsx");
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/firebase/firebase */ "./firebase/firebase.ts");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _hooks_useNavigationPage_useNavigationPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useNavigationPage/useNavigationPage */ "./ui/navigation/hooks/useNavigationPage/useNavigationPage.ts");
/* harmony import */ var _ui_profile_hooks_useProfilePage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/ui/profile/hooks/useProfilePage */ "./ui/profile/hooks/useProfilePage.ts");
/* harmony import */ var _ui_profile_store_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/ui/profile/store/action */ "./ui/profile/store/action.ts");
/* harmony import */ var _context_SettingsUserModalContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/context/SettingsUserModalContext */ "./context/SettingsUserModalContext.tsx");
/* harmony import */ var _context_GetCashModalContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/context/GetCashModalContext */ "./context/GetCashModalContext.tsx");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/action */ "./ui/navigation/store/action.ts");
/* harmony import */ var _components_LoginAndRegistrationBlock_LoginAndRegistrationBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/LoginAndRegistrationBlock/LoginAndRegistrationBlock */ "./ui/navigation/components/LoginAndRegistrationBlock/LoginAndRegistrationBlock.tsx");
/* harmony import */ var _components_MoneyAndNameUserBlock_MoneyAndNameUserBlock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/MoneyAndNameUserBlock/MoneyAndNameUserBlock */ "./ui/navigation/components/MoneyAndNameUserBlock/MoneyAndNameUserBlock.tsx");
/* harmony import */ var _components_LogoAndNavButtons_LogoAndNavButtons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/LogoAndNavButtons/LogoAndNavButtons */ "./ui/navigation/components/LogoAndNavButtons/LogoAndNavButtons.tsx");
/* harmony import */ var _NavidationPage_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./NavidationPage.module.scss */ "./ui/navigation/pages/NavidationPage.module.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var NavigationPage = function NavigationPage() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var isAuth = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__.IsAuthContext);
  var setIsAuth = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__.AuthUpdateContext);
  var closeModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_SettingsUserModalContext__WEBPACK_IMPORTED_MODULE_10__.ModalCloseContext);
  var showModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_SettingsUserModalContext__WEBPACK_IMPORTED_MODULE_10__.ModalShowContext);
  var isActiveModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_SettingsUserModalContext__WEBPACK_IMPORTED_MODULE_10__.ModalStatusContext);
  var showGetCashModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_GetCashModalContext__WEBPACK_IMPORTED_MODULE_11__.GetCashModalShowContext);
  var closeGetCashModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_GetCashModalContext__WEBPACK_IMPORTED_MODULE_11__.GetCashModalCloseContext);
  var token = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__.AuthContext);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showRegModal = _useState2[0],
      setShowRegModall = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showLoginModal = _useState4[0],
      setShowLoginModall = _useState4[1];

  var _useNavigationPage = (0,_hooks_useNavigationPage_useNavigationPage__WEBPACK_IMPORTED_MODULE_7__.useNavigationPage)(),
      userData = _useNavigationPage.userData,
      userCash = _useNavigationPage.userCash;

  var _useProfilePage = (0,_ui_profile_hooks_useProfilePage__WEBPACK_IMPORTED_MODULE_8__.useProfilePage)(),
      userProfile = _useProfilePage.userProfile;

  var openRegModal = function openRegModal() {
    return setShowRegModall(true);
  };

  var openLoginModal = function openLoginModal() {
    return setShowLoginModall(true);
  };

  var closeRegModal = function closeRegModal() {
    return setShowRegModall(false);
  };

  var closeLoginModal = function closeLoginModal() {
    return setShowLoginModall(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (userData[0] !== undefined) {
      dispatch((0,_ui_profile_store_action__WEBPACK_IMPORTED_MODULE_9__.fetchProfileData)(userData[0].email));
      dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_12__.fetchUserCash)(userData[0].email, token));
    }
  }, [userData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (userCash !== 0) {
      localStorage.setItem('userCash', "".concat(userCash));
    }
  }, [userCash]);

  var exit = function exit() {
    _firebase_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].auth().signOut();
    js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove('token');
    if (setIsAuth) setIsAuth(false);
    dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_12__.clearUserData)());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: function onClick() {
      closeGetCashModal();
      closeModal();
    },
    className: _NavidationPage_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].navContainer
  }, !isAuth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LoginAndRegistrationBlock_LoginAndRegistrationBlock__WEBPACK_IMPORTED_MODULE_13__.LoginAndRegistrationBlock, {
    openLoginModal: openLoginModal,
    openRegModal: openRegModal
  }), isAuth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MoneyAndNameUserBlock_MoneyAndNameUserBlock__WEBPACK_IMPORTED_MODULE_14__.MoneyAndNameUserBlock, {
    closeModal: closeModal,
    exit: exit,
    isActiveModal: isActiveModal,
    showGetCashModal: showGetCashModal,
    showModal: showModal,
    userCash: userCash,
    userProfile: userProfile
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LogoAndNavButtons_LogoAndNavButtons__WEBPACK_IMPORTED_MODULE_15__.LogoAndNavButtons, null), showRegModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _NavidationPage_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].portal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_RegModal_RegModal__WEBPACK_IMPORTED_MODULE_3__.RegModal, {
    showModal: showRegModal,
    closeModal: closeRegModal
  })), showLoginModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _NavidationPage_module_scss__WEBPACK_IMPORTED_MODULE_16__["default"].portal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LoginModal_LoginModal__WEBPACK_IMPORTED_MODULE_4__.LoginModal, {
    showModal: showLoginModal,
    closeModal: closeLoginModal
  })));
};

/***/ }),

/***/ "./ui/productPage/components/Portal/Portal.tsx":
/*!*****************************************************!*\
  !*** ./ui/productPage/components/Portal/Portal.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Portal": function() { return /* binding */ Portal; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var _assets_images_closeModal_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/closeModal.png */ "./assets/images/closeModal.png");
/* harmony import */ var _Portal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Portal.module.scss */ "./ui/productPage/components/Portal/Portal.module.scss");




var Portal = function Portal(_ref) {
  var openModal = _ref.openModal,
      closeModal = _ref.closeModal,
      photo = _ref.photo;
  if (!openModal) return null;
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Portal_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Portal_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].image
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    onClick: closeModal,
    src: photo,
    alt: 'img'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Portal_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].button
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: _Portal_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].closeBtn,
    onClick: closeModal,
    src: _assets_images_closeModal_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: 'close'
  })))), // @ts-ignore
  document.getElementById('portal-root'));
};

/***/ }),

/***/ "./ui/productPage/components/ProductPageWithData/ProductPageWithData.tsx":
/*!*******************************************************************************!*\
  !*** ./ui/productPage/components/ProductPageWithData/ProductPageWithData.tsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageWithData": function() { return /* binding */ ProductPageWithData; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _ui_productPage_components_Portal_Portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/productPage/components/Portal/Portal */ "./ui/productPage/components/Portal/Portal.tsx");
/* harmony import */ var _assets_images_empty_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/empty_image.png */ "./assets/images/empty_image.png");
/* harmony import */ var _assets_images_sold_out_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/sold_out.png */ "./assets/images/sold_out.png");
/* harmony import */ var _SeePriceModal_SeePriceModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SeePriceModal/SeePriceModal */ "./ui/productPage/components/SeePriceModal/SeePriceModal.tsx");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/action */ "./ui/productPage/store/action.ts");
/* harmony import */ var _hooks_useProductPageWithData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useProductPageWithData */ "./ui/productPage/hooks/useProductPageWithData.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/api */ "./api/api.ts");
/* harmony import */ var _ui_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/ui/navigation */ "./ui/navigation/index.ts");
/* harmony import */ var _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProductPageWithData.module.scss */ "./ui/productPage/components/ProductPageWithData/ProductPageWithData.module.scss");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var ProductPageWithData = function ProductPageWithData(_ref) {
  var productData = _ref.productData,
      userData = _ref.userData;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var token = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_11__.AuthContext);

  var _useProductPageWithDa = (0,_hooks_useProductPageWithData__WEBPACK_IMPORTED_MODULE_7__.useProductPageWithData)(),
      currentPrice = _useProductPageWithDa.currentPrice;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openModal = _useState2[0],
      setOpenModal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showSeePriceModal = _useState4[0],
      setShowSeePriceModal = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      seePricePeriod = _useState6[0],
      setSeePricePeriod = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      timerSeconds = _useState8[0],
      setTimerSeconds = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loader = _useState10[0],
      setLoader = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (currentPrice !== '') {
      setLoader(false);
      showCurrentPrice();
    }
  }, [currentPrice]);

  var closeSeePriceModal = function closeSeePriceModal() {
    setShowSeePriceModal(false);
  };

  var openSeePriceModal = function openSeePriceModal() {
    setShowSeePriceModal(true);
  };

  var photoHandler = function photoHandler() {
    setOpenModal(true);
  };

  var closeModal = function closeModal() {
    setOpenModal(false);
  };

  var timer = function timer(t) {
    setTimerSeconds(String(t));
    var seconds = t;
    var interval = setInterval(function () {
      if (seconds <= 0) {
        setTimerSeconds('');
        clearInterval(interval);
      } else {
        setTimerSeconds("".concat(Math.trunc(seconds - 1)));
      }

      --seconds;
    }, 1000);
  };

  var openCurrentPrice = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_api_api__WEBPACK_IMPORTED_MODULE_8__.modificatedCurrentPrice)(productData.auctionId, productData.priceStep, productData.seePrice);

            case 2:
              dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_6__.fetchCurrentPrice)(productData.auctionId));
              dispatch((0,_ui_navigation__WEBPACK_IMPORTED_MODULE_9__.fetchUserCash)(userData[0].email, token));
              setLoader(true);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function openCurrentPrice() {
      return _ref2.apply(this, arguments);
    };
  }();

  var showCurrentPrice = function showCurrentPrice() {
    timer(Number(productData.stepTime));
    setSeePricePeriod(true);
    setTimeout(function () {
      setSeePricePeriod(false);
      dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_6__.clearCurrentPrice)());
    }, Number(productData.stepTime) * 1000);
  };

  var buyThisProduct = function buyThisProduct() {
    if (currentPrice !== '') {
      dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_6__.buyProduct)(currentPrice, productData, userData[0], token));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].container
  }, !productData.isInStock && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_sold_out_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].isInStock
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].photoBlock
  }, openModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_productPage_components_Portal_Portal__WEBPACK_IMPORTED_MODULE_2__.Portal, {
    openModal: openModal,
    closeModal: closeModal,
    photo: productData.photoUrlsData[0]
  })), productData.photoUrlsData[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: !productData.isInStock ? "".concat(_ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].image, " ").concat(_ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].soldOut) : _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].image,
    onClick: function onClick() {
      return photoHandler();
    },
    src: productData.photoUrlsData[0],
    alt: productData.productName
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].image,
    src: _assets_images_empty_image_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: 'emptyImage'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].contentBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].productTitle
  }, productData.productName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-3 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer__name
  }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer__content
  }, productData.category)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer__name
  }, "\u0410\u0432\u0442\u043E\u0440"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer__content
  }, productData.userEmail))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer__name
  }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0446\u0435\u043D\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer__content
  }, productData.seePrice, " $")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer__name
  }, "\u0421\u0442\u0430\u0440\u0442\u043E\u0432\u0430\u044F \u0446\u0435\u043D\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer__content
  }, productData.startPrice, " $")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer__name
  }, "\u0428\u0430\u0433 \u0446\u0435\u043D\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer__content
  }, productData.priceStep, " $")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer__name
  }, "\u0428\u0430\u0433 \u0432\u0440\u0435\u043C\u0435\u043D\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].stringContainer__content
  }, productData.stepTime, " \u0441\u0435\u043A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: productData.isInStock ? _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].buttonPriceBlock : "".concat(_ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].buttonPriceBlock, " ").concat(_ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].hide)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].currentPriceBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].currentPriceBlock__title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-1"
  }, "\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0446\u0435\u043D\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].currentPriceBlock__price
  }, seePricePeriod ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-1"
  }, currentPrice) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, loader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    animation: "grow",
    variant: "secondary",
    size: "sm"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-1"
  }, "\u0445\u0445\u0445\u0445"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].currentPriceBlock__timeStep
  }, seePricePeriod ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-1"
  }, timerSeconds, " \u0441\u0435\u043A") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, loader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    animation: "grow",
    variant: "secondary",
    size: "sm"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-1"
  }, productData.stepTime, " \u0441\u0435\u043A")))), seePricePeriod ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: buyThisProduct,
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].buttonBlock
  }, "\u041A\u0443\u043F\u0438\u0442\u044C") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: openSeePriceModal,
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].buttonBlock
  }, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0446\u0435\u043D\u0443")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].descriptionBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].descriptionBlock__title
  }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProductPageWithData_module_scss__WEBPACK_IMPORTED_MODULE_10__["default"].descriptionBlock__content
  }, productData.description))), showSeePriceModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SeePriceModal_SeePriceModal__WEBPACK_IMPORTED_MODULE_5__.SeePriceModal, {
    seePrice: productData.seePrice,
    showSeePriceModal: showSeePriceModal,
    closeSeePriceModal: closeSeePriceModal,
    openCurrentPrice: openCurrentPrice
  }));
};

/***/ }),

/***/ "./ui/productPage/components/SeePriceModal/SeePriceModal.tsx":
/*!*******************************************************************!*\
  !*** ./ui/productPage/components/SeePriceModal/SeePriceModal.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeePriceModal": function() { return /* binding */ SeePriceModal; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _SeePriceModal_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SeePriceModal.module.scss */ "./ui/productPage/components/SeePriceModal/SeePriceModal.module.scss");



var SeePriceModal = function SeePriceModal(_ref) {
  var showSeePriceModal = _ref.showSeePriceModal,
      closeSeePriceModal = _ref.closeSeePriceModal,
      openCurrentPrice = _ref.openCurrentPrice,
      seePrice = _ref.seePrice;

  var startSeePriceProcess = function startSeePriceProcess() {
    openCurrentPrice();
    closeSeePriceModal();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: showSeePriceModal,
    onHide: closeSeePriceModal,
    backdrop: "static",
    keyboard: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _SeePriceModal_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].warning
  }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0446\u0435\u043D\u044B ", seePrice, " $, \u0412\u044B \u0442\u043E\u0447\u043D\u043E \u0436\u0435\u043B\u0430\u0435\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u0434\u0436\u0438\u0442\u044C?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _SeePriceModal_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].bodyContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: startSeePriceProcess,
    className: _SeePriceModal_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btn,
    variant: "outline-success"
  }, "\u0414\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: closeSeePriceModal,
    className: _SeePriceModal_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btn,
    variant: "outline-danger"
  }, "\u041D\u0435\u0442"))))));
};

/***/ }),

/***/ "./ui/productPage/pages/ProductPage/ProductPage.tsx":
/*!**********************************************************!*\
  !*** ./ui/productPage/pages/ProductPage/ProductPage.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPage": function() { return /* binding */ ProductPage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/action */ "./ui/productPage/store/action.ts");
/* harmony import */ var _hooks_useProductPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useProductPage */ "./ui/productPage/hooks/useProductPage.ts");
/* harmony import */ var _components_ProductPageWithData_ProductPageWithData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ProductPageWithData/ProductPageWithData */ "./ui/productPage/components/ProductPageWithData/ProductPageWithData.tsx");
/* harmony import */ var _ui_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/ui/navigation */ "./ui/navigation/index.ts");







var ProductPage = function ProductPage() {
  var _useParams = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useParams)(),
      auctionId = _useParams.auctionId;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useProductPage = (0,_hooks_useProductPage__WEBPACK_IMPORTED_MODULE_3__.useProductPage)(),
      productData = _useProductPage.productData;

  var _useNavigationPage = (0,_ui_navigation__WEBPACK_IMPORTED_MODULE_5__.useNavigationPage)(),
      userData = _useNavigationPage.userData;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_2__.fetchProduct)(auctionId));
  }, [auctionId, dispatch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, productData !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ProductPageWithData_ProductPageWithData__WEBPACK_IMPORTED_MODULE_4__.ProductPageWithData, {
    productData: productData,
    userData: userData
  }));
};

/***/ }),

/***/ "./ui/products/components/Products/Products.tsx":
/*!******************************************************!*\
  !*** ./ui/products/components/Products/Products.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Products": function() { return /* binding */ Products; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _hooks_useCategoriesPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useCategoriesPage */ "./ui/products/hooks/useCategoriesPage.ts");
/* harmony import */ var _assets_images_timer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/timer.png */ "./assets/images/timer.png");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_images_sold_out_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/sold_out.png */ "./assets/images/sold_out.png");
/* harmony import */ var _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Products.module.scss */ "./ui/products/components/Products/Products.module.scss");






var Products = function Products() {
  var _useCategoriesPage = (0,_hooks_useCategoriesPage__WEBPACK_IMPORTED_MODULE_1__.useCategoriesPage)(),
      productsData = _useCategoriesPage.productsData;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, productsData.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].itemContainer
  }, productsData.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].link,
      to: "/auctions-page/".concat(product.auctionId),
      key: product.auctionId
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].photo
    }, !product.isInStock && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _assets_images_sold_out_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].isInStock,
      alt: 'sold out'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: !product.isInStock ? "".concat(_Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].image, " ").concat(_Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].soldOut) : _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].image,
      src: product.photoUrlsData[0],
      alt: product.productName
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].itemContent
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].productName
    }, product.productName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].price
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].priceName
    }, "\u0428\u0430\u0433 \u0432\u0440\u0435\u043C\u0435\u043D\u0438:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].priceData
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].timer,
      src: _assets_images_timer_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: 'timer'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, product.stepTime, " \u0441"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].price
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].priceName
    }, "\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0446\u0435\u043D\u0430:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].priceData
    }, product.startPrice, " $")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].price
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].priceName
    }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0441\u043C. \u0446\u0435\u043D\u044B:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].priceData
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, product.seePrice, " $"))))));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null));
};

/***/ }),

/***/ "./ui/products/pages/CategoriesPage/CategoriesPage.tsx":
/*!*************************************************************!*\
  !*** ./ui/products/pages/CategoriesPage/CategoriesPage.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPage": function() { return /* binding */ CategoriesPage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useCategoriesPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useCategoriesPage */ "./ui/products/hooks/useCategoriesPage.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ */ "./ui/products/index.ts");
/* harmony import */ var _CategoriesPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CategoriesPage.module.scss */ "./ui/products/pages/CategoriesPage/CategoriesPage.module.scss");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/action */ "./ui/products/store/action.ts");
/* harmony import */ var _components_Products_Products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Products/Products */ "./ui/products/components/Products/Products.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var CategoriesPage = function CategoriesPage() {
  var _useCategoriesPage = (0,_hooks_useCategoriesPage__WEBPACK_IMPORTED_MODULE_2__.useCategoriesPage)(),
      categoriesData = _useCategoriesPage.categoriesData;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all'),
      _useState2 = _slicedToArray(_useState, 2),
      activeCategory = _useState2[0],
      setActiveCategory = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,___WEBPACK_IMPORTED_MODULE_3__.fetchCategories)());
  }, []);

  var fetchProducts = function fetchProducts(category) {
    dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_5__.fetchProductsByCategory)(category));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_5__.fetchProductsByCategory)('all'));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _CategoriesPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, categoriesData !== [] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _CategoriesPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].categoryes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'all' === activeCategory ? _CategoriesPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].activeItem : _CategoriesPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].item,
    onClick: function onClick() {
      fetchProducts('all');
      setActiveCategory('all');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u0412\u0441\u0435")), categoriesData.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: category.name === activeCategory ? _CategoriesPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].activeItem : _CategoriesPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].item,
      key: category.id,
      onClick: function onClick() {
        fetchProducts(category.name);
        setActiveCategory(category.name);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, category.name));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Products_Products__WEBPACK_IMPORTED_MODULE_6__.Products, null)));
};

/***/ }),

/***/ "./ui/profile/forms/ProfilePageForm.tsx":
/*!**********************************************!*\
  !*** ./ui/profile/forms/ProfilePageForm.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageForm": function() { return /* binding */ ProfilePageForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate */ "./ui/profile/forms/validate.ts");
/* harmony import */ var _TextField_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextField/TextField */ "./ui/profile/forms/TextField/TextField.tsx");
/* harmony import */ var _assets_images_empty_image_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/empty_image.png */ "./assets/images/empty_image.png");
/* harmony import */ var src_firebase_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/firebase/firebase */ "./firebase/firebase.ts");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/action */ "./ui/profile/store/action.ts");
/* harmony import */ var _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProfilePageForm.module.scss */ "./ui/profile/forms/ProfilePageForm.module.scss");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











var ProfilePageForm = function ProfilePageForm(_ref) {
  var _userProfile$, _userProfile$2, _userProfile$3;

  var props = _extends({}, _ref);

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var setFilePath = props.setFilePath,
      setIsUploaded = props.setIsUploaded,
      isUploaded = props.isUploaded,
      filePath = props.filePath,
      userData = props.userData,
      userProfile = props.userProfile;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      photoUrl = _useState2[0],
      setPhotoUrl = _useState2[1];

  var saveFile = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var file, storageRef, pathPhoto, fileRef, metadata;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsUploaded(false);
              file = e.target.files[0];
              storageRef = src_firebase_firebase__WEBPACK_IMPORTED_MODULE_6__["default"].storage().ref();
              pathPhoto = "assets/images/usersProfiles/".concat(userData[0].email, "/").concat(file.name);
              fileRef = storageRef.child(pathPhoto);
              metadata = {
                contentType: 'image/jpeg'
              };
              _context.next = 8;
              return fileRef.put(file, metadata);

            case 8:
              _context.t0 = setPhotoUrl;
              _context.next = 11;
              return fileRef.getDownloadURL();

            case 11:
              _context.t1 = _context.sent;
              _context.next = 14;
              return (0, _context.t0)(_context.t1);

            case 14:
              _context.next = 16;
              return fileRef.getDownloadURL();

            case 16:
              if (!_context.sent) {
                _context.next = 18;
                break;
              }

              setIsUploaded(true);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function saveFile(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (photoUrl !== '') {
      setFilePath(photoUrl);
      dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_7__.addPhotoToProfile)(userData[0].email, photoUrl, userProfile));
    }
  }, [photoUrl]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: {
      login: '',
      name: '',
      secondName: ''
    },
    validationSchema: _validate__WEBPACK_IMPORTED_MODULE_3__.validate,
    onSubmit: function onSubmit(values) {
      dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_7__.addProfile)(values, userData[0].email, filePath, userProfile));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].auctionHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "\u0412\u0430\u0448 \u043F\u0440\u043E\u0444\u0430\u0439\u043B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].photoContainer
  }, userProfile[0] !== undefined && userProfile[0].photoUrl !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: userProfile[0].photoUrl,
    alt: 'photo'
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_empty_image_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: 'photo'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].loadImageButtonContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].loadImageButton,
    onChange: saveFile
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "file",
    className: _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].input
  }), "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].spinner
  }, !isUploaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    animation: "border",
    size: "sm",
    variant: "secondary"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].deleteImageButton
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].profileInformationContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].emailContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Email"), userData[0] !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].emailValue
  }, userData[0].email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField_TextField__WEBPACK_IMPORTED_MODULE_4__.TextField, {
    label: 'Логин',
    name: 'login',
    type: 'input',
    userProfile: (_userProfile$ = userProfile[0]) === null || _userProfile$ === void 0 ? void 0 : _userProfile$.login
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField_TextField__WEBPACK_IMPORTED_MODULE_4__.TextField, {
    label: 'Имя',
    name: 'name',
    type: 'input',
    userProfile: (_userProfile$2 = userProfile[0]) === null || _userProfile$2 === void 0 ? void 0 : _userProfile$2.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextField_TextField__WEBPACK_IMPORTED_MODULE_4__.TextField, {
    label: 'Фамилия',
    name: 'secondName',
    type: 'input',
    userProfile: (_userProfile$3 = userProfile[0]) === null || _userProfile$3 === void 0 ? void 0 : _userProfile$3.secondName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].loadImageButton,
    onChange: saveFile
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "submit",
    className: _ProfilePageForm_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].input
  }), "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))))));
};

/***/ }),

/***/ "./ui/profile/forms/TextField/TextField.tsx":
/*!**************************************************!*\
  !*** ./ui/profile/forms/TextField/TextField.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextField": function() { return /* binding */ TextField; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _TextField_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField.module.scss */ "./ui/profile/forms/TextField/TextField.module.scss");
var _excluded = ["userProfile"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var TextField = function TextField(_ref) {
  var userProfile = _ref.userProfile,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useField = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _TextField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: field.name
  }, props.label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
    className: "form-control shadow-none ".concat(meta.touched && meta.error && 'is-invalid')
  }, field, props, {
    autoComplete: "off",
    placeholder: userProfile
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {
    component: 'div',
    name: field.name,
    className: _TextField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].error
  })));
};

/***/ }),

/***/ "./ui/profile/pages/ProfilePage/ProfilePage.tsx":
/*!******************************************************!*\
  !*** ./ui/profile/pages/ProfilePage/ProfilePage.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": function() { return /* binding */ ProfilePage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _ui_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/ui/navigation */ "./ui/navigation/index.ts");
/* harmony import */ var _forms_ProfilePageForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms/ProfilePageForm */ "./ui/profile/forms/ProfilePageForm.tsx");
/* harmony import */ var _hooks_useProfilePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useProfilePage */ "./ui/profile/hooks/useProfilePage.ts");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/action */ "./ui/profile/store/action.ts");
/* harmony import */ var _context_GetCashModalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/context/GetCashModalContext */ "./context/GetCashModalContext.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ProfilePage = function ProfilePage() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isUploaded = _useState2[0],
      setIsUploaded = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      filePath = _useState4[0],
      setFilePath = _useState4[1];

  var _useNavigationPage = (0,_ui_navigation__WEBPACK_IMPORTED_MODULE_2__.useNavigationPage)(),
      userData = _useNavigationPage.userData;

  var _useProfilePage = (0,_hooks_useProfilePage__WEBPACK_IMPORTED_MODULE_4__.useProfilePage)(),
      userProfile = _useProfilePage.userProfile;

  var closeGetCashModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_GetCashModalContext__WEBPACK_IMPORTED_MODULE_6__.GetCashModalCloseContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (userData[0] !== undefined) {
      dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_5__.fetchProfileData)(userData[0].email));
    }
  }, [userData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onClick: closeGetCashModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_forms_ProfilePageForm__WEBPACK_IMPORTED_MODULE_3__.ProfilePageForm, {
    setIsUploaded: setIsUploaded,
    setFilePath: setFilePath,
    isUploaded: isUploaded,
    filePath: filePath,
    userData: userData,
    userProfile: userProfile
  }));
};

/***/ }),

/***/ "./assets/images/HomePage/ItemsCarousel/next.png":
/*!*******************************************************!*\
  !*** ./assets/images/HomePage/ItemsCarousel/next.png ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7bdb2f6f94049b7aa8bcad362d6ccc70.png");

/***/ }),

/***/ "./assets/images/HomePage/ItemsCarousel/prev.png":
/*!*******************************************************!*\
  !*** ./assets/images/HomePage/ItemsCarousel/prev.png ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6a79e5bfd0e582ffe5772c1b90d3e0ae.png");

/***/ }),

/***/ "./assets/images/HomePage/Slider/slide1.jpg":
/*!**************************************************!*\
  !*** ./assets/images/HomePage/Slider/slide1.jpg ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cc007a2774e9aebfb80b89310f5d8b1a.jpg");

/***/ }),

/***/ "./assets/images/HomePage/Slider/slide2.jpg":
/*!**************************************************!*\
  !*** ./assets/images/HomePage/Slider/slide2.jpg ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "80bc35c0395355818a91adbafca7d54a.jpg");

/***/ }),

/***/ "./assets/images/HomePage/Slider/slide3.jpg":
/*!**************************************************!*\
  !*** ./assets/images/HomePage/Slider/slide3.jpg ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7fe3aa5f00b50194e9e0962d502d373b.jpg");

/***/ }),

/***/ "./assets/images/closeModal.png":
/*!**************************************!*\
  !*** ./assets/images/closeModal.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d225ea0c3a0d52e1ce5fad5e029279a2.png");

/***/ }),

/***/ "./assets/images/configure.png":
/*!*************************************!*\
  !*** ./assets/images/configure.png ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8a3c1d6907a2d9cde953dc4f780cba0b.png");

/***/ }),

/***/ "./assets/images/empty_image.png":
/*!***************************************!*\
  !*** ./assets/images/empty_image.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6787cdde6ac790c7eded06a9383faa64.png");

/***/ }),

/***/ "./assets/images/login.png":
/*!*********************************!*\
  !*** ./assets/images/login.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fe9b2b4633402b7fb18f121095ab11a7.png");

/***/ }),

/***/ "./assets/images/logo_boncho.png":
/*!***************************************!*\
  !*** ./assets/images/logo_boncho.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dfd45eeb114948149b7c02ff10bdc9a0.png");

/***/ }),

/***/ "./assets/images/outIcon.png":
/*!***********************************!*\
  !*** ./assets/images/outIcon.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0616f7f6aaf366b63744777ab4329ab1.png");

/***/ }),

/***/ "./assets/images/purse.png":
/*!*********************************!*\
  !*** ./assets/images/purse.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bc7844b05d9bf821ffc72c5127aaeda8.png");

/***/ }),

/***/ "./assets/images/reg_user.png":
/*!************************************!*\
  !*** ./assets/images/reg_user.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0fe6115898f76b58fdc3cbe91d5bc3b3.png");

/***/ }),

/***/ "./assets/images/registration.png":
/*!****************************************!*\
  !*** ./assets/images/registration.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "aa56ccfad33c010001812780f951ef2f.png");

/***/ }),

/***/ "./assets/images/salesIcon.png":
/*!*************************************!*\
  !*** ./assets/images/salesIcon.png ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3022b1c0374057da4a597b87c0caaa81.png");

/***/ }),

/***/ "./assets/images/sold_out.png":
/*!************************************!*\
  !*** ./assets/images/sold_out.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c8b85a13b40b53fc45c1cc9b543f3897.png");

/***/ }),

/***/ "./assets/images/timer.png":
/*!*********************************!*\
  !*** ./assets/images/timer.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e64d7ecf5a30150a99befa27fad0055f.png");

/***/ }),

/***/ "./assets/images/userIcon.png":
/*!************************************!*\
  !*** ./assets/images/userIcon.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3e55a2be22544849562b739c3aea290e.png");

/***/ }),

/***/ "./assets/images/user_auth_model.png":
/*!*******************************************!*\
  !*** ./assets/images/user_auth_model.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "809446ca219370e5945687a5dfbb9ea3.png");

/***/ }),

/***/ "./App.module.scss":
/*!*************************!*\
  !*** ./App.module.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"jqtwua4UnwxApMlesaic","content":"agoxwlphyBtJafZumszk"});

/***/ }),

/***/ "./scss/custom.scss":
/*!**************************!*\
  !*** ./scss/custom.scss ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/AddProductForm.module.scss":
/*!**************************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/AddProductForm.module.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"ElSZX7ZUCHAYpedb8oGE","form":"Pma1PPkKF5aUQZbVJ0hs","infoBlock":"C8AlKjLQxBKHxmLsxrWB","header":"AdA86h_akGle_Bcnm48S","generalCharacteristic":"TpSUkcJKePXdMqCkU7w5","fieldName":"_Lg5dgJKza_wT4NHYcOj","auctionHeader":"T6jUvPHvvXrmumJ4bz5K","auctionParametersLine":"nwVfBGWlNAJg3NjtKFb4","fieldInput":"PH_Moq0IQFLlAq8aesxC","loadImageContainer":"dNRNawOq5pipn4mq_45Y","spinner":"x1SKyXhj5WxVn4k6pgec","priceParameters":"g7VWiWyhXi29eKgWpqQr","stepTimeParameters":"o8FpaiaCnMqSxsYrvUzk","startDateDatepicker":"_rf9ACL_S4R_FxEx7K16","datepicker":"s0xvwptYu1VRRWoTWJ4g","btn":"ZrOmqFYL6RvKyTJwIJBt","messageAddProduct":"llTy59nDWlYe4OgJQm8D"});

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/Datepicker/Datepicker.module.scss":
/*!*********************************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/Datepicker/Datepicker.module.scss ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"QlCAOr68_6OvUM3SAE2i","fieldName":"g2wXMtDWBMZ80gj2MnMY","dateDatepicker":"NpFAx6gC6rm1abcdt9Dl","datepicker":"zGcypdrR9hZk8DRTHY9Q","error":"LDvJ80jf2hWFEhYZk31n"});

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/DescriptionField/DescriptionField.module.scss":
/*!*********************************************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/DescriptionField/DescriptionField.module.scss ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"label":"zhotujKUsDZUxzRJXO7R","error":"AqPovL21sgcc_GLZfYEC"});

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/LoadingImageInForm/LoadingImageInForm.module.scss":
/*!*************************************************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/LoadingImageInForm/LoadingImageInForm.module.scss ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"XyeidkQk8K_lrrK2JS1s","item":"xVJcJSpKIgQu3HUP0kCy","image":"hZY3jqFaq0pdpE0bv2sA"});

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/SelectCategoryField/SelectCategoryField.module.scss":
/*!***************************************************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/SelectCategoryField/SelectCategoryField.module.scss ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"label":"pyLwosePAboZB85J9bsw","error":"VINbl3Myg_hIujINNTiP"});

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/SettingAuctionField/SettingAuctionField.module.scss":
/*!***************************************************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/SettingAuctionField/SettingAuctionField.module.scss ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"label":"ggQqbPDfYuupCJzXyZr1","error":"p6zgVcsipikKSJ0_5wME"});

/***/ }),

/***/ "./ui/addProductPage/form/AddProductForm/TextField/TextField.module.scss":
/*!*******************************************************************************!*\
  !*** ./ui/addProductPage/form/AddProductForm/TextField/TextField.module.scss ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"label":"b8mZwU5iyCwHtSDhpq7f","error":"vVxZqQd3tPxXCsgR1R4p"});

/***/ }),

/***/ "./ui/addProductPage/pages/AddProductPage/AddProductPage.module.scss":
/*!***************************************************************************!*\
  !*** ./ui/addProductPage/pages/AddProductPage/AddProductPage.module.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./ui/auctions/components/Auction/Auction.module.scss":
/*!************************************************************!*\
  !*** ./ui/auctions/components/Auction/Auction.module.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"item":"WqPA1AgsdAenug6kzpKx","photo":"Hujhl21BgqZr6a1l4HqJ","isInStock":"Xq3mJFIbbDrzTpy9SfHe","image":"jv3csZ4Ron_qJCq7k40E","soldOut":"pLILs2RINpnPd2wGT8MG","itemContent":"GXJm25la2gP5H_L97rMI","productName":"MbgEunyaoeC81IfcslBg","price":"OK8M0eSThk7CrTQaNiUM","priceName":"axFIaKyN0MTLUBZjmPlu","priceData":"jXqrHNjPfMTNSdNrkL4i","timer":"nhQAemnaZuwGagYbR4OS","button":"pkKnrVNMju9iYOci4NQg"});

/***/ }),

/***/ "./ui/auctions/pages/AuctionsPage/AuctionsPage.module.scss":
/*!*****************************************************************!*\
  !*** ./ui/auctions/pages/AuctionsPage/AuctionsPage.module.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"_949LAv5EmK4WtFlGhjQ","itemsContainer":"ltKiYdGBAQRIZfyMZnk6"});

/***/ }),

/***/ "./ui/footer/pages/FooterPage/FooterPage.module.scss":
/*!***********************************************************!*\
  !*** ./ui/footer/pages/FooterPage/FooterPage.module.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"V9c93GSqSeUNn147K9vB","copyright":"Y6ISHQjrrtjiDm5WrmWy"});

/***/ }),

/***/ "./ui/home/components/ItemsCarousel3Position/ItemsCarousel3Position.module.scss":
/*!**************************************************************************************!*\
  !*** ./ui/home/components/ItemsCarousel3Position/ItemsCarousel3Position.module.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"YlnbewipoVBhRh8ybZX0","itemsContainer":"celrkHvhcEatWZOCOUG6","item":"Wcec2U0qzhoLpVvxzm9g","button":"PwUzio6V3Z6ZSGfN8Uea","prevButton":"xGFEJsme_PACs7zHz5a2","nextButton":"llnbwGQLV_MFaGcube4e"});

/***/ }),

/***/ "./ui/home/components/ItemsCarousel4Position/ItemsCarousel4Position.module.scss":
/*!**************************************************************************************!*\
  !*** ./ui/home/components/ItemsCarousel4Position/ItemsCarousel4Position.module.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"y1ZESkcW57PW4Ji5cPpu","itemsContainer":"yPyuSkC2UIBZRmFLM2ag","item":"PR6g41PzlP6IiAJtPpxk","button":"STVrXvHRpsJJLcSs2Pe8","prevButton":"Egco0BM9TozFPCnRhKgY","nextButton":"goxc2VzrO6jCPJK19Ncq"});

/***/ }),

/***/ "./ui/home/components/ItemsCarousel5Position/ItemsCarousel5Position.module.scss":
/*!**************************************************************************************!*\
  !*** ./ui/home/components/ItemsCarousel5Position/ItemsCarousel5Position.module.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"BaaT2UIhfrpAGHC6e9Oa","itemsContainer":"hreV3dxEpuzNhr12t4p5","item":"hfGOqNwWUhiJBd54Z3r6","button":"n1aFoYAFnOG7kgtuWHaU","prevButton":"IUmY89gy2s7cs8sjPtrf","nextButton":"pGWy2tLCGNErmNcWdRKG"});

/***/ }),

/***/ "./ui/home/components/ProductsNavigation/ProductsNavigation.module.scss":
/*!******************************************************************************!*\
  !*** ./ui/home/components/ProductsNavigation/ProductsNavigation.module.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"navButtonsContainer":"hlLtuIu5f87e7kM6WO2L","button":"BWun0hJn44kGyDZ7Tpj2"});

/***/ }),

/***/ "./ui/home/components/Slider/Slider.module.scss":
/*!******************************************************!*\
  !*** ./ui/home/components/Slider/Slider.module.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"V079r7GxO43XmGZeUVs5"});

/***/ }),

/***/ "./ui/home/pages/homePage/HomePage.module.scss":
/*!*****************************************************!*\
  !*** ./ui/home/pages/homePage/HomePage.module.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"bUe3AfNB7N0uZvPvv9UW","productNavigation":"z5j02W5mv9sJ2wPyfNnB","itemCarousel4Position":"MvZikgNW0chqKqHpmWQi","itemCarousel3Position":"Plv87D3abTMoSE6ANcfi","itemCarousel5Position":"mxfnwuZRwefdMud_AhEO"});

/***/ }),

/***/ "./ui/navigation/components/Button/Button.module.scss":
/*!************************************************************!*\
  !*** ./ui/navigation/components/Button/Button.module.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"YEiO92hKGgpXzbsJPlla","btnContainer":"p8noCgCIsuUyZO5iAsQv","buttons":"_y9Iq_BfF7IoAVmeO6wa","btn":"R5Yu1rT5l3xidK1e4Rob"});

/***/ }),

/***/ "./ui/navigation/components/DropDownSettingsList/DropDownSettingsList.module.scss":
/*!****************************************************************************************!*\
  !*** ./ui/navigation/components/DropDownSettingsList/DropDownSettingsList.module.scss ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"Rymd2ujfz1RnpugPTHfP","item":"LlqVwW72zJUEt4tllpft","icon":"XTQnW35rHDghyfvDBzpw","link":"js52GWIsQ4luwBkB7aMj"});

/***/ }),

/***/ "./ui/navigation/components/GetCashModal/GetCashModal.module.scss":
/*!************************************************************************!*\
  !*** ./ui/navigation/components/GetCashModal/GetCashModal.module.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"title":"C8ezW8PwfgELMKtbNN6z","cashModal":"iriC6gtBbVBcSL75tjFF","hide":"w2vOWZ5bjmOClSBPGfZy","form":"UurT1Z0HoJWDs8Bo1dQ4","input":"bJ0E6o6ePUoEVz5LTCP_","inputError":"dQEq6G06M0czRsIR8_V6","button":"O4DSXZE_kSWFSU4QPhIa","errorMessage":"dwq2nay_ozoSzkuzCKsv"});

/***/ }),

/***/ "./ui/navigation/components/LoginAndRegistrationBlock/LoginAndRegistrationBlock.module.scss":
/*!**************************************************************************************************!*\
  !*** ./ui/navigation/components/LoginAndRegistrationBlock/LoginAndRegistrationBlock.module.scss ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"loginBlock":"FAX673wpT6LdVgDaa02a","button":"iTmjt72pJ8y2yQq6rx2U"});

/***/ }),

/***/ "./ui/navigation/components/LoginModal/LoginModal.module.scss":
/*!********************************************************************!*\
  !*** ./ui/navigation/components/LoginModal/LoginModal.module.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"header":"AZSOQpRu4kJNX7tTWchV","content":"d394txK7zVkz7MUvaYBA","image":"NUTo4mrMvN4iIdUEfFFu","bodyContainer":"TKESDN9MFsVLe4jq8bEj"});

/***/ }),

/***/ "./ui/navigation/components/LogoAndNavButtons/LogoAndNavButtons.module.scss":
/*!**********************************************************************************!*\
  !*** ./ui/navigation/components/LogoAndNavButtons/LogoAndNavButtons.module.scss ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"logoAndNavButtons":"piUhYnP0eLDADU8GP8mT","logo":"E9ZcF5HCFKfTzsGIeDeA","navButtonsContainer":"Sevh6tSaUafJIS5m1GYg","button":"UanZLzYARgLhLpwfGbgs"});

/***/ }),

/***/ "./ui/navigation/components/MoneyAndNameUserBlock/MoneyAndNameUserBlock.module.scss":
/*!******************************************************************************************!*\
  !*** ./ui/navigation/components/MoneyAndNameUserBlock/MoneyAndNameUserBlock.module.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"enterButton":"_pSK6CBicJBUbSULzuhE","loginBlock":"LsEBxu433zdWHz5Ww1lN","configureIconContainer":"AX6xnl29Y7BS6ZbfISlQ","configureIcon":"pj_D1k6jWMFvPDl8oWoU","configureList":"qwKbE93stWqPq0I4G0lP","hiddenExit":"F4a21nVFPOJ1virTdDSC","exitBlock":"om_w97oWphplbMIr4mBe","moneyBlock":"J12DIeIGmHAUxoaNCDh5","money":"OJb8l_U6EQKe5dwBJXPI","exitButtonContainer":"ZyEdD3S7hq6gBj_9qL1e","userName":"enjm3N2CZJAGHqZAuP7z","hide":"Q6Qct2E1CUoLynxk_T5L"});

/***/ }),

/***/ "./ui/navigation/components/RegModal/RegModal.module.scss":
/*!****************************************************************!*\
  !*** ./ui/navigation/components/RegModal/RegModal.module.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"header":"A3ddJycnSXDXaYFZ4Urx","content":"FX4Xrl3n8DbQKseVZf3y","image":"KKuPVgTtOiyTysibfspR","bodyContainer":"nnWEzFUL0TIUSXGjj8gW"});

/***/ }),

/***/ "./ui/navigation/forms/LoginForm/LoginForm.module.scss":
/*!*************************************************************!*\
  !*** ./ui/navigation/forms/LoginForm/LoginForm.module.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"ftVhUOs0Jql1RwuY_mQp","form":"mj3iZTNep_pjcwR9IH_g","fieldName":"SajohQFGRBXoPF2SUJp4","fieldInput":"pHWEB73PseYkfLJ6acMg","error":"IQB8hmiIfloAfh2aucoK","button":"emFEaNdG2hXJNtzlChhj"});

/***/ }),

/***/ "./ui/navigation/forms/LoginForm/TextlField/TextField.module.scss":
/*!************************************************************************!*\
  !*** ./ui/navigation/forms/LoginForm/TextlField/TextField.module.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"label":"zRjgi8DehkKoMPuso36A","error":"A4LqL622KPgCFtaXpev8"});

/***/ }),

/***/ "./ui/navigation/forms/RegForm/RegForm.module.scss":
/*!*********************************************************!*\
  !*** ./ui/navigation/forms/RegForm/RegForm.module.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"SexEUH3DS7pG4RElzPQ4","form":"t9IydzL0WP0Ifc253Bw1","fieldName":"_wfGHAl0MiZczh0D4_Ai","fieldInput":"Ha158Q1PunJ3c17HEBWh","userIsRegistred":"xxnD5VNPMGG75G24khO2","error":"sNNVeIMHTvcfW7vZIt7C","button":"VJQwyXeSblsC7bYV_CSy"});

/***/ }),

/***/ "./ui/navigation/pages/NavidationPage.module.scss":
/*!********************************************************!*\
  !*** ./ui/navigation/pages/NavidationPage.module.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"navContainer":"sNfelslb0z87L3eaeMbk"});

/***/ }),

/***/ "./ui/productPage/components/Portal/Portal.module.scss":
/*!*************************************************************!*\
  !*** ./ui/productPage/components/Portal/Portal.module.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"EsUurYjF3G8kUjJWXH6k","image":"_CxXOFYng71bv1ES6qLx","button":"kkdcDHHyiELElEFep5xr","closeBtn":"ftc496yHFUBRInS1FPGq"});

/***/ }),

/***/ "./ui/productPage/components/ProductPageWithData/ProductPageWithData.module.scss":
/*!***************************************************************************************!*\
  !*** ./ui/productPage/components/ProductPageWithData/ProductPageWithData.module.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"kkVqgQFf63nJoAZxnGZp","isInStock":"MMP3BPFjMIvSRU5iXvrC","photoBlock":"nPMW0dsVrBkRnSTthGna","image":"Hbv9YaUAKq52SaIfVtzp","soldOut":"wQ6c1qzZl8VawgUSAtXg","contentBlock":"pz8XDhC0faqT32YMM5x7","productTitle":"wdlRPfnjED7ncg_tOMOT","stringContainer":"Vs4xW_IuRoagRW2t1A7_","stringContainer__name":"Z9Fd_XdCJpJm08p9fz09","stringContainer__content":"EmKEIlfgOstcEn7nI2NR","buttonPriceBlock":"sV50JpF1xtalhZkMtXFY","currentPriceBlock":"WZ4ZTOAPNmrpzZvdUDU1","currentPriceBlock__title":"QrZq8sgt6AgBJNzQLIt_","currentPriceBlock__price":"OT1ZU6T9UAsieS_wHs07","buttonBlock":"zZXXu6bqrdUr6ZHt618u","hide":"EzPfVrhFzxa5EyVtlHLE","descriptionBlock":"UkmoaOSx6zTQ_Lycw6G4","descriptionBlock__title":"_TS0cDLqAbjEKg2tOoKr"});

/***/ }),

/***/ "./ui/productPage/components/SeePriceModal/SeePriceModal.module.scss":
/*!***************************************************************************!*\
  !*** ./ui/productPage/components/SeePriceModal/SeePriceModal.module.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"warning":"FAeiVLEVSUm4RWTmbzpN","bodyContainer":"wXfqiNAf7hBMBLJfNLXO","btn":"bIcKbjTCTgVqbUUFOsJr"});

/***/ }),

/***/ "./ui/products/components/Products/Products.module.scss":
/*!**************************************************************!*\
  !*** ./ui/products/components/Products/Products.module.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"itemContainer":"Ig21t5dqLQWwHuhxB43p","link":"GAS7edJHX81TydZQ6SCU","item":"M75GvDKJkw2bwgZ5PC4a","isInStock":"a0h6six5L4SyftixyYHX","image":"S6azwyn779dyNjKodw_6","soldOut":"jh2Nc6XMybD8sVqTaiuT","itemContent":"sWOvqs0Rp3HCUbrSbJrL","productName":"r5sPmTWlp_x3VYrJcHfE","price":"dK7YfXTL6R1cNM6Gihqp","priceName":"QOXjyvAptsCtpKW5Jx34","priceData":"eULdS1XNjXARkKYl2k3Q","timer":"cPYrB5XS2qRfZicjhiu6"});

/***/ }),

/***/ "./ui/products/pages/CategoriesPage/CategoriesPage.module.scss":
/*!*********************************************************************!*\
  !*** ./ui/products/pages/CategoriesPage/CategoriesPage.module.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"ywj3GZ3JMf_BYM1nd8Rr","categoryes":"OpYX3Mo04ErB1Qy7Y1yw","item":"QR7NCYc5cL7ZUbK3yQhA","activeItem":"KwMruLZv9q_MEMJlRvLi"});

/***/ }),

/***/ "./ui/profile/forms/ProfilePageForm.module.scss":
/*!******************************************************!*\
  !*** ./ui/profile/forms/ProfilePageForm.module.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"container":"O0HOdqZImghL4p8B2Yf6","auctionHeader":"Corlg7XRx8eiXo8gyAga","form":"U0vLInmJqYwOIKV7fNrJ","emailContainer":"ILdO_M_1SGHMtPzgINDo","emailValue":"oN_FpyZa5gD1logSE93A","photoContainer":"s62oyeG_OS3UwX9ByfkB","loadImageButtonContainer":"FJ5rRlguEIug1hb9Py_Q","deleteImageButton":"f9McjEeW6ThMlDPF5a28","spinner":"EfRdxBvY9L_dYligEzWL","loadImageButton":"SYZILm9GFCBEQuAH29X6","input":"D4kIlfudG3uocM2JHI9h","cashContainer":"MmSpKnoNidM1W6PJmYk2"});

/***/ }),

/***/ "./ui/profile/forms/TextField/TextField.module.scss":
/*!**********************************************************!*\
  !*** ./ui/profile/forms/TextField/TextField.module.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"label":"XEe4qU2Rr2lmO3jfOiYx","error":"gpr6WtzCXOZia67T7Zmd"});

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_axios_index_js-node_modules_dat-dd1df0"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_axios_index_js-node_modules_dat-dd1df0"], function() { return __webpack_require__("./index.tsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map