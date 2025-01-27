var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/lorem-ipsum/dist/constants/formats.js
var require_formats = __commonJS({
  "node_modules/lorem-ipsum/dist/constants/formats.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.FORMAT_PLAIN = exports.FORMAT_HTML = exports.FORMATS = void 0;
    var FORMAT_HTML = "html";
    exports.FORMAT_HTML = FORMAT_HTML;
    var FORMAT_PLAIN = "plain";
    exports.FORMAT_PLAIN = FORMAT_PLAIN;
    var FORMATS = [FORMAT_HTML, FORMAT_PLAIN];
    exports.FORMATS = FORMATS;
  }
});

// node_modules/lorem-ipsum/dist/constants/units.js
var require_units = __commonJS({
  "node_modules/lorem-ipsum/dist/constants/units.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UNIT_WORDS = exports.UNIT_WORD = exports.UNIT_SENTENCES = exports.UNIT_SENTENCE = exports.UNIT_PARAGRAPHS = exports.UNIT_PARAGRAPH = exports.UNITS = void 0;
    var UNIT_WORDS = "words";
    exports.UNIT_WORDS = UNIT_WORDS;
    var UNIT_WORD = "word";
    exports.UNIT_WORD = UNIT_WORD;
    var UNIT_SENTENCES = "sentences";
    exports.UNIT_SENTENCES = UNIT_SENTENCES;
    var UNIT_SENTENCE = "sentence";
    exports.UNIT_SENTENCE = UNIT_SENTENCE;
    var UNIT_PARAGRAPHS = "paragraphs";
    exports.UNIT_PARAGRAPHS = UNIT_PARAGRAPHS;
    var UNIT_PARAGRAPH = "paragraph";
    exports.UNIT_PARAGRAPH = UNIT_PARAGRAPH;
    var UNITS = [UNIT_WORDS, UNIT_WORD, UNIT_SENTENCES, UNIT_SENTENCE, UNIT_PARAGRAPHS, UNIT_PARAGRAPH];
    exports.UNITS = UNITS;
  }
});

// node_modules/lorem-ipsum/dist/constants/words.js
var require_words = __commonJS({
  "node_modules/lorem-ipsum/dist/constants/words.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WORDS = void 0;
    var WORDS = ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "Lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"];
    exports.WORDS = WORDS;
  }
});

// node_modules/lorem-ipsum/dist/constants/lineEndings.js
var require_lineEndings = __commonJS({
  "node_modules/lorem-ipsum/dist/constants/lineEndings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LINE_ENDINGS = void 0;
    var LINE_ENDINGS = {
      POSIX: "\n",
      WIN32: "\r\n"
    };
    exports.LINE_ENDINGS = LINE_ENDINGS;
  }
});

// node_modules/lorem-ipsum/dist/util/capitalize.js
var require_capitalize = __commonJS({
  "node_modules/lorem-ipsum/dist/util/capitalize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var capitalize = function capitalize2(str) {
      var trimmed = str.trim();
      return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    };
    var _default = capitalize;
    exports["default"] = _default;
  }
});

// node_modules/lorem-ipsum/dist/util/isNode.js
var require_isNode = __commonJS({
  "node_modules/lorem-ipsum/dist/util/isNode.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var isNode = function isNode2() {
      return typeof module !== "undefined" && !!module.exports;
    };
    var _default = isNode;
    exports["default"] = _default;
  }
});

// node_modules/lorem-ipsum/dist/util/isReactNative.js
var require_isReactNative = __commonJS({
  "node_modules/lorem-ipsum/dist/util/isReactNative.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var isReactNative = function isReactNative2() {
      var isReactNativeResult = false;
      try {
        isReactNativeResult = navigator.product === "ReactNative";
      } catch (e) {
        isReactNativeResult = false;
      }
      return isReactNativeResult;
    };
    var _default = isReactNative;
    exports["default"] = _default;
  }
});

// node_modules/lorem-ipsum/dist/constants/platforms.js
var require_platforms = __commonJS({
  "node_modules/lorem-ipsum/dist/constants/platforms.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SUPPORTED_PLATFORMS = void 0;
    var SUPPORTED_PLATFORMS = {
      DARWIN: "darwin",
      LINUX: "linux",
      WIN32: "win32"
    };
    exports.SUPPORTED_PLATFORMS = SUPPORTED_PLATFORMS;
  }
});

