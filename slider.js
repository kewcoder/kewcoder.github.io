function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// extend a Siema class by two methods
// addDots - to create a markup for dots
// updateDots - to update classes on dots on change callback
delete window.SiemaWithDots;

window.SiemaWithDots = /*#__PURE__*/function (_Siema) {
  "use strict";

  _inherits(_class, _Siema);

  var _super = _createSuper(_class);

  function _class() {
    _classCallCheck(this, _class);

    return _super.apply(this, arguments);
  }

  _createClass(_class, [{
    key: "addDots",
    value: function addDots() {
      var _this = this;

      // create a contnier for all dots
      // add a class 'dots' for styling reason
      this.dots = document.createElement("div");
      this.dots.classList.add("dots"); // loop through slides to create a number of dots

      var _loop = function _loop(i) {
        // create a dot
        var dot = document.createElement("button"); // add a class to dot

        dot.classList.add("dots__item"); // add an event handler to each of them

        dot.addEventListener("click", function () {
          _this.goTo(i);
        }); // append dot to a container for all of them

        _this.dots.appendChild(dot);
      };

      for (var i = 0; i < this.innerElements.length; i++) {
        _loop(i);
      } // add the container full of dots after selector


      this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
    }
  }, {
    key: "updateDots",
    value: function updateDots() {
      // loop through all dots
      for (var i = 0; i < this.dots.querySelectorAll("button").length; i++) {
        // if current dot matches currentSlide prop, add a class to it, remove otherwise
        var addOrRemove = this.currentSlide === i ? "add" : "remove";
        var visited = this.currentSlide > i ? "add" : "remove";
        this.dots.querySelectorAll("button")[i].classList[addOrRemove]("dots__item--active"); // Add middle circle to visited dots

        this.dots.querySelectorAll("button")[i].classList[visited]("dots__item--visited");
      }
    }
  }, {
    key: "updateControls",
    value: function updateControls() {
      var isFirst = this.currentSlide === 0 ? "add" : "remove";
      var isLast = this.currentSlide === this.innerElements.length - 1 ? "add" : "remove";
      document.querySelector(".prev").classList[isFirst]("controls--inactive");
      document.querySelector(".next").classList[isLast]("controls--inactive");
    }
  }]);

  return _class;
}(Siema); // instantiate new extended Siema


delete window.mySiemaWithDots;
window.mySiemaWithDots = new SiemaWithDots({
  easing: "cubic-bezier(0.76, 0, 0.24, 1)",
  duration: 500,
  // on init trigger method created above
  onInit: function onInit() {
    this.addDots();
    this.updateDots();
  },
  onChange: function onChange() {
    this.updateDots();
    this.updateControls();
  }
}); // Controls

var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var dots = document.querySelector(".dots");

if (mySiemaWithDots.innerElements.length === 1) {
  // Disable controls if only one slide
  prev.remove();
  next.remove();
  dots.remove();
} else {
  prev.addEventListener("click", function () {
    return mySiemaWithDots.prev();
  });
  next.addEventListener("click", function () {
    return mySiemaWithDots.next();
  });
} // Modal Handling


if (document.querySelector('.p_cards') !== null) {
  var _loop2 = function _loop2(i) {
    var cards = [];
    var modals = [];
    cards[i] = document.querySelector("#card-".concat(i + 1));
    modals[i] = document.querySelector("#answer-".concat(i + 1)); // cards[i] = document.querySelector('.p-card');
    // modals[i] = document.querySelector('.modal-wrapper');

    var modalWrappers = document.querySelectorAll(".modal-wrapper");
    var closeBtns = document.querySelectorAll(".modal__btn");
    var markers = document.querySelectorAll(".marker");
    console.log(cards[i]);

    if (cards && cards[i] && typeof cards[i] !== 'undefined') {
      cards[i].addEventListener("click", function () {
        modals[i].classList.toggle("is-active");
        cards[i].children[2].style.opacity = 1;
      });
    }

    var _iterator = _createForOfIteratorHelper(closeBtns),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var btn = _step.value;
        btn.addEventListener("click", function () {
          var _iterator2 = _createForOfIteratorHelper(modalWrappers),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var wrapper = _step2.value;
              wrapper.classList.remove("is-active");
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          var _iterator3 = _createForOfIteratorHelper(markers),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var marker = _step3.value;
              marker.style.opacity = 0;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  for (var i = 0; i < document.querySelector('.p_cards').children.length; i++) {
    _loop2(i);
  }
} // Disable Siema on small screens


if (screen.width <= 767) {
  mySiemaWithDots.destroy();
  document.querySelector('.siema > div').style.width = '100%';

  for (var _i = 0; _i < mySiemaWithDots.innerElements.length; _i++) {
    mySiemaWithDots.innerElements[_i].parentNode.style.float = 'initial';
    mySiemaWithDots.innerElements[_i].parentNode.style.width = '100%';
  }
}
