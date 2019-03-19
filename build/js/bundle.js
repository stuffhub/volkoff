/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/gallery.js":
/*!***************************!*\
  !*** ./src/js/gallery.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sliderViewport = $('.slider__wrapper'),
    slides = sliderViewport.children(),
    slidesLength = slides.length;
var slideCounter = 0;
$(window).on('load resize', function () {
  setSlidesAttr();
  sliderViewport.outerWidth(getFullWidthSlider());
  transformViewport(transformViewportRefresh());
});
$(document).on('click', '.arrow__next', nextSlide);
$(document).on('click', '.arrow__prev', prevSlide);

function nextSlide() {
  if (slideCounter !== slidesLength - 1) {
    slideCounter++;
    transformViewport($(slides[slideCounter]).position().left);
  } else if (slideCounter !== slidesLength) {
    slideCounter = 0;
    transformViewport($(slides[slideCounter]).position().left);
  }
}

;

function prevSlide() {
  if (slideCounter !== 0) {
    slideCounter--;
    transformViewport($(slides[slideCounter]).position().left);
  } else if (slideCounter === 0) {
    slideCounter = slidesLength - 1;
    transformViewport($(slides[slideCounter]).position().left);
  }
}

;

function transformViewportRefresh() {
  if (slideCounter !== 0) {
    return $(slides[slideCounter]).position().left;
  }
}

;

function transformViewport(value) {
  sliderViewport.css({
    '-webkit-transform': 'translateX(-' + value + 'px)',
    '-moz-transform': 'translateX(-' + value + 'px)',
    '-ms-transform': 'translateX(-' + value + 'px)',
    '-o-transform': 'translateX(-' + value + 'px)',
    'transform': 'translateX(-' + value + 'px)'
  });
}

;

function setSlidesAttr(context) {
  slides.each(function (index) {
    $(this).outerWidth($(window).outerWidth());
    $(this).attr('data-key', index);
  });
}

;

function getFullWidthSlider() {
  var result = 0;
  slides.each(function () {
    result += $(this).outerWidth();
  });
  return result;
}

;

/***/ }),

/***/ "./src/js/hamburger.js":
/*!*****************************!*\
  !*** ./src/js/hamburger.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hamburgerButton = document.querySelector('.toggle-menu');
var navigation = document.querySelector('.nav');
hamburgerButton.addEventListener('click', onHamburgerButtonClick);

function onHamburgerButtonClick(e) {
  var target = e.currentTarget;

  if (!target.classList.contains('toggle-menu__active')) {
    target.classList.add('toggle-menu__active');
    $(navigation).stop(true).slideDown();
  } else {
    target.classList.remove('toggle-menu__active');
    $(navigation).stop(true).slideUp();
  }
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hamburger = __webpack_require__(/*! ./hamburger */ "./src/js/hamburger.js");

var gallery = __webpack_require__(/*! ./gallery */ "./src/js/gallery.js");

var scroll = __webpack_require__(/*! ./scroll */ "./src/js/scroll.js");

/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(window).on('load scroll', function () {
  var bottomPosition = $(this).scrollTop() + $(this).height();
  $('.animated').each(function () {
    var elementPosition = $(this).offset().top;

    if (bottomPosition > elementPosition) {
      $(this).addClass('fadeInUp');
    }
  });
});

/***/ })

/******/ });