// node_modules/lorem-ipsum/dist/util/isWindows.js
var require_isWindows = __commonJS({
  "node_modules/lorem-ipsum/dist/util/isWindows.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _platforms = require_platforms();
    var isWindows = function isWindows2() {
      var isWindowsResult = false;
      try {
        isWindowsResult = process.platform === _platforms.SUPPORTED_PLATFORMS.WIN32;
      } catch (e) {
        isWindowsResult = false;
      }
      return isWindowsResult;
    };
    var _default = isWindows;
    exports["default"] = _default;
  }
});

// node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js
var require_makeArrayOfLength = __commonJS({
  "node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var makeArrayOfLength = function makeArrayOfLength2() {
      var length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return Array.apply(null, Array(length)).map(function(item, index) {
        return index;
      });
    };
    var _default = makeArrayOfLength;
    exports["default"] = _default;
  }
});

// node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js
var require_makeArrayOfStrings = __commonJS({
  "node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _makeArrayOfLength = _interopRequireDefault(require_makeArrayOfLength());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var makeArrayOfStrings = function makeArrayOfStrings2(length, makeString) {
      var arr = (0, _makeArrayOfLength["default"])(length);
      return arr.map(function() {
        return makeString();
      });
    };
    var _default = makeArrayOfStrings;
    exports["default"] = _default;
  }
});

// node_modules/lorem-ipsum/dist/util/index.js
var require_util = __commonJS({
  "node_modules/lorem-ipsum/dist/util/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "capitalize", {
      enumerable: true,
      get: function get() {
        return _capitalize["default"];
      }
    });
    Object.defineProperty(exports, "isNode", {
      enumerable: true,
      get: function get() {
        return _isNode["default"];
      }
    });
    Object.defineProperty(exports, "isReactNative", {
      enumerable: true,
      get: function get() {
        return _isReactNative["default"];
      }
    });
    Object.defineProperty(exports, "isWindows", {
      enumerable: true,
      get: function get() {
        return _isWindows["default"];
      }
    });
    Object.defineProperty(exports, "makeArrayOfLength", {
      enumerable: true,
      get: function get() {
        return _makeArrayOfLength["default"];
      }
    });
    Object.defineProperty(exports, "makeArrayOfStrings", {
      enumerable: true,
      get: function get() {
        return _makeArrayOfStrings["default"];
      }
    });
    var _capitalize = _interopRequireDefault(require_capitalize());
    var _isNode = _interopRequireDefault(require_isNode());
    var _isReactNative = _interopRequireDefault(require_isReactNative());
    var _isWindows = _interopRequireDefault(require_isWindows());
    var _makeArrayOfLength = _interopRequireDefault(require_makeArrayOfLength());
    var _makeArrayOfStrings = _interopRequireDefault(require_makeArrayOfStrings());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
  }
});

// node_modules/lorem-ipsum/dist/lib/generator.js
var require_generator = __commonJS({
  "node_modules/lorem-ipsum/dist/lib/generator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _words = require_words();
    var _util = require_util();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var Generator = /* @__PURE__ */ function() {
      function Generator2() {
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$sentencesPerPara = _ref.sentencesPerParagraph, sentencesPerParagraph = _ref$sentencesPerPara === void 0 ? {
          max: 7,
          min: 3
        } : _ref$sentencesPerPara, _ref$wordsPerSentence = _ref.wordsPerSentence, wordsPerSentence = _ref$wordsPerSentence === void 0 ? {
          max: 15,
          min: 5
        } : _ref$wordsPerSentence, random = _ref.random, seed = _ref.seed, _ref$words = _ref.words, words = _ref$words === void 0 ? _words.WORDS : _ref$words;
        _classCallCheck(this, Generator2);
        _defineProperty(this, "sentencesPerParagraph", void 0);
        _defineProperty(this, "wordsPerSentence", void 0);
        _defineProperty(this, "random", void 0);
        _defineProperty(this, "words", void 0);
        if (sentencesPerParagraph.min > sentencesPerParagraph.max) {
          throw new Error("Minimum number of sentences per paragraph (".concat(sentencesPerParagraph.min, ") cannot exceed maximum (").concat(sentencesPerParagraph.max, ")."));
        }
        if (wordsPerSentence.min > wordsPerSentence.max) {
          throw new Error("Minimum number of words per sentence (".concat(wordsPerSentence.min, ") cannot exceed maximum (").concat(wordsPerSentence.max, ")."));
        }
        this.sentencesPerParagraph = sentencesPerParagraph;
        this.words = words;
        this.wordsPerSentence = wordsPerSentence;
        this.random = random || Math.random;
      }
      _createClass(Generator2, [{
        key: "generateRandomInteger",
        value: function generateRandomInteger(min, max) {
          return Math.floor(this.random() * (max - min + 1) + min);
        }
      }, {
        key: "generateRandomWords",
        value: function generateRandomWords(num) {
          var _this = this;
          var _this$wordsPerSentenc = this.wordsPerSentence, min = _this$wordsPerSentenc.min, max = _this$wordsPerSentenc.max;
          var length = num || this.generateRandomInteger(min, max);
          return (0, _util.makeArrayOfLength)(length).reduce(function(accumulator, index) {
            return "".concat(_this.pluckRandomWord(), " ").concat(accumulator);
          }, "").trim();
        }
      }, {
        key: "generateRandomSentence",
        value: function generateRandomSentence(num) {
          return "".concat((0, _util.capitalize)(this.generateRandomWords(num)), ".");
        }
      }, {
        key: "generateRandomParagraph",
        value: function generateRandomParagraph(num) {
          var _this2 = this;
          var _this$sentencesPerPar = this.sentencesPerParagraph, min = _this$sentencesPerPar.min, max = _this$sentencesPerPar.max;
          var length = num || this.generateRandomInteger(min, max);
          return (0, _util.makeArrayOfLength)(length).reduce(function(accumulator, index) {
            return "".concat(_this2.generateRandomSentence(), " ").concat(accumulator);
          }, "").trim();
        }
      }, {
        key: "pluckRandomWord",
        value: function pluckRandomWord() {
          var min = 0;
          var max = this.words.length - 1;
          var index = this.generateRandomInteger(min, max);
          return this.words[index];
        }
      }]);
      return Generator2;
    }();
    var _default = Generator;
    exports["default"] = _default;
  }
});

// node_modules/lorem-ipsum/dist/lib/LoremIpsum.js
var require_LoremIpsum = __commonJS({
  "node_modules/lorem-ipsum/dist/lib/LoremIpsum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _formats = require_formats();
    var _lineEndings = require_lineEndings();
    var _generator = _interopRequireDefault(require_generator());
    var _util = require_util();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var LoremIpsum2 = /* @__PURE__ */ function() {
      function LoremIpsum3() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _formats.FORMAT_PLAIN;
        var suffix = arguments.length > 2 ? arguments[2] : void 0;
        _classCallCheck(this, LoremIpsum3);
        this.format = format;
        this.suffix = suffix;
        _defineProperty(this, "generator", void 0);
        if (_formats.FORMATS.indexOf(format.toLowerCase()) === -1) {
          throw new Error("".concat(format, " is an invalid format. Please use ").concat(_formats.FORMATS.join(" or "), "."));
        }
        this.generator = new _generator["default"](options);
      }
      _createClass(LoremIpsum3, [{
        key: "getLineEnding",
        value: function getLineEnding() {
          if (this.suffix) {
            return this.suffix;
          }
          if (!(0, _util.isReactNative)() && (0, _util.isNode)() && (0, _util.isWindows)()) {
            return _lineEndings.LINE_ENDINGS.WIN32;
          }
          return _lineEndings.LINE_ENDINGS.POSIX;
        }
      }, {
        key: "formatString",
        value: function formatString(str) {
          if (this.format === _formats.FORMAT_HTML) {
            return "<p>".concat(str, "</p>");
          }
          return str;
        }
      }, {
        key: "formatStrings",
        value: function formatStrings(strings) {
          var _this = this;
          return strings.map(function(str) {
            return _this.formatString(str);
          });
        }
      }, {
        key: "generateWords",
        value: function generateWords(num) {
          return this.formatString(this.generator.generateRandomWords(num));
        }
      }, {
        key: "generateSentences",
        value: function generateSentences(num) {
          return this.formatString(this.generator.generateRandomParagraph(num));
        }
      }, {
        key: "generateParagraphs",
        value: function generateParagraphs(num) {
          var makeString = this.generator.generateRandomParagraph.bind(this.generator);
          return this.formatStrings((0, _util.makeArrayOfStrings)(num, makeString)).join(this.getLineEnding());
        }
      }]);
      return LoremIpsum3;
    }();
    var _default = LoremIpsum2;
    exports["default"] = _default;
  }
});

// node_modules/lorem-ipsum/dist/index.js
var require_dist = __commonJS({
  "node_modules/lorem-ipsum/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "LoremIpsum", {
      enumerable: true,
      get: function get() {
        return _LoremIpsum["default"];
      }
    });
    exports.loremIpsum = void 0;
    var _formats = require_formats();
    var _units = require_units();
    var _words = require_words();
    var _LoremIpsum = _interopRequireDefault(require_LoremIpsum());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var loremIpsum = function loremIpsum2() {
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$count = _ref.count, count = _ref$count === void 0 ? 1 : _ref$count, _ref$format = _ref.format, format = _ref$format === void 0 ? _formats.FORMAT_PLAIN : _ref$format, _ref$paragraphLowerBo = _ref.paragraphLowerBound, paragraphLowerBound = _ref$paragraphLowerBo === void 0 ? 3 : _ref$paragraphLowerBo, _ref$paragraphUpperBo = _ref.paragraphUpperBound, paragraphUpperBound = _ref$paragraphUpperBo === void 0 ? 7 : _ref$paragraphUpperBo, random = _ref.random, _ref$sentenceLowerBou = _ref.sentenceLowerBound, sentenceLowerBound = _ref$sentenceLowerBou === void 0 ? 5 : _ref$sentenceLowerBou, _ref$sentenceUpperBou = _ref.sentenceUpperBound, sentenceUpperBound = _ref$sentenceUpperBou === void 0 ? 15 : _ref$sentenceUpperBou, _ref$units = _ref.units, units = _ref$units === void 0 ? _units.UNIT_SENTENCES : _ref$units, _ref$words = _ref.words, words = _ref$words === void 0 ? _words.WORDS : _ref$words, _ref$suffix = _ref.suffix, suffix = _ref$suffix === void 0 ? "" : _ref$suffix;
      var options = {
        random,
        sentencesPerParagraph: {
          max: paragraphUpperBound,
          min: paragraphLowerBound
        },
        words,
        wordsPerSentence: {
          max: sentenceUpperBound,
          min: sentenceLowerBound
        }
      };
      var lorem = new _LoremIpsum["default"](options, format, suffix);
      switch (units) {
        case _units.UNIT_PARAGRAPHS:
        case _units.UNIT_PARAGRAPH:
          return lorem.generateParagraphs(count);
        case _units.UNIT_SENTENCES:
        case _units.UNIT_SENTENCE:
          return lorem.generateSentences(count);
        case _units.UNIT_WORDS:
        case _units.UNIT_WORD:
          return lorem.generateWords(count);
        default:
          return "";
      }
    };
    exports.loremIpsum = loremIpsum;
  }
});

// src/lorem.ts
var import_lorem_ipsum = __toESM(require_dist(), 1);

// node_modules/unist-builder/lib/index.js
function u(type, props, value) {
  const node = { type: String(type) };
  if ((value === void 0 || value === null) && (typeof props === "string" || Array.isArray(props))) {
    value = props;
  } else {
    Object.assign(node, props);
  }
  if (Array.isArray(value)) {
    node.children = value;
  } else if (value !== void 0 && value !== null) {
    node.value = String(value);
  }
  return node;
}

// src/lorem.ts
var loremIpsumDirective = {
  name: "lorem-ipsum",
  doc: "A directive that will generate paragraphs of lorem ipsum text.",
  alias: ["lorem", "lipsum"],
  arg: { type: Number, doc: "The number of paragraphs to generate.`" },
  options: {},
  run(data) {
    const lorem = new import_lorem_ipsum.LoremIpsum();
    const text = lorem.generateParagraphs(Number(data.arg) || 1);
    const paragraphs = text.split("\n").map((p) => p.trim());
    return paragraphs.map((p) => u("paragraph", [{ type: "text", value: p }]));
  }
};
var plugin = { name: "Lorem Ipsum by Curvenote", directives: [loremIpsumDirective] };
var lorem_default = plugin;
export {
  lorem_default as default
};
//# sourceMappingURL=lorem.mjs.map