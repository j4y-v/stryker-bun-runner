import { createRequire } from "node:module";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
    var cached = cache.get(mod);
    if (cached)
      return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: __accessProp.bind(mod, key),
        enumerable: true
      });
  if (canCache)
    cache.set(mod, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// node_modules/picomatch/lib/constants.js
var require_constants = __commonJS((exports, module) => {
  var WIN_SLASH = "\\\\/";
  var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
  var DEFAULT_MAX_EXTGLOB_RECURSION = 0;
  var DOT_LITERAL = "\\.";
  var PLUS_LITERAL = "\\+";
  var QMARK_LITERAL = "\\?";
  var SLASH_LITERAL = "\\/";
  var ONE_CHAR = "(?=.)";
  var QMARK = "[^/]";
  var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
  var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
  var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
  var NO_DOT = `(?!${DOT_LITERAL})`;
  var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
  var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
  var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
  var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
  var STAR = `${QMARK}*?`;
  var SEP = "/";
  var POSIX_CHARS = {
    DOT_LITERAL,
    PLUS_LITERAL,
    QMARK_LITERAL,
    SLASH_LITERAL,
    ONE_CHAR,
    QMARK,
    END_ANCHOR,
    DOTS_SLASH,
    NO_DOT,
    NO_DOTS,
    NO_DOT_SLASH,
    NO_DOTS_SLASH,
    QMARK_NO_DOT,
    STAR,
    START_ANCHOR,
    SEP
  };
  var WINDOWS_CHARS = {
    ...POSIX_CHARS,
    SLASH_LITERAL: `[${WIN_SLASH}]`,
    QMARK: WIN_NO_SLASH,
    STAR: `${WIN_NO_SLASH}*?`,
    DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
    NO_DOT: `(?!${DOT_LITERAL})`,
    NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
    NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
    NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
    QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
    START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
    END_ANCHOR: `(?:[${WIN_SLASH}]|$)`,
    SEP: "\\"
  };
  var POSIX_REGEX_SOURCE = {
    __proto__: null,
    alnum: "a-zA-Z0-9",
    alpha: "a-zA-Z",
    ascii: "\\x00-\\x7F",
    blank: " \\t",
    cntrl: "\\x00-\\x1F\\x7F",
    digit: "0-9",
    graph: "\\x21-\\x7E",
    lower: "a-z",
    print: "\\x20-\\x7E ",
    punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
    space: " \\t\\r\\n\\v\\f",
    upper: "A-Z",
    word: "A-Za-z0-9_",
    xdigit: "A-Fa-f0-9"
  };
  module.exports = {
    DEFAULT_MAX_EXTGLOB_RECURSION,
    MAX_LENGTH: 1024 * 64,
    POSIX_REGEX_SOURCE,
    REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
    REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
    REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
    REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
    REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
    REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
    REPLACEMENTS: {
      __proto__: null,
      "***": "*",
      "**/**": "**",
      "**/**/**": "**"
    },
    CHAR_0: 48,
    CHAR_9: 57,
    CHAR_UPPERCASE_A: 65,
    CHAR_LOWERCASE_A: 97,
    CHAR_UPPERCASE_Z: 90,
    CHAR_LOWERCASE_Z: 122,
    CHAR_LEFT_PARENTHESES: 40,
    CHAR_RIGHT_PARENTHESES: 41,
    CHAR_ASTERISK: 42,
    CHAR_AMPERSAND: 38,
    CHAR_AT: 64,
    CHAR_BACKWARD_SLASH: 92,
    CHAR_CARRIAGE_RETURN: 13,
    CHAR_CIRCUMFLEX_ACCENT: 94,
    CHAR_COLON: 58,
    CHAR_COMMA: 44,
    CHAR_DOT: 46,
    CHAR_DOUBLE_QUOTE: 34,
    CHAR_EQUAL: 61,
    CHAR_EXCLAMATION_MARK: 33,
    CHAR_FORM_FEED: 12,
    CHAR_FORWARD_SLASH: 47,
    CHAR_GRAVE_ACCENT: 96,
    CHAR_HASH: 35,
    CHAR_HYPHEN_MINUS: 45,
    CHAR_LEFT_ANGLE_BRACKET: 60,
    CHAR_LEFT_CURLY_BRACE: 123,
    CHAR_LEFT_SQUARE_BRACKET: 91,
    CHAR_LINE_FEED: 10,
    CHAR_NO_BREAK_SPACE: 160,
    CHAR_PERCENT: 37,
    CHAR_PLUS: 43,
    CHAR_QUESTION_MARK: 63,
    CHAR_RIGHT_ANGLE_BRACKET: 62,
    CHAR_RIGHT_CURLY_BRACE: 125,
    CHAR_RIGHT_SQUARE_BRACKET: 93,
    CHAR_SEMICOLON: 59,
    CHAR_SINGLE_QUOTE: 39,
    CHAR_SPACE: 32,
    CHAR_TAB: 9,
    CHAR_UNDERSCORE: 95,
    CHAR_VERTICAL_LINE: 124,
    CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
    extglobChars(chars) {
      return {
        "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
        "?": { type: "qmark", open: "(?:", close: ")?" },
        "+": { type: "plus", open: "(?:", close: ")+" },
        "*": { type: "star", open: "(?:", close: ")*" },
        "@": { type: "at", open: "(?:", close: ")" }
      };
    },
    globChars(win32) {
      return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
    }
  };
});

// node_modules/picomatch/lib/utils.js
var require_utils = __commonJS((exports) => {
  var {
    REGEX_BACKSLASH,
    REGEX_REMOVE_BACKSLASH,
    REGEX_SPECIAL_CHARS,
    REGEX_SPECIAL_CHARS_GLOBAL
  } = require_constants();
  exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
  exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
  exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
  exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
  exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
  exports.isWindows = () => {
    if (typeof navigator !== "undefined" && navigator.platform) {
      const platform = navigator.platform.toLowerCase();
      return platform === "win32" || platform === "windows";
    }
    if (typeof process !== "undefined" && process.platform) {
      return process.platform === "win32";
    }
    return false;
  };
  exports.removeBackslashes = (str) => {
    return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
      return match === "\\" ? "" : match;
    });
  };
  exports.escapeLast = (input, char, lastIdx) => {
    const idx = input.lastIndexOf(char, lastIdx);
    if (idx === -1)
      return input;
    if (input[idx - 1] === "\\")
      return exports.escapeLast(input, char, idx - 1);
    return `${input.slice(0, idx)}\\${input.slice(idx)}`;
  };
  exports.removePrefix = (input, state = {}) => {
    let output = input;
    if (output.startsWith("./")) {
      output = output.slice(2);
      state.prefix = "./";
    }
    return output;
  };
  exports.wrapOutput = (input, state = {}, options = {}) => {
    const prepend = options.contains ? "" : "^";
    const append = options.contains ? "" : "$";
    let output = `${prepend}(?:${input})${append}`;
    if (state.negated === true) {
      output = `(?:^(?!${output}).*$)`;
    }
    return output;
  };
  exports.basename = (path, { windows } = {}) => {
    const segs = path.split(windows ? /[\\/]/ : "/");
    const last = segs[segs.length - 1];
    if (last === "") {
      return segs[segs.length - 2];
    }
    return last;
  };
});

// node_modules/picomatch/lib/scan.js
var require_scan = __commonJS((exports, module) => {
  var utils = require_utils();
  var {
    CHAR_ASTERISK,
    CHAR_AT,
    CHAR_BACKWARD_SLASH,
    CHAR_COMMA,
    CHAR_DOT,
    CHAR_EXCLAMATION_MARK,
    CHAR_FORWARD_SLASH,
    CHAR_LEFT_CURLY_BRACE,
    CHAR_LEFT_PARENTHESES,
    CHAR_LEFT_SQUARE_BRACKET,
    CHAR_PLUS,
    CHAR_QUESTION_MARK,
    CHAR_RIGHT_CURLY_BRACE,
    CHAR_RIGHT_PARENTHESES,
    CHAR_RIGHT_SQUARE_BRACKET
  } = require_constants();
  var isPathSeparator = (code) => {
    return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
  };
  var depth = (token) => {
    if (token.isPrefix !== true) {
      token.depth = token.isGlobstar ? Infinity : 1;
    }
  };
  var scan = (input, options) => {
    const opts = options || {};
    const length = input.length - 1;
    const scanToEnd = opts.parts === true || opts.scanToEnd === true;
    const slashes = [];
    const tokens3 = [];
    const parts = [];
    let str = input;
    let index = -1;
    let start = 0;
    let lastIndex = 0;
    let isBrace = false;
    let isBracket = false;
    let isGlob = false;
    let isExtglob = false;
    let isGlobstar = false;
    let braceEscaped = false;
    let backslashes = false;
    let negated = false;
    let negatedExtglob = false;
    let finished = false;
    let braces = 0;
    let prev;
    let code;
    let token = { value: "", depth: 0, isGlob: false };
    const eos = () => index >= length;
    const peek = () => str.charCodeAt(index + 1);
    const advance = () => {
      prev = code;
      return str.charCodeAt(++index);
    };
    while (index < length) {
      code = advance();
      let next;
      if (code === CHAR_BACKWARD_SLASH) {
        backslashes = token.backslashes = true;
        code = advance();
        if (code === CHAR_LEFT_CURLY_BRACE) {
          braceEscaped = true;
        }
        continue;
      }
      if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
        braces++;
        while (eos() !== true && (code = advance())) {
          if (code === CHAR_BACKWARD_SLASH) {
            backslashes = token.backslashes = true;
            advance();
            continue;
          }
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braces++;
            continue;
          }
          if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
            isBrace = token.isBrace = true;
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (braceEscaped !== true && code === CHAR_COMMA) {
            isBrace = token.isBrace = true;
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (code === CHAR_RIGHT_CURLY_BRACE) {
            braces--;
            if (braces === 0) {
              braceEscaped = false;
              isBrace = token.isBrace = true;
              finished = true;
              break;
            }
          }
        }
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
      if (code === CHAR_FORWARD_SLASH) {
        slashes.push(index);
        tokens3.push(token);
        token = { value: "", depth: 0, isGlob: false };
        if (finished === true)
          continue;
        if (prev === CHAR_DOT && index === start + 1) {
          start += 2;
          continue;
        }
        lastIndex = index + 1;
        continue;
      }
      if (opts.noext !== true) {
        const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
        if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          isExtglob = token.isExtglob = true;
          finished = true;
          if (code === CHAR_EXCLAMATION_MARK && index === start) {
            negatedExtglob = true;
          }
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_BACKWARD_SLASH) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                isGlob = token.isGlob = true;
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
      }
      if (code === CHAR_ASTERISK) {
        if (prev === CHAR_ASTERISK)
          isGlobstar = token.isGlobstar = true;
        isGlob = token.isGlob = true;
        finished = true;
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
      if (code === CHAR_QUESTION_MARK) {
        isGlob = token.isGlob = true;
        finished = true;
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
      if (code === CHAR_LEFT_SQUARE_BRACKET) {
        while (eos() !== true && (next = advance())) {
          if (next === CHAR_BACKWARD_SLASH) {
            backslashes = token.backslashes = true;
            advance();
            continue;
          }
          if (next === CHAR_RIGHT_SQUARE_BRACKET) {
            isBracket = token.isBracket = true;
            isGlob = token.isGlob = true;
            finished = true;
            break;
          }
        }
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
      if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
        negated = token.negated = true;
        start++;
        continue;
      }
      if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
        isGlob = token.isGlob = true;
        if (scanToEnd === true) {
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_LEFT_PARENTHESES) {
              backslashes = token.backslashes = true;
              code = advance();
              continue;
            }
            if (code === CHAR_RIGHT_PARENTHESES) {
              finished = true;
              break;
            }
          }
          continue;
        }
        break;
      }
      if (isGlob === true) {
        finished = true;
        if (scanToEnd === true) {
          continue;
        }
        break;
      }
    }
    if (opts.noext === true) {
      isExtglob = false;
      isGlob = false;
    }
    let base = str;
    let prefix = "";
    let glob = "";
    if (start > 0) {
      prefix = str.slice(0, start);
      str = str.slice(start);
      lastIndex -= start;
    }
    if (base && isGlob === true && lastIndex > 0) {
      base = str.slice(0, lastIndex);
      glob = str.slice(lastIndex);
    } else if (isGlob === true) {
      base = "";
      glob = str;
    } else {
      base = str;
    }
    if (base && base !== "" && base !== "/" && base !== str) {
      if (isPathSeparator(base.charCodeAt(base.length - 1))) {
        base = base.slice(0, -1);
      }
    }
    if (opts.unescape === true) {
      if (glob)
        glob = utils.removeBackslashes(glob);
      if (base && backslashes === true) {
        base = utils.removeBackslashes(base);
      }
    }
    const state = {
      prefix,
      input,
      start,
      base,
      glob,
      isBrace,
      isBracket,
      isGlob,
      isExtglob,
      isGlobstar,
      negated,
      negatedExtglob
    };
    if (opts.tokens === true) {
      state.maxDepth = 0;
      if (!isPathSeparator(code)) {
        tokens3.push(token);
      }
      state.tokens = tokens3;
    }
    if (opts.parts === true || opts.tokens === true) {
      let prevIndex;
      for (let idx = 0;idx < slashes.length; idx++) {
        const n = prevIndex ? prevIndex + 1 : start;
        const i = slashes[idx];
        const value = input.slice(n, i);
        if (opts.tokens) {
          if (idx === 0 && start !== 0) {
            tokens3[idx].isPrefix = true;
            tokens3[idx].value = prefix;
          } else {
            tokens3[idx].value = value;
          }
          depth(tokens3[idx]);
          state.maxDepth += tokens3[idx].depth;
        }
        if (idx !== 0 || value !== "") {
          parts.push(value);
        }
        prevIndex = i;
      }
      if (prevIndex && prevIndex + 1 < input.length) {
        const value = input.slice(prevIndex + 1);
        parts.push(value);
        if (opts.tokens) {
          tokens3[tokens3.length - 1].value = value;
          depth(tokens3[tokens3.length - 1]);
          state.maxDepth += tokens3[tokens3.length - 1].depth;
        }
      }
      state.slashes = slashes;
      state.parts = parts;
    }
    return state;
  };
  module.exports = scan;
});

// node_modules/picomatch/lib/parse.js
var require_parse = __commonJS((exports, module) => {
  var constants = require_constants();
  var utils = require_utils();
  var {
    MAX_LENGTH,
    POSIX_REGEX_SOURCE,
    REGEX_NON_SPECIAL_CHARS,
    REGEX_SPECIAL_CHARS_BACKREF,
    REPLACEMENTS
  } = constants;
  var expandRange = (args, options) => {
    if (typeof options.expandRange === "function") {
      return options.expandRange(...args, options);
    }
    args.sort();
    const value = `[${args.join("-")}]`;
    try {
      new RegExp(value);
    } catch (ex) {
      return args.map((v) => utils.escapeRegex(v)).join("..");
    }
    return value;
  };
  var syntaxError = (type, char) => {
    return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
  };
  var splitTopLevel = (input) => {
    const parts = [];
    let bracket = 0;
    let paren = 0;
    let quote = 0;
    let value = "";
    let escaped = false;
    for (const ch of input) {
      if (escaped === true) {
        value += ch;
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        value += ch;
        escaped = true;
        continue;
      }
      if (ch === '"') {
        quote = quote === 1 ? 0 : 1;
        value += ch;
        continue;
      }
      if (quote === 0) {
        if (ch === "[") {
          bracket++;
        } else if (ch === "]" && bracket > 0) {
          bracket--;
        } else if (bracket === 0) {
          if (ch === "(") {
            paren++;
          } else if (ch === ")" && paren > 0) {
            paren--;
          } else if (ch === "|" && paren === 0) {
            parts.push(value);
            value = "";
            continue;
          }
        }
      }
      value += ch;
    }
    parts.push(value);
    return parts;
  };
  var isPlainBranch = (branch) => {
    let escaped = false;
    for (const ch of branch) {
      if (escaped === true) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (/[?*+@!()[\]{}]/.test(ch)) {
        return false;
      }
    }
    return true;
  };
  var normalizeSimpleBranch = (branch) => {
    let value = branch.trim();
    let changed = true;
    while (changed === true) {
      changed = false;
      if (/^@\([^\\()[\]{}|]+\)$/.test(value)) {
        value = value.slice(2, -1);
        changed = true;
      }
    }
    if (!isPlainBranch(value)) {
      return;
    }
    return value.replace(/\\(.)/g, "$1");
  };
  var hasRepeatedCharPrefixOverlap = (branches) => {
    const values = branches.map(normalizeSimpleBranch).filter(Boolean);
    for (let i = 0;i < values.length; i++) {
      for (let j = i + 1;j < values.length; j++) {
        const a = values[i];
        const b = values[j];
        const char = a[0];
        if (!char || a !== char.repeat(a.length) || b !== char.repeat(b.length)) {
          continue;
        }
        if (a === b || a.startsWith(b) || b.startsWith(a)) {
          return true;
        }
      }
    }
    return false;
  };
  var parseRepeatedExtglob = (pattern, requireEnd = true) => {
    if (pattern[0] !== "+" && pattern[0] !== "*" || pattern[1] !== "(") {
      return;
    }
    let bracket = 0;
    let paren = 0;
    let quote = 0;
    let escaped = false;
    for (let i = 1;i < pattern.length; i++) {
      const ch = pattern[i];
      if (escaped === true) {
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (ch === '"') {
        quote = quote === 1 ? 0 : 1;
        continue;
      }
      if (quote === 1) {
        continue;
      }
      if (ch === "[") {
        bracket++;
        continue;
      }
      if (ch === "]" && bracket > 0) {
        bracket--;
        continue;
      }
      if (bracket > 0) {
        continue;
      }
      if (ch === "(") {
        paren++;
        continue;
      }
      if (ch === ")") {
        paren--;
        if (paren === 0) {
          if (requireEnd === true && i !== pattern.length - 1) {
            return;
          }
          return {
            type: pattern[0],
            body: pattern.slice(2, i),
            end: i
          };
        }
      }
    }
  };
  var getStarExtglobSequenceOutput = (pattern) => {
    let index = 0;
    const chars = [];
    while (index < pattern.length) {
      const match = parseRepeatedExtglob(pattern.slice(index), false);
      if (!match || match.type !== "*") {
        return;
      }
      const branches = splitTopLevel(match.body).map((branch2) => branch2.trim());
      if (branches.length !== 1) {
        return;
      }
      const branch = normalizeSimpleBranch(branches[0]);
      if (!branch || branch.length !== 1) {
        return;
      }
      chars.push(branch);
      index += match.end + 1;
    }
    if (chars.length < 1) {
      return;
    }
    const source = chars.length === 1 ? utils.escapeRegex(chars[0]) : `[${chars.map((ch) => utils.escapeRegex(ch)).join("")}]`;
    return `${source}*`;
  };
  var repeatedExtglobRecursion = (pattern) => {
    let depth = 0;
    let value = pattern.trim();
    let match = parseRepeatedExtglob(value);
    while (match) {
      depth++;
      value = match.body.trim();
      match = parseRepeatedExtglob(value);
    }
    return depth;
  };
  var analyzeRepeatedExtglob = (body, options) => {
    if (options.maxExtglobRecursion === false) {
      return { risky: false };
    }
    const max = typeof options.maxExtglobRecursion === "number" ? options.maxExtglobRecursion : constants.DEFAULT_MAX_EXTGLOB_RECURSION;
    const branches = splitTopLevel(body).map((branch) => branch.trim());
    if (branches.length > 1) {
      if (branches.some((branch) => branch === "") || branches.some((branch) => /^[*?]+$/.test(branch)) || hasRepeatedCharPrefixOverlap(branches)) {
        return { risky: true };
      }
    }
    for (const branch of branches) {
      const safeOutput = getStarExtglobSequenceOutput(branch);
      if (safeOutput) {
        return { risky: true, safeOutput };
      }
      if (repeatedExtglobRecursion(branch) > max) {
        return { risky: true };
      }
    }
    return { risky: false };
  };
  var parse = (input, options) => {
    if (typeof input !== "string") {
      throw new TypeError("Expected a string");
    }
    input = REPLACEMENTS[input] || input;
    const opts = { ...options };
    const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    let len = input.length;
    if (len > max) {
      throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    }
    const bos = { type: "bos", value: "", output: opts.prepend || "" };
    const tokens3 = [bos];
    const capture = opts.capture ? "" : "?:";
    const PLATFORM_CHARS = constants.globChars(opts.windows);
    const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
    const {
      DOT_LITERAL,
      PLUS_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    } = PLATFORM_CHARS;
    const globstar = (opts2) => {
      return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const nodot = opts.dot ? "" : NO_DOT;
    const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
    let star = opts.bash === true ? globstar(opts) : STAR;
    if (opts.capture) {
      star = `(${star})`;
    }
    if (typeof opts.noext === "boolean") {
      opts.noextglob = opts.noext;
    }
    const state = {
      input,
      index: -1,
      start: 0,
      dot: opts.dot === true,
      consumed: "",
      output: "",
      prefix: "",
      backtrack: false,
      negated: false,
      brackets: 0,
      braces: 0,
      parens: 0,
      quotes: 0,
      globstar: false,
      tokens: tokens3
    };
    input = utils.removePrefix(input, state);
    len = input.length;
    const extglobs = [];
    const braces = [];
    const stack = [];
    let prev = bos;
    let value;
    const eos = () => state.index === len - 1;
    const peek = state.peek = (n = 1) => input[state.index + n];
    const advance = state.advance = () => input[++state.index] || "";
    const remaining = () => input.slice(state.index + 1);
    const consume = (value2 = "", num = 0) => {
      state.consumed += value2;
      state.index += num;
    };
    const append = (token) => {
      state.output += token.output != null ? token.output : token.value;
      consume(token.value);
    };
    const negate = () => {
      let count = 1;
      while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
        advance();
        state.start++;
        count++;
      }
      if (count % 2 === 0) {
        return false;
      }
      state.negated = true;
      state.start++;
      return true;
    };
    const increment = (type) => {
      state[type]++;
      stack.push(type);
    };
    const decrement = (type) => {
      state[type]--;
      stack.pop();
    };
    const push = (tok) => {
      if (prev.type === "globstar") {
        const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
        const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
        if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "star";
          prev.value = "*";
          prev.output = star;
          state.output += prev.output;
        }
      }
      if (extglobs.length && tok.type !== "paren") {
        extglobs[extglobs.length - 1].inner += tok.value;
      }
      if (tok.value || tok.output)
        append(tok);
      if (prev && prev.type === "text" && tok.type === "text") {
        prev.output = (prev.output || prev.value) + tok.value;
        prev.value += tok.value;
        return;
      }
      tok.prev = prev;
      tokens3.push(tok);
      prev = tok;
    };
    const extglobOpen = (type, value2) => {
      const token = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
      token.prev = prev;
      token.parens = state.parens;
      token.output = state.output;
      token.startIndex = state.index;
      token.tokensIndex = tokens3.length;
      const output = (opts.capture ? "(" : "") + token.open;
      increment("parens");
      push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
      push({ type: "paren", extglob: true, value: advance(), output });
      extglobs.push(token);
    };
    const extglobClose = (token) => {
      const literal = input.slice(token.startIndex, state.index + 1);
      const body = input.slice(token.startIndex + 2, state.index);
      const analysis = analyzeRepeatedExtglob(body, opts);
      if ((token.type === "plus" || token.type === "star") && analysis.risky) {
        const safeOutput = analysis.safeOutput ? (token.output ? "" : ONE_CHAR) + (opts.capture ? `(${analysis.safeOutput})` : analysis.safeOutput) : undefined;
        const open = tokens3[token.tokensIndex];
        open.type = "text";
        open.value = literal;
        open.output = safeOutput || utils.escapeRegex(literal);
        for (let i = token.tokensIndex + 1;i < tokens3.length; i++) {
          tokens3[i].value = "";
          tokens3[i].output = "";
          delete tokens3[i].suffix;
        }
        state.output = token.output + open.output;
        state.backtrack = true;
        push({ type: "paren", extglob: true, value, output: "" });
        decrement("parens");
        return;
      }
      let output = token.close + (opts.capture ? ")" : "");
      let rest;
      if (token.type === "negate") {
        let extglobStar = star;
        if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
          extglobStar = globstar(opts);
        }
        if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
          output = token.close = `)$))${extglobStar}`;
        }
        if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
          const expression = parse(rest, { ...options, fastpaths: false }).output;
          output = token.close = `)${expression})${extglobStar})`;
        }
        if (token.prev.type === "bos") {
          state.negatedExtglob = true;
        }
      }
      push({ type: "paren", extglob: true, value, output });
      decrement("parens");
    };
    if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
      let backslashes = false;
      let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
        if (first === "\\") {
          backslashes = true;
          return m;
        }
        if (first === "?") {
          if (esc) {
            return esc + first + (rest ? QMARK.repeat(rest.length) : "");
          }
          if (index === 0) {
            return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
          }
          return QMARK.repeat(chars.length);
        }
        if (first === ".") {
          return DOT_LITERAL.repeat(chars.length);
        }
        if (first === "*") {
          if (esc) {
            return esc + first + (rest ? star : "");
          }
          return star;
        }
        return esc ? m : `\\${m}`;
      });
      if (backslashes === true) {
        if (opts.unescape === true) {
          output = output.replace(/\\/g, "");
        } else {
          output = output.replace(/\\+/g, (m) => {
            return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
          });
        }
      }
      if (output === input && opts.contains === true) {
        state.output = input;
        return state;
      }
      state.output = utils.wrapOutput(output, state, options);
      return state;
    }
    while (!eos()) {
      value = advance();
      if (value === "\x00") {
        continue;
      }
      if (value === "\\") {
        const next = peek();
        if (next === "/" && opts.bash !== true) {
          continue;
        }
        if (next === "." || next === ";") {
          continue;
        }
        if (!next) {
          value += "\\";
          push({ type: "text", value });
          continue;
        }
        const match = /^\\+/.exec(remaining());
        let slashes = 0;
        if (match && match[0].length > 2) {
          slashes = match[0].length;
          state.index += slashes;
          if (slashes % 2 !== 0) {
            value += "\\";
          }
        }
        if (opts.unescape === true) {
          value = advance();
        } else {
          value += advance();
        }
        if (state.brackets === 0) {
          push({ type: "text", value });
          continue;
        }
      }
      if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
        if (opts.posix !== false && value === ":") {
          const inner = prev.value.slice(1);
          if (inner.includes("[")) {
            prev.posix = true;
            if (inner.includes(":")) {
              const idx = prev.value.lastIndexOf("[");
              const pre = prev.value.slice(0, idx);
              const rest2 = prev.value.slice(idx + 2);
              const posix = POSIX_REGEX_SOURCE[rest2];
              if (posix) {
                prev.value = pre + posix;
                state.backtrack = true;
                advance();
                if (!bos.output && tokens3.indexOf(prev) === 1) {
                  bos.output = ONE_CHAR;
                }
                continue;
              }
            }
          }
        }
        if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
          value = `\\${value}`;
        }
        if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
          value = `\\${value}`;
        }
        if (opts.posix === true && value === "!" && prev.value === "[") {
          value = "^";
        }
        prev.value += value;
        append({ value });
        continue;
      }
      if (state.quotes === 1 && value !== '"') {
        value = utils.escapeRegex(value);
        prev.value += value;
        append({ value });
        continue;
      }
      if (value === '"') {
        state.quotes = state.quotes === 1 ? 0 : 1;
        if (opts.keepQuotes === true) {
          push({ type: "text", value });
        }
        continue;
      }
      if (value === "(") {
        increment("parens");
        push({ type: "paren", value });
        continue;
      }
      if (value === ")") {
        if (state.parens === 0 && opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError("opening", "("));
        }
        const extglob = extglobs[extglobs.length - 1];
        if (extglob && state.parens === extglob.parens + 1) {
          extglobClose(extglobs.pop());
          continue;
        }
        push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
        decrement("parens");
        continue;
      }
      if (value === "[") {
        if (opts.nobracket === true || !remaining().includes("]")) {
          if (opts.nobracket !== true && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("closing", "]"));
          }
          value = `\\${value}`;
        } else {
          increment("brackets");
        }
        push({ type: "bracket", value });
        continue;
      }
      if (value === "]") {
        if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
          push({ type: "text", value, output: `\\${value}` });
          continue;
        }
        if (state.brackets === 0) {
          if (opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "["));
          }
          push({ type: "text", value, output: `\\${value}` });
          continue;
        }
        decrement("brackets");
        const prevValue = prev.value.slice(1);
        if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
          value = `/${value}`;
        }
        prev.value += value;
        append({ value });
        if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
          continue;
        }
        const escaped = utils.escapeRegex(prev.value);
        state.output = state.output.slice(0, -prev.value.length);
        if (opts.literalBrackets === true) {
          state.output += escaped;
          prev.value = escaped;
          continue;
        }
        prev.value = `(${capture}${escaped}|${prev.value})`;
        state.output += prev.value;
        continue;
      }
      if (value === "{" && opts.nobrace !== true) {
        increment("braces");
        const open = {
          type: "brace",
          value,
          output: "(",
          outputIndex: state.output.length,
          tokensIndex: state.tokens.length
        };
        braces.push(open);
        push(open);
        continue;
      }
      if (value === "}") {
        const brace = braces[braces.length - 1];
        if (opts.nobrace === true || !brace) {
          push({ type: "text", value, output: value });
          continue;
        }
        let output = ")";
        if (brace.dots === true) {
          const arr = tokens3.slice();
          const range = [];
          for (let i = arr.length - 1;i >= 0; i--) {
            tokens3.pop();
            if (arr[i].type === "brace") {
              break;
            }
            if (arr[i].type !== "dots") {
              range.unshift(arr[i].value);
            }
          }
          output = expandRange(range, opts);
          state.backtrack = true;
        }
        if (brace.comma !== true && brace.dots !== true) {
          const out = state.output.slice(0, brace.outputIndex);
          const toks = state.tokens.slice(brace.tokensIndex);
          brace.value = brace.output = "\\{";
          value = output = "\\}";
          state.output = out;
          for (const t of toks) {
            state.output += t.output || t.value;
          }
        }
        push({ type: "brace", value, output });
        decrement("braces");
        braces.pop();
        continue;
      }
      if (value === "|") {
        if (extglobs.length > 0) {
          extglobs[extglobs.length - 1].conditions++;
        }
        push({ type: "text", value });
        continue;
      }
      if (value === ",") {
        let output = value;
        const brace = braces[braces.length - 1];
        if (brace && stack[stack.length - 1] === "braces") {
          brace.comma = true;
          output = "|";
        }
        push({ type: "comma", value, output });
        continue;
      }
      if (value === "/") {
        if (prev.type === "dot" && state.index === state.start + 1) {
          state.start = state.index + 1;
          state.consumed = "";
          state.output = "";
          tokens3.pop();
          prev = bos;
          continue;
        }
        push({ type: "slash", value, output: SLASH_LITERAL });
        continue;
      }
      if (value === ".") {
        if (state.braces > 0 && prev.type === "dot") {
          if (prev.value === ".")
            prev.output = DOT_LITERAL;
          const brace = braces[braces.length - 1];
          prev.type = "dots";
          prev.output += value;
          prev.value += value;
          brace.dots = true;
          continue;
        }
        if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
          push({ type: "text", value, output: DOT_LITERAL });
          continue;
        }
        push({ type: "dot", value, output: DOT_LITERAL });
        continue;
      }
      if (value === "?") {
        const isGroup = prev && prev.value === "(";
        if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
          extglobOpen("qmark", value);
          continue;
        }
        if (prev && prev.type === "paren") {
          const next = peek();
          let output = value;
          if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
            output = `\\${value}`;
          }
          push({ type: "text", value, output });
          continue;
        }
        if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
          push({ type: "qmark", value, output: QMARK_NO_DOT });
          continue;
        }
        push({ type: "qmark", value, output: QMARK });
        continue;
      }
      if (value === "!") {
        if (opts.noextglob !== true && peek() === "(") {
          if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
            extglobOpen("negate", value);
            continue;
          }
        }
        if (opts.nonegate !== true && state.index === 0) {
          negate();
          continue;
        }
      }
      if (value === "+") {
        if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
          extglobOpen("plus", value);
          continue;
        }
        if (prev && prev.value === "(" || opts.regex === false) {
          push({ type: "plus", value, output: PLUS_LITERAL });
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
          push({ type: "plus", value });
          continue;
        }
        push({ type: "plus", value: PLUS_LITERAL });
        continue;
      }
      if (value === "@") {
        if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
          push({ type: "at", extglob: true, value, output: "" });
          continue;
        }
        push({ type: "text", value });
        continue;
      }
      if (value !== "*") {
        if (value === "$" || value === "^") {
          value = `\\${value}`;
        }
        const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
        if (match) {
          value += match[0];
          state.index += match[0].length;
        }
        push({ type: "text", value });
        continue;
      }
      if (prev && (prev.type === "globstar" || prev.star === true)) {
        prev.type = "star";
        prev.star = true;
        prev.value += value;
        prev.output = star;
        state.backtrack = true;
        state.globstar = true;
        consume(value);
        continue;
      }
      let rest = remaining();
      if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
        extglobOpen("star", value);
        continue;
      }
      if (prev.type === "star") {
        if (opts.noglobstar === true) {
          consume(value);
          continue;
        }
        const prior = prev.prev;
        const before = prior.prev;
        const isStart = prior.type === "slash" || prior.type === "bos";
        const afterStar = before && (before.type === "star" || before.type === "globstar");
        if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
          push({ type: "star", value, output: "" });
          continue;
        }
        const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
        const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
        if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
          push({ type: "star", value, output: "" });
          continue;
        }
        while (rest.slice(0, 3) === "/**") {
          const after = input[state.index + 4];
          if (after && after !== "/") {
            break;
          }
          rest = rest.slice(3);
          consume("/**", 3);
        }
        if (prior.type === "bos" && eos()) {
          prev.type = "globstar";
          prev.value += value;
          prev.output = globstar(opts);
          state.output = prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
          state.output = state.output.slice(0, -(prior.output + prev.output).length);
          prior.output = `(?:${prior.output}`;
          prev.type = "globstar";
          prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
          prev.value += value;
          state.globstar = true;
          state.output += prior.output + prev.output;
          consume(value);
          continue;
        }
        if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
          const end = rest[1] !== undefined ? "|$" : "";
          state.output = state.output.slice(0, -(prior.output + prev.output).length);
          prior.output = `(?:${prior.output}`;
          prev.type = "globstar";
          prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
          prev.value += value;
          state.output += prior.output + prev.output;
          state.globstar = true;
          consume(value + advance());
          push({ type: "slash", value: "/", output: "" });
          continue;
        }
        if (prior.type === "bos" && rest[0] === "/") {
          prev.type = "globstar";
          prev.value += value;
          prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
          state.output = prev.output;
          state.globstar = true;
          consume(value + advance());
          push({ type: "slash", value: "/", output: "" });
          continue;
        }
        state.output = state.output.slice(0, -prev.output.length);
        prev.type = "globstar";
        prev.output = globstar(opts);
        prev.value += value;
        state.output += prev.output;
        state.globstar = true;
        consume(value);
        continue;
      }
      const token = { type: "star", value, output: star };
      if (opts.bash === true) {
        token.output = ".*?";
        if (prev.type === "bos" || prev.type === "slash") {
          token.output = nodot + token.output;
        }
        push(token);
        continue;
      }
      if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
        token.output = value;
        push(token);
        continue;
      }
      if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
        if (prev.type === "dot") {
          state.output += NO_DOT_SLASH;
          prev.output += NO_DOT_SLASH;
        } else if (opts.dot === true) {
          state.output += NO_DOTS_SLASH;
          prev.output += NO_DOTS_SLASH;
        } else {
          state.output += nodot;
          prev.output += nodot;
        }
        if (peek() !== "*") {
          state.output += ONE_CHAR;
          prev.output += ONE_CHAR;
        }
      }
      push(token);
    }
    while (state.brackets > 0) {
      if (opts.strictBrackets === true)
        throw new SyntaxError(syntaxError("closing", "]"));
      state.output = utils.escapeLast(state.output, "[");
      decrement("brackets");
    }
    while (state.parens > 0) {
      if (opts.strictBrackets === true)
        throw new SyntaxError(syntaxError("closing", ")"));
      state.output = utils.escapeLast(state.output, "(");
      decrement("parens");
    }
    while (state.braces > 0) {
      if (opts.strictBrackets === true)
        throw new SyntaxError(syntaxError("closing", "}"));
      state.output = utils.escapeLast(state.output, "{");
      decrement("braces");
    }
    if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
      push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
    }
    if (state.backtrack === true) {
      state.output = "";
      for (const token of state.tokens) {
        state.output += token.output != null ? token.output : token.value;
        if (token.suffix) {
          state.output += token.suffix;
        }
      }
    }
    return state;
  };
  parse.fastpaths = (input, options) => {
    const opts = { ...options };
    const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    const len = input.length;
    if (len > max) {
      throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    }
    input = REPLACEMENTS[input] || input;
    const {
      DOT_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOTS_SLASH,
      STAR,
      START_ANCHOR
    } = constants.globChars(opts.windows);
    const nodot = opts.dot ? NO_DOTS : NO_DOT;
    const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
    const capture = opts.capture ? "" : "?:";
    const state = { negated: false, prefix: "" };
    let star = opts.bash === true ? ".*?" : STAR;
    if (opts.capture) {
      star = `(${star})`;
    }
    const globstar = (opts2) => {
      if (opts2.noglobstar === true)
        return star;
      return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const create = (str) => {
      switch (str) {
        case "*":
          return `${nodot}${ONE_CHAR}${star}`;
        case ".*":
          return `${DOT_LITERAL}${ONE_CHAR}${star}`;
        case "*.*":
          return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
        case "*/*":
          return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
        case "**":
          return nodot + globstar(opts);
        case "**/*":
          return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
        case "**/*.*":
          return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
        case "**/.*":
          return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
        default: {
          const match = /^(.*?)\.(\w+)$/.exec(str);
          if (!match)
            return;
          const source2 = create(match[1]);
          if (!source2)
            return;
          return source2 + DOT_LITERAL + match[2];
        }
      }
    };
    const output = utils.removePrefix(input, state);
    let source = create(output);
    if (source && opts.strictSlashes !== true) {
      source += `${SLASH_LITERAL}?`;
    }
    return source;
  };
  module.exports = parse;
});

// node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS((exports, module) => {
  var scan = require_scan();
  var parse = require_parse();
  var utils = require_utils();
  var constants = require_constants();
  var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
  var picomatch = (glob, options, returnState = false) => {
    if (Array.isArray(glob)) {
      const fns = glob.map((input) => picomatch(input, options, returnState));
      const arrayMatcher = (str) => {
        for (const isMatch of fns) {
          const state2 = isMatch(str);
          if (state2)
            return state2;
        }
        return false;
      };
      return arrayMatcher;
    }
    const isState = isObject(glob) && glob.tokens && glob.input;
    if (glob === "" || typeof glob !== "string" && !isState) {
      throw new TypeError("Expected pattern to be a non-empty string");
    }
    const opts = options || {};
    const posix = opts.windows;
    const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
    const state = regex.state;
    delete regex.state;
    let isIgnored = () => false;
    if (opts.ignore) {
      const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
      isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
    }
    const matcher = (input, returnObject = false) => {
      const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
      const result = { glob, state, regex, posix, input, output, match, isMatch };
      if (typeof opts.onResult === "function") {
        opts.onResult(result);
      }
      if (isMatch === false) {
        result.isMatch = false;
        return returnObject ? result : false;
      }
      if (isIgnored(input)) {
        if (typeof opts.onIgnore === "function") {
          opts.onIgnore(result);
        }
        result.isMatch = false;
        return returnObject ? result : false;
      }
      if (typeof opts.onMatch === "function") {
        opts.onMatch(result);
      }
      return returnObject ? result : true;
    };
    if (returnState) {
      matcher.state = state;
    }
    return matcher;
  };
  picomatch.test = (input, regex, options, { glob, posix } = {}) => {
    if (typeof input !== "string") {
      throw new TypeError("Expected input to be a string");
    }
    if (input === "") {
      return { isMatch: false, output: "" };
    }
    const opts = options || {};
    const format = opts.format || (posix ? utils.toPosixSlashes : null);
    let match = input === glob;
    let output = match && format ? format(input) : input;
    if (match === false) {
      output = format ? format(input) : input;
      match = output === glob;
    }
    if (match === false || opts.capture === true) {
      if (opts.matchBase === true || opts.basename === true) {
        match = picomatch.matchBase(input, regex, options, posix);
      } else {
        match = regex.exec(output);
      }
    }
    return { isMatch: Boolean(match), match, output };
  };
  picomatch.matchBase = (input, glob, options) => {
    const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
    return regex.test(utils.basename(input));
  };
  picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
  picomatch.parse = (pattern, options) => {
    if (Array.isArray(pattern))
      return pattern.map((p) => picomatch.parse(p, options));
    return parse(pattern, { ...options, fastpaths: false });
  };
  picomatch.scan = (input, options) => scan(input, options);
  picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
    if (returnOutput === true) {
      return state.output;
    }
    const opts = options || {};
    const prepend = opts.contains ? "" : "^";
    const append = opts.contains ? "" : "$";
    let source = `${prepend}(?:${state.output})${append}`;
    if (state && state.negated === true) {
      source = `^(?!${source}).*$`;
    }
    const regex = picomatch.toRegex(source, options);
    if (returnState === true) {
      regex.state = state;
    }
    return regex;
  };
  picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
    if (!input || typeof input !== "string") {
      throw new TypeError("Expected a non-empty string");
    }
    let parsed = { negated: false, fastpaths: true };
    if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
      parsed.output = parse.fastpaths(input, options);
    }
    if (!parsed.output) {
      parsed = parse(input, options);
    }
    return picomatch.compileRe(parsed, options, returnOutput, returnState);
  };
  picomatch.toRegex = (source, options) => {
    try {
      const opts = options || {};
      return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
    } catch (err) {
      if (options && options.debug === true)
        throw err;
      return /$^/;
    }
  };
  picomatch.constants = constants;
  module.exports = picomatch;
});

// node_modules/picomatch/index.js
var require_picomatch2 = __commonJS((exports, module) => {
  var pico = require_picomatch();
  var utils = require_utils();
  function picomatch(glob, options, returnState = false) {
    if (options && (options.windows === null || options.windows === undefined)) {
      options = { ...options, windows: utils.isWindows() };
    }
    return pico(glob, options, returnState);
  }
  Object.assign(picomatch, pico);
  module.exports = picomatch;
});

// node_modules/ws/lib/constants.js
var require_constants2 = __commonJS((exports, module) => {
  var BINARY_TYPES = ["nodebuffer", "arraybuffer", "fragments"];
  var hasBlob = typeof Blob !== "undefined";
  if (hasBlob)
    BINARY_TYPES.push("blob");
  module.exports = {
    BINARY_TYPES,
    CLOSE_TIMEOUT: 30000,
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    hasBlob,
    kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
    kListener: Symbol("kListener"),
    kStatusCode: Symbol("status-code"),
    kWebSocket: Symbol("websocket"),
    NOOP: () => {}
  };
});

// node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS((exports, module) => {
  var { EMPTY_BUFFER } = require_constants2();
  var FastBuffer = Buffer[Symbol.species];
  function concat(list, totalLength) {
    if (list.length === 0)
      return EMPTY_BUFFER;
    if (list.length === 1)
      return list[0];
    const target2 = Buffer.allocUnsafe(totalLength);
    let offset = 0;
    for (let i = 0;i < list.length; i++) {
      const buf = list[i];
      target2.set(buf, offset);
      offset += buf.length;
    }
    if (offset < totalLength) {
      return new FastBuffer(target2.buffer, target2.byteOffset, offset);
    }
    return target2;
  }
  function _mask(source, mask, output, offset, length) {
    for (let i = 0;i < length; i++) {
      output[offset + i] = source[i] ^ mask[i & 3];
    }
  }
  function _unmask(buffer, mask) {
    for (let i = 0;i < buffer.length; i++) {
      buffer[i] ^= mask[i & 3];
    }
  }
  function toArrayBuffer(buf) {
    if (buf.length === buf.buffer.byteLength) {
      return buf.buffer;
    }
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
  }
  function toBuffer(data) {
    toBuffer.readOnly = true;
    if (Buffer.isBuffer(data))
      return data;
    let buf;
    if (data instanceof ArrayBuffer) {
      buf = new FastBuffer(data);
    } else if (ArrayBuffer.isView(data)) {
      buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
    } else {
      buf = Buffer.from(data);
      toBuffer.readOnly = false;
    }
    return buf;
  }
  module.exports = {
    concat,
    mask: _mask,
    toArrayBuffer,
    toBuffer,
    unmask: _unmask
  };
  if (!process.env.WS_NO_BUFFER_UTIL) {
    try {
      const bufferUtil = (()=>{throw new Error("Cannot require module "+"bufferutil");})();
      module.exports.mask = function(source, mask, output, offset, length) {
        if (length < 48)
          _mask(source, mask, output, offset, length);
        else
          bufferUtil.mask(source, mask, output, offset, length);
      };
      module.exports.unmask = function(buffer, mask) {
        if (buffer.length < 32)
          _unmask(buffer, mask);
        else
          bufferUtil.unmask(buffer, mask);
      };
    } catch (e) {}
  }
});

// node_modules/ws/lib/limiter.js
var require_limiter = __commonJS((exports, module) => {
  var kDone = Symbol("kDone");
  var kRun = Symbol("kRun");

  class Limiter {
    constructor(concurrency) {
      this[kDone] = () => {
        this.pending--;
        this[kRun]();
      };
      this.concurrency = concurrency || Infinity;
      this.jobs = [];
      this.pending = 0;
    }
    add(job) {
      this.jobs.push(job);
      this[kRun]();
    }
    [kRun]() {
      if (this.pending === this.concurrency)
        return;
      if (this.jobs.length) {
        const job = this.jobs.shift();
        this.pending++;
        job(this[kDone]);
      }
    }
  }
  module.exports = Limiter;
});

// node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS((exports, module) => {
  var zlib = __require("zlib");
  var bufferUtil = require_buffer_util();
  var Limiter = require_limiter();
  var { kStatusCode } = require_constants2();
  var FastBuffer = Buffer[Symbol.species];
  var TRAILER = Buffer.from([0, 0, 255, 255]);
  var kPerMessageDeflate = Symbol("permessage-deflate");
  var kTotalLength = Symbol("total-length");
  var kCallback = Symbol("callback");
  var kBuffers = Symbol("buffers");
  var kError = Symbol("error");
  var zlibLimiter;

  class PerMessageDeflate {
    constructor(options) {
      this._options = options || {};
      this._threshold = this._options.threshold !== undefined ? this._options.threshold : 1024;
      this._maxPayload = this._options.maxPayload | 0;
      this._isServer = !!this._options.isServer;
      this._deflate = null;
      this._inflate = null;
      this.params = null;
      if (!zlibLimiter) {
        const concurrency = this._options.concurrencyLimit !== undefined ? this._options.concurrencyLimit : 10;
        zlibLimiter = new Limiter(concurrency);
      }
    }
    static get extensionName() {
      return "permessage-deflate";
    }
    offer() {
      const params = {};
      if (this._options.serverNoContextTakeover) {
        params.server_no_context_takeover = true;
      }
      if (this._options.clientNoContextTakeover) {
        params.client_no_context_takeover = true;
      }
      if (this._options.serverMaxWindowBits) {
        params.server_max_window_bits = this._options.serverMaxWindowBits;
      }
      if (this._options.clientMaxWindowBits) {
        params.client_max_window_bits = this._options.clientMaxWindowBits;
      } else if (this._options.clientMaxWindowBits == null) {
        params.client_max_window_bits = true;
      }
      return params;
    }
    accept(configurations) {
      configurations = this.normalizeParams(configurations);
      this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
      return this.params;
    }
    cleanup() {
      if (this._inflate) {
        this._inflate.close();
        this._inflate = null;
      }
      if (this._deflate) {
        const callback2 = this._deflate[kCallback];
        this._deflate.close();
        this._deflate = null;
        if (callback2) {
          callback2(new Error("The deflate stream was closed while data was being processed"));
        }
      }
    }
    acceptAsServer(offers) {
      const opts = this._options;
      const accepted = offers.find((params) => {
        if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
          return false;
        }
        return true;
      });
      if (!accepted) {
        throw new Error("None of the extension offers can be accepted");
      }
      if (opts.serverNoContextTakeover) {
        accepted.server_no_context_takeover = true;
      }
      if (opts.clientNoContextTakeover) {
        accepted.client_no_context_takeover = true;
      }
      if (typeof opts.serverMaxWindowBits === "number") {
        accepted.server_max_window_bits = opts.serverMaxWindowBits;
      }
      if (typeof opts.clientMaxWindowBits === "number") {
        accepted.client_max_window_bits = opts.clientMaxWindowBits;
      } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
        delete accepted.client_max_window_bits;
      }
      return accepted;
    }
    acceptAsClient(response) {
      const params = response[0];
      if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
        throw new Error('Unexpected parameter "client_no_context_takeover"');
      }
      if (!params.client_max_window_bits) {
        if (typeof this._options.clientMaxWindowBits === "number") {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        }
      } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
        throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
      }
      return params;
    }
    normalizeParams(configurations) {
      configurations.forEach((params) => {
        Object.keys(params).forEach((key) => {
          let value = params[key];
          if (value.length > 1) {
            throw new Error(`Parameter "${key}" must have only a single value`);
          }
          value = value[0];
          if (key === "client_max_window_bits") {
            if (value !== true) {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
              }
              value = num;
            } else if (!this._isServer) {
              throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
            }
          } else if (key === "server_max_window_bits") {
            const num = +value;
            if (!Number.isInteger(num) || num < 8 || num > 15) {
              throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
            }
            value = num;
          } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
            if (value !== true) {
              throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
            }
          } else {
            throw new Error(`Unknown parameter "${key}"`);
          }
          params[key] = value;
        });
      });
      return configurations;
    }
    decompress(data, fin, callback2) {
      zlibLimiter.add((done) => {
        this._decompress(data, fin, (err, result) => {
          done();
          callback2(err, result);
        });
      });
    }
    compress(data, fin, callback2) {
      zlibLimiter.add((done) => {
        this._compress(data, fin, (err, result) => {
          done();
          callback2(err, result);
        });
      });
    }
    _decompress(data, fin, callback2) {
      const endpoint = this._isServer ? "client" : "server";
      if (!this._inflate) {
        const key = `${endpoint}_max_window_bits`;
        const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
        this._inflate = zlib.createInflateRaw({
          ...this._options.zlibInflateOptions,
          windowBits
        });
        this._inflate[kPerMessageDeflate] = this;
        this._inflate[kTotalLength] = 0;
        this._inflate[kBuffers] = [];
        this._inflate.on("error", inflateOnError);
        this._inflate.on("data", inflateOnData);
      }
      this._inflate[kCallback] = callback2;
      this._inflate.write(data);
      if (fin)
        this._inflate.write(TRAILER);
      this._inflate.flush(() => {
        const err = this._inflate[kError];
        if (err) {
          this._inflate.close();
          this._inflate = null;
          callback2(err);
          return;
        }
        const data2 = bufferUtil.concat(this._inflate[kBuffers], this._inflate[kTotalLength]);
        if (this._inflate._readableState.endEmitted) {
          this._inflate.close();
          this._inflate = null;
        } else {
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._inflate.reset();
          }
        }
        callback2(null, data2);
      });
    }
    _compress(data, fin, callback2) {
      const endpoint = this._isServer ? "server" : "client";
      if (!this._deflate) {
        const key = `${endpoint}_max_window_bits`;
        const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
        this._deflate = zlib.createDeflateRaw({
          ...this._options.zlibDeflateOptions,
          windowBits
        });
        this._deflate[kTotalLength] = 0;
        this._deflate[kBuffers] = [];
        this._deflate.on("data", deflateOnData);
      }
      this._deflate[kCallback] = callback2;
      this._deflate.write(data);
      this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
        if (!this._deflate) {
          return;
        }
        let data2 = bufferUtil.concat(this._deflate[kBuffers], this._deflate[kTotalLength]);
        if (fin) {
          data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
        }
        this._deflate[kCallback] = null;
        this._deflate[kTotalLength] = 0;
        this._deflate[kBuffers] = [];
        if (fin && this.params[`${endpoint}_no_context_takeover`]) {
          this._deflate.reset();
        }
        callback2(null, data2);
      });
    }
  }
  module.exports = PerMessageDeflate;
  function deflateOnData(chunk) {
    this[kBuffers].push(chunk);
    this[kTotalLength] += chunk.length;
  }
  function inflateOnData(chunk) {
    this[kTotalLength] += chunk.length;
    if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
      this[kBuffers].push(chunk);
      return;
    }
    this[kError] = new RangeError("Max payload size exceeded");
    this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
    this[kError][kStatusCode] = 1009;
    this.removeListener("data", inflateOnData);
    this.reset();
  }
  function inflateOnError(err) {
    this[kPerMessageDeflate]._inflate = null;
    if (this[kError]) {
      this[kCallback](this[kError]);
      return;
    }
    err[kStatusCode] = 1007;
    this[kCallback](err);
  }
});

// node_modules/ws/lib/validation.js
var require_validation = __commonJS((exports, module) => {
  var { isUtf8 } = __require("buffer");
  var { hasBlob } = require_constants2();
  var tokenChars = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0
  ];
  function isValidStatusCode(code) {
    return code >= 1000 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3000 && code <= 4999;
  }
  function _isValidUTF8(buf) {
    const len = buf.length;
    let i = 0;
    while (i < len) {
      if ((buf[i] & 128) === 0) {
        i++;
      } else if ((buf[i] & 224) === 192) {
        if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
          return false;
        }
        i += 2;
      } else if ((buf[i] & 240) === 224) {
        if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || buf[i] === 237 && (buf[i + 1] & 224) === 160) {
          return false;
        }
        i += 3;
      } else if ((buf[i] & 248) === 240) {
        if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
          return false;
        }
        i += 4;
      } else {
        return false;
      }
    }
    return true;
  }
  function isBlob(value) {
    return hasBlob && typeof value === "object" && typeof value.arrayBuffer === "function" && typeof value.type === "string" && typeof value.stream === "function" && (value[Symbol.toStringTag] === "Blob" || value[Symbol.toStringTag] === "File");
  }
  module.exports = {
    isBlob,
    isValidStatusCode,
    isValidUTF8: _isValidUTF8,
    tokenChars
  };
  if (isUtf8) {
    module.exports.isValidUTF8 = function(buf) {
      return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
    };
  } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
    try {
      const isValidUTF8 = (()=>{throw new Error("Cannot require module "+"utf-8-validate");})();
      module.exports.isValidUTF8 = function(buf) {
        return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
      };
    } catch (e) {}
  }
});

// node_modules/ws/lib/receiver.js
var require_receiver = __commonJS((exports, module) => {
  var { Writable } = __require("stream");
  var PerMessageDeflate = require_permessage_deflate();
  var {
    BINARY_TYPES,
    EMPTY_BUFFER,
    kStatusCode,
    kWebSocket
  } = require_constants2();
  var { concat, toArrayBuffer, unmask } = require_buffer_util();
  var { isValidStatusCode, isValidUTF8 } = require_validation();
  var FastBuffer = Buffer[Symbol.species];
  var GET_INFO = 0;
  var GET_PAYLOAD_LENGTH_16 = 1;
  var GET_PAYLOAD_LENGTH_64 = 2;
  var GET_MASK = 3;
  var GET_DATA = 4;
  var INFLATING = 5;
  var DEFER_EVENT = 6;

  class Receiver extends Writable {
    constructor(options = {}) {
      super();
      this._allowSynchronousEvents = options.allowSynchronousEvents !== undefined ? options.allowSynchronousEvents : true;
      this._binaryType = options.binaryType || BINARY_TYPES[0];
      this._extensions = options.extensions || {};
      this._isServer = !!options.isServer;
      this._maxBufferedChunks = options.maxBufferedChunks | 0;
      this._maxFragments = options.maxFragments | 0;
      this._maxPayload = options.maxPayload | 0;
      this._skipUTF8Validation = !!options.skipUTF8Validation;
      this[kWebSocket] = undefined;
      this._bufferedBytes = 0;
      this._buffers = [];
      this._compressed = false;
      this._payloadLength = 0;
      this._mask = undefined;
      this._fragmented = 0;
      this._masked = false;
      this._fin = false;
      this._opcode = 0;
      this._totalPayloadLength = 0;
      this._messageLength = 0;
      this._fragments = [];
      this._errored = false;
      this._loop = false;
      this._state = GET_INFO;
    }
    _write(chunk, encoding, cb) {
      if (this._opcode === 8 && this._state == GET_INFO)
        return cb();
      if (this._maxBufferedChunks > 0 && this._buffers.length >= this._maxBufferedChunks) {
        cb(this.createError(RangeError, "Too many buffered chunks", false, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS"));
        return;
      }
      this._bufferedBytes += chunk.length;
      this._buffers.push(chunk);
      this.startLoop(cb);
    }
    consume(n) {
      this._bufferedBytes -= n;
      if (n === this._buffers[0].length)
        return this._buffers.shift();
      if (n < this._buffers[0].length) {
        const buf = this._buffers[0];
        this._buffers[0] = new FastBuffer(buf.buffer, buf.byteOffset + n, buf.length - n);
        return new FastBuffer(buf.buffer, buf.byteOffset, n);
      }
      const dst = Buffer.allocUnsafe(n);
      do {
        const buf = this._buffers[0];
        const offset = dst.length - n;
        if (n >= buf.length) {
          dst.set(this._buffers.shift(), offset);
        } else {
          dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
          this._buffers[0] = new FastBuffer(buf.buffer, buf.byteOffset + n, buf.length - n);
        }
        n -= buf.length;
      } while (n > 0);
      return dst;
    }
    startLoop(cb) {
      this._loop = true;
      do {
        switch (this._state) {
          case GET_INFO:
            this.getInfo(cb);
            break;
          case GET_PAYLOAD_LENGTH_16:
            this.getPayloadLength16(cb);
            break;
          case GET_PAYLOAD_LENGTH_64:
            this.getPayloadLength64(cb);
            break;
          case GET_MASK:
            this.getMask();
            break;
          case GET_DATA:
            this.getData(cb);
            break;
          case INFLATING:
          case DEFER_EVENT:
            this._loop = false;
            return;
        }
      } while (this._loop);
      if (!this._errored)
        cb();
    }
    getInfo(cb) {
      if (this._bufferedBytes < 2) {
        this._loop = false;
        return;
      }
      const buf = this.consume(2);
      if ((buf[0] & 48) !== 0) {
        const error = this.createError(RangeError, "RSV2 and RSV3 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_2_3");
        cb(error);
        return;
      }
      const compressed = (buf[0] & 64) === 64;
      if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
        const error = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
        cb(error);
        return;
      }
      this._fin = (buf[0] & 128) === 128;
      this._opcode = buf[0] & 15;
      this._payloadLength = buf[1] & 127;
      if (this._opcode === 0) {
        if (compressed) {
          const error = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          cb(error);
          return;
        }
        if (!this._fragmented) {
          const error = this.createError(RangeError, "invalid opcode 0", true, 1002, "WS_ERR_INVALID_OPCODE");
          cb(error);
          return;
        }
        this._opcode = this._fragmented;
      } else if (this._opcode === 1 || this._opcode === 2) {
        if (this._fragmented) {
          const error = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
          cb(error);
          return;
        }
        this._compressed = compressed;
      } else if (this._opcode > 7 && this._opcode < 11) {
        if (!this._fin) {
          const error = this.createError(RangeError, "FIN must be set", true, 1002, "WS_ERR_EXPECTED_FIN");
          cb(error);
          return;
        }
        if (compressed) {
          const error = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          cb(error);
          return;
        }
        if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
          const error = this.createError(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH");
          cb(error);
          return;
        }
      } else {
        const error = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
        cb(error);
        return;
      }
      if (!this._fin && !this._fragmented)
        this._fragmented = this._opcode;
      this._masked = (buf[1] & 128) === 128;
      if (this._isServer) {
        if (!this._masked) {
          const error = this.createError(RangeError, "MASK must be set", true, 1002, "WS_ERR_EXPECTED_MASK");
          cb(error);
          return;
        }
      } else if (this._masked) {
        const error = this.createError(RangeError, "MASK must be clear", true, 1002, "WS_ERR_UNEXPECTED_MASK");
        cb(error);
        return;
      }
      if (this._payloadLength === 126)
        this._state = GET_PAYLOAD_LENGTH_16;
      else if (this._payloadLength === 127)
        this._state = GET_PAYLOAD_LENGTH_64;
      else
        this.haveLength(cb);
    }
    getPayloadLength16(cb) {
      if (this._bufferedBytes < 2) {
        this._loop = false;
        return;
      }
      this._payloadLength = this.consume(2).readUInt16BE(0);
      this.haveLength(cb);
    }
    getPayloadLength64(cb) {
      if (this._bufferedBytes < 8) {
        this._loop = false;
        return;
      }
      const buf = this.consume(8);
      const num = buf.readUInt32BE(0);
      if (num > Math.pow(2, 53 - 32) - 1) {
        const error = this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", false, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH");
        cb(error);
        return;
      }
      this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
      this.haveLength(cb);
    }
    haveLength(cb) {
      if (this._payloadLength && this._opcode < 8) {
        this._totalPayloadLength += this._payloadLength;
        if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
          const error = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
          cb(error);
          return;
        }
      }
      if (this._masked)
        this._state = GET_MASK;
      else
        this._state = GET_DATA;
    }
    getMask() {
      if (this._bufferedBytes < 4) {
        this._loop = false;
        return;
      }
      this._mask = this.consume(4);
      this._state = GET_DATA;
    }
    getData(cb) {
      let data = EMPTY_BUFFER;
      if (this._payloadLength) {
        if (this._bufferedBytes < this._payloadLength) {
          this._loop = false;
          return;
        }
        data = this.consume(this._payloadLength);
        if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
          unmask(data, this._mask);
        }
      }
      if (this._opcode > 7) {
        this.controlMessage(data, cb);
        return;
      }
      if (this._compressed) {
        this._state = INFLATING;
        this.decompress(data, cb);
        return;
      }
      if (data.length) {
        if (this._maxFragments > 0 && this._fragments.length >= this._maxFragments) {
          const error = this.createError(RangeError, "Too many message fragments", false, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS");
          cb(error);
          return;
        }
        this._messageLength = this._totalPayloadLength;
        this._fragments.push(data);
      }
      this.dataMessage(cb);
    }
    decompress(data, cb) {
      const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
      perMessageDeflate.decompress(data, this._fin, (err, buf) => {
        if (err)
          return cb(err);
        if (buf.length) {
          this._messageLength += buf.length;
          if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
            const error = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
            cb(error);
            return;
          }
          if (this._maxFragments > 0 && this._fragments.length >= this._maxFragments) {
            const error = this.createError(RangeError, "Too many message fragments", false, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS");
            cb(error);
            return;
          }
          this._fragments.push(buf);
        }
        this.dataMessage(cb);
        if (this._state === GET_INFO)
          this.startLoop(cb);
      });
    }
    dataMessage(cb) {
      if (!this._fin) {
        this._state = GET_INFO;
        return;
      }
      const messageLength = this._messageLength;
      const fragments = this._fragments;
      this._totalPayloadLength = 0;
      this._messageLength = 0;
      this._fragmented = 0;
      this._fragments = [];
      if (this._opcode === 2) {
        let data;
        if (this._binaryType === "nodebuffer") {
          data = concat(fragments, messageLength);
        } else if (this._binaryType === "arraybuffer") {
          data = toArrayBuffer(concat(fragments, messageLength));
        } else if (this._binaryType === "blob") {
          data = new Blob(fragments);
        } else {
          data = fragments;
        }
        if (this._allowSynchronousEvents) {
          this.emit("message", data, true);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit("message", data, true);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      } else {
        const buf = concat(fragments, messageLength);
        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
          const error = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
          cb(error);
          return;
        }
        if (this._state === INFLATING || this._allowSynchronousEvents) {
          this.emit("message", buf, false);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit("message", buf, false);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      }
    }
    controlMessage(data, cb) {
      if (this._opcode === 8) {
        if (data.length === 0) {
          this._loop = false;
          this.emit("conclude", 1005, EMPTY_BUFFER);
          this.end();
        } else {
          const code = data.readUInt16BE(0);
          if (!isValidStatusCode(code)) {
            const error = this.createError(RangeError, `invalid status code ${code}`, true, 1002, "WS_ERR_INVALID_CLOSE_CODE");
            cb(error);
            return;
          }
          const buf = new FastBuffer(data.buffer, data.byteOffset + 2, data.length - 2);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            const error = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
            cb(error);
            return;
          }
          this._loop = false;
          this.emit("conclude", code, buf);
          this.end();
        }
        this._state = GET_INFO;
        return;
      }
      if (this._allowSynchronousEvents) {
        this.emit(this._opcode === 9 ? "ping" : "pong", data);
        this._state = GET_INFO;
      } else {
        this._state = DEFER_EVENT;
        setImmediate(() => {
          this.emit(this._opcode === 9 ? "ping" : "pong", data);
          this._state = GET_INFO;
          this.startLoop(cb);
        });
      }
    }
    createError(ErrorCtor, message, prefix, statusCode, errorCode) {
      this._loop = false;
      this._errored = true;
      const err = new ErrorCtor(prefix ? `Invalid WebSocket frame: ${message}` : message);
      Error.captureStackTrace(err, this.createError);
      err.code = errorCode;
      err[kStatusCode] = statusCode;
      return err;
    }
  }
  module.exports = Receiver;
});

// node_modules/ws/lib/sender.js
var require_sender = __commonJS((exports, module) => {
  var { Duplex } = __require("stream");
  var { randomFillSync } = __require("crypto");
  var {
    types: { isUint8Array }
  } = __require("util");
  var PerMessageDeflate = require_permessage_deflate();
  var { EMPTY_BUFFER, kWebSocket, NOOP } = require_constants2();
  var { isBlob, isValidStatusCode } = require_validation();
  var { mask: applyMask, toBuffer } = require_buffer_util();
  var kByteLength = Symbol("kByteLength");
  var maskBuffer = Buffer.alloc(4);
  var RANDOM_POOL_SIZE = 8 * 1024;
  var randomPool;
  var randomPoolPointer = RANDOM_POOL_SIZE;
  var DEFAULT = 0;
  var DEFLATING = 1;
  var GET_BLOB_DATA = 2;

  class Sender {
    constructor(socket, extensions, generateMask) {
      this._extensions = extensions || {};
      if (generateMask) {
        this._generateMask = generateMask;
        this._maskBuffer = Buffer.alloc(4);
      }
      this._socket = socket;
      this._firstFragment = true;
      this._compress = false;
      this._bufferedBytes = 0;
      this._queue = [];
      this._state = DEFAULT;
      this.onerror = NOOP;
      this[kWebSocket] = undefined;
    }
    static frame(data, options) {
      let mask;
      let merge = false;
      let offset = 2;
      let skipMasking = false;
      if (options.mask) {
        mask = options.maskBuffer || maskBuffer;
        if (options.generateMask) {
          options.generateMask(mask);
        } else {
          if (randomPoolPointer === RANDOM_POOL_SIZE) {
            if (randomPool === undefined) {
              randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
            }
            randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
            randomPoolPointer = 0;
          }
          mask[0] = randomPool[randomPoolPointer++];
          mask[1] = randomPool[randomPoolPointer++];
          mask[2] = randomPool[randomPoolPointer++];
          mask[3] = randomPool[randomPoolPointer++];
        }
        skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
        offset = 6;
      }
      let dataLength;
      if (typeof data === "string") {
        if ((!options.mask || skipMasking) && options[kByteLength] !== undefined) {
          dataLength = options[kByteLength];
        } else {
          data = Buffer.from(data);
          dataLength = data.length;
        }
      } else {
        dataLength = data.length;
        merge = options.mask && options.readOnly && !skipMasking;
      }
      let payloadLength = dataLength;
      if (dataLength >= 65536) {
        offset += 8;
        payloadLength = 127;
      } else if (dataLength > 125) {
        offset += 2;
        payloadLength = 126;
      }
      const target2 = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
      target2[0] = options.fin ? options.opcode | 128 : options.opcode;
      if (options.rsv1)
        target2[0] |= 64;
      target2[1] = payloadLength;
      if (payloadLength === 126) {
        target2.writeUInt16BE(dataLength, 2);
      } else if (payloadLength === 127) {
        target2[2] = target2[3] = 0;
        target2.writeUIntBE(dataLength, 4, 6);
      }
      if (!options.mask)
        return [target2, data];
      target2[1] |= 128;
      target2[offset - 4] = mask[0];
      target2[offset - 3] = mask[1];
      target2[offset - 2] = mask[2];
      target2[offset - 1] = mask[3];
      if (skipMasking)
        return [target2, data];
      if (merge) {
        applyMask(data, mask, target2, offset, dataLength);
        return [target2];
      }
      applyMask(data, mask, data, 0, dataLength);
      return [target2, data];
    }
    close(code, data, mask, cb) {
      let buf;
      if (code === undefined) {
        buf = EMPTY_BUFFER;
      } else if (typeof code !== "number" || !isValidStatusCode(code)) {
        throw new TypeError("First argument must be a valid error code number");
      } else if (data === undefined || !data.length) {
        buf = Buffer.allocUnsafe(2);
        buf.writeUInt16BE(code, 0);
      } else {
        const length = Buffer.byteLength(data);
        if (length > 123) {
          throw new RangeError("The message must not be greater than 123 bytes");
        }
        buf = Buffer.allocUnsafe(2 + length);
        buf.writeUInt16BE(code, 0);
        if (typeof data === "string") {
          buf.write(data, 2);
        } else if (isUint8Array(data)) {
          buf.set(data, 2);
        } else {
          throw new TypeError("Second argument must be a string or a Uint8Array");
        }
      }
      const options = {
        [kByteLength]: buf.length,
        fin: true,
        generateMask: this._generateMask,
        mask,
        maskBuffer: this._maskBuffer,
        opcode: 8,
        readOnly: false,
        rsv1: false
      };
      if (this._state !== DEFAULT) {
        this.enqueue([this.dispatch, buf, false, options, cb]);
      } else {
        this.sendFrame(Sender.frame(buf, options), cb);
      }
    }
    ping(data, mask, cb) {
      let byteLength;
      let readOnly;
      if (typeof data === "string") {
        byteLength = Buffer.byteLength(data);
        readOnly = false;
      } else if (isBlob(data)) {
        byteLength = data.size;
        readOnly = false;
      } else {
        data = toBuffer(data);
        byteLength = data.length;
        readOnly = toBuffer.readOnly;
      }
      if (byteLength > 125) {
        throw new RangeError("The data size must not be greater than 125 bytes");
      }
      const options = {
        [kByteLength]: byteLength,
        fin: true,
        generateMask: this._generateMask,
        mask,
        maskBuffer: this._maskBuffer,
        opcode: 9,
        readOnly,
        rsv1: false
      };
      if (isBlob(data)) {
        if (this._state !== DEFAULT) {
          this.enqueue([this.getBlobData, data, false, options, cb]);
        } else {
          this.getBlobData(data, false, options, cb);
        }
      } else if (this._state !== DEFAULT) {
        this.enqueue([this.dispatch, data, false, options, cb]);
      } else {
        this.sendFrame(Sender.frame(data, options), cb);
      }
    }
    pong(data, mask, cb) {
      let byteLength;
      let readOnly;
      if (typeof data === "string") {
        byteLength = Buffer.byteLength(data);
        readOnly = false;
      } else if (isBlob(data)) {
        byteLength = data.size;
        readOnly = false;
      } else {
        data = toBuffer(data);
        byteLength = data.length;
        readOnly = toBuffer.readOnly;
      }
      if (byteLength > 125) {
        throw new RangeError("The data size must not be greater than 125 bytes");
      }
      const options = {
        [kByteLength]: byteLength,
        fin: true,
        generateMask: this._generateMask,
        mask,
        maskBuffer: this._maskBuffer,
        opcode: 10,
        readOnly,
        rsv1: false
      };
      if (isBlob(data)) {
        if (this._state !== DEFAULT) {
          this.enqueue([this.getBlobData, data, false, options, cb]);
        } else {
          this.getBlobData(data, false, options, cb);
        }
      } else if (this._state !== DEFAULT) {
        this.enqueue([this.dispatch, data, false, options, cb]);
      } else {
        this.sendFrame(Sender.frame(data, options), cb);
      }
    }
    send(data, options, cb) {
      const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
      let opcode = options.binary ? 2 : 1;
      let rsv1 = options.compress;
      let byteLength;
      let readOnly;
      if (typeof data === "string") {
        byteLength = Buffer.byteLength(data);
        readOnly = false;
      } else if (isBlob(data)) {
        byteLength = data.size;
        readOnly = false;
      } else {
        data = toBuffer(data);
        byteLength = data.length;
        readOnly = toBuffer.readOnly;
      }
      if (this._firstFragment) {
        this._firstFragment = false;
        if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
          rsv1 = byteLength >= perMessageDeflate._threshold;
        }
        this._compress = rsv1;
      } else {
        rsv1 = false;
        opcode = 0;
      }
      if (options.fin)
        this._firstFragment = true;
      const opts = {
        [kByteLength]: byteLength,
        fin: options.fin,
        generateMask: this._generateMask,
        mask: options.mask,
        maskBuffer: this._maskBuffer,
        opcode,
        readOnly,
        rsv1
      };
      if (isBlob(data)) {
        if (this._state !== DEFAULT) {
          this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
        } else {
          this.getBlobData(data, this._compress, opts, cb);
        }
      } else if (this._state !== DEFAULT) {
        this.enqueue([this.dispatch, data, this._compress, opts, cb]);
      } else {
        this.dispatch(data, this._compress, opts, cb);
      }
    }
    getBlobData(blob, compress, options, cb) {
      this._bufferedBytes += options[kByteLength];
      this._state = GET_BLOB_DATA;
      blob.arrayBuffer().then((arrayBuffer) => {
        if (this._socket.destroyed) {
          const err = new Error("The socket was closed while the blob was being read");
          process.nextTick(callCallbacks, this, err, cb);
          return;
        }
        this._bufferedBytes -= options[kByteLength];
        const data = toBuffer(arrayBuffer);
        if (!compress) {
          this._state = DEFAULT;
          this.sendFrame(Sender.frame(data, options), cb);
          this.dequeue();
        } else {
          this.dispatch(data, compress, options, cb);
        }
      }).catch((err) => {
        process.nextTick(onError, this, err, cb);
      });
    }
    dispatch(data, compress, options, cb) {
      if (!compress) {
        this.sendFrame(Sender.frame(data, options), cb);
        return;
      }
      const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
      this._bufferedBytes += options[kByteLength];
      this._state = DEFLATING;
      perMessageDeflate.compress(data, options.fin, (_, buf) => {
        if (this._socket.destroyed) {
          const err = new Error("The socket was closed while data was being compressed");
          callCallbacks(this, err, cb);
          return;
        }
        this._bufferedBytes -= options[kByteLength];
        this._state = DEFAULT;
        options.readOnly = false;
        this.sendFrame(Sender.frame(buf, options), cb);
        this.dequeue();
      });
    }
    dequeue() {
      while (this._state === DEFAULT && this._queue.length) {
        const params = this._queue.shift();
        this._bufferedBytes -= params[3][kByteLength];
        Reflect.apply(params[0], this, params.slice(1));
      }
    }
    enqueue(params) {
      this._bufferedBytes += params[3][kByteLength];
      this._queue.push(params);
    }
    sendFrame(list, cb) {
      if (list.length === 2) {
        this._socket.cork();
        this._socket.write(list[0]);
        this._socket.write(list[1], cb);
        this._socket.uncork();
      } else {
        this._socket.write(list[0], cb);
      }
    }
  }
  module.exports = Sender;
  function callCallbacks(sender, err, cb) {
    if (typeof cb === "function")
      cb(err);
    for (let i = 0;i < sender._queue.length; i++) {
      const params = sender._queue[i];
      const callback2 = params[params.length - 1];
      if (typeof callback2 === "function")
        callback2(err);
    }
  }
  function onError(sender, err, cb) {
    callCallbacks(sender, err, cb);
    sender.onerror(err);
  }
});

// node_modules/ws/lib/event-target.js
var require_event_target = __commonJS((exports, module) => {
  var { kForOnEventAttribute, kListener } = require_constants2();
  var kCode = Symbol("kCode");
  var kData = Symbol("kData");
  var kError = Symbol("kError");
  var kMessage = Symbol("kMessage");
  var kReason = Symbol("kReason");
  var kTarget = Symbol("kTarget");
  var kType = Symbol("kType");
  var kWasClean = Symbol("kWasClean");

  class Event {
    constructor(type) {
      this[kTarget] = null;
      this[kType] = type;
    }
    get target() {
      return this[kTarget];
    }
    get type() {
      return this[kType];
    }
  }
  Object.defineProperty(Event.prototype, "target", { enumerable: true });
  Object.defineProperty(Event.prototype, "type", { enumerable: true });

  class CloseEvent extends Event {
    constructor(type, options = {}) {
      super(type);
      this[kCode] = options.code === undefined ? 0 : options.code;
      this[kReason] = options.reason === undefined ? "" : options.reason;
      this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
    }
    get code() {
      return this[kCode];
    }
    get reason() {
      return this[kReason];
    }
    get wasClean() {
      return this[kWasClean];
    }
  }
  Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
  Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
  Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });

  class ErrorEvent extends Event {
    constructor(type, options = {}) {
      super(type);
      this[kError] = options.error === undefined ? null : options.error;
      this[kMessage] = options.message === undefined ? "" : options.message;
    }
    get error() {
      return this[kError];
    }
    get message() {
      return this[kMessage];
    }
  }
  Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
  Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });

  class MessageEvent extends Event {
    constructor(type, options = {}) {
      super(type);
      this[kData] = options.data === undefined ? null : options.data;
    }
    get data() {
      return this[kData];
    }
  }
  Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
  var EventTarget = {
    addEventListener(type, handler, options = {}) {
      for (const listener of this.listeners(type)) {
        if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
          return;
        }
      }
      let wrapper;
      if (type === "message") {
        wrapper = function onMessage(data, isBinary) {
          const event = new MessageEvent("message", {
            data: isBinary ? data : data.toString()
          });
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else if (type === "close") {
        wrapper = function onClose(code, message) {
          const event = new CloseEvent("close", {
            code,
            reason: message.toString(),
            wasClean: this._closeFrameReceived && this._closeFrameSent
          });
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else if (type === "error") {
        wrapper = function onError(error) {
          const event = new ErrorEvent("error", {
            error,
            message: error.message
          });
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else if (type === "open") {
        wrapper = function onOpen() {
          const event = new Event("open");
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else {
        return;
      }
      wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
      wrapper[kListener] = handler;
      if (options.once) {
        this.once(type, wrapper);
      } else {
        this.on(type, wrapper);
      }
    },
    removeEventListener(type, handler) {
      for (const listener of this.listeners(type)) {
        if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
          this.removeListener(type, listener);
          break;
        }
      }
    }
  };
  module.exports = {
    CloseEvent,
    ErrorEvent,
    Event,
    EventTarget,
    MessageEvent
  };
  function callListener(listener, thisArg, event) {
    if (typeof listener === "object" && listener.handleEvent) {
      listener.handleEvent.call(listener, event);
    } else {
      listener.call(thisArg, event);
    }
  }
});

// node_modules/ws/lib/extension.js
var require_extension = __commonJS((exports, module) => {
  var { tokenChars } = require_validation();
  function push(dest, name, elem) {
    if (dest[name] === undefined)
      dest[name] = [elem];
    else
      dest[name].push(elem);
  }
  function parse(header) {
    const offers = Object.create(null);
    let params = Object.create(null);
    let mustUnescape = false;
    let isEscaping = false;
    let inQuotes = false;
    let extensionName;
    let paramName;
    let start = -1;
    let code = -1;
    let end = -1;
    let i = 0;
    for (;i < header.length; i++) {
      code = header.charCodeAt(i);
      if (extensionName === undefined) {
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1)
            start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1)
            end = i;
        } else if (code === 59 || code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1)
            end = i;
          const name = header.slice(start, end);
          if (code === 44) {
            push(offers, name, params);
            params = Object.create(null);
          } else {
            extensionName = name;
          }
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      } else if (paramName === undefined) {
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1)
            start = i;
        } else if (code === 32 || code === 9) {
          if (end === -1 && start !== -1)
            end = i;
        } else if (code === 59 || code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1)
            end = i;
          push(params, header.slice(start, end), true);
          if (code === 44) {
            push(offers, extensionName, params);
            params = Object.create(null);
            extensionName = undefined;
          }
          start = end = -1;
        } else if (code === 61 && start !== -1 && end === -1) {
          paramName = header.slice(start, i);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      } else {
        if (isEscaping) {
          if (tokenChars[code] !== 1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (start === -1)
            start = i;
          else if (!mustUnescape)
            mustUnescape = true;
          isEscaping = false;
        } else if (inQuotes) {
          if (tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (code === 34 && start !== -1) {
            inQuotes = false;
            end = i;
          } else if (code === 92) {
            isEscaping = true;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
          inQuotes = true;
        } else if (end === -1 && tokenChars[code] === 1) {
          if (start === -1)
            start = i;
        } else if (start !== -1 && (code === 32 || code === 9)) {
          if (end === -1)
            end = i;
        } else if (code === 59 || code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1)
            end = i;
          let value = header.slice(start, end);
          if (mustUnescape) {
            value = value.replace(/\\/g, "");
            mustUnescape = false;
          }
          push(params, paramName, value);
          if (code === 44) {
            push(offers, extensionName, params);
            params = Object.create(null);
            extensionName = undefined;
          }
          paramName = undefined;
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
    }
    if (start === -1 || inQuotes || code === 32 || code === 9) {
      throw new SyntaxError("Unexpected end of input");
    }
    if (end === -1)
      end = i;
    const token = header.slice(start, end);
    if (extensionName === undefined) {
      push(offers, token, params);
    } else {
      if (paramName === undefined) {
        push(params, token, true);
      } else if (mustUnescape) {
        push(params, paramName, token.replace(/\\/g, ""));
      } else {
        push(params, paramName, token);
      }
      push(offers, extensionName, params);
    }
    return offers;
  }
  function format(extensions) {
    return Object.keys(extensions).map((extension) => {
      let configurations = extensions[extension];
      if (!Array.isArray(configurations))
        configurations = [configurations];
      return configurations.map((params) => {
        return [extension].concat(Object.keys(params).map((k) => {
          let values = params[k];
          if (!Array.isArray(values))
            values = [values];
          return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
        })).join("; ");
      }).join(", ");
    }).join(", ");
  }
  module.exports = { format, parse };
});

// node_modules/ws/lib/websocket.js
var require_websocket = __commonJS((exports, module) => {
  var EventEmitter = __require("events");
  var https = __require("https");
  var http = __require("http");
  var net = __require("net");
  var tls = __require("tls");
  var { randomBytes, createHash } = __require("crypto");
  var { Duplex, Readable } = __require("stream");
  var { URL: URL2 } = __require("url");
  var PerMessageDeflate = require_permessage_deflate();
  var Receiver = require_receiver();
  var Sender = require_sender();
  var { isBlob } = require_validation();
  var {
    BINARY_TYPES,
    CLOSE_TIMEOUT,
    EMPTY_BUFFER,
    GUID,
    kForOnEventAttribute,
    kListener,
    kStatusCode,
    kWebSocket,
    NOOP
  } = require_constants2();
  var {
    EventTarget: { addEventListener, removeEventListener }
  } = require_event_target();
  var { format, parse } = require_extension();
  var { toBuffer } = require_buffer_util();
  var kAborted = Symbol("kAborted");
  var protocolVersions = [8, 13];
  var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
  var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;

  class WebSocket extends EventEmitter {
    constructor(address, protocols, options) {
      super();
      this._binaryType = BINARY_TYPES[0];
      this._closeCode = 1006;
      this._closeFrameReceived = false;
      this._closeFrameSent = false;
      this._closeMessage = EMPTY_BUFFER;
      this._closeTimer = null;
      this._errorEmitted = false;
      this._extensions = {};
      this._paused = false;
      this._protocol = "";
      this._readyState = WebSocket.CONNECTING;
      this._receiver = null;
      this._sender = null;
      this._socket = null;
      if (address !== null) {
        this._bufferedAmount = 0;
        this._isServer = false;
        this._redirects = 0;
        if (protocols === undefined) {
          protocols = [];
        } else if (!Array.isArray(protocols)) {
          if (typeof protocols === "object" && protocols !== null) {
            options = protocols;
            protocols = [];
          } else {
            protocols = [protocols];
          }
        }
        initAsClient(this, address, protocols, options);
      } else {
        this._autoPong = options.autoPong;
        this._closeTimeout = options.closeTimeout;
        this._isServer = true;
      }
    }
    get binaryType() {
      return this._binaryType;
    }
    set binaryType(type) {
      if (!BINARY_TYPES.includes(type))
        return;
      this._binaryType = type;
      if (this._receiver)
        this._receiver._binaryType = type;
    }
    get bufferedAmount() {
      if (!this._socket)
        return this._bufferedAmount;
      return this._socket._writableState.length + this._sender._bufferedBytes;
    }
    get extensions() {
      return Object.keys(this._extensions).join();
    }
    get isPaused() {
      return this._paused;
    }
    get onclose() {
      return null;
    }
    get onerror() {
      return null;
    }
    get onopen() {
      return null;
    }
    get onmessage() {
      return null;
    }
    get protocol() {
      return this._protocol;
    }
    get readyState() {
      return this._readyState;
    }
    get url() {
      return this._url;
    }
    setSocket(socket, head, options) {
      const receiver = new Receiver({
        allowSynchronousEvents: options.allowSynchronousEvents,
        binaryType: this.binaryType,
        extensions: this._extensions,
        isServer: this._isServer,
        maxBufferedChunks: options.maxBufferedChunks,
        maxFragments: options.maxFragments,
        maxPayload: options.maxPayload,
        skipUTF8Validation: options.skipUTF8Validation
      });
      const sender = new Sender(socket, this._extensions, options.generateMask);
      this._receiver = receiver;
      this._sender = sender;
      this._socket = socket;
      receiver[kWebSocket] = this;
      sender[kWebSocket] = this;
      socket[kWebSocket] = this;
      receiver.on("conclude", receiverOnConclude);
      receiver.on("drain", receiverOnDrain);
      receiver.on("error", receiverOnError);
      receiver.on("message", receiverOnMessage);
      receiver.on("ping", receiverOnPing);
      receiver.on("pong", receiverOnPong);
      sender.onerror = senderOnError;
      if (socket.setTimeout)
        socket.setTimeout(0);
      if (socket.setNoDelay)
        socket.setNoDelay();
      if (head.length > 0)
        socket.unshift(head);
      socket.on("close", socketOnClose);
      socket.on("data", socketOnData);
      socket.on("end", socketOnEnd);
      socket.on("error", socketOnError);
      this._readyState = WebSocket.OPEN;
      this.emit("open");
    }
    emitClose() {
      if (!this._socket) {
        this._readyState = WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
        return;
      }
      if (this._extensions[PerMessageDeflate.extensionName]) {
        this._extensions[PerMessageDeflate.extensionName].cleanup();
      }
      this._receiver.removeAllListeners();
      this._readyState = WebSocket.CLOSED;
      this.emit("close", this._closeCode, this._closeMessage);
    }
    close(code, data) {
      if (this.readyState === WebSocket.CLOSED)
        return;
      if (this.readyState === WebSocket.CONNECTING) {
        const msg = "WebSocket was closed before the connection was established";
        abortHandshake(this, this._req, msg);
        return;
      }
      if (this.readyState === WebSocket.CLOSING) {
        if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
          this._socket.end();
        }
        return;
      }
      this._readyState = WebSocket.CLOSING;
      this._sender.close(code, data, !this._isServer, (err) => {
        if (err)
          return;
        this._closeFrameSent = true;
        if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
          this._socket.end();
        }
      });
      setCloseTimer(this);
    }
    pause() {
      if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
        return;
      }
      this._paused = true;
      this._socket.pause();
    }
    ping(data, mask, cb) {
      if (this.readyState === WebSocket.CONNECTING) {
        throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      }
      if (typeof data === "function") {
        cb = data;
        data = mask = undefined;
      } else if (typeof mask === "function") {
        cb = mask;
        mask = undefined;
      }
      if (typeof data === "number")
        data = data.toString();
      if (this.readyState !== WebSocket.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }
      if (mask === undefined)
        mask = !this._isServer;
      this._sender.ping(data || EMPTY_BUFFER, mask, cb);
    }
    pong(data, mask, cb) {
      if (this.readyState === WebSocket.CONNECTING) {
        throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      }
      if (typeof data === "function") {
        cb = data;
        data = mask = undefined;
      } else if (typeof mask === "function") {
        cb = mask;
        mask = undefined;
      }
      if (typeof data === "number")
        data = data.toString();
      if (this.readyState !== WebSocket.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }
      if (mask === undefined)
        mask = !this._isServer;
      this._sender.pong(data || EMPTY_BUFFER, mask, cb);
    }
    resume() {
      if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
        return;
      }
      this._paused = false;
      if (!this._receiver._writableState.needDrain)
        this._socket.resume();
    }
    send(data, options, cb) {
      if (this.readyState === WebSocket.CONNECTING) {
        throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      }
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (typeof data === "number")
        data = data.toString();
      if (this.readyState !== WebSocket.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }
      const opts = {
        binary: typeof data !== "string",
        mask: !this._isServer,
        compress: true,
        fin: true,
        ...options
      };
      if (!this._extensions[PerMessageDeflate.extensionName]) {
        opts.compress = false;
      }
      this._sender.send(data || EMPTY_BUFFER, opts, cb);
    }
    terminate() {
      if (this.readyState === WebSocket.CLOSED)
        return;
      if (this.readyState === WebSocket.CONNECTING) {
        const msg = "WebSocket was closed before the connection was established";
        abortHandshake(this, this._req, msg);
        return;
      }
      if (this._socket) {
        this._readyState = WebSocket.CLOSING;
        this._socket.destroy();
      }
    }
  }
  Object.defineProperty(WebSocket, "CONNECTING", {
    enumerable: true,
    value: readyStates.indexOf("CONNECTING")
  });
  Object.defineProperty(WebSocket.prototype, "CONNECTING", {
    enumerable: true,
    value: readyStates.indexOf("CONNECTING")
  });
  Object.defineProperty(WebSocket, "OPEN", {
    enumerable: true,
    value: readyStates.indexOf("OPEN")
  });
  Object.defineProperty(WebSocket.prototype, "OPEN", {
    enumerable: true,
    value: readyStates.indexOf("OPEN")
  });
  Object.defineProperty(WebSocket, "CLOSING", {
    enumerable: true,
    value: readyStates.indexOf("CLOSING")
  });
  Object.defineProperty(WebSocket.prototype, "CLOSING", {
    enumerable: true,
    value: readyStates.indexOf("CLOSING")
  });
  Object.defineProperty(WebSocket, "CLOSED", {
    enumerable: true,
    value: readyStates.indexOf("CLOSED")
  });
  Object.defineProperty(WebSocket.prototype, "CLOSED", {
    enumerable: true,
    value: readyStates.indexOf("CLOSED")
  });
  [
    "binaryType",
    "bufferedAmount",
    "extensions",
    "isPaused",
    "protocol",
    "readyState",
    "url"
  ].forEach((property) => {
    Object.defineProperty(WebSocket.prototype, property, { enumerable: true });
  });
  ["open", "error", "close", "message"].forEach((method) => {
    Object.defineProperty(WebSocket.prototype, `on${method}`, {
      enumerable: true,
      get() {
        for (const listener of this.listeners(method)) {
          if (listener[kForOnEventAttribute])
            return listener[kListener];
        }
        return null;
      },
      set(handler) {
        for (const listener of this.listeners(method)) {
          if (listener[kForOnEventAttribute]) {
            this.removeListener(method, listener);
            break;
          }
        }
        if (typeof handler !== "function")
          return;
        this.addEventListener(method, handler, {
          [kForOnEventAttribute]: true
        });
      }
    });
  });
  WebSocket.prototype.addEventListener = addEventListener;
  WebSocket.prototype.removeEventListener = removeEventListener;
  module.exports = WebSocket;
  function initAsClient(websocket, address, protocols, options) {
    const opts = {
      allowSynchronousEvents: true,
      autoPong: true,
      closeTimeout: CLOSE_TIMEOUT,
      protocolVersion: protocolVersions[1],
      maxBufferedChunks: 1024 * 1024,
      maxFragments: 128 * 1024,
      maxPayload: 100 * 1024 * 1024,
      skipUTF8Validation: false,
      perMessageDeflate: true,
      followRedirects: false,
      maxRedirects: 10,
      ...options,
      socketPath: undefined,
      hostname: undefined,
      protocol: undefined,
      timeout: undefined,
      method: "GET",
      host: undefined,
      path: undefined,
      port: undefined
    };
    websocket._autoPong = opts.autoPong;
    websocket._closeTimeout = opts.closeTimeout;
    if (!protocolVersions.includes(opts.protocolVersion)) {
      throw new RangeError(`Unsupported protocol version: ${opts.protocolVersion} ` + `(supported versions: ${protocolVersions.join(", ")})`);
    }
    let parsedUrl;
    if (address instanceof URL2) {
      parsedUrl = address;
    } else {
      try {
        parsedUrl = new URL2(address);
      } catch {
        throw new SyntaxError(`Invalid URL: ${address}`);
      }
    }
    if (parsedUrl.protocol === "http:") {
      parsedUrl.protocol = "ws:";
    } else if (parsedUrl.protocol === "https:") {
      parsedUrl.protocol = "wss:";
    }
    websocket._url = parsedUrl.href;
    const isSecure = parsedUrl.protocol === "wss:";
    const isIpcUrl = parsedUrl.protocol === "ws+unix:";
    let invalidUrlMessage;
    if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
      invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", ` + '"http:", "https:", or "ws+unix:"';
    } else if (isIpcUrl && !parsedUrl.pathname) {
      invalidUrlMessage = "The URL's pathname is empty";
    } else if (parsedUrl.hash) {
      invalidUrlMessage = "The URL contains a fragment identifier";
    }
    if (invalidUrlMessage) {
      const err = new SyntaxError(invalidUrlMessage);
      if (websocket._redirects === 0) {
        throw err;
      } else {
        emitErrorAndClose(websocket, err);
        return;
      }
    }
    const defaultPort = isSecure ? 443 : 80;
    const key = randomBytes(16).toString("base64");
    const request = isSecure ? https.request : http.request;
    const protocolSet = new Set;
    let perMessageDeflate;
    opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
    opts.defaultPort = opts.defaultPort || defaultPort;
    opts.port = parsedUrl.port || defaultPort;
    opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
    opts.headers = {
      ...opts.headers,
      "Sec-WebSocket-Version": opts.protocolVersion,
      "Sec-WebSocket-Key": key,
      Connection: "Upgrade",
      Upgrade: "websocket"
    };
    opts.path = parsedUrl.pathname + parsedUrl.search;
    opts.timeout = opts.handshakeTimeout;
    if (opts.perMessageDeflate) {
      perMessageDeflate = new PerMessageDeflate({
        ...opts.perMessageDeflate,
        isServer: false,
        maxPayload: opts.maxPayload
      });
      opts.headers["Sec-WebSocket-Extensions"] = format({
        [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
      });
    }
    if (protocols.length) {
      for (const protocol of protocols) {
        if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
          throw new SyntaxError("An invalid or duplicated subprotocol was specified");
        }
        protocolSet.add(protocol);
      }
      opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
    }
    if (opts.origin) {
      if (opts.protocolVersion < 13) {
        opts.headers["Sec-WebSocket-Origin"] = opts.origin;
      } else {
        opts.headers.Origin = opts.origin;
      }
    }
    if (parsedUrl.username || parsedUrl.password) {
      opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
    }
    if (isIpcUrl) {
      const parts = opts.path.split(":");
      opts.socketPath = parts[0];
      opts.path = parts[1];
    }
    let req;
    if (opts.followRedirects) {
      if (websocket._redirects === 0) {
        websocket._originalIpc = isIpcUrl;
        websocket._originalSecure = isSecure;
        websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
        const headers = options && options.headers;
        options = { ...options, headers: {} };
        if (headers) {
          for (const [key2, value] of Object.entries(headers)) {
            options.headers[key2.toLowerCase()] = value;
          }
        }
      } else if (websocket.listenerCount("redirect") === 0) {
        const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
        if (!isSameHost || websocket._originalSecure && !isSecure) {
          delete opts.headers.authorization;
          delete opts.headers.cookie;
          if (!isSameHost)
            delete opts.headers.host;
          opts.auth = undefined;
        }
      }
      if (opts.auth && !options.headers.authorization) {
        options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
      }
      req = websocket._req = request(opts);
      if (websocket._redirects) {
        websocket.emit("redirect", websocket.url, req);
      }
    } else {
      req = websocket._req = request(opts);
    }
    if (opts.timeout) {
      req.on("timeout", () => {
        abortHandshake(websocket, req, "Opening handshake has timed out");
      });
    }
    req.on("error", (err) => {
      if (req === null || req[kAborted])
        return;
      req = websocket._req = null;
      emitErrorAndClose(websocket, err);
    });
    req.on("response", (res) => {
      const location = res.headers.location;
      const statusCode = res.statusCode;
      if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
        if (++websocket._redirects > opts.maxRedirects) {
          abortHandshake(websocket, req, "Maximum redirects exceeded");
          return;
        }
        req.abort();
        let addr;
        try {
          addr = new URL2(location, address);
        } catch (e) {
          const err = new SyntaxError(`Invalid URL: ${location}`);
          emitErrorAndClose(websocket, err);
          return;
        }
        initAsClient(websocket, addr, protocols, options);
      } else if (!websocket.emit("unexpected-response", req, res)) {
        abortHandshake(websocket, req, `Unexpected server response: ${res.statusCode}`);
      }
    });
    req.on("upgrade", (res, socket, head) => {
      websocket.emit("upgrade", res);
      if (websocket.readyState !== WebSocket.CONNECTING)
        return;
      req = websocket._req = null;
      const upgrade = res.headers.upgrade;
      if (upgrade === undefined || upgrade.toLowerCase() !== "websocket") {
        abortHandshake(websocket, socket, "Invalid Upgrade header");
        return;
      }
      const digest = createHash("sha1").update(key + GUID).digest("base64");
      if (res.headers["sec-websocket-accept"] !== digest) {
        abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
        return;
      }
      const serverProt = res.headers["sec-websocket-protocol"];
      let protError;
      if (serverProt !== undefined) {
        if (!protocolSet.size) {
          protError = "Server sent a subprotocol but none was requested";
        } else if (!protocolSet.has(serverProt)) {
          protError = "Server sent an invalid subprotocol";
        }
      } else if (protocolSet.size) {
        protError = "Server sent no subprotocol";
      }
      if (protError) {
        abortHandshake(websocket, socket, protError);
        return;
      }
      if (serverProt)
        websocket._protocol = serverProt;
      const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
      if (secWebSocketExtensions !== undefined) {
        if (!perMessageDeflate) {
          const message = "Server sent a Sec-WebSocket-Extensions header but no extension " + "was requested";
          abortHandshake(websocket, socket, message);
          return;
        }
        let extensions;
        try {
          extensions = parse(secWebSocketExtensions);
        } catch (err) {
          const message = "Invalid Sec-WebSocket-Extensions header";
          abortHandshake(websocket, socket, message);
          return;
        }
        const extensionNames = Object.keys(extensions);
        if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
          const message = "Server indicated an extension that was not requested";
          abortHandshake(websocket, socket, message);
          return;
        }
        try {
          perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
        } catch (err) {
          const message = "Invalid Sec-WebSocket-Extensions header";
          abortHandshake(websocket, socket, message);
          return;
        }
        websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
      }
      websocket.setSocket(socket, head, {
        allowSynchronousEvents: opts.allowSynchronousEvents,
        generateMask: opts.generateMask,
        maxBufferedChunks: opts.maxBufferedChunks,
        maxFragments: opts.maxFragments,
        maxPayload: opts.maxPayload,
        skipUTF8Validation: opts.skipUTF8Validation
      });
    });
    if (opts.finishRequest) {
      opts.finishRequest(req, websocket);
    } else {
      req.end();
    }
  }
  function emitErrorAndClose(websocket, err) {
    websocket._readyState = WebSocket.CLOSING;
    websocket._errorEmitted = true;
    websocket.emit("error", err);
    websocket.emitClose();
  }
  function netConnect(options) {
    options.path = options.socketPath;
    return net.connect(options);
  }
  function tlsConnect(options) {
    options.path = undefined;
    if (!options.servername && options.servername !== "") {
      options.servername = net.isIP(options.host) ? "" : options.host;
    }
    return tls.connect(options);
  }
  function abortHandshake(websocket, stream, message) {
    websocket._readyState = WebSocket.CLOSING;
    const err = new Error(message);
    Error.captureStackTrace(err, abortHandshake);
    if (stream.setHeader) {
      stream[kAborted] = true;
      stream.abort();
      if (stream.socket && !stream.socket.destroyed) {
        stream.socket.destroy();
      }
      process.nextTick(emitErrorAndClose, websocket, err);
    } else {
      stream.destroy(err);
      stream.once("error", websocket.emit.bind(websocket, "error"));
      stream.once("close", websocket.emitClose.bind(websocket));
    }
  }
  function sendAfterClose(websocket, data, cb) {
    if (data) {
      const length = isBlob(data) ? data.size : toBuffer(data).length;
      if (websocket._socket)
        websocket._sender._bufferedBytes += length;
      else
        websocket._bufferedAmount += length;
    }
    if (cb) {
      const err = new Error(`WebSocket is not open: readyState ${websocket.readyState} ` + `(${readyStates[websocket.readyState]})`);
      process.nextTick(cb, err);
    }
  }
  function receiverOnConclude(code, reason) {
    const websocket = this[kWebSocket];
    websocket._closeFrameReceived = true;
    websocket._closeMessage = reason;
    websocket._closeCode = code;
    if (websocket._socket[kWebSocket] === undefined)
      return;
    websocket._socket.removeListener("data", socketOnData);
    process.nextTick(resume, websocket._socket);
    if (code === 1005)
      websocket.close();
    else
      websocket.close(code, reason);
  }
  function receiverOnDrain() {
    const websocket = this[kWebSocket];
    if (!websocket.isPaused)
      websocket._socket.resume();
  }
  function receiverOnError(err) {
    const websocket = this[kWebSocket];
    if (websocket._socket[kWebSocket] !== undefined) {
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      websocket.close(err[kStatusCode]);
    }
    if (!websocket._errorEmitted) {
      websocket._errorEmitted = true;
      websocket.emit("error", err);
    }
  }
  function receiverOnFinish() {
    this[kWebSocket].emitClose();
  }
  function receiverOnMessage(data, isBinary) {
    this[kWebSocket].emit("message", data, isBinary);
  }
  function receiverOnPing(data) {
    const websocket = this[kWebSocket];
    if (websocket._autoPong)
      websocket.pong(data, !this._isServer, NOOP);
    websocket.emit("ping", data);
  }
  function receiverOnPong(data) {
    this[kWebSocket].emit("pong", data);
  }
  function resume(stream) {
    stream.resume();
  }
  function senderOnError(err) {
    const websocket = this[kWebSocket];
    if (websocket.readyState === WebSocket.CLOSED)
      return;
    if (websocket.readyState === WebSocket.OPEN) {
      websocket._readyState = WebSocket.CLOSING;
      setCloseTimer(websocket);
    }
    this._socket.end();
    if (!websocket._errorEmitted) {
      websocket._errorEmitted = true;
      websocket.emit("error", err);
    }
  }
  function setCloseTimer(websocket) {
    websocket._closeTimer = setTimeout(websocket._socket.destroy.bind(websocket._socket), websocket._closeTimeout);
  }
  function socketOnClose() {
    const websocket = this[kWebSocket];
    this.removeListener("close", socketOnClose);
    this.removeListener("data", socketOnData);
    this.removeListener("end", socketOnEnd);
    websocket._readyState = WebSocket.CLOSING;
    if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
      const chunk = this.read(this._readableState.length);
      websocket._receiver.write(chunk);
    }
    websocket._receiver.end();
    this[kWebSocket] = undefined;
    clearTimeout(websocket._closeTimer);
    if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
      websocket.emitClose();
    } else {
      websocket._receiver.on("error", receiverOnFinish);
      websocket._receiver.on("finish", receiverOnFinish);
    }
  }
  function socketOnData(chunk) {
    if (!this[kWebSocket]._receiver.write(chunk)) {
      this.pause();
    }
  }
  function socketOnEnd() {
    const websocket = this[kWebSocket];
    websocket._readyState = WebSocket.CLOSING;
    websocket._receiver.end();
    this.end();
  }
  function socketOnError() {
    const websocket = this[kWebSocket];
    this.removeListener("error", socketOnError);
    this.on("error", NOOP);
    if (websocket) {
      websocket._readyState = WebSocket.CLOSING;
      this.destroy();
    }
  }
});

// node_modules/ws/lib/stream.js
var require_stream = __commonJS((exports, module) => {
  var WebSocket = require_websocket();
  var { Duplex } = __require("stream");
  function emitClose(stream) {
    stream.emit("close");
  }
  function duplexOnEnd() {
    if (!this.destroyed && this._writableState.finished) {
      this.destroy();
    }
  }
  function duplexOnError(err) {
    this.removeListener("error", duplexOnError);
    this.destroy();
    if (this.listenerCount("error") === 0) {
      this.emit("error", err);
    }
  }
  function createWebSocketStream(ws, options) {
    let terminateOnDestroy = true;
    const duplex = new Duplex({
      ...options,
      autoDestroy: false,
      emitClose: false,
      objectMode: false,
      writableObjectMode: false
    });
    ws.on("message", function message(msg, isBinary) {
      const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
      if (!duplex.push(data))
        ws.pause();
    });
    ws.once("error", function error(err) {
      if (duplex.destroyed)
        return;
      terminateOnDestroy = false;
      duplex.destroy(err);
    });
    ws.once("close", function close() {
      if (duplex.destroyed)
        return;
      duplex.push(null);
    });
    duplex._destroy = function(err, callback2) {
      if (ws.readyState === ws.CLOSED) {
        callback2(err);
        process.nextTick(emitClose, duplex);
        return;
      }
      let called = false;
      ws.once("error", function error(err2) {
        called = true;
        callback2(err2);
      });
      ws.once("close", function close() {
        if (!called)
          callback2(err);
        process.nextTick(emitClose, duplex);
      });
      if (terminateOnDestroy)
        ws.terminate();
    };
    duplex._final = function(callback2) {
      if (ws.readyState === ws.CONNECTING) {
        ws.once("open", function open() {
          duplex._final(callback2);
        });
        return;
      }
      if (ws._socket === null)
        return;
      if (ws._socket._writableState.finished) {
        callback2();
        if (duplex._readableState.endEmitted)
          duplex.destroy();
      } else {
        ws._socket.once("finish", function finish() {
          callback2();
        });
        ws.close();
      }
    };
    duplex._read = function() {
      if (ws.isPaused)
        ws.resume();
    };
    duplex._write = function(chunk, encoding, callback2) {
      if (ws.readyState === ws.CONNECTING) {
        ws.once("open", function open() {
          duplex._write(chunk, encoding, callback2);
        });
        return;
      }
      ws.send(chunk, callback2);
    };
    duplex.on("end", duplexOnEnd);
    duplex.on("error", duplexOnError);
    return duplex;
  }
  module.exports = createWebSocketStream;
});

// node_modules/ws/lib/subprotocol.js
var require_subprotocol = __commonJS((exports, module) => {
  var { tokenChars } = require_validation();
  function parse(header) {
    const protocols = new Set;
    let start = -1;
    let end = -1;
    let i = 0;
    for (i;i < header.length; i++) {
      const code = header.charCodeAt(i);
      if (end === -1 && tokenChars[code] === 1) {
        if (start === -1)
          start = i;
      } else if (i !== 0 && (code === 32 || code === 9)) {
        if (end === -1 && start !== -1)
          end = i;
      } else if (code === 44) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
        if (end === -1)
          end = i;
        const protocol2 = header.slice(start, end);
        if (protocols.has(protocol2)) {
          throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
        }
        protocols.add(protocol2);
        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    }
    if (start === -1 || end !== -1) {
      throw new SyntaxError("Unexpected end of input");
    }
    const protocol = header.slice(start, i);
    if (protocols.has(protocol)) {
      throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
    }
    protocols.add(protocol);
    return protocols;
  }
  module.exports = { parse };
});

// node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS((exports, module) => {
  var EventEmitter = __require("events");
  var http = __require("http");
  var { Duplex } = __require("stream");
  var { createHash } = __require("crypto");
  var extension = require_extension();
  var PerMessageDeflate = require_permessage_deflate();
  var subprotocol = require_subprotocol();
  var WebSocket = require_websocket();
  var { CLOSE_TIMEOUT, GUID, kWebSocket } = require_constants2();
  var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
  var RUNNING = 0;
  var CLOSING = 1;
  var CLOSED = 2;

  class WebSocketServer extends EventEmitter {
    constructor(options, callback2) {
      super();
      options = {
        allowSynchronousEvents: true,
        autoPong: true,
        maxBufferedChunks: 1024 * 1024,
        maxFragments: 128 * 1024,
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: false,
        handleProtocols: null,
        clientTracking: true,
        closeTimeout: CLOSE_TIMEOUT,
        verifyClient: null,
        noServer: false,
        backlog: null,
        server: null,
        host: null,
        path: null,
        port: null,
        WebSocket,
        ...options
      };
      if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
        throw new TypeError('One and only one of the "port", "server", or "noServer" options ' + "must be specified");
      }
      if (options.port != null) {
        this._server = http.createServer((req, res) => {
          const body = http.STATUS_CODES[426];
          res.writeHead(426, {
            "Content-Length": body.length,
            "Content-Type": "text/plain"
          });
          res.end(body);
        });
        this._server.listen(options.port, options.host, options.backlog, callback2);
      } else if (options.server) {
        this._server = options.server;
      }
      if (this._server) {
        const emitConnection = this.emit.bind(this, "connection");
        this._removeListeners = addListeners(this._server, {
          listening: this.emit.bind(this, "listening"),
          error: this.emit.bind(this, "error"),
          upgrade: (req, socket, head) => {
            this.handleUpgrade(req, socket, head, emitConnection);
          }
        });
      }
      if (options.perMessageDeflate === true)
        options.perMessageDeflate = {};
      if (options.clientTracking) {
        this.clients = new Set;
        this._shouldEmitClose = false;
      }
      this.options = options;
      this._state = RUNNING;
    }
    address() {
      if (this.options.noServer) {
        throw new Error('The server is operating in "noServer" mode');
      }
      if (!this._server)
        return null;
      return this._server.address();
    }
    close(cb) {
      if (this._state === CLOSED) {
        if (cb) {
          this.once("close", () => {
            cb(new Error("The server is not running"));
          });
        }
        process.nextTick(emitClose, this);
        return;
      }
      if (cb)
        this.once("close", cb);
      if (this._state === CLOSING)
        return;
      this._state = CLOSING;
      if (this.options.noServer || this.options.server) {
        if (this._server) {
          this._removeListeners();
          this._removeListeners = this._server = null;
        }
        if (this.clients) {
          if (!this.clients.size) {
            process.nextTick(emitClose, this);
          } else {
            this._shouldEmitClose = true;
          }
        } else {
          process.nextTick(emitClose, this);
        }
      } else {
        const server = this._server;
        this._removeListeners();
        this._removeListeners = this._server = null;
        server.close(() => {
          emitClose(this);
        });
      }
    }
    shouldHandle(req) {
      if (this.options.path) {
        const index = req.url.indexOf("?");
        const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
        if (pathname !== this.options.path)
          return false;
      }
      return true;
    }
    handleUpgrade(req, socket, head, cb) {
      socket.on("error", socketOnError);
      const key = req.headers["sec-websocket-key"];
      const upgrade = req.headers.upgrade;
      const version = +req.headers["sec-websocket-version"];
      if (req.method !== "GET") {
        const message = "Invalid HTTP method";
        abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
        return;
      }
      if (upgrade === undefined || upgrade.toLowerCase() !== "websocket") {
        const message = "Invalid Upgrade header";
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
        return;
      }
      if (key === undefined || !keyRegex.test(key)) {
        const message = "Missing or invalid Sec-WebSocket-Key header";
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
        return;
      }
      if (version !== 13 && version !== 8) {
        const message = "Missing or invalid Sec-WebSocket-Version header";
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
          "Sec-WebSocket-Version": "13, 8"
        });
        return;
      }
      if (!this.shouldHandle(req)) {
        abortHandshake(socket, 400);
        return;
      }
      const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
      let protocols = new Set;
      if (secWebSocketProtocol !== undefined) {
        try {
          protocols = subprotocol.parse(secWebSocketProtocol);
        } catch (err) {
          const message = "Invalid Sec-WebSocket-Protocol header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
      }
      const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
      const extensions = {};
      if (this.options.perMessageDeflate && secWebSocketExtensions !== undefined) {
        const perMessageDeflate = new PerMessageDeflate({
          ...this.options.perMessageDeflate,
          isServer: true,
          maxPayload: this.options.maxPayload
        });
        try {
          const offers = extension.parse(secWebSocketExtensions);
          if (offers[PerMessageDeflate.extensionName]) {
            perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
            extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
          }
        } catch (err) {
          const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
      }
      if (this.options.verifyClient) {
        const info = {
          origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
          secure: !!(req.socket.authorized || req.socket.encrypted),
          req
        };
        if (this.options.verifyClient.length === 2) {
          this.options.verifyClient(info, (verified, code, message, headers) => {
            if (!verified) {
              return abortHandshake(socket, code || 401, message, headers);
            }
            this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
          });
          return;
        }
        if (!this.options.verifyClient(info))
          return abortHandshake(socket, 401);
      }
      this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
    }
    completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
      if (!socket.readable || !socket.writable)
        return socket.destroy();
      if (socket[kWebSocket]) {
        throw new Error("server.handleUpgrade() was called more than once with the same " + "socket, possibly due to a misconfiguration");
      }
      if (this._state > RUNNING)
        return abortHandshake(socket, 503);
      const digest = createHash("sha1").update(key + GUID).digest("base64");
      const headers = [
        "HTTP/1.1 101 Switching Protocols",
        "Upgrade: websocket",
        "Connection: Upgrade",
        `Sec-WebSocket-Accept: ${digest}`
      ];
      const ws = new this.options.WebSocket(null, undefined, this.options);
      if (protocols.size) {
        const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
        if (protocol) {
          headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
          ws._protocol = protocol;
        }
      }
      if (extensions[PerMessageDeflate.extensionName]) {
        const params = extensions[PerMessageDeflate.extensionName].params;
        const value = extension.format({
          [PerMessageDeflate.extensionName]: [params]
        });
        headers.push(`Sec-WebSocket-Extensions: ${value}`);
        ws._extensions = extensions;
      }
      this.emit("headers", headers, req);
      socket.write(headers.concat(`\r
`).join(`\r
`));
      socket.removeListener("error", socketOnError);
      ws.setSocket(socket, head, {
        allowSynchronousEvents: this.options.allowSynchronousEvents,
        maxBufferedChunks: this.options.maxBufferedChunks,
        maxFragments: this.options.maxFragments,
        maxPayload: this.options.maxPayload,
        skipUTF8Validation: this.options.skipUTF8Validation
      });
      if (this.clients) {
        this.clients.add(ws);
        ws.on("close", () => {
          this.clients.delete(ws);
          if (this._shouldEmitClose && !this.clients.size) {
            process.nextTick(emitClose, this);
          }
        });
      }
      cb(ws, req);
    }
  }
  module.exports = WebSocketServer;
  function addListeners(server, map) {
    for (const event of Object.keys(map))
      server.on(event, map[event]);
    return function removeListeners() {
      for (const event of Object.keys(map)) {
        server.removeListener(event, map[event]);
      }
    };
  }
  function emitClose(server) {
    server._state = CLOSED;
    server.emit("close");
  }
  function socketOnError() {
    this.destroy();
  }
  function abortHandshake(socket, code, message, headers) {
    message = message || http.STATUS_CODES[code];
    headers = {
      Connection: "close",
      "Content-Type": "text/html",
      "Content-Length": Buffer.byteLength(message),
      ...headers
    };
    socket.once("finish", socket.destroy);
    socket.end(`HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join(`\r
`) + `\r
\r
` + message);
  }
  function abortHandshakeOrEmitwsClientError(server, req, socket, code, message, headers) {
    if (server.listenerCount("wsClientError")) {
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
      server.emit("wsClientError", err, socket, req);
    } else {
      abortHandshake(socket, code, message, headers);
    }
  }
});

// node_modules/@stryker-mutator/api/dist/src/plugin/tokens.js
function stringLiteral(value) {
  return value;
}
var target = "$target";
var injector = "$injector";
var commonTokens = Object.freeze({
  getLogger: stringLiteral("getLogger"),
  injector,
  logger: stringLiteral("logger"),
  options: stringLiteral("options"),
  fileDescriptions: stringLiteral("fileDescriptions"),
  target
});
function tokens(...tokensList) {
  return tokensList;
}
// node_modules/@stryker-mutator/api/dist/src/plugin/plugin-kind.js
var PluginKind;
(function(PluginKind2) {
  PluginKind2["Checker"] = "Checker";
  PluginKind2["TestRunner"] = "TestRunner";
  PluginKind2["Reporter"] = "Reporter";
  PluginKind2["Ignore"] = "Ignore";
})(PluginKind || (PluginKind = {}));

// node_modules/@stryker-mutator/api/dist/src/plugin/plugins.js
function declareClassPlugin(kind, name, injectableClass) {
  return {
    injectableClass,
    kind,
    name
  };
}
// node_modules/@stryker-mutator/api/dist/src/plugin/scope.js
var Scope;
(function(Scope2) {
  Scope2["Transient"] = "transient";
  Scope2["Singleton"] = "singleton";
})(Scope || (Scope = {}));
// src/bun-test-runner.ts
import { createHash } from "node:crypto";
import * as fsPromises2 from "node:fs/promises";
import { tmpdir } from "node:os";
import path4 from "node:path";
// node_modules/@stryker-mutator/api/dist/src/test-runner/test-status.js
var TestStatus;
(function(TestStatus2) {
  TestStatus2[TestStatus2["Success"] = 0] = "Success";
  TestStatus2[TestStatus2["Failed"] = 1] = "Failed";
  TestStatus2[TestStatus2["Skipped"] = 2] = "Skipped";
})(TestStatus || (TestStatus = {}));
// node_modules/@stryker-mutator/api/dist/src/test-runner/mutant-run-result.js
var MutantRunStatus;
(function(MutantRunStatus2) {
  MutantRunStatus2["Killed"] = "killed";
  MutantRunStatus2["Survived"] = "survived";
  MutantRunStatus2["Timeout"] = "timeout";
  MutantRunStatus2["Error"] = "error";
})(MutantRunStatus || (MutantRunStatus = {}));
// node_modules/@stryker-mutator/api/dist/src/test-runner/dry-run-status.js
var DryRunStatus;
(function(DryRunStatus2) {
  DryRunStatus2["Complete"] = "complete";
  DryRunStatus2["Error"] = "error";
  DryRunStatus2["Timeout"] = "timeout";
})(DryRunStatus || (DryRunStatus = {}));
// src/coverage/preload-generator.ts
import { mkdir, unlink, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath as fileURLToPath2 } from "node:url";

// node_modules/tinyglobby/dist/index.mjs
import { readdir, readdirSync, realpath, realpathSync, stat, statSync } from "fs";
import { isAbsolute, posix, resolve as resolve2 } from "path";
import { fileURLToPath } from "url";

// node_modules/fdir/dist/index.mjs
import { createRequire as createRequire2 } from "module";
import { basename, dirname, normalize, relative, resolve, sep } from "path";
import * as nativeFs from "fs";
var __require2 = /* @__PURE__ */ createRequire2(import.meta.url);
function cleanPath(path) {
  let normalized = normalize(path);
  if (normalized.length > 1 && normalized[normalized.length - 1] === sep)
    normalized = normalized.substring(0, normalized.length - 1);
  return normalized;
}
var SLASHES_REGEX = /[\\/]/g;
function convertSlashes(path, separator) {
  return path.replace(SLASHES_REGEX, separator);
}
var WINDOWS_ROOT_DIR_REGEX = /^[a-z]:[\\/]$/i;
function isRootDirectory(path) {
  return path === "/" || WINDOWS_ROOT_DIR_REGEX.test(path);
}
function normalizePath(path, options) {
  const { resolvePaths, normalizePath: normalizePath$1, pathSeparator } = options;
  const pathNeedsCleaning = process.platform === "win32" && path.includes("/") || path.startsWith(".");
  if (resolvePaths)
    path = resolve(path);
  if (normalizePath$1 || pathNeedsCleaning)
    path = cleanPath(path);
  if (path === ".")
    return "";
  const needsSeperator = path[path.length - 1] !== pathSeparator;
  return convertSlashes(needsSeperator ? path + pathSeparator : path, pathSeparator);
}
function joinPathWithBasePath(filename, directoryPath) {
  return directoryPath + filename;
}
function joinPathWithRelativePath(root, options) {
  return function(filename, directoryPath) {
    const sameRoot = directoryPath.startsWith(root);
    if (sameRoot)
      return directoryPath.slice(root.length) + filename;
    else
      return convertSlashes(relative(root, directoryPath), options.pathSeparator) + options.pathSeparator + filename;
  };
}
function joinPath(filename) {
  return filename;
}
function joinDirectoryPath(filename, directoryPath, separator) {
  return directoryPath + filename + separator;
}
function build$7(root, options) {
  const { relativePaths, includeBasePath } = options;
  return relativePaths && root ? joinPathWithRelativePath(root, options) : includeBasePath ? joinPathWithBasePath : joinPath;
}
function pushDirectoryWithRelativePath(root) {
  return function(directoryPath, paths) {
    paths.push(directoryPath.substring(root.length) || ".");
  };
}
function pushDirectoryFilterWithRelativePath(root) {
  return function(directoryPath, paths, filters) {
    const relativePath = directoryPath.substring(root.length) || ".";
    if (filters.every((filter) => filter(relativePath, true)))
      paths.push(relativePath);
  };
}
var pushDirectory = (directoryPath, paths) => {
  paths.push(directoryPath || ".");
};
var pushDirectoryFilter = (directoryPath, paths, filters) => {
  const path = directoryPath || ".";
  if (filters.every((filter) => filter(path, true)))
    paths.push(path);
};
var empty$2 = () => {};
function build$6(root, options) {
  const { includeDirs, filters, relativePaths } = options;
  if (!includeDirs)
    return empty$2;
  if (relativePaths)
    return filters && filters.length ? pushDirectoryFilterWithRelativePath(root) : pushDirectoryWithRelativePath(root);
  return filters && filters.length ? pushDirectoryFilter : pushDirectory;
}
var pushFileFilterAndCount = (filename, _paths, counts, filters) => {
  if (filters.every((filter) => filter(filename, false)))
    counts.files++;
};
var pushFileFilter = (filename, paths, _counts, filters) => {
  if (filters.every((filter) => filter(filename, false)))
    paths.push(filename);
};
var pushFileCount = (_filename, _paths, counts, _filters) => {
  counts.files++;
};
var pushFile = (filename, paths) => {
  paths.push(filename);
};
var empty$1 = () => {};
function build$5(options) {
  const { excludeFiles, filters, onlyCounts } = options;
  if (excludeFiles)
    return empty$1;
  if (filters && filters.length)
    return onlyCounts ? pushFileFilterAndCount : pushFileFilter;
  else if (onlyCounts)
    return pushFileCount;
  else
    return pushFile;
}
var getArray = (paths) => {
  return paths;
};
var getArrayGroup = () => {
  return [""].slice(0, 0);
};
function build$4(options) {
  return options.group ? getArrayGroup : getArray;
}
var groupFiles = (groups, directory, files) => {
  groups.push({
    directory,
    files,
    dir: directory
  });
};
var empty = () => {};
function build$3(options) {
  return options.group ? groupFiles : empty;
}
var resolveSymlinksAsync = function(path, state, callback$1) {
  const { queue, fs, options: { suppressErrors } } = state;
  queue.enqueue();
  fs.realpath(path, (error, resolvedPath) => {
    if (error)
      return queue.dequeue(suppressErrors ? null : error, state);
    fs.stat(resolvedPath, (error$1, stat) => {
      if (error$1)
        return queue.dequeue(suppressErrors ? null : error$1, state);
      if (stat.isDirectory() && isRecursive(path, resolvedPath, state))
        return queue.dequeue(null, state);
      callback$1(stat, resolvedPath);
      queue.dequeue(null, state);
    });
  });
};
var resolveSymlinks = function(path, state, callback$1) {
  const { queue, fs, options: { suppressErrors } } = state;
  queue.enqueue();
  try {
    const resolvedPath = fs.realpathSync(path);
    const stat = fs.statSync(resolvedPath);
    if (stat.isDirectory() && isRecursive(path, resolvedPath, state))
      return;
    callback$1(stat, resolvedPath);
  } catch (e) {
    if (!suppressErrors)
      throw e;
  }
};
function build$2(options, isSynchronous) {
  if (!options.resolveSymlinks || options.excludeSymlinks)
    return null;
  return isSynchronous ? resolveSymlinks : resolveSymlinksAsync;
}
function isRecursive(path, resolved, state) {
  if (state.options.useRealPaths)
    return isRecursiveUsingRealPaths(resolved, state);
  let parent = dirname(path);
  let depth = 1;
  while (parent !== state.root && depth < 2) {
    const resolvedPath = state.symlinks.get(parent);
    const isSameRoot = !!resolvedPath && (resolvedPath === resolved || resolvedPath.startsWith(resolved) || resolved.startsWith(resolvedPath));
    if (isSameRoot)
      depth++;
    else
      parent = dirname(parent);
  }
  state.symlinks.set(path, resolved);
  return depth > 1;
}
function isRecursiveUsingRealPaths(resolved, state) {
  return state.visited.includes(resolved + state.options.pathSeparator);
}
var onlyCountsSync = (state) => {
  return state.counts;
};
var groupsSync = (state) => {
  return state.groups;
};
var defaultSync = (state) => {
  return state.paths;
};
var limitFilesSync = (state) => {
  return state.paths.slice(0, state.options.maxFiles);
};
var onlyCountsAsync = (state, error, callback$1) => {
  report(error, callback$1, state.counts, state.options.suppressErrors);
  return null;
};
var defaultAsync = (state, error, callback$1) => {
  report(error, callback$1, state.paths, state.options.suppressErrors);
  return null;
};
var limitFilesAsync = (state, error, callback$1) => {
  report(error, callback$1, state.paths.slice(0, state.options.maxFiles), state.options.suppressErrors);
  return null;
};
var groupsAsync = (state, error, callback$1) => {
  report(error, callback$1, state.groups, state.options.suppressErrors);
  return null;
};
function report(error, callback$1, output, suppressErrors) {
  if (error && !suppressErrors)
    callback$1(error, output);
  else
    callback$1(null, output);
}
function build$1(options, isSynchronous) {
  const { onlyCounts, group, maxFiles } = options;
  if (onlyCounts)
    return isSynchronous ? onlyCountsSync : onlyCountsAsync;
  else if (group)
    return isSynchronous ? groupsSync : groupsAsync;
  else if (maxFiles)
    return isSynchronous ? limitFilesSync : limitFilesAsync;
  else
    return isSynchronous ? defaultSync : defaultAsync;
}
var readdirOpts = { withFileTypes: true };
var walkAsync = (state, crawlPath, directoryPath, currentDepth, callback$1) => {
  state.queue.enqueue();
  if (currentDepth < 0)
    return state.queue.dequeue(null, state);
  const { fs } = state;
  state.visited.push(crawlPath);
  state.counts.directories++;
  fs.readdir(crawlPath || ".", readdirOpts, (error, entries = []) => {
    callback$1(entries, directoryPath, currentDepth);
    state.queue.dequeue(state.options.suppressErrors ? null : error, state);
  });
};
var walkSync = (state, crawlPath, directoryPath, currentDepth, callback$1) => {
  const { fs } = state;
  if (currentDepth < 0)
    return;
  state.visited.push(crawlPath);
  state.counts.directories++;
  let entries = [];
  try {
    entries = fs.readdirSync(crawlPath || ".", readdirOpts);
  } catch (e) {
    if (!state.options.suppressErrors)
      throw e;
  }
  callback$1(entries, directoryPath, currentDepth);
};
function build(isSynchronous) {
  return isSynchronous ? walkSync : walkAsync;
}
var Queue = class {
  count = 0;
  constructor(onQueueEmpty) {
    this.onQueueEmpty = onQueueEmpty;
  }
  enqueue() {
    this.count++;
    return this.count;
  }
  dequeue(error, output) {
    if (this.onQueueEmpty && (--this.count <= 0 || error)) {
      this.onQueueEmpty(error, output);
      if (error) {
        output.controller.abort();
        this.onQueueEmpty = undefined;
      }
    }
  }
};
var Counter = class {
  _files = 0;
  _directories = 0;
  set files(num) {
    this._files = num;
  }
  get files() {
    return this._files;
  }
  set directories(num) {
    this._directories = num;
  }
  get directories() {
    return this._directories;
  }
  get dirs() {
    return this._directories;
  }
};
var Aborter = class {
  aborted = false;
  abort() {
    this.aborted = true;
  }
};
var Walker = class {
  root;
  isSynchronous;
  state;
  joinPath;
  pushDirectory;
  pushFile;
  getArray;
  groupFiles;
  resolveSymlink;
  walkDirectory;
  callbackInvoker;
  constructor(root, options, callback$1) {
    this.isSynchronous = !callback$1;
    this.callbackInvoker = build$1(options, this.isSynchronous);
    this.root = normalizePath(root, options);
    this.state = {
      root: isRootDirectory(this.root) ? this.root : this.root.slice(0, -1),
      paths: [""].slice(0, 0),
      groups: [],
      counts: new Counter,
      options,
      queue: new Queue((error, state) => this.callbackInvoker(state, error, callback$1)),
      symlinks: /* @__PURE__ */ new Map,
      visited: [""].slice(0, 0),
      controller: new Aborter,
      fs: options.fs || nativeFs
    };
    this.joinPath = build$7(this.root, options);
    this.pushDirectory = build$6(this.root, options);
    this.pushFile = build$5(options);
    this.getArray = build$4(options);
    this.groupFiles = build$3(options);
    this.resolveSymlink = build$2(options, this.isSynchronous);
    this.walkDirectory = build(this.isSynchronous);
  }
  start() {
    this.pushDirectory(this.root, this.state.paths, this.state.options.filters);
    this.walkDirectory(this.state, this.root, this.root, this.state.options.maxDepth, this.walk);
    return this.isSynchronous ? this.callbackInvoker(this.state, null) : null;
  }
  walk = (entries, directoryPath, depth) => {
    const { paths, options: { filters, resolveSymlinks: resolveSymlinks$1, excludeSymlinks, exclude, maxFiles, signal, useRealPaths, pathSeparator }, controller } = this.state;
    if (controller.aborted || signal && signal.aborted || maxFiles && paths.length > maxFiles)
      return;
    const files = this.getArray(this.state.paths);
    for (let i = 0;i < entries.length; ++i) {
      const entry = entries[i];
      if (entry.isFile() || entry.isSymbolicLink() && !resolveSymlinks$1 && !excludeSymlinks) {
        const filename = this.joinPath(entry.name, directoryPath);
        this.pushFile(filename, files, this.state.counts, filters);
      } else if (entry.isDirectory()) {
        let path = joinDirectoryPath(entry.name, directoryPath, this.state.options.pathSeparator);
        if (exclude && exclude(entry.name, path))
          continue;
        this.pushDirectory(path, paths, filters);
        this.walkDirectory(this.state, path, path, depth - 1, this.walk);
      } else if (this.resolveSymlink && entry.isSymbolicLink()) {
        let path = joinPathWithBasePath(entry.name, directoryPath);
        this.resolveSymlink(path, this.state, (stat, resolvedPath) => {
          if (stat.isDirectory()) {
            resolvedPath = normalizePath(resolvedPath, this.state.options);
            if (exclude && exclude(entry.name, useRealPaths ? resolvedPath : path + pathSeparator))
              return;
            this.walkDirectory(this.state, resolvedPath, useRealPaths ? resolvedPath : path + pathSeparator, depth - 1, this.walk);
          } else {
            resolvedPath = useRealPaths ? resolvedPath : path;
            const filename = basename(resolvedPath);
            const directoryPath$1 = normalizePath(dirname(resolvedPath), this.state.options);
            resolvedPath = this.joinPath(filename, directoryPath$1);
            this.pushFile(resolvedPath, files, this.state.counts, filters);
          }
        });
      }
    }
    this.groupFiles(this.state.groups, directoryPath, files);
  };
};
function promise(root, options) {
  return new Promise((resolve$1, reject) => {
    callback(root, options, (err, output) => {
      if (err)
        return reject(err);
      resolve$1(output);
    });
  });
}
function callback(root, options, callback$1) {
  let walker = new Walker(root, options, callback$1);
  walker.start();
}
function sync(root, options) {
  const walker = new Walker(root, options);
  return walker.start();
}
var APIBuilder = class {
  constructor(root, options) {
    this.root = root;
    this.options = options;
  }
  withPromise() {
    return promise(this.root, this.options);
  }
  withCallback(cb) {
    callback(this.root, this.options, cb);
  }
  sync() {
    return sync(this.root, this.options);
  }
};
var pm = null;
try {
  __require2.resolve("picomatch");
  pm = __require2("picomatch");
} catch {}
var Builder = class {
  globCache = {};
  options = {
    maxDepth: Infinity,
    suppressErrors: true,
    pathSeparator: sep,
    filters: []
  };
  globFunction;
  constructor(options) {
    this.options = {
      ...this.options,
      ...options
    };
    this.globFunction = this.options.globFunction;
  }
  group() {
    this.options.group = true;
    return this;
  }
  withPathSeparator(separator) {
    this.options.pathSeparator = separator;
    return this;
  }
  withBasePath() {
    this.options.includeBasePath = true;
    return this;
  }
  withRelativePaths() {
    this.options.relativePaths = true;
    return this;
  }
  withDirs() {
    this.options.includeDirs = true;
    return this;
  }
  withMaxDepth(depth) {
    this.options.maxDepth = depth;
    return this;
  }
  withMaxFiles(limit) {
    this.options.maxFiles = limit;
    return this;
  }
  withFullPaths() {
    this.options.resolvePaths = true;
    this.options.includeBasePath = true;
    return this;
  }
  withErrors() {
    this.options.suppressErrors = false;
    return this;
  }
  withSymlinks({ resolvePaths = true } = {}) {
    this.options.resolveSymlinks = true;
    this.options.useRealPaths = resolvePaths;
    return this.withFullPaths();
  }
  withAbortSignal(signal) {
    this.options.signal = signal;
    return this;
  }
  normalize() {
    this.options.normalizePath = true;
    return this;
  }
  filter(predicate) {
    this.options.filters.push(predicate);
    return this;
  }
  onlyDirs() {
    this.options.excludeFiles = true;
    this.options.includeDirs = true;
    return this;
  }
  exclude(predicate) {
    this.options.exclude = predicate;
    return this;
  }
  onlyCounts() {
    this.options.onlyCounts = true;
    return this;
  }
  crawl(root) {
    return new APIBuilder(root || ".", this.options);
  }
  withGlobFunction(fn) {
    this.globFunction = fn;
    return this;
  }
  crawlWithOptions(root, options) {
    this.options = {
      ...this.options,
      ...options
    };
    return new APIBuilder(root || ".", this.options);
  }
  glob(...patterns) {
    if (this.globFunction)
      return this.globWithOptions(patterns);
    return this.globWithOptions(patterns, ...[{ dot: true }]);
  }
  globWithOptions(patterns, ...options) {
    const globFn = this.globFunction || pm;
    if (!globFn)
      throw new Error("Please specify a glob function to use glob matching.");
    var isMatch = this.globCache[patterns.join("\x00")];
    if (!isMatch) {
      isMatch = globFn(patterns, ...options);
      this.globCache[patterns.join("\x00")] = isMatch;
    }
    this.options.filters.push((path) => isMatch(path));
    return this;
  }
};

// node_modules/tinyglobby/dist/index.mjs
var import_picomatch = __toESM(require_picomatch2(), 1);
var isReadonlyArray = Array.isArray;
var BACKSLASHES = /\\/g;
var DRIVE_RELATIVE_PATH = /^[A-Za-z]:$/;
var isWin = process.platform === "win32";
var ONLY_PARENT_DIRECTORIES = /^(\/?\.\.)+$/;
function getPartialMatcher(patterns, options = {}) {
  const patternsCount = patterns.length;
  const patternsParts = Array(patternsCount);
  const matchers = Array(patternsCount);
  let i, j;
  for (i = 0;i < patternsCount; i++) {
    const parts = splitPattern(patterns[i]);
    patternsParts[i] = parts;
    const partsCount = parts.length;
    const partMatchers = Array(partsCount);
    for (j = 0;j < partsCount; j++)
      partMatchers[j] = import_picomatch.default(parts[j], options);
    matchers[i] = partMatchers;
  }
  return (input) => {
    const inputParts = input.split("/");
    if (inputParts[0] === ".." && ONLY_PARENT_DIRECTORIES.test(input))
      return true;
    for (i = 0;i < patternsCount; i++) {
      const patternParts = patternsParts[i];
      const matcher = matchers[i];
      const inputPatternCount = inputParts.length;
      const minParts = Math.min(inputPatternCount, patternParts.length);
      j = 0;
      while (j < minParts) {
        const part = patternParts[j];
        if (part.includes("/"))
          return true;
        if (!matcher[j](inputParts[j]))
          break;
        if (!options.noglobstar && part === "**")
          return true;
        j++;
      }
      if (j === inputPatternCount)
        return true;
    }
    return false;
  };
}
var WIN32_ROOT_DIR = /^[A-Z]:\/$/i;
var isRoot = isWin ? (p) => WIN32_ROOT_DIR.test(p) : (p) => p === "/";
function buildFormat(cwd, root, absolute) {
  if (cwd === root || root.startsWith(`${cwd}/`)) {
    if (absolute) {
      const start = cwd.length + +!isRoot(cwd);
      return (p, isDir) => p.slice(start, isDir ? -1 : undefined) || ".";
    }
    const prefix = root.slice(cwd.length + 1);
    if (prefix)
      return (p, isDir) => {
        if (p === ".")
          return prefix;
        const result = `${prefix}/${p}`;
        return isDir ? result.slice(0, -1) : result;
      };
    return (p, isDir) => isDir && p !== "." ? p.slice(0, -1) : p;
  }
  if (absolute)
    return (p) => posix.relative(cwd, p) || ".";
  return (p) => posix.relative(cwd, `${root}/${p}`) || ".";
}
function buildRelative(cwd, root) {
  if (root.startsWith(`${cwd}/`)) {
    const prefix = root.slice(cwd.length + 1);
    return (p) => `${prefix}/${p}`;
  }
  return (p) => {
    const result = posix.relative(cwd, `${root}/${p}`);
    return p[p.length - 1] === "/" && result !== "" ? `${result}/` : result || ".";
  };
}
function ensureNonDriveRelativePath(path) {
  return path.replace(DRIVE_RELATIVE_PATH, (match) => `${match}/`);
}
var splitPatternOptions = { parts: true };
function splitPattern(path) {
  var _result$parts;
  const result = import_picomatch.default.scan(path, splitPatternOptions);
  return ((_result$parts = result.parts) === null || _result$parts === undefined ? undefined : _result$parts.length) ? result.parts : [path];
}
var POSIX_UNESCAPED_GLOB_SYMBOLS = /(?<!\\)([()[\]{}*?|]|^!|[!+@](?=\()|\\(?![()[\]{}!*+?@|]))/g;
var WIN32_UNESCAPED_GLOB_SYMBOLS = /(?<!\\)([()[\]{}]|^!|[!+@](?=\())/g;
var escapePosixPath = (path) => path.replace(POSIX_UNESCAPED_GLOB_SYMBOLS, "\\$&");
var escapeWin32Path = (path) => path.replace(WIN32_UNESCAPED_GLOB_SYMBOLS, "\\$&");
var escapePath = isWin ? escapeWin32Path : escapePosixPath;
function isDynamicPattern(pattern, options) {
  if ((options === null || options === undefined ? undefined : options.caseSensitiveMatch) === false)
    return true;
  const scan = import_picomatch.default.scan(pattern);
  return scan.isGlob || scan.negated;
}
function log(...tasks) {
  console.log(`[tinyglobby ${(/* @__PURE__ */ new Date()).toLocaleTimeString("es")}]`, ...tasks);
}
function ensureStringArray(value) {
  return typeof value === "string" ? [value] : value !== null && value !== undefined ? value : [];
}
var PARENT_DIRECTORY = /^(\/?\.\.)+/;
var ESCAPING_BACKSLASHES = /\\(?=[()[\]{}!*+?@|])/g;
function normalizePattern(pattern, opts, props, isIgnore) {
  var _PARENT_DIRECTORY$exe;
  const cwd = opts.cwd;
  let result = pattern;
  if (pattern[pattern.length - 1] === "/")
    result = pattern.slice(0, -1);
  if (result[result.length - 1] !== "*" && opts.expandDirectories)
    result += "/**";
  const escapedCwd = escapePath(cwd);
  result = isAbsolute(result.replace(ESCAPING_BACKSLASHES, "")) ? posix.relative(escapedCwd, result) : posix.normalize(result);
  const parentDir = (_PARENT_DIRECTORY$exe = PARENT_DIRECTORY.exec(result)) === null || _PARENT_DIRECTORY$exe === undefined ? undefined : _PARENT_DIRECTORY$exe[0];
  const parts = splitPattern(result);
  if (parentDir) {
    const n = (parentDir.length + 1) / 3;
    let i = 0;
    const cwdParts = escapedCwd.split("/");
    while (i < n && parts[i + n] === cwdParts[cwdParts.length + i - n]) {
      result = result.slice(0, (n - i - 1) * 3) + result.slice((n - i) * 3 + parts[i + n].length + 1) || ".";
      i++;
    }
    const potentialRoot = posix.join(cwd, parentDir.slice(i * 3));
    if (potentialRoot[0] !== "." && props.root.length > potentialRoot.length) {
      props.root = ensureNonDriveRelativePath(potentialRoot);
      props.depthOffset = -n + i;
    }
  }
  if (!isIgnore && props.depthOffset >= 0) {
    var _props$commonPath;
    (_props$commonPath = props.commonPath) !== null && _props$commonPath !== undefined || (props.commonPath = parts);
    const newCommonPath = [];
    const length = Math.min(props.commonPath.length, parts.length);
    for (let i = 0;i < length; i++) {
      const part = parts[i];
      if (part === "**" && !parts[i + 1]) {
        newCommonPath.pop();
        break;
      }
      if (i === parts.length - 1 || part !== props.commonPath[i] || isDynamicPattern(part))
        break;
      newCommonPath.push(part);
    }
    props.depthOffset = newCommonPath.length;
    props.commonPath = newCommonPath;
    props.root = ensureNonDriveRelativePath(newCommonPath.length > 0 ? posix.join(cwd, ...newCommonPath) : cwd);
  }
  return result;
}
function processPatterns(options, patterns, props) {
  const matchPatterns = [];
  const ignorePatterns = [];
  for (const pattern of options.ignore) {
    if (!pattern)
      continue;
    if (pattern[0] !== "!" || pattern[1] === "(")
      ignorePatterns.push(normalizePattern(pattern, options, props, true));
  }
  for (const pattern of patterns) {
    if (!pattern)
      continue;
    if (pattern[0] !== "!" || pattern[1] === "(")
      matchPatterns.push(normalizePattern(pattern, options, props, false));
    else if (pattern[1] !== "!" || pattern[2] === "(")
      ignorePatterns.push(normalizePattern(pattern.slice(1), options, props, true));
  }
  return {
    match: matchPatterns,
    ignore: ignorePatterns
  };
}
function buildCrawler(options, patterns) {
  const cwd = options.cwd;
  const props = {
    root: cwd,
    depthOffset: 0
  };
  const processed = processPatterns(options, patterns, props);
  if (options.debug)
    log("internal processing patterns:", processed);
  const { absolute, caseSensitiveMatch, debug, dot, followSymbolicLinks, onlyDirectories } = options;
  const root = props.root.replace(BACKSLASHES, "");
  const matchOptions = {
    dot,
    nobrace: options.braceExpansion === false,
    nocase: !caseSensitiveMatch,
    noextglob: options.extglob === false,
    noglobstar: options.globstar === false,
    posix: true
  };
  const matcher = import_picomatch.default(processed.match, matchOptions);
  const ignore = import_picomatch.default(processed.ignore, matchOptions);
  const partialMatcher = getPartialMatcher(processed.match, matchOptions);
  const format = buildFormat(cwd, root, absolute);
  const excludeFormatter = absolute ? format : buildFormat(cwd, root, true);
  const excludePredicate = (_, p) => {
    const relativePath = excludeFormatter(p, true);
    return relativePath !== "." && !partialMatcher(relativePath) || ignore(relativePath);
  };
  let maxDepth;
  if (options.deep !== undefined)
    maxDepth = Math.round(options.deep - props.depthOffset);
  const crawler = new Builder({
    filters: [debug ? (p, isDirectory) => {
      const path = format(p, isDirectory);
      const matches = matcher(path) && !ignore(path);
      if (matches)
        log(`matched ${path}`);
      return matches;
    } : (p, isDirectory) => {
      const path = format(p, isDirectory);
      return matcher(path) && !ignore(path);
    }],
    exclude: debug ? (_, p) => {
      const skipped = excludePredicate(_, p);
      log(`${skipped ? "skipped" : "crawling"} ${p}`);
      return skipped;
    } : excludePredicate,
    fs: options.fs,
    pathSeparator: "/",
    relativePaths: !absolute,
    resolvePaths: absolute,
    includeBasePath: absolute,
    resolveSymlinks: followSymbolicLinks,
    excludeSymlinks: !followSymbolicLinks,
    excludeFiles: onlyDirectories,
    includeDirs: onlyDirectories || !options.onlyFiles,
    maxDepth,
    signal: options.signal
  }).crawl(root);
  if (options.debug)
    log("internal properties:", {
      ...props,
      root
    });
  return [crawler, cwd !== root && !absolute && buildRelative(cwd, root)];
}
function formatPaths(paths, mapper) {
  if (mapper)
    for (let i = paths.length - 1;i >= 0; i--)
      paths[i] = mapper(paths[i]);
  return paths;
}
var defaultOptions = {
  caseSensitiveMatch: true,
  debug: !!process.env.TINYGLOBBY_DEBUG,
  expandDirectories: true,
  followSymbolicLinks: true,
  onlyFiles: true
};
function getOptions(options) {
  const opts = Object.assign({}, options);
  for (const key in defaultOptions)
    if (opts[key] === undefined)
      Object.assign(opts, { [key]: defaultOptions[key] });
  opts.cwd = (opts.cwd instanceof URL ? fileURLToPath(opts.cwd) : resolve2(opts.cwd || process.cwd())).replace(BACKSLASHES, "/");
  opts.ignore = ensureStringArray(opts.ignore);
  opts.fs && (opts.fs = {
    readdir: opts.fs.readdir || readdir,
    readdirSync: opts.fs.readdirSync || readdirSync,
    realpath: opts.fs.realpath || realpath,
    realpathSync: opts.fs.realpathSync || realpathSync,
    stat: opts.fs.stat || stat,
    statSync: opts.fs.statSync || statSync
  });
  if (opts.debug)
    log("globbing with options:", opts);
  return opts;
}
function getCrawler(globInput, inputOptions = {}) {
  var _ref;
  if (globInput && (inputOptions === null || inputOptions === undefined ? undefined : inputOptions.patterns))
    throw new Error("Cannot pass patterns as both an argument and an option");
  const isModern = isReadonlyArray(globInput) || typeof globInput === "string";
  const patterns = ensureStringArray((_ref = isModern ? globInput : globInput.patterns) !== null && _ref !== undefined ? _ref : "**/*");
  const options = getOptions(isModern ? inputOptions : globInput);
  return patterns.length > 0 ? buildCrawler(options, patterns) : [];
}
async function glob(globInput, options) {
  const [crawler, relative2] = getCrawler(globInput, options);
  return crawler ? formatPaths(await crawler.withPromise(), relative2) : [];
}

// src/utils/test-name-pattern.ts
var MAX_TEST_NAME_PATTERN_LENGTH = 1e5;
var TEST_FILE_EXT_PATTERN = String.raw`(?:test|spec)\.(?:[jt]sx?|[mc][jt]s)`;
var fileExtRe = new RegExp(String.raw`\.${TEST_FILE_EXT_PATTERN}$`);
var dedupSuffixRe = / \[\d+\]$/;
var metaRe = /[.*+?^${}()|[\]\\/]/g;
function escapeRegex(str) {
  return str.replaceAll(metaRe, String.raw`\$&`);
}
function buildTestNamePattern(testFilter, testNameIndex) {
  if (testFilter.length === 0) {
    return;
  }
  const alternatives = new Set;
  for (const id of testFilter) {
    const exact = testNameIndex?.get(id);
    if (exact !== undefined && exact.length > 0 && !exact.includes("\x00")) {
      alternatives.add(escapeRegex(exact));
      continue;
    }
    const firstSepIdx = id.indexOf(" > ");
    let name = firstSepIdx !== -1 && fileExtRe.test(id.slice(0, firstSepIdx)) ? id.slice(firstSepIdx + 3) : id;
    name = name.replace(dedupSuffixRe, "");
    name = name.replaceAll(" > ", " ");
    name = escapeRegex(name);
    if (name.length > 0) {
      alternatives.add(name);
    }
  }
  if (alternatives.size === 0) {
    return;
  }
  const pattern = `^(?:${[...alternatives].join("|")})$`;
  if (Buffer.byteLength(pattern) > MAX_TEST_NAME_PATTERN_LENGTH) {
    return;
  }
  return pattern;
}

// src/coverage/preload-generator.ts
async function resolveEagerModulesFromGlobs(mutateGlobs, cwd = process.cwd()) {
  if (mutateGlobs.length === 0) {
    return [];
  }
  const positivePatterns = [];
  const negativePatterns = [];
  for (const p of mutateGlobs) {
    if (p.startsWith("!")) {
      negativePatterns.push(p.slice(1));
    } else {
      positivePatterns.push(p.replace(/:\d.*$/, ""));
    }
  }
  if (positivePatterns.length === 0) {
    return [];
  }
  const paths = await glob(positivePatterns, {
    cwd,
    absolute: true,
    ignore: negativePatterns,
    expandDirectories: false
  });
  const sourceFileRe = /\.(?:tsx?|[cm]?js)$/;
  const dtsRe = /\.d\.[cm]?ts$/;
  const testFileRe = new RegExp(String.raw`\.${TEST_FILE_EXT_PATTERN}$`);
  const filtered = paths.filter((p) => sourceFileRe.test(p) && !dtsRe.test(p) && !testFileRe.test(p));
  const resolved = filtered.map((p) => path.resolve(p));
  resolved.sort((a, b) => a.localeCompare(b));
  return resolved;
}
async function generatePreloadScript(options) {
  const preloadPath = path.join(options.tempDir, `stryker-coverage-preload-${process.pid}.ts`);
  await mkdir(options.tempDir, { recursive: true });
  const __dirname2 = path.dirname(fileURLToPath2(import.meta.url));
  const isBundled = __dirname2.endsWith("dist") || __dirname2.includes("dist/");
  const templatePath = isBundled ? path.join(__dirname2, "templates/coverage-preload.ts") : path.join(__dirname2, "../templates/coverage-preload.ts");
  const template = await readFile(templatePath, "utf8");
  const preloadLogicPath = isBundled ? path.join(__dirname2, "coverage/preload-logic.js") : path.join(__dirname2, "preload-logic.ts");
  const eagerModules = options.eagerModules ?? [];
  const content = template.replace("__PRELOAD_LOGIC_PATH__", preloadLogicPath).replace("__EAGER_MODULES__", JSON.stringify(eagerModules));
  await writeFile(preloadPath, content, "utf8");
  return preloadPath;
}
async function cleanupPreloadScript(preloadPath) {
  try {
    await unlink(preloadPath);
  } catch {}
}
// src/coverage/collector.ts
import { readFile as readFile2, unlink as unlink2 } from "node:fs/promises";
function arrayToCoverageData(mutantIds) {
  const coverage = {};
  for (const mutantId of mutantIds) {
    coverage[mutantId] = 1;
  }
  return coverage;
}
function mergeCoverageData(dataList) {
  const merged = {
    perTest: {},
    static: []
  };
  const staticSet = new Set;
  for (const data of dataList) {
    for (const [testId, mutantIds] of Object.entries(data.perTest)) {
      if (testId in merged.perTest) {
        const existingSet = new Set(merged.perTest[testId]);
        for (const mutantId of mutantIds) {
          existingSet.add(mutantId);
        }
        merged.perTest[testId] = [...existingSet];
      } else {
        merged.perTest[testId] = mutantIds;
      }
    }
    for (const mutantId of data.static) {
      staticSet.add(mutantId);
    }
  }
  merged.static = [...staticSet];
  return merged;
}
async function readCoverageFileData(coverageFile, logger) {
  try {
    const content = await readFile2(coverageFile, "utf8");
    const trimmed = content.trim();
    const lines = trimmed.split(`
`).filter((line) => line.length > 0);
    const dataList = [];
    for (const line of lines) {
      try {
        const data = JSON.parse(line);
        dataList.push(data);
      } catch (parseError) {
        const errorMsg = parseError instanceof Error ? parseError.message : String(parseError);
        logger?.warn("[Stryker Coverage] Failed to parse coverage line: %s", errorMsg);
      }
    }
    return dataList;
  } catch {
    return [];
  }
}
async function collectCoverage(coverageFile, logger) {
  try {
    const dataList = await readCoverageFileData(coverageFile, logger);
    if (dataList.length === 0) {
      return;
    }
    const mergedData = mergeCoverageData(dataList);
    const perTest = {};
    for (const [testId, mutantIds] of Object.entries(mergedData.perTest)) {
      perTest[testId] = arrayToCoverageData(mutantIds);
    }
    const staticCoverage = arrayToCoverageData(mergedData.static);
    return {
      perTest,
      static: staticCoverage
    };
  } catch {
    return;
  }
}
async function collectLateHits(coverageFile, logger) {
  const dataList = await readCoverageFileData(coverageFile, logger);
  return dataList.flatMap((data) => data.lateHits ?? []);
}
async function cleanupCoverageFile(coverageFile) {
  try {
    await unlink2(coverageFile);
  } catch {}
}
// src/utils/duplicate-suffix.ts
function buildDiscoveryOrderIndex(discoveryOrderedIds) {
  const index = new Map;
  let i = 0;
  for (const id of discoveryOrderedIds) {
    index.set(id, i);
    i++;
  }
  return index;
}
function sortDuplicateGroupByLineThenDiscovery(group, getLine, getInspectorId, discoveryOrderIndex) {
  return group.toSorted((a, b) => {
    const lineA = getLine(a) ?? Infinity;
    const lineB = getLine(b) ?? Infinity;
    if (lineA !== lineB) {
      return lineA - lineB;
    }
    const idA = getInspectorId(a);
    const idB = getInspectorId(b);
    const discA = idA === undefined ? Infinity : discoveryOrderIndex.get(idA) ?? Infinity;
    const discB = idB === undefined ? Infinity : discoveryOrderIndex.get(idB) ?? Infinity;
    return discA - discB;
  });
}

// src/utils/test-name.ts
function normalizeTestFilePath(url, cwd = process.cwd()) {
  if (!url) {
    return;
  }
  const sandboxMatch = /\.stryker-tmp\/sandbox-[^/]+\/(.+)$/.exec(url);
  if (sandboxMatch) {
    return sandboxMatch[1];
  }
  if (url.startsWith(`${cwd}/`)) {
    return url.slice(cwd.length + 1);
  }
  return url;
}
function normalizeTestName(testName) {
  return testName.replaceAll(/\p{Cc}/gu, "_").trim();
}
function buildProjectFileTestName(filePrefix, fullName) {
  return normalizeTestName(`${filePrefix} > ${fullName}`);
}
function buildUniqueTestName(fullName, url) {
  const normalizedPath = normalizeTestFilePath(url);
  if (normalizedPath) {
    return normalizeTestName(`${normalizedPath} > ${fullName}`);
  }
  return normalizeTestName(fullName);
}

// src/coverage/coverage-mapper.ts
function mapCoverageToInspectorIds(rawCoverage, executionOrder, testHierarchy, logger) {
  if (!rawCoverage?.perTest || Object.keys(rawCoverage.perTest).length === 0) {
    return {
      coverage: rawCoverage ?? undefined,
      inspectorIdToProjectFile: new Map,
      counterKeyToTestName: new Map,
      rawKeyCount: 0,
      orphanedKeyCount: 0
    };
  }
  const firstKey = Object.keys(rawCoverage.perTest)[0];
  if (/@@test-\d+$/.test(firstKey)) {
    return mapFilePrefixedCounterKeys(rawCoverage, executionOrder, testHierarchy, logger);
  }
  if (/^test-\d+$/.test(firstKey)) {
    return {
      coverage: mapLegacyCounterKeys(rawCoverage, executionOrder, testHierarchy, logger),
      inspectorIdToProjectFile: new Map,
      counterKeyToTestName: new Map,
      rawKeyCount: Object.keys(rawCoverage.perTest).length,
      orphanedKeyCount: 0
    };
  }
  return {
    coverage: rawCoverage,
    inspectorIdToProjectFile: new Map,
    counterKeyToTestName: new Map,
    rawKeyCount: Object.keys(rawCoverage.perTest).length,
    orphanedKeyCount: 0
  };
}
function buildFilteredPerTest(perTestEntries, staticIds) {
  const newPerTest = {};
  for (const [testId, counts] of perTestEntries) {
    const filteredCounts = {};
    for (const [mutantId, hitCount] of Object.entries(counts)) {
      if (!staticIds.has(mutantId)) {
        filteredCounts[mutantId] = hitCount;
      }
    }
    if (Object.keys(filteredCounts).length > 0) {
      newPerTest[testId] = filteredCounts;
    }
  }
  return newPerTest;
}
function stabilizeCoverage(coverage) {
  const staticIds = new Set(Object.keys(coverage.static));
  return {
    static: coverage.static,
    perTest: buildFilteredPerTest(Object.entries(coverage.perTest), staticIds)
  };
}
function pairKeysWithInspectorIds(globallyOrderedPerTestKeys, executionOrder, testHierarchy, logger) {
  const nonSkipped = executionOrder.filter((id) => {
    const status = testHierarchy.get(id)?.status;
    return status !== "skip" && status !== "todo";
  });
  if (globallyOrderedPerTestKeys.length < nonSkipped.length) {
    logger?.warn("Coverage/execution count mismatch: %s coverage entries vs %s non-skipped executed tests. " + "Performing partial mapping for %s tests.", globallyOrderedPerTestKeys.length, nonSkipped.length, Math.min(globallyOrderedPerTestKeys.length, nonSkipped.length));
  }
  const pairCount = Math.min(globallyOrderedPerTestKeys.length, nonSkipped.length);
  const pairs = [];
  for (let i = 0;i < pairCount; i++) {
    const key = globallyOrderedPerTestKeys[i];
    const sepIdx = key.indexOf("@@");
    const filePrefix = sepIdx === -1 ? key : key.slice(0, sepIdx);
    pairs.push({ filePrefix, inspectorId: nonSkipped[i] });
  }
  return pairs;
}
function resolveCounterKeys(counterIds, fileToInspectorIds, testHierarchy, logger) {
  return counterIds.map((key) => {
    const sepIdx = key.indexOf("@@");
    const filePrefix = key.slice(0, sepIdx);
    const counterStr = key.slice(sepIdx + 2 + "test-".length);
    const n = Number.parseInt(counterStr, 10);
    const fileIds = fileToInspectorIds.get(filePrefix);
    const clampedIdx = fileIds ? Math.min(n - 1, fileIds.length - 1) : undefined;
    const inspectorId = clampedIdx === undefined ? undefined : fileIds?.[clampedIdx];
    const testInfo = inspectorId === undefined ? undefined : testHierarchy.get(inspectorId);
    if (testInfo) {
      const testName = buildProjectFileTestName(filePrefix, testInfo.fullName);
      return { name: testName, testInfo, inspectorId };
    }
    logger?.debug('Coverage key %s: no inspector test found for file "%s" at position %s ' + "(file has %s tests in execution order). Skipping this test in coverage mapping.", key, filePrefix, n, fileToInspectorIds.get(filePrefix)?.length ?? 0);
    return { name: `unknown-${key}`, testInfo: null, inspectorId: undefined };
  });
}
function buildNameInspectorIds(resolved) {
  const nameInspectorIds = new Map;
  for (const { name, inspectorId, testInfo } of resolved) {
    if (!testInfo) {
      continue;
    }
    let ids = nameInspectorIds.get(name);
    if (!ids) {
      ids = new Set;
      nameInspectorIds.set(name, ids);
    }
    ids.add(inspectorId);
  }
  return nameInspectorIds;
}
function buildDuplicateNameIndex(nameInspectorIds, testHierarchy) {
  const discoveryOrderIndex = buildDiscoveryOrderIndex(testHierarchy.keys());
  const indexByKey = new Map;
  for (const [baseName, ids] of nameInspectorIds) {
    if (ids.size <= 1) {
      continue;
    }
    const group = [...ids].filter((id) => id !== undefined);
    const sorted = sortDuplicateGroupByLineThenDiscovery(group, (id) => testHierarchy.get(id)?.line, (id) => id, discoveryOrderIndex);
    for (const [i, id] of sorted.entries()) {
      indexByKey.set(`${id}/${baseName}`, i);
    }
  }
  return indexByKey;
}
function resolveEachTestName(baseName, inspectorId, nameInspectorIds, duplicateNameIndex) {
  const distinctIds = nameInspectorIds.get(baseName);
  if ((distinctIds?.size ?? 1) <= 1) {
    return baseName;
  }
  const key_ = `${inspectorId}/${baseName}`;
  const index = duplicateNameIndex.get(key_) ?? 0;
  return `${baseName} [${index}]`;
}
function buildRemappedPerTest(counterIds, resolved, rawPerTest, testHierarchy) {
  const nameInspectorIds = buildNameInspectorIds(resolved);
  const duplicateNameIndex = buildDuplicateNameIndex(nameInspectorIds, testHierarchy);
  const remappedPerTest = {};
  for (const [i, key] of counterIds.entries()) {
    const { name: baseName, testInfo, inspectorId } = resolved[i];
    if (!testInfo) {
      continue;
    }
    const finalName = resolveEachTestName(baseName, inspectorId, nameInspectorIds, duplicateNameIndex);
    const incoming = rawPerTest[key];
    const existing = remappedPerTest[finalName];
    if (existing) {
      for (const [mutantId, count_] of Object.entries(incoming)) {
        existing[mutantId] = (existing[mutantId] ?? 0) + count_;
      }
    } else {
      remappedPerTest[finalName] = { ...incoming };
    }
  }
  return remappedPerTest;
}
function warnInteriorGapIfPresent(pairs, testHierarchy, logger) {
  const warnedFiles = new Set;
  for (const { filePrefix, inspectorId } of pairs) {
    const testUrl = testHierarchy.get(inspectorId)?.url;
    if (!testUrl) {
      continue;
    }
    const inspectorFile = normalizeTestFilePath(testUrl);
    if (!inspectorFile || testUrl.includes("node_modules")) {
      continue;
    }
    if (filePrefix !== inspectorFile && !warnedFiles.has(filePrefix)) {
      warnedFiles.add(filePrefix);
      logger?.warn('Interior coverage gap detected for "%s": coverage key paired with inspector test from "%s". ' + "Some tests may have been aborted mid-run (e.g. beforeAll failure). Coverage mapping may be inaccurate.", filePrefix, inspectorFile);
    }
  }
}
function reportOrphanedKeys(resolved, counterIds, logger) {
  const orphanedIndexes = [];
  for (const [i, r] of resolved.entries()) {
    if (!r.testInfo) {
      orphanedIndexes.push(i);
    }
  }
  const orphanedKeyCount = orphanedIndexes.length;
  if (orphanedKeyCount > 0) {
    const orphanedFiles = new Set;
    for (const i of orphanedIndexes) {
      const key = counterIds[i];
      const sepIdx = key.indexOf("@@");
      orphanedFiles.add(sepIdx === -1 ? key : key.slice(0, sepIdx));
    }
    logger?.warn("%s of %s coverage key(s) across %s file(s) could not be paired with any inspector test " + "(orphaned — see per-key detail at debug level). This can indicate the Bun inspector " + "stream was truncated mid-run.", orphanedKeyCount, counterIds.length, orphanedFiles.size);
  }
  return orphanedKeyCount;
}
function mapFilePrefixedCounterKeys(rawCoverage, executionOrder, testHierarchy, logger) {
  const globallyOrderedKeys = Object.keys(rawCoverage.perTest);
  const pairs = pairKeysWithInspectorIds(globallyOrderedKeys, executionOrder, testHierarchy, logger);
  const fileToInspectorIds = new Map;
  const inspectorIdToProjectFile = new Map;
  for (const { filePrefix, inspectorId } of pairs) {
    const bucket = fileToInspectorIds.get(filePrefix);
    if (bucket) {
      bucket.push(inspectorId);
    } else {
      fileToInspectorIds.set(filePrefix, [inspectorId]);
    }
    inspectorIdToProjectFile.set(inspectorId, filePrefix);
  }
  if (globallyOrderedKeys.length === pairs.length) {
    warnInteriorGapIfPresent(pairs, testHierarchy, logger);
  }
  const counterIds = globallyOrderedKeys.toSorted((a, b) => {
    const nA = Number.parseInt(a.split("@@test-")[1] ?? "0", 10);
    const nB = Number.parseInt(b.split("@@test-")[1] ?? "0", 10);
    return nA - nB;
  });
  const resolved = resolveCounterKeys(counterIds, fileToInspectorIds, testHierarchy, logger);
  const remappedPerTest = buildRemappedPerTest(counterIds, resolved, rawCoverage.perTest, testHierarchy);
  const counterKeyToTestName = new Map;
  for (const [i, key] of counterIds.entries()) {
    if (resolved[i].testInfo) {
      counterKeyToTestName.set(key, resolved[i].name);
    }
  }
  const orphanedKeyCount = reportOrphanedKeys(resolved, counterIds, logger);
  const coverage = stabilizeCoverage({
    static: rawCoverage.static,
    perTest: remappedPerTest
  });
  return {
    coverage,
    inspectorIdToProjectFile,
    counterKeyToTestName,
    rawKeyCount: counterIds.length,
    orphanedKeyCount
  };
}
function mapLegacyCounterKeys(rawCoverage, executionOrder, testHierarchy, logger) {
  const counterIds = Object.keys(rawCoverage.perTest).toSorted((a, b) => Number.parseInt(a.split("-")[1] ?? "0", 10) - Number.parseInt(b.split("-")[1] ?? "0", 10));
  if (counterIds.length !== executionOrder.length) {
    logger?.warn("Coverage/execution count mismatch: %s coverage entries vs %s executed tests. " + "Performing partial mapping for %s tests.", counterIds.length, executionOrder.length, Math.min(counterIds.length, executionOrder.length));
  }
  const maxIndex = Math.min(counterIds.length, executionOrder.length);
  const testNames = [];
  for (let i = 0;i < maxIndex; i++) {
    const inspectorId = executionOrder[i];
    const testInfo = testHierarchy.get(inspectorId);
    if (testInfo) {
      testNames.push(buildUniqueTestName(testInfo.fullName, testInfo.url));
    } else {
      testNames.push(`unknown-${inspectorId}`);
    }
  }
  const nameCounts = new Map;
  for (const name of testNames) {
    nameCounts.set(name, (nameCounts.get(name) ?? 0) + 1);
  }
  const remappedPerTest = {};
  const nameIndexes = new Map;
  for (let i = 0;i < maxIndex; i++) {
    const counterId = counterIds[i];
    const inspectorId = executionOrder[i];
    const testInfo = testHierarchy.get(inspectorId);
    if (!testInfo) {
      logger?.warn("Missing test info for inspector ID %s (counter ID: %s). Skipping this test in coverage mapping.", inspectorId, counterId);
      continue;
    }
    const baseName = buildUniqueTestName(testInfo.fullName, testInfo.url);
    const count = nameCounts.get(baseName) ?? 1;
    let finalName = baseName;
    if (count > 1) {
      const index = nameIndexes.get(baseName) ?? 0;
      finalName = `${baseName} [${index}]`;
      nameIndexes.set(baseName, index + 1);
    }
    remappedPerTest[finalName] = rawCoverage.perTest[counterId];
  }
  return stabilizeCoverage({
    static: rawCoverage.static,
    perTest: remappedPerTest
  });
}
// node_modules/ws/wrapper.mjs
var import_stream = __toESM(require_stream(), 1);
var import_extension = __toESM(require_extension(), 1);
var import_permessage_deflate = __toESM(require_permessage_deflate(), 1);
var import_receiver = __toESM(require_receiver(), 1);
var import_sender = __toESM(require_sender(), 1);
var import_subprotocol = __toESM(require_subprotocol(), 1);
var import_websocket = __toESM(require_websocket(), 1);
var import_websocket_server = __toESM(require_websocket_server(), 1);
var wrapper_default = import_websocket.default;

// src/inspector/types.ts
function isTestReporterFoundEvent(message) {
  return message.method === "TestReporter.found" && message.params !== undefined;
}
function isTestReporterStartEvent(message) {
  return message.method === "TestReporter.start" && message.params !== undefined;
}
function isTestReporterEndEvent(message) {
  return message.method === "TestReporter.end" && message.params !== undefined;
}

// src/inspector/inspector-client.ts
var REQUEST_STALL_WARN_MS = 2000;

class InspectorTimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = "InspectorTimeoutError";
  }
}

class InspectorConnectionError extends Error {
  constructor(message) {
    super(message);
    this.name = "InspectorConnectionError";
  }
}

class InspectorClient {
  ws = null;
  messageId = 0;
  pendingRequests = new Map;
  testHierarchy = new Map;
  executionOrder = [];
  handlers;
  state;
  isClosing = false;
  WebSocketClass;
  closeExpected = false;
  wsClosed = false;
  _wasClosedUnexpectedly = false;
  closeWaiters = [];
  lastFrameReceivedAt = Date.now();
  foundCount = 0;
  startCount = 0;
  endCount = 0;
  closeCode = undefined;
  closeReason = undefined;
  closeWasClean = undefined;
  msFromLastFrameToClose = undefined;
  constructor(options) {
    this.handlers = options.handlers ?? {};
    this.WebSocketClass = options.WebSocketClass ?? wrapper_default;
    this.state = {
      url: options.url,
      connectionTimeout: options.connectionTimeout ?? 5000,
      requestTimeout: options.requestTimeout ?? 5000
    };
  }
  async connect() {
    if (this.ws) {
      throw new Error("Already connected");
    }
    return new Promise((resolve3, reject) => {
      const timeoutTimer = setTimeout(() => {
        if (this.ws) {
          this.ws.close();
          this.ws = null;
        }
        reject(new InspectorTimeoutError(`Connection timeout after ${this.state.connectionTimeout}ms`));
      }, this.state.connectionTimeout);
      const ws = new this.WebSocketClass(this.state.url);
      this.ws = ws;
      ws.addEventListener("open", () => {
        clearTimeout(timeoutTimer);
        this.lastFrameReceivedAt = Date.now();
        resolve3();
      });
      ws.addEventListener("error", () => {
        clearTimeout(timeoutTimer);
        const error = new InspectorConnectionError("WebSocket connection failed");
        this.handleError(error);
        reject(error);
      });
      ws.addEventListener("close", (event) => {
        this.handleClose(event.code, event.reason, event.wasClean);
      });
      ws.addEventListener("message", (event) => {
        this.handleMessage(event.data);
      });
    });
  }
  async send(method, params, timeoutMs) {
    if (!this.ws || this.ws.readyState !== wrapper_default.OPEN) {
      throw new InspectorConnectionError("WebSocket not connected");
    }
    const id = ++this.messageId;
    const message = { id, method, params };
    return new Promise((resolve3, reject) => {
      const effectiveTimeoutMs = timeoutMs ?? this.state.requestTimeout;
      const stallTimer = this.handlers.onRequestStall ? setTimeout(() => {
        if (this.pendingRequests.has(id)) {
          const msSinceLastFrame = this.getMsSinceLastFrame();
          if (msSinceLastFrame < REQUEST_STALL_WARN_MS) {
            this.handlers.onRequestStall({ method, id, msUnanswered: REQUEST_STALL_WARN_MS, msSinceLastFrame });
          }
        }
      }, REQUEST_STALL_WARN_MS) : undefined;
      const timer = setTimeout(() => {
        this.pendingRequests.delete(id);
        if (stallTimer) {
          clearTimeout(stallTimer);
        }
        reject(new InspectorTimeoutError(`Request timeout after ${effectiveTimeoutMs}ms: ${method}`));
      }, effectiveTimeoutMs);
      this.pendingRequests.set(id, { resolve: resolve3, reject, timer, stallTimer });
      try {
        this.ws.send(JSON.stringify(message));
      } catch (error) {
        this.pendingRequests.delete(id);
        clearTimeout(timer);
        if (stallTimer) {
          clearTimeout(stallTimer);
        }
        reject(error instanceof Error ? error : new Error(String(error)));
      }
    });
  }
  clearPendingTimers(pending) {
    clearTimeout(pending.timer);
    if (pending.stallTimer) {
      clearTimeout(pending.stallTimer);
    }
  }
  async close() {
    if (this.isClosing || !this.ws) {
      return;
    }
    this.isClosing = true;
    const error = new InspectorConnectionError("Connection closed");
    for (const pending of this.pendingRequests.values()) {
      this.clearPendingTimers(pending);
      pending.reject(error);
    }
    this.pendingRequests.clear();
    if (this.ws.readyState === wrapper_default.OPEN || this.ws.readyState === wrapper_default.CONNECTING) {
      this.ws.close();
    }
    this.ws = null;
  }
  expectClose() {
    this.closeExpected = true;
  }
  get wasClosedUnexpectedly() {
    return this._wasClosedUnexpectedly;
  }
  async waitForClose(timeoutMs) {
    if (this.wsClosed || !this.ws) {
      return;
    }
    return new Promise((resolve3) => {
      let settled = false;
      let timer;
      const finish = () => {
        if (settled) {
          return;
        }
        settled = true;
        clearTimeout(timer);
        const idx = this.closeWaiters.indexOf(finish);
        if (idx !== -1) {
          this.closeWaiters.splice(idx, 1);
        }
        resolve3();
      };
      timer = setTimeout(() => {
        finish();
      }, timeoutMs);
      this.closeWaiters.push(finish);
    });
  }
  getTests() {
    return [...this.testHierarchy.values()];
  }
  getExecutionOrder() {
    return [...this.executionOrder];
  }
  getTest(id) {
    return this.testHierarchy.get(id);
  }
  getMsSinceLastFrame() {
    return Date.now() - this.lastFrameReceivedAt;
  }
  getEventCounts() {
    return { found: this.foundCount, start: this.startCount, end: this.endCount };
  }
  getCloseInfo() {
    return {
      code: this.closeCode,
      reason: this.closeReason,
      wasClean: this.closeWasClean,
      msFromLastFrameToClose: this.msFromLastFrameToClose
    };
  }
  getFoundIdCollisionStats() {
    const uniqueFoundIdCount = this.testHierarchy.size;
    return {
      rawFoundCount: this.foundCount,
      uniqueFoundIdCount,
      duplicateFoundIdCount: this.foundCount - uniqueFoundIdCount
    };
  }
  getFoundIdGaps() {
    if (this.testHierarchy.size === 0) {
      return [];
    }
    let min = Infinity;
    let max = -Infinity;
    for (const id of this.testHierarchy.keys()) {
      if (id < min) {
        min = id;
      }
      if (id > max) {
        max = id;
      }
    }
    const gaps = [];
    for (let id = min + 1;id < max; id++) {
      if (!this.testHierarchy.has(id)) {
        gaps.push(id);
      }
    }
    return gaps;
  }
  handleMessage(data) {
    this.lastFrameReceivedAt = Date.now();
    try {
      const message = JSON.parse(data.toString());
      if (message.id !== undefined) {
        const pending = this.pendingRequests.get(message.id);
        if (pending) {
          this.pendingRequests.delete(message.id);
          this.clearPendingTimers(pending);
          if (message.error) {
            pending.reject(new Error(`Inspector error: ${message.error.message}`));
          } else {
            pending.resolve(message.result);
          }
        }
        return;
      }
      if (isTestReporterFoundEvent(message)) {
        this.handleTestFound(message.params);
      } else if (isTestReporterStartEvent(message)) {
        this.handleTestStart(message.params);
      } else if (isTestReporterEndEvent(message)) {
        this.handleTestEnd(message.params);
      }
    } catch (error) {
      this.handleError(error instanceof Error ? error : new Error(String(error)));
    }
  }
  handleTestFound(params) {
    this.foundCount++;
    const { fullName, bunName } = this.buildFullName(params.id, params.name, params.parentId);
    const testInfo = {
      id: params.id,
      name: params.name,
      fullName,
      bunName,
      type: params.type,
      parentId: params.parentId,
      url: params.url,
      line: params.line
    };
    this.testHierarchy.set(params.id, testInfo);
    if (this.handlers.onTestFound) {
      this.handlers.onTestFound(testInfo);
    }
  }
  handleTestStart(params) {
    this.startCount++;
    const testInfo = this.testHierarchy.get(params.id);
    if (!testInfo) {
      this.handleError(new Error(`Test start event for unknown test ID: ${params.id}`));
      return;
    }
    if (testInfo.type === "test") {
      this.executionOrder.push(params.id);
    }
    if (this.handlers.onTestStart) {
      this.handlers.onTestStart(testInfo);
    }
  }
  handleTestEnd(params) {
    this.endCount++;
    const testInfo = this.testHierarchy.get(params.id);
    if (!testInfo) {
      this.handleError(new Error(`Test end event for unknown test ID: ${params.id}`));
      return;
    }
    testInfo.status = params.status;
    testInfo.elapsed = params.elapsed;
    if (params.error) {
      testInfo.error = params.error;
    }
    if (this.handlers.onTestEnd) {
      this.handlers.onTestEnd(testInfo);
    }
  }
  buildFullName(id, name, parentId) {
    if (parentId === undefined) {
      return { fullName: name, bunName: name };
    }
    const parts = [name];
    const visited = new Set([id]);
    let currentId = parentId;
    while (currentId !== undefined) {
      if (visited.has(currentId)) {
        this.handleError(new Error(`Circular reference detected in test hierarchy: ${[...visited].join(" -> ")} -> ${currentId}`));
        break;
      }
      visited.add(currentId);
      const parent = this.testHierarchy.get(currentId);
      if (!parent) {
        break;
      }
      parts.unshift(parent.name);
      currentId = parent.parentId;
    }
    return { fullName: parts.join(" > "), bunName: parts.join(" ") };
  }
  handleClose(code, reason, wasClean) {
    this.wsClosed = true;
    this.closeCode = code;
    this.closeReason = reason;
    this.closeWasClean = wasClean;
    this.msFromLastFrameToClose = Date.now() - this.lastFrameReceivedAt;
    const waiters = this.closeWaiters;
    this.closeWaiters = [];
    for (const finish of waiters) {
      finish();
    }
    if (this.isClosing || this.closeExpected) {
      return;
    }
    this._wasClosedUnexpectedly = true;
    if (this.handlers.onUnexpectedClose) {
      this.handlers.onUnexpectedClose({
        wsClosed: this.wsClosed,
        closeExpected: this.closeExpected,
        isClosing: this.isClosing,
        closeCode: this.closeCode,
        closeReason: this.closeReason,
        closeWasClean: this.closeWasClean,
        msFromLastFrameToClose: this.msFromLastFrameToClose
      });
    }
    const error = new InspectorConnectionError("Connection closed unexpectedly");
    for (const pending of this.pendingRequests.values()) {
      this.clearPendingTimers(pending);
      pending.reject(error);
    }
    this.pendingRequests.clear();
    this.ws = null;
  }
  handleError(error) {
    if (this.handlers.onError) {
      this.handlers.onError(error);
    }
  }
}
// src/parsers/console-parser.ts
var fileHeaderRe = new RegExp(String.raw`^(?:::group::)?([^:]+\.${TEST_FILE_EXT_PATTERN}):$`);
var workflowCommandRe = /^::(?:group|endgroup|error|warning|notice|debug|add-mask|add-matcher|remove-matcher)(?:::|\s|$)/;
function parseFilePath(line) {
  const fileMatch = fileHeaderRe.exec(line);
  return fileMatch ? fileMatch[1] : null;
}
function isWorkflowCommandLine(line) {
  return workflowCommandRe.test(line);
}
function buildTestName(testName, currentFile) {
  return currentFile ? `${currentFile} > ${testName}` : testName;
}
function parseTestLine(line, currentFile) {
  const passMatch = /^✓ +(\S.*?) \[([0-9.]+)ms\]$/.exec(line);
  if (passMatch) {
    return {
      test: {
        name: buildTestName(passMatch[1].trim(), currentFile),
        file: currentFile,
        status: "passed",
        duration: Number.parseFloat(passMatch[2])
      }
    };
  }
  const failMatch = /^✗ +(\S.*?)(?: \[([0-9.]+)ms\])?$/.exec(line);
  if (failMatch) {
    return {
      test: {
        name: buildTestName(failMatch[1].trim(), currentFile),
        file: currentFile,
        status: "failed",
        duration: failMatch[2] ? Number.parseFloat(failMatch[2]) : undefined
      },
      startedCollectingError: true
    };
  }
  const bailFailMatch = /^\(fail\) +(\S.*?)(?: \[([0-9.]+)ms\])?$/.exec(line);
  if (bailFailMatch) {
    return {
      test: {
        name: buildTestName(bailFailMatch[1].trim(), currentFile),
        file: currentFile,
        status: "failed",
        duration: bailFailMatch[2] ? Number.parseFloat(bailFailMatch[2]) : undefined
      },
      startedCollectingError: true
    };
  }
  const skipMatch = /^⏭ +(\S.*)$/.exec(line);
  if (skipMatch) {
    return {
      test: {
        name: buildTestName(skipMatch[1].trim(), currentFile),
        file: currentFile,
        status: "skipped"
      }
    };
  }
  return {};
}
function finalizeErrorMessage(currentTest, errorLines) {
  if (currentTest && errorLines.length > 0) {
    currentTest.failureMessage = errorLines.join(`
`).trim();
  }
}
function shouldCollectErrorLine(line) {
  if (!line.trim()) {
    return false;
  }
  return !/^\s*\d+\s+(?:pass|fail|skip)/.test(line);
}
function updateCounters(test, counters, parseResult) {
  if (test.status === "passed") {
    counters.passed++;
    return false;
  } else if (test.status === "failed") {
    counters.failed++;
    return parseResult.startedCollectingError ?? false;
  } else {
    counters.skipped++;
    return false;
  }
}
function parseSummaryLines(output) {
  const counts = { passed: 0, failed: 0, skipped: 0 };
  const passSummary = /\s(\d+)\s+pass\b/.exec(output);
  const failSummary = /\s(\d+)\s+fail\b/.exec(output);
  const skipSummary = /\s(\d+)\s+skip\b/.exec(output);
  const bailSummary = /Bailed out after (\d+) failures?/.exec(output);
  if (passSummary) {
    counts.passed = Number.parseInt(passSummary[1], 10);
  }
  if (failSummary) {
    counts.failed = Number.parseInt(failSummary[1], 10);
  }
  if (skipSummary) {
    counts.skipped = Number.parseInt(skipSummary[1], 10);
  }
  if (bailSummary) {
    counts.failed = Math.max(counts.failed, Number.parseInt(bailSummary[1], 10));
  }
  const genuinePassed = counts.passed;
  const genuineFailed = counts.failed;
  const ranTestsSummary = /Ran\s+(\d+)\s+tests?/.exec(output);
  if (ranTestsSummary) {
    const totalFromRan = Number.parseInt(ranTestsSummary[1], 10);
    const totalParsed = counts.passed + counts.failed + counts.skipped;
    if (totalParsed !== totalFromRan && counts.passed === 0 && counts.failed === 0) {
      counts.passed = totalFromRan;
    }
  }
  return { ...counts, genuinePassed, genuineFailed };
}
function parseBunTestOutput(stdout, stderr) {
  const tests = [];
  const counters = { passed: 0, failed: 0, skipped: 0 };
  const output = `${stdout}
${stderr}`;
  const lines = output.split(`
`);
  let currentTest = null;
  let collectingError = false;
  let errorLines = [];
  let currentFile;
  for (const line of lines) {
    const filePath = parseFilePath(line);
    if (filePath) {
      currentFile = filePath;
      continue;
    }
    if (isWorkflowCommandLine(line)) {
      continue;
    }
    const parseResult = parseTestLine(line, currentFile);
    if (parseResult.test) {
      if (currentTest && collectingError) {
        finalizeErrorMessage(currentTest, errorLines);
        errorLines = [];
      }
      currentTest = parseResult.test;
      tests.push(currentTest);
      collectingError = updateCounters(currentTest, counters, parseResult);
      continue;
    }
    if (collectingError && currentTest && shouldCollectErrorLine(line)) {
      errorLines.push(line);
    }
  }
  finalizeErrorMessage(currentTest, errorLines);
  const summaryCounts = parseSummaryLines(output);
  counters.passed = Math.max(counters.passed, summaryCounts.passed);
  counters.failed = Math.max(counters.failed, summaryCounts.failed);
  counters.skipped = Math.max(counters.skipped, summaryCounts.skipped);
  return {
    tests,
    totalTests: counters.passed + counters.failed + counters.skipped,
    passed: counters.passed,
    failed: counters.failed,
    skipped: counters.skipped,
    summaryPassed: summaryCounts.genuinePassed,
    summaryFailed: summaryCounts.genuineFailed,
    summarySkipped: summaryCounts.skipped
  };
}

// src/process-runner.ts
import { spawn as spawn2 } from "node:child_process";

// src/utils/process-group.ts
function killProcessGroup(pid, signal) {
  try {
    process.kill(-pid, signal);
    return true;
  } catch {
    return false;
  }
}

// src/utils/process-rss.ts
import { spawn } from "node:child_process";
import { readFile as readFile3 } from "node:fs/promises";
async function getProcessRssBytes(pid) {
  return process.platform === "linux" ? getLinuxRss(pid) : getPsRss(pid);
}
function parseVmRss(statusContent) {
  const match = /^VmRSS:\s+(\d+)\s+kB$/m.exec(statusContent);
  return match ? Number(match[1]) * 1024 : null;
}
async function getLinuxRss(pid) {
  try {
    const status = await readFile3(`/proc/${pid}/status`, "utf8");
    return parseVmRss(status);
  } catch {
    return null;
  }
}
function parsePsRssOutput(output) {
  const trimmed = output.trim();
  if (trimmed === "") {
    return null;
  }
  const kb = Number(trimmed);
  return Number.isFinite(kb) ? kb * 1024 : null;
}
async function getPsRss(pid) {
  return new Promise((resolve3) => {
    let child;
    try {
      child = spawn("ps", ["-o", "rss=", "-p", String(pid)], { stdio: ["ignore", "pipe", "ignore"] });
    } catch {
      resolve3(null);
      return;
    }
    let output = "";
    child.stdout.on("data", (data) => {
      output += data.toString();
    });
    child.on("close", (code) => {
      resolve3(code === 0 ? parsePsRssOutput(output) : null);
    });
    child.on("error", () => {
      resolve3(null);
    });
  });
}

// src/process-runner.ts
var KILL_GRACE_PERIOD_MS = 500;
var SPAWN_DEPTH_ENV = "__STRYKER_BUN_RUNNER_DEPTH__";
var DEFAULT_MAX_SPAWN_DEPTH = 1;
function stripAnsi(text) {
  return text.replaceAll(/\u001B\[[0-9;?]*[\u0020-\u002F]*[\u0040-\u007E]|\u001B\][^\u0007\u001B]*(?:\u0007|\u001B\\)/g, "");
}
function readSpawnDepth(raw) {
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 0;
}
function stripBailArgs(bunArgs) {
  const sanitized = [];
  for (let i = 0;i < bunArgs.length; i++) {
    const arg = bunArgs[i];
    if (arg === "--bail" || arg.startsWith("--bail=")) {
      if (arg === "--bail" && /^\d+$/.test(bunArgs[i + 1])) {
        i += 1;
      }
      continue;
    }
    sanitized.push(arg);
  }
  return sanitized;
}
var liveChildren = new Set;
function killAllLiveChildren() {
  for (const child of liveChildren) {
    killProcessTree(child, "SIGKILL");
  }
  liveChildren.clear();
}
var CLEANUP_SIGNALS = ["SIGINT", "SIGTERM", "SIGHUP"];
var onCleanupSignal = (signal) => {
  killAllLiveChildren();
  removeSignalCleanup();
  process.kill(process.pid, signal);
};
function ensureSignalCleanup() {
  if (process.listeners(CLEANUP_SIGNALS[0]).includes(onCleanupSignal)) {
    return false;
  }
  for (const s of CLEANUP_SIGNALS) {
    process.on(s, onCleanupSignal);
  }
  return true;
}
function removeSignalCleanup() {
  for (const s of CLEANUP_SIGNALS) {
    process.off(s, onCleanupSignal);
  }
}
function killProcessTree(childProcess, signal) {
  const pid = childProcess.pid;
  if (pid === undefined || !killProcessGroup(pid, signal)) {
    childProcess.kill(signal);
  }
}
function killWithEscalation(childProcess, isClosed, gracePeriodMs) {
  killProcessTree(childProcess, "SIGTERM");
  setTimeout(() => {
    if (!isClosed()) {
      killProcessTree(childProcess, "SIGKILL");
    }
  }, gracePeriodMs);
}
async function runBunTests(options) {
  const spawnDepth = readSpawnDepth(process.env[SPAWN_DEPTH_ENV]);
  const maxSpawnDepth = options.maxSpawnDepth ?? DEFAULT_MAX_SPAWN_DEPTH;
  if (spawnDepth >= maxSpawnDepth) {
    return {
      stdout: "",
      stderr: `stryker-bun-runner: refusing to spawn \`bun test\` at nesting depth ${spawnDepth} (maxSpawnDepth=${maxSpawnDepth}). A test run spawned by this runner tried to spawn another one; this is almost always runaway recursion. See the bun.maxSpawnDepth option.`,
      exitCode: 1,
      timedOut: false,
      memoryLimitExceeded: false
    };
  }
  return spawnBunTests(options, spawnDepth);
}
async function spawnBunTests(options, spawnDepth) {
  const args = ["test"];
  if (options.inspectWaitPort) {
    args.push(`--inspect=127.0.0.1:${options.inspectWaitPort}`);
  }
  if (options.bunfigPath) {
    args.push(`--config=${options.bunfigPath}`);
  }
  if (options.preloadScript) {
    args.push("--preload", options.preloadScript);
  }
  if (options.testNamePattern) {
    args.push("--test-name-pattern", options.testNamePattern);
  }
  if (options.bail) {
    args.push("--bail");
  }
  if (options.sequentialMode) {
    args.push("--concurrency=1");
  }
  if (options.smol) {
    args.push("--smol");
  }
  if (options.bunArgs && options.bunArgs.length > 0) {
    args.push(...stripBailArgs(options.bunArgs));
  }
  if (options.testFiles && options.testFiles.length > 0) {
    args.push(...options.testFiles);
  }
  const env = {
    ...process.env,
    ...options.env
  };
  if (options.activeMutant) {
    env.__STRYKER_ACTIVE_MUTANT__ = options.activeMutant;
  }
  if (options.coverageFile) {
    env.__STRYKER_COVERAGE_FILE__ = options.coverageFile;
  }
  if (options.syncPort) {
    env.__STRYKER_SYNC_PORT__ = String(options.syncPort);
  }
  env[SPAWN_DEPTH_ENV] = String(spawnDepth + 1);
  return new Promise((resolve3) => {
    const stdoutChunks = [];
    const stderrChunks = [];
    let timedOut = false;
    let processKilled = false;
    let memoryLimitExceeded = false;
    let hasClosed = false;
    let rssIntervalHandle;
    if (options.signal?.aborted) {
      resolve3({ stdout: "", stderr: "", exitCode: null, timedOut: true, memoryLimitExceeded: false });
      return;
    }
    const spawnOpts = {
      env,
      stdio: ["ignore", "pipe", "pipe"],
      cwd: process.cwd(),
      detached: true
    };
    const childProcess = spawn2(options.bunPath, args, spawnOpts);
    liveChildren.add(childProcess);
    ensureSignalCleanup();
    const timeoutHandle = setTimeout(() => {
      timedOut = true;
      processKilled = true;
      killWithEscalation(childProcess, () => hasClosed, KILL_GRACE_PERIOD_MS);
    }, options.timeout);
    if (options.signal) {
      const onAbort = () => {
        clearTimeout(timeoutHandle);
        processKilled = true;
        timedOut = true;
        killWithEscalation(childProcess, () => hasClosed, KILL_GRACE_PERIOD_MS);
      };
      options.signal.addEventListener("abort", onAbort, { once: true });
    }
    if (options.maxChildRss !== undefined) {
      const rssLimit = options.maxChildRss;
      const checkMemoryCeiling = async () => {
        if (hasClosed || memoryLimitExceeded) {
          return;
        }
        const pid = childProcess.pid;
        if (pid === undefined) {
          return;
        }
        const rssBytes = await getProcessRssBytes(pid);
        if (rssBytes === null || hasClosed) {
          return;
        }
        if (rssBytes > rssLimit) {
          memoryLimitExceeded = true;
          timedOut = true;
          processKilled = true;
          if (rssIntervalHandle) {
            clearInterval(rssIntervalHandle);
          }
          options.onMemoryLimitExceeded?.(rssBytes);
          killWithEscalation(childProcess, () => hasClosed, KILL_GRACE_PERIOD_MS);
        }
      };
      rssIntervalHandle = setInterval(() => {
        checkMemoryCeiling();
      }, options.rssCheckIntervalMs ?? 1000);
      rssIntervalHandle.unref();
    }
    if (childProcess.stdout) {
      childProcess.stdout.on("data", (data) => {
        stdoutChunks.push(data);
      });
    }
    let inspectorUrlExtracted = false;
    if (childProcess.stderr) {
      childProcess.stderr.on("data", (data) => {
        stderrChunks.push(data);
        if (options.inspectWaitPort && !inspectorUrlExtracted && options.onInspectorReady) {
          const text = Buffer.concat(stderrChunks).toString();
          const match = /Listening:[\t\v\f\r \u00A0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\n\s*(ws:\/\/\S+)/.exec(stripAnsi(text));
          if (match) {
            inspectorUrlExtracted = true;
            options.onInspectorReady(match[1]);
          }
        }
      });
    }
    childProcess.on("close", (code) => {
      hasClosed = true;
      liveChildren.delete(childProcess);
      clearTimeout(timeoutHandle);
      if (rssIntervalHandle) {
        clearInterval(rssIntervalHandle);
      }
      resolve3({
        stdout: Buffer.concat(stdoutChunks).toString(),
        stderr: Buffer.concat(stderrChunks).toString(),
        exitCode: processKilled ? null : code,
        timedOut,
        memoryLimitExceeded
      });
    });
    childProcess.on("error", (error) => {
      hasClosed = true;
      liveChildren.delete(childProcess);
      clearTimeout(timeoutHandle);
      if (rssIntervalHandle) {
        clearInterval(rssIntervalHandle);
      }
      const stderrOutput = Buffer.concat(stderrChunks).toString();
      resolve3({
        stdout: Buffer.concat(stdoutChunks).toString(),
        stderr: `${stderrOutput}
Process error: ${error.message}`,
        exitCode: null,
        timedOut,
        memoryLimitExceeded
      });
    });
  });
}

// src/utils/port.ts
import { createServer } from "node:net";
async function getAvailablePort() {
  return new Promise((resolve3, reject) => {
    const server = createServer();
    server.on("error", (err) => {
      reject(new Error(`Failed to get available port: ${err.message}`));
    });
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close();
        reject(new Error("Failed to get port: server address is invalid"));
        return;
      }
      const port = address.port;
      server.close((err) => {
        if (err) {
          reject(new Error(`Failed to close server: ${err.message}`));
          return;
        }
        resolve3(port);
      });
    });
  });
}
// src/utils/sync-server.ts
import { createServer as createServer2 } from "node:http";
function rawDataToString(data) {
  if (Array.isArray(data)) {
    return Buffer.concat(data).toString("utf8");
  }
  return Buffer.isBuffer(data) ? data.toString("utf8") : Buffer.from(data).toString("utf8");
}

class SyncServer {
  httpServer = null;
  wss = null;
  clients = new Set;
  readyLatched = false;
  port;
  createHttpServer;
  WebSocketServerClass;
  webSocketOpenState;
  drainHandler = null;
  drainInFlight = null;
  constructor(options) {
    this.port = options.port;
    this.createHttpServer = options.createHttpServer ?? createServer2;
    this.WebSocketServerClass = options.WebSocketServerClass ?? import_websocket_server.default;
    this.webSocketOpenState = options.webSocketOpenState ?? import_websocket.default.OPEN;
  }
  async start() {
    return new Promise((resolve3, reject) => {
      try {
        this.httpServer = this.createHttpServer((req, res) => {
          if (req.url === "/sync") {
            res.writeHead(400);
            res.end("WebSocket upgrade failed");
          } else {
            res.writeHead(404);
            res.end("Not found");
          }
        });
        this.wss = new this.WebSocketServerClass({
          server: this.httpServer,
          path: "/sync"
        });
        this.wss.on("connection", (ws) => {
          this.clients.add(ws);
          if (this.readyLatched && ws.readyState === this.webSocketOpenState) {
            try {
              ws.send("ready");
            } catch {}
          }
          ws.on("close", () => {
            this.clients.delete(ws);
          });
          ws.on("message", (data) => {
            if (rawDataToString(data) === "drain-request") {
              this.handleDrainRequest(ws);
            }
          });
        });
        this.httpServer.on("error", reject);
        this.httpServer.listen(this.port, () => {
          resolve3();
        });
      } catch (error) {
        reject(error instanceof Error ? error : new Error(String(error)));
      }
    });
  }
  signalReady() {
    this.readyLatched = true;
    for (const client of this.clients) {
      try {
        if (client.readyState === this.webSocketOpenState) {
          client.send("ready");
        }
      } catch {}
    }
  }
  setDrainHandler(handler) {
    this.drainHandler = handler;
  }
  handleDrainRequest(ws) {
    if (!this.drainHandler) {
      return;
    }
    this.drainInFlight ??= this.drainHandler();
    const inFlight = this.drainInFlight;
    (async () => {
      try {
        await inFlight;
      } catch {
        return;
      }
      try {
        if (ws.readyState === this.webSocketOpenState) {
          ws.send("drained");
        }
      } catch {}
    })();
  }
  async close() {
    this.readyLatched = false;
    this.drainHandler = null;
    this.drainInFlight = null;
    for (const client of this.clients) {
      try {
        client.close();
      } catch {}
    }
    this.clients.clear();
    if (this.wss) {
      await new Promise((resolve3) => {
        this.wss.close(() => resolve3());
      });
      this.wss = null;
    }
    if (this.httpServer) {
      await new Promise((resolve3) => {
        this.httpServer.close(() => {
          resolve3();
        });
      });
      this.httpServer = null;
    }
  }
  get clientCount() {
    return this.clients.size;
  }
}
// src/utils/bunfig-sanitizer.ts
import { readFile as readFile4, unlink as unlink3, writeFile as writeFile2, mkdir as mkdir2 } from "node:fs/promises";
import path2 from "node:path";

// node_modules/smol-toml/dist/date.js
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var DATE_TIME_RE = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i;

class TomlDate extends Date {
  #hasDate = false;
  #hasTime = false;
  #offset = null;
  constructor(date) {
    let hasDate = true;
    let hasTime = true;
    let offset = "Z";
    if (typeof date === "string") {
      let match = date.match(DATE_TIME_RE);
      if (match) {
        if (!match[1]) {
          hasDate = false;
          date = `0000-01-01T${date}`;
        }
        hasTime = !!match[2];
        hasTime && date[10] === " " && (date = date.replace(" ", "T"));
        if (match[2] && +match[2] > 23) {
          date = "";
        } else {
          offset = match[3] || null;
          date = date.toUpperCase();
          if (!offset && hasTime)
            date += "Z";
        }
      } else {
        date = "";
      }
    }
    super(date);
    if (!isNaN(this.getTime())) {
      this.#hasDate = hasDate;
      this.#hasTime = hasTime;
      this.#offset = offset;
    }
  }
  isDateTime() {
    return this.#hasDate && this.#hasTime;
  }
  isLocal() {
    return !this.#hasDate || !this.#hasTime || !this.#offset;
  }
  isDate() {
    return this.#hasDate && !this.#hasTime;
  }
  isTime() {
    return this.#hasTime && !this.#hasDate;
  }
  isValid() {
    return this.#hasDate || this.#hasTime;
  }
  toISOString() {
    let iso = super.toISOString();
    if (this.isDate())
      return iso.slice(0, 10);
    if (this.isTime())
      return iso.slice(11, 23);
    if (this.#offset === null)
      return iso.slice(0, -1);
    if (this.#offset === "Z")
      return iso;
    let offset = +this.#offset.slice(1, 3) * 60 + +this.#offset.slice(4, 6);
    offset = this.#offset[0] === "-" ? offset : -offset;
    let offsetDate = new Date(this.getTime() - offset * 60000);
    return offsetDate.toISOString().slice(0, -1) + this.#offset;
  }
  static wrapAsOffsetDateTime(jsDate, offset = "Z") {
    let date = new TomlDate(jsDate);
    date.#offset = offset;
    return date;
  }
  static wrapAsLocalDateTime(jsDate) {
    let date = new TomlDate(jsDate);
    date.#offset = null;
    return date;
  }
  static wrapAsLocalDate(jsDate) {
    let date = new TomlDate(jsDate);
    date.#hasTime = false;
    date.#offset = null;
    return date;
  }
  static wrapAsLocalTime(jsDate) {
    let date = new TomlDate(jsDate);
    date.#hasDate = false;
    date.#offset = null;
    return date;
  }
}

// node_modules/smol-toml/dist/error.js
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
function getLineColFromPtr(string, ptr) {
  let lines = string.slice(0, ptr).split(/\r\n|\n|\r/g);
  return [lines.length, lines.pop().length + 1];
}
function makeCodeBlock(string, line, column) {
  let lines = string.split(/\r\n|\n|\r/g);
  let codeblock = "";
  let numberLen = (Math.log10(line + 1) | 0) + 1;
  for (let i = line - 1;i <= line + 1; i++) {
    let l = lines[i - 1];
    if (!l)
      continue;
    codeblock += i.toString().padEnd(numberLen, " ");
    codeblock += ":  ";
    codeblock += l;
    codeblock += `
`;
    if (i === line) {
      codeblock += " ".repeat(numberLen + column + 2);
      codeblock += `^
`;
    }
  }
  return codeblock;
}

class TomlError extends Error {
  line;
  column;
  codeblock;
  constructor(message, options) {
    const [line, column] = getLineColFromPtr(options.toml, options.ptr);
    const codeblock = makeCodeBlock(options.toml, line, column);
    super(`Invalid TOML document: ${message}

${codeblock}`, options);
    this.line = line;
    this.column = column;
    this.codeblock = codeblock;
  }
}

// node_modules/smol-toml/dist/primitive.js
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var INT_REGEX = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/;
var FLOAT_REGEX = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/;
var LEADING_ZERO = /^[+-]?0[0-9_]/;
function parseString(str, ptr) {
  let c = str[ptr++];
  let first = c;
  let isLiteral = c === "'";
  let isMultiline = c === str[ptr] && c === str[ptr + 1];
  if (isMultiline) {
    if (str[ptr += 2] === `
`)
      ptr++;
    else if (str[ptr] === "\r" && str[ptr + 1] === `
`)
      ptr += 2;
  }
  let parsed = "";
  let sliceStart = ptr;
  let state = 0;
  for (let i = ptr;i < str.length; i++) {
    c = str[i];
    if (isMultiline && (c === `
` || c === "\r" && str[i + 1] === `
`)) {
      state = state && 3;
    } else if (c < " " && c !== "\t" || c === "") {
      throw new TomlError("control characters are not allowed in strings", {
        toml: str,
        ptr: i
      });
    } else if ((!state || state === 3) && c === first && (!isMultiline || str[i + 1] === first && str[i + 2] === first)) {
      if (isMultiline) {
        if (str[i + 3] === first)
          i++;
        if (str[i + 3] === first)
          i++;
      }
      return [
        state ? parsed : parsed + str.slice(sliceStart, i),
        i + (isMultiline ? 3 : 1)
      ];
    } else if (!state) {
      if (!isLiteral && c === "\\") {
        parsed += str.slice(sliceStart, sliceStart = i);
        state = 1;
      }
    } else if (state === 1) {
      if (c === "x" || c === "u" || c === "U") {
        let value = 0;
        let len = c === "x" ? 2 : c === "u" ? 4 : 8;
        for (let j = 0;j < len; j++, i++) {
          let hex = str.charCodeAt(i + 1);
          let digit = hex >= 48 && hex <= 57 ? hex - 48 : hex >= 65 && hex <= 70 ? hex - 65 + 10 : hex >= 97 && hex <= 102 ? hex - 97 + 10 : -1;
          if (digit < 0)
            throw new TomlError("invalid non-hex character in unicode escape", { toml: str, ptr: i + 1 });
          value = value << 4 | digit;
        }
        if (value < 0 || value > 1114111 || value >= 55296 && value <= 57343) {
          throw new TomlError("invalid unicode escape", { toml: str, ptr: i });
        }
        parsed += String.fromCodePoint(value);
        sliceStart = i + 1;
        state = 0;
      } else if (c === " " || c === "\t") {
        state = 2;
      } else {
        if (c === "b")
          parsed += "\b";
        else if (c === "t")
          parsed += "\t";
        else if (c === "n")
          parsed += `
`;
        else if (c === "f")
          parsed += "\f";
        else if (c === "r")
          parsed += "\r";
        else if (c === "e")
          parsed += "\x1B";
        else if (c === '"')
          parsed += '"';
        else if (c === "\\")
          parsed += "\\";
        else
          throw new TomlError("unrecognized escape sequence", { toml: str, ptr: i });
        sliceStart = i + 1;
        state = 0;
      }
    } else if (c !== " " && c !== "\t") {
      if (state === 2) {
        throw new TomlError("invalid escape: only line-ending whitespace may be escaped", {
          toml: str,
          ptr: sliceStart
        });
      }
      state = !isLiteral && c === "\\" ? 1 : 0;
      sliceStart = i;
    }
  }
  throw new TomlError("unfinished string", { toml: str, ptr });
}
function parseValue(value, toml, ptr, integersAsBigInt) {
  if (value === "true")
    return true;
  if (value === "false")
    return false;
  if (value === "-inf")
    return -Infinity;
  if (value === "inf" || value === "+inf")
    return Infinity;
  if (value === "nan" || value === "+nan" || value === "-nan")
    return NaN;
  if (value === "-0")
    return integersAsBigInt ? 0n : 0;
  let isInt = INT_REGEX.test(value);
  if (isInt || FLOAT_REGEX.test(value)) {
    if (LEADING_ZERO.test(value)) {
      throw new TomlError("leading zeroes are not allowed", {
        toml,
        ptr
      });
    }
    value = value.replace(/_/g, "");
    let numeric = +value;
    if (isNaN(numeric)) {
      throw new TomlError("invalid number", {
        toml,
        ptr
      });
    }
    if (isInt) {
      if ((isInt = !Number.isSafeInteger(numeric)) && !integersAsBigInt) {
        throw new TomlError("integer value cannot be represented losslessly", {
          toml,
          ptr
        });
      }
      if (isInt || integersAsBigInt === true)
        numeric = BigInt(value);
    }
    return numeric;
  }
  const date = new TomlDate(value);
  if (!date.isValid()) {
    throw new TomlError("invalid value", {
      toml,
      ptr
    });
  }
  return date;
}

// node_modules/smol-toml/dist/util.js
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
function indexOfNewline(str, start = 0, end = str.length) {
  let idx = str.indexOf(`
`, start);
  if (str[idx - 1] === "\r")
    idx--;
  return idx <= end ? idx : -1;
}
function skipComment(str, ptr) {
  for (let i = ptr;i < str.length; i++) {
    let c = str[i];
    if (c === `
`)
      return i;
    if (c === "\r" && str[i + 1] === `
`)
      return i + 1;
    if (c < " " && c !== "\t" || c === "") {
      throw new TomlError("control characters are not allowed in comments", {
        toml: str,
        ptr
      });
    }
  }
  return str.length;
}
function skipVoid(str, ptr, banNewLines, banComments) {
  let c;
  while (true) {
    while ((c = str[ptr]) === " " || c === "\t" || !banNewLines && (c === `
` || c === "\r" && str[ptr + 1] === `
`))
      ptr++;
    if (banComments || c !== "#")
      break;
    ptr = skipComment(str, ptr);
  }
  return ptr;
}
function skipUntil(str, ptr, sep2, end, banNewLines = false) {
  if (!end) {
    ptr = indexOfNewline(str, ptr);
    return ptr < 0 ? str.length : ptr;
  }
  for (let i = ptr;i < str.length; i++) {
    let c = str[i];
    if (c === "#") {
      i = indexOfNewline(str, i);
    } else if (c === sep2) {
      return i + 1;
    } else if (c === end || banNewLines && (c === `
` || c === "\r" && str[i + 1] === `
`)) {
      return i;
    }
  }
  throw new TomlError("cannot find end of structure", {
    toml: str,
    ptr
  });
}

// node_modules/smol-toml/dist/extract.js
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
function sliceAndTrimEndOf(str, startPtr, endPtr) {
  let value = str.slice(startPtr, endPtr);
  let commentIdx = value.indexOf("#");
  if (commentIdx > -1) {
    skipComment(str, commentIdx);
    value = value.slice(0, commentIdx);
  }
  return [value.trimEnd(), commentIdx];
}
function extractValue(str, ptr, end, depth, integersAsBigInt) {
  if (depth === 0) {
    throw new TomlError("document contains excessively nested structures. aborting.", {
      toml: str,
      ptr
    });
  }
  let c = str[ptr];
  if (c === "[" || c === "{") {
    let [value, endPtr2] = c === "[" ? parseArray(str, ptr, depth, integersAsBigInt) : parseInlineTable(str, ptr, depth, integersAsBigInt);
    if (end) {
      endPtr2 = skipVoid(str, endPtr2);
      if (str[endPtr2] === ",")
        endPtr2++;
      else if (str[endPtr2] !== end) {
        throw new TomlError("expected comma or end of structure", {
          toml: str,
          ptr: endPtr2
        });
      }
    }
    return [value, endPtr2];
  }
  if (c === '"' || c === "'") {
    let [parsed, endPtr2] = parseString(str, ptr);
    if (end) {
      endPtr2 = skipVoid(str, endPtr2);
      if (str[endPtr2] && str[endPtr2] !== "," && str[endPtr2] !== end && str[endPtr2] !== `
` && str[endPtr2] !== "\r") {
        throw new TomlError("unexpected character encountered", {
          toml: str,
          ptr: endPtr2
        });
      }
      if (str[endPtr2] === ",")
        endPtr2++;
    }
    return [parsed, endPtr2];
  }
  let endPtr = skipUntil(str, ptr, ",", end);
  let slice = sliceAndTrimEndOf(str, ptr, endPtr - (str[endPtr - 1] === "," ? 1 : 0));
  if (!slice[0]) {
    throw new TomlError("incomplete key-value declaration: no value specified", {
      toml: str,
      ptr
    });
  }
  if (end && slice[1] > -1) {
    endPtr = skipVoid(str, ptr + slice[1]);
    if (str[endPtr] === ",")
      endPtr++;
  }
  return [
    parseValue(slice[0], str, ptr, integersAsBigInt),
    endPtr
  ];
}

// node_modules/smol-toml/dist/struct.js
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var KEY_PART_RE = /^[a-zA-Z0-9-_]+[ \t]*$/;
function parseKey(str, ptr, end = "=") {
  let dot = ptr - 1;
  let parsed = [];
  let endPtr = str.indexOf(end, ptr);
  if (endPtr < 0) {
    throw new TomlError("incomplete key-value: cannot find end of key", {
      toml: str,
      ptr
    });
  }
  do {
    let c = str[ptr = ++dot];
    if (c !== " " && c !== "\t") {
      if (c === '"' || c === "'") {
        if (c === str[ptr + 1] && c === str[ptr + 2]) {
          throw new TomlError("multiline strings are not allowed in keys", {
            toml: str,
            ptr
          });
        }
        let [part, eos] = parseString(str, ptr);
        dot = str.indexOf(".", eos);
        let strEnd = str.slice(eos, dot < 0 || dot > endPtr ? endPtr : dot);
        let newLine = indexOfNewline(strEnd);
        if (newLine > -1) {
          throw new TomlError("newlines are not allowed in keys", {
            toml: str,
            ptr: ptr + dot + newLine
          });
        }
        if (strEnd.trimStart()) {
          throw new TomlError("found extra tokens after the string part", {
            toml: str,
            ptr: eos
          });
        }
        if (endPtr < eos) {
          endPtr = str.indexOf(end, eos);
          if (endPtr < 0) {
            throw new TomlError("incomplete key-value: cannot find end of key", {
              toml: str,
              ptr
            });
          }
        }
        parsed.push(part);
      } else {
        dot = str.indexOf(".", ptr);
        let part = str.slice(ptr, dot < 0 || dot > endPtr ? endPtr : dot);
        if (!KEY_PART_RE.test(part)) {
          throw new TomlError("only letter, numbers, dashes and underscores are allowed in keys", {
            toml: str,
            ptr
          });
        }
        parsed.push(part.trimEnd());
      }
    }
  } while (dot + 1 && dot < endPtr);
  return [parsed, skipVoid(str, endPtr + 1, true, true)];
}
function parseInlineTable(str, ptr, depth, integersAsBigInt) {
  let res = {};
  let seen = new Set;
  let c;
  ptr++;
  while ((c = str[ptr++]) !== "}" && c) {
    if (c === ",") {
      throw new TomlError("expected value, found comma", {
        toml: str,
        ptr: ptr - 1
      });
    } else if (c === "#")
      ptr = skipComment(str, ptr);
    else if (c !== " " && c !== "\t" && c !== `
` && c !== "\r") {
      let k;
      let t = res;
      let hasOwn = false;
      let [key, keyEndPtr] = parseKey(str, ptr - 1);
      for (let i = 0;i < key.length; i++) {
        if (i)
          t = hasOwn ? t[k] : t[k] = {};
        k = key[i];
        if ((hasOwn = Object.hasOwn(t, k)) && (typeof t[k] !== "object" || seen.has(t[k]))) {
          throw new TomlError("trying to redefine an already defined value", {
            toml: str,
            ptr
          });
        }
        if (!hasOwn && k === "__proto__") {
          Object.defineProperty(t, k, { enumerable: true, configurable: true, writable: true });
        }
      }
      if (hasOwn) {
        throw new TomlError("trying to redefine an already defined value", {
          toml: str,
          ptr
        });
      }
      let [value, valueEndPtr] = extractValue(str, keyEndPtr, "}", depth - 1, integersAsBigInt);
      seen.add(value);
      t[k] = value;
      ptr = valueEndPtr;
    }
  }
  if (!c) {
    throw new TomlError("unfinished table encountered", {
      toml: str,
      ptr
    });
  }
  return [res, ptr];
}
function parseArray(str, ptr, depth, integersAsBigInt) {
  let res = [];
  let c;
  ptr++;
  while ((c = str[ptr++]) !== "]" && c) {
    if (c === ",") {
      throw new TomlError("expected value, found comma", {
        toml: str,
        ptr: ptr - 1
      });
    } else if (c === "#")
      ptr = skipComment(str, ptr);
    else if (c !== " " && c !== "\t" && c !== `
` && c !== "\r") {
      let e = extractValue(str, ptr - 1, "]", depth - 1, integersAsBigInt);
      res.push(e[0]);
      ptr = e[1];
    }
  }
  if (!c) {
    throw new TomlError("unfinished array encountered", {
      toml: str,
      ptr
    });
  }
  return [res, ptr];
}

// node_modules/smol-toml/dist/parse.js
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
function peekTable(key, table, meta, type) {
  let t = table;
  let m = meta;
  let k;
  let hasOwn = false;
  let state;
  for (let i = 0;i < key.length; i++) {
    if (i) {
      t = hasOwn ? t[k] : t[k] = {};
      m = (state = m[k]).c;
      if (type === 0 && (state.t === 1 || state.t === 2)) {
        return null;
      }
      if (state.t === 2) {
        let l = t.length - 1;
        t = t[l];
        m = m[l].c;
      }
    }
    k = key[i];
    if ((hasOwn = Object.hasOwn(t, k)) && m[k]?.t === 0 && m[k]?.d) {
      return null;
    }
    if (!hasOwn) {
      if (k === "__proto__") {
        Object.defineProperty(t, k, { enumerable: true, configurable: true, writable: true });
        Object.defineProperty(m, k, { enumerable: true, configurable: true, writable: true });
      }
      m[k] = {
        t: i < key.length - 1 && type === 2 ? 3 : type,
        d: false,
        i: 0,
        c: {}
      };
    }
  }
  state = m[k];
  if (state.t !== type && !(type === 1 && state.t === 3)) {
    return null;
  }
  if (type === 2) {
    if (!state.d) {
      state.d = true;
      t[k] = [];
    }
    t[k].push(t = {});
    state.c[state.i++] = state = { t: 1, d: false, i: 0, c: {} };
  }
  if (state.d) {
    return null;
  }
  state.d = true;
  if (type === 1) {
    t = hasOwn ? t[k] : t[k] = {};
  } else if (type === 0 && hasOwn) {
    return null;
  }
  return [k, t, state.c];
}
function parse(toml, { maxDepth = 1000, integersAsBigInt } = {}) {
  let res = {};
  let meta = {};
  let tbl = res;
  let m = meta;
  for (let ptr = skipVoid(toml, 0);ptr < toml.length; ) {
    if (toml[ptr] === "[") {
      let isTableArray = toml[++ptr] === "[";
      let k = parseKey(toml, ptr += +isTableArray, "]");
      if (isTableArray) {
        if (toml[k[1] - 1] !== "]") {
          throw new TomlError("expected end of table declaration", {
            toml,
            ptr: k[1] - 1
          });
        }
        k[1]++;
      }
      let p = peekTable(k[0], res, meta, isTableArray ? 2 : 1);
      if (!p) {
        throw new TomlError("trying to redefine an already defined table or value", {
          toml,
          ptr
        });
      }
      m = p[2];
      tbl = p[1];
      ptr = k[1];
    } else {
      let k = parseKey(toml, ptr);
      let p = peekTable(k[0], tbl, m, 0);
      if (!p) {
        throw new TomlError("trying to redefine an already defined table or value", {
          toml,
          ptr
        });
      }
      let v = extractValue(toml, k[1], undefined, maxDepth, integersAsBigInt);
      p[1][p[0]] = v[0];
      ptr = v[1];
    }
    ptr = skipVoid(toml, ptr, true);
    if (toml[ptr] && toml[ptr] !== `
` && toml[ptr] !== "\r") {
      throw new TomlError("each key-value declaration must be followed by an end-of-line", {
        toml,
        ptr
      });
    }
    ptr = skipVoid(toml, ptr);
  }
  return res;
}

// node_modules/smol-toml/dist/stringify.js
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var BARE_KEY = /^[a-z0-9-_]+$/i;
function extendedTypeOf(obj) {
  let type = typeof obj;
  if (type === "object") {
    if (Array.isArray(obj))
      return "array";
    if (obj instanceof Date)
      return "date";
  }
  return type;
}
function isArrayOfTables(obj) {
  for (let i = 0;i < obj.length; i++) {
    if (extendedTypeOf(obj[i]) !== "object")
      return false;
  }
  return obj.length != 0;
}
function formatString(s) {
  return JSON.stringify(s).replace(/\x7f/g, "\\u007f");
}
function stringifyValue(val, type, depth, numberAsFloat) {
  if (depth === 0) {
    throw new Error("Could not stringify the object: maximum object depth exceeded");
  }
  if (type === "number") {
    if (isNaN(val))
      return "nan";
    if (val === Infinity)
      return "inf";
    if (val === -Infinity)
      return "-inf";
    if (Number.isInteger(val) && (numberAsFloat || !Number.isSafeInteger(val)))
      return val.toFixed(1);
    return val.toString();
  }
  if (type === "bigint" || type === "boolean") {
    return val.toString();
  }
  if (type === "string") {
    return formatString(val);
  }
  if (type === "date") {
    if (isNaN(val.getTime())) {
      throw new TypeError("cannot serialize invalid date");
    }
    return val.toISOString();
  }
  if (type === "object") {
    return stringifyInlineTable(val, depth, numberAsFloat);
  }
  if (type === "array") {
    return stringifyArray(val, depth, numberAsFloat);
  }
}
function stringifyInlineTable(obj, depth, numberAsFloat) {
  let keys = Object.keys(obj);
  if (keys.length === 0)
    return "{}";
  let res = "{ ";
  for (let i = 0;i < keys.length; i++) {
    let k = keys[i];
    if (i)
      res += ", ";
    res += BARE_KEY.test(k) ? k : formatString(k);
    res += " = ";
    res += stringifyValue(obj[k], extendedTypeOf(obj[k]), depth - 1, numberAsFloat);
  }
  return res + " }";
}
function stringifyArray(array, depth, numberAsFloat) {
  if (array.length === 0)
    return "[]";
  let res = "[ ";
  for (let i = 0;i < array.length; i++) {
    if (i)
      res += ", ";
    if (array[i] === null || array[i] === undefined) {
      throw new TypeError("arrays cannot contain null or undefined values");
    }
    res += stringifyValue(array[i], extendedTypeOf(array[i]), depth - 1, numberAsFloat);
  }
  return res + " ]";
}
function stringifyArrayTable(array, key, depth, numberAsFloat) {
  if (depth === 0) {
    throw new Error("Could not stringify the object: maximum object depth exceeded");
  }
  let res = "";
  for (let i = 0;i < array.length; i++) {
    res += `${res && `
`}[[${key}]]
`;
    res += stringifyTable(0, array[i], key, depth, numberAsFloat);
  }
  return res;
}
function stringifyTable(tableKey, obj, prefix, depth, numberAsFloat) {
  if (depth === 0) {
    throw new Error("Could not stringify the object: maximum object depth exceeded");
  }
  let preamble = "";
  let tables = "";
  let keys = Object.keys(obj);
  for (let i = 0;i < keys.length; i++) {
    let k = keys[i];
    if (obj[k] !== null && obj[k] !== undefined) {
      let type = extendedTypeOf(obj[k]);
      if (type === "symbol" || type === "function") {
        throw new TypeError(`cannot serialize values of type '${type}'`);
      }
      let key = BARE_KEY.test(k) ? k : formatString(k);
      if (type === "array" && isArrayOfTables(obj[k])) {
        tables += (tables && `
`) + stringifyArrayTable(obj[k], prefix ? `${prefix}.${key}` : key, depth - 1, numberAsFloat);
      } else if (type === "object") {
        let tblKey = prefix ? `${prefix}.${key}` : key;
        tables += (tables && `
`) + stringifyTable(tblKey, obj[k], tblKey, depth - 1, numberAsFloat);
      } else {
        preamble += key;
        preamble += " = ";
        preamble += stringifyValue(obj[k], type, depth, numberAsFloat);
        preamble += `
`;
      }
    }
  }
  if (tableKey && (preamble || !tables))
    preamble = preamble ? `[${tableKey}]
${preamble}` : `[${tableKey}]`;
  return preamble && tables ? `${preamble}
${tables}` : preamble || tables;
}
function stringify(obj, { maxDepth = 1000, numbersAsFloat = false } = {}) {
  if (extendedTypeOf(obj) !== "object") {
    throw new TypeError("stringify can only be called with an object");
  }
  let str = stringifyTable(0, obj, "", maxDepth, numbersAsFloat);
  if (str[str.length - 1] !== `
`)
    return str + `
`;
  return str;
}

// node_modules/smol-toml/dist/index.js
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// src/utils/bunfig-sanitizer.ts
var SAFE_TEST_KEYS = new Set([
  "preload",
  "root",
  "pathIgnorePatterns",
  "timeout",
  "smol",
  "rerunEach",
  "retry",
  "randomize",
  "seed"
]);
var PATH_VALUED_TEST_KEYS = new Set(["preload", "root"]);
function absolutizePath(value, projectCwd) {
  if (typeof value !== "string") {
    return value;
  }
  return path2.isAbsolute(value) ? value : path2.resolve(projectCwd, value);
}
function absolutizePathValue(value, projectCwd) {
  if (Array.isArray(value)) {
    return value.map((item) => absolutizePath(item, projectCwd));
  }
  return absolutizePath(value, projectCwd);
}
async function generateSanitizedBunfig(projectCwd, tmpDir) {
  await mkdir2(tmpDir, { recursive: true });
  let rawConfig = {};
  const bunfigPath = path2.join(projectCwd, "bunfig.toml");
  try {
    const content = await readFile4(bunfigPath, "utf8");
    rawConfig = parse(content);
  } catch (err) {
    if (err.code !== "ENOENT") {
      throw new Error(`Failed to read bunfig.toml at ${bunfigPath}: ${String(err)}`, { cause: err });
    }
  }
  const sanitized = {};
  if (typeof rawConfig.install === "object" && rawConfig.install !== null) {
    sanitized.install = rawConfig.install;
  }
  const sourceTest = typeof rawConfig.test === "object" && rawConfig.test !== null ? rawConfig.test : {};
  const sanitizedTest = {};
  for (const key of SAFE_TEST_KEYS) {
    if (Object.prototype.hasOwnProperty.call(sourceTest, key)) {
      sanitizedTest[key] = PATH_VALUED_TEST_KEYS.has(key) ? absolutizePathValue(sourceTest[key], projectCwd) : sourceTest[key];
    }
  }
  sanitizedTest.coverage = false;
  sanitizedTest.onlyFailures = false;
  sanitized.test = sanitizedTest;
  const serialized = stringify(sanitized);
  const outPath = path2.join(tmpDir, `stryker-bun-runner-bunfig-${process.pid}-${Date.now()}.toml`);
  await writeFile2(outPath, serialized, "utf8");
  return outPath;
}
async function cleanupSanitizedBunfig(filePath) {
  try {
    await unlink3(filePath);
  } catch (err) {
    if (err.code !== "ENOENT") {
      throw err;
    }
  }
}
// src/utils/test-file-discovery.ts
import * as fsPromises from "node:fs/promises";
import path3 from "node:path";
var testFileRe = /\.(?:test|spec)\.(?:[jt]sx?|m[jt]s)$/;
var excludedDirs = new Set(["node_modules", ".stryker-tmp", "dist", "build", ".git"]);
function hasExcludedAncestor(absolutePath) {
  return absolutePath.split("/").some((seg) => excludedDirs.has(seg));
}
async function tryRealpath(p) {
  try {
    return await fsPromises.realpath(p);
  } catch {
    return;
  }
}
async function tryStat(p) {
  try {
    return await fsPromises.stat(p);
  } catch {
    return;
  }
}
async function handleSymlinkDir(fullPath, entryName, ctx) {
  if (excludedDirs.has(entryName)) {
    return;
  }
  const resolvedTarget = await tryRealpath(fullPath);
  if (!resolvedTarget) {
    return;
  }
  if (hasExcludedAncestor(resolvedTarget)) {
    ctx.logger?.debug("discoverTestFiles: symlink %s resolves to excluded path %s; skipping", fullPath, resolvedTarget);
  } else {
    await ctx.walk(fullPath);
  }
}
async function handleSymlinkFile(fullPath, entryName, ctx) {
  if (!testFileRe.test(entryName)) {
    return;
  }
  const resolvedTarget = await tryRealpath(fullPath);
  if (resolvedTarget && !hasExcludedAncestor(resolvedTarget)) {
    ctx.results.push(path3.relative(ctx.cwd, fullPath));
  }
}
async function handleSymlink(fullPath, entryName, ctx) {
  const stat3 = await tryStat(fullPath);
  if (!stat3) {
    ctx.logger?.debug("discoverTestFiles: broken symlink at %s; skipping", fullPath);
    return;
  }
  if (stat3.isDirectory()) {
    await handleSymlinkDir(fullPath, entryName, ctx);
  } else if (stat3.isFile()) {
    await handleSymlinkFile(fullPath, entryName, ctx);
  }
}
async function processEntry(entry, dir, ctx) {
  const fullPath = path3.join(dir, entry.name);
  if (entry.isDirectory()) {
    if (!excludedDirs.has(entry.name)) {
      await ctx.walk(fullPath);
    }
  } else if (entry.isSymbolicLink()) {
    await handleSymlink(fullPath, entry.name, ctx);
  } else if (entry.isFile() && testFileRe.test(entry.name)) {
    ctx.results.push(path3.relative(ctx.cwd, fullPath));
  }
}
async function discoverTestFiles(cwd = process.cwd(), logger) {
  const results = [];
  const visitedRealPaths = new Set;
  const ctx = { cwd, results, visitedRealPaths, logger, walk };
  async function walk(dir) {
    const realDir = await tryRealpath(dir);
    if (!realDir) {
      logger?.debug("discoverTestFiles: could not resolve real path of %s; skipping", dir);
      return;
    }
    if (visitedRealPaths.has(realDir)) {
      return;
    }
    visitedRealPaths.add(realDir);
    let entries;
    try {
      entries = await fsPromises.readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    entries.sort((a, b) => a.name.localeCompare(b.name));
    for (const entry of entries) {
      await processEntry(entry, dir, ctx);
    }
  }
  await walk(cwd);
  if (results.length === 0) {
    logger?.warn("discoverTestFiles: no test files found in %s; falling back to Bun discovery", cwd);
    return;
  }
  results.sort((a, b) => a.localeCompare(b));
  logger?.debug("discoverTestFiles: found %d test files in %s", results.length, cwd);
  return results;
}
// src/bun-test-runner.ts
function sleep(ms) {
  return new Promise((resolve3) => {
    setTimeout(resolve3, ms);
  });
}
var DRAIN_ACK_SILENCE_TIMEOUT_MS = 4000;
var DRAIN_ACK_ABSOLUTE_CEILING_MS = 30000;
var DRAIN_SILENCE_POLL_INTERVAL_MS = 250;
var MAX_GAP_IDS_LISTED = 20;

class DrainWaitTimeoutError extends Error {
  reason;
  constructor(message, reason) {
    super(message);
    this.name = "DrainWaitTimeoutError";
    this.reason = reason;
  }
}
function raceAgainstSilence(inspector, silenceMs, absoluteCeilingMs, message) {
  const startedAt = Date.now();
  let timer;
  const promise2 = new Promise((_resolve, reject) => {
    timer = setInterval(() => {
      const sinceLastFrame = inspector.getMsSinceLastFrame();
      const totalElapsed = Date.now() - startedAt;
      if (totalElapsed >= absoluteCeilingMs) {
        clearInterval(timer);
        reject(new DrainWaitTimeoutError(`${message}: ${absoluteCeilingMs}ms absolute ceiling reached`, "ceiling"));
      } else if (totalElapsed >= silenceMs && sinceLastFrame >= silenceMs) {
        clearInterval(timer);
        reject(new DrainWaitTimeoutError(`${message}: ${sinceLastFrame}ms of inspector silence (limit ${silenceMs}ms)`, "silence"));
      }
    }, DRAIN_SILENCE_POLL_INTERVAL_MS);
  });
  return { promise: promise2, cancel: () => clearInterval(timer) };
}
function formatGapIdList(gaps) {
  if (gaps.length === 0) {
    return "";
  }
  const shown = gaps.slice(0, MAX_GAP_IDS_LISTED).join(",");
  return gaps.length > MAX_GAP_IDS_LISTED ? ` [${shown},…]` : ` [${shown}]`;
}
function formatDrainSettleReason(reason) {
  return reason === undefined ? "never requested" : `settled via ${reason}`;
}
function buildTestNameIndex(tests, bunNames) {
  const testNameIndex = new Map;
  for (const [i, test] of tests.entries()) {
    const bunName = bunNames[i];
    if (bunName !== undefined) {
      testNameIndex.set(test.id, bunName);
    }
  }
  return testNameIndex;
}
var ZERO_MATCH_TEST_PATTERN_RE = /matched 0 tests\./;
var MAX_DRY_RUN_FAILURE_TESTS_LISTED = 20;
var MAX_COVERAGE_BLEED_WARNINGS = 25;
var EXECUTION_SHORTFALL_ABS_FLOOR = 10;
var EXECUTION_SHORTFALL_RATIO_THRESHOLD = 0.05;
var ORPHANED_KEY_ABS_FLOOR = 5;
var TEST_ID_FILE_SEPARATOR = " > ";
var INSPECTOR_DRAIN_TIMEOUT_MS = 1000;

class BunTestRunner {
  logger;
  static inject = tokens(commonTokens.logger, commonTokens.options);
  bunPath;
  timeout;
  inspectorTimeout;
  env;
  bunArgs;
  testFilesOverride;
  mutateGlobs;
  smol;
  maxChildRss;
  rssCheckIntervalMs;
  maxSpawnDepth;
  preloadScriptPath;
  coverageFilePath;
  sanitizedBunfigPath;
  sanitizedBunfigCwd;
  tempDir;
  cachedTestNames;
  baseNameIndex;
  testNameIndex;
  cachedTestFiles;
  cachedTestFilesCwd;
  cachedEagerModules;
  cachedEagerModulesCwd;
  lastRegistryTmpPath;
  currentAbortController;
  constructor(logger, options) {
    this.logger = logger;
    const bunOptions = options.bun ?? {};
    this.bunPath = bunOptions.bunPath ?? "bun";
    this.timeout = bunOptions.timeout ?? 1e4;
    this.inspectorTimeout = bunOptions.inspectorTimeout ?? 5000;
    this.env = bunOptions.env;
    this.bunArgs = bunOptions.bunArgs;
    this.smol = bunOptions.smol ?? false;
    this.maxChildRss = bunOptions.maxChildRss;
    this.rssCheckIntervalMs = bunOptions.rssCheckIntervalMs;
    this.maxSpawnDepth = bunOptions.maxSpawnDepth;
    if (bunOptions.testFiles?.length === 0) {
      this.logger.warn("bun.testFiles was set to an empty array — treating as undefined and falling back to auto-discovery");
      this.testFilesOverride = undefined;
    } else {
      this.testFilesOverride = bunOptions.testFiles;
    }
    this.mutateGlobs = options.mutate ?? [];
    this.logger.debug("BunTestRunner initialized with options: %o", {
      bunPath: this.bunPath,
      timeout: this.timeout,
      inspectorTimeout: this.inspectorTimeout,
      env: this.env,
      bunArgs: this.bunArgs,
      smol: this.smol,
      maxChildRss: this.maxChildRss,
      rssCheckIntervalMs: this.rssCheckIntervalMs,
      maxSpawnDepth: this.maxSpawnDepth
    });
    if (this.testFilesOverride?.some((p) => path4.isAbsolute(p))) {
      const isSandbox = process.cwd().includes(".stryker-tmp/sandbox-");
      if (isSandbox) {
        this.logger.warn("bun.testFiles contains absolute path(s) and the current working directory appears to be a Stryker sandbox (%s). " + "Absolute paths point at the ORIGINAL (unmutated) source files — mutations will be silently bypassed. " + "Use relative paths so that Bun resolves them against the sandbox copy.", process.cwd());
      }
    }
  }
  get registryPath() {
    const key = `${process.cwd()}:${process.ppid}`;
    const hash = createHash("sha256").update(key).digest("hex").slice(0, 16);
    return path4.join(tmpdir(), "stryker-bun-runner", `registry-${hash}.json`);
  }
  get registryTmpPath() {
    return `${this.registryPath}.tmp`;
  }
  resolveCoveringTestFiles(filterIds) {
    if (filterIds.length === 0) {
      return;
    }
    const discovered = this.cachedTestFiles;
    if (!discovered || discovered.length === 0) {
      return;
    }
    const discoveredSet = new Set(discovered);
    const files = new Set;
    for (const id of filterIds) {
      const sepIdx = id.indexOf(TEST_ID_FILE_SEPARATOR);
      if (sepIdx === -1) {
        return;
      }
      const file = id.slice(0, sepIdx);
      if (!discoveredSet.has(file)) {
        return;
      }
      files.add(file);
    }
    return [...files].toSorted((a, b) => a.localeCompare(b));
  }
  capabilities() {
    return {
      reloadEnvironment: true
    };
  }
  async getOrDiscoverTestFiles() {
    if (this.testFilesOverride !== undefined) {
      return this.testFilesOverride;
    }
    const cwd = process.cwd();
    if (this.cachedTestFiles !== undefined && this.cachedTestFilesCwd === cwd) {
      return this.cachedTestFiles;
    }
    this.cachedTestFiles = await discoverTestFiles(cwd, this.logger);
    this.cachedTestFilesCwd = cwd;
    return this.cachedTestFiles;
  }
  testFilesCacheHit(cwd) {
    if (this.testFilesOverride !== undefined) {
      return this.testFilesOverride;
    }
    return this.cachedTestFiles !== undefined && this.cachedTestFilesCwd === cwd ? this.cachedTestFiles : null;
  }
  async init() {
    this.logger.debug("BunTestRunner init starting...");
    if (this.preloadScriptPath) {
      try {
        await cleanupPreloadScript(this.preloadScriptPath);
      } catch (error) {
        this.logger.debug("Failed to clean up previous preload script on re-init: %s", error instanceof Error ? error.message : String(error));
      }
      this.preloadScriptPath = undefined;
    }
    if (this.coverageFilePath) {
      try {
        await cleanupCoverageFile(this.coverageFilePath);
      } catch (error) {
        this.logger.debug("Failed to clean up previous coverage file on re-init: %s", error instanceof Error ? error.message : String(error));
      }
      this.coverageFilePath = undefined;
    }
    const tempDir = path4.join(tmpdir(), "stryker-bun-runner");
    this.tempDir = tempDir;
    this.coverageFilePath = path4.join(tempDir, `coverage-${Date.now()}.json`);
    this.logger.debug("Generating coverage preload script...");
    const eagerCwd = process.cwd();
    if (this.cachedEagerModules === undefined || this.cachedEagerModulesCwd !== eagerCwd) {
      this.cachedEagerModules = await resolveEagerModulesFromGlobs(this.mutateGlobs);
      this.cachedEagerModulesCwd = eagerCwd;
      this.logger.debug("Resolved %d eager modules from mutate globs", this.cachedEagerModules.length);
    }
    this.preloadScriptPath = await generatePreloadScript({
      tempDir,
      coverageFile: this.coverageFilePath,
      eagerModules: this.cachedEagerModules
    });
    this.logger.debug("Preload script generated at: %s", this.preloadScriptPath);
    await this.ensureSanitizedBunfig();
    this.cachedTestFiles = await this.getOrDiscoverTestFiles();
  }
  async ensureSanitizedBunfig() {
    const cwd = process.cwd();
    if (this.sanitizedBunfigPath && this.sanitizedBunfigCwd === cwd) {
      return this.sanitizedBunfigPath;
    }
    if (this.sanitizedBunfigPath) {
      await cleanupSanitizedBunfig(this.sanitizedBunfigPath);
    }
    const tempDir = this.tempDir ?? path4.join(tmpdir(), "stryker-bun-runner");
    this.sanitizedBunfigPath = await generateSanitizedBunfig(cwd, tempDir);
    this.sanitizedBunfigCwd = cwd;
    this.logger.debug("Sanitized bunfig (re)generated at: %s for cwd: %s", this.sanitizedBunfigPath, cwd);
    return this.sanitizedBunfigPath;
  }
  async loadRegistryFile() {
    const registryPath = this.registryPath;
    try {
      const raw = await fsPromises2.readFile(registryPath, "utf8");
      const parsed = JSON.parse(raw);
      if (parsed.version !== 2) {
        this.logger.warn("dryRun registry file has unexpected version %s; skipping", String(parsed.version));
        return;
      }
      if (!Array.isArray(parsed.cachedTestNames) || !Array.isArray(parsed.baseNameIndex) || !Array.isArray(parsed.testNameIndex)) {
        this.logger.warn("dryRun registry file is malformed (cachedTestNames, baseNameIndex, or testNameIndex missing or not an array); treating as absent");
        return;
      }
      if (!parsed.testNameIndex.every((entry) => Array.isArray(entry) && entry.length === 2 && typeof entry[0] === "string" && typeof entry[1] === "string")) {
        this.logger.warn("dryRun registry file is malformed (testNameIndex entry is not a [string, string] pair); treating as absent");
        return;
      }
      this.cachedTestNames = new Set(parsed.cachedTestNames);
      this.baseNameIndex = new Map(parsed.baseNameIndex);
      this.testNameIndex = new Map(parsed.testNameIndex);
      this.logger.debug("Loaded dryRun registry from %s (%d entries)", registryPath, this.cachedTestNames.size);
    } catch (err) {
      const code = err.code;
      if (code === "ENOENT") {
        this.logger.debug("dryRun registry file not found at %s; this worker has no static-coverage registry (expected on non-dryRun workers)", registryPath);
      } else {
        this.logger.warn("Failed to load dryRun registry from %s: %s", registryPath, err instanceof Error ? err.message : String(err));
      }
    }
  }
  buildFailureMessage(testInfo, parsed) {
    const parsedTest = parsed.tests.find((t) => t.name.includes(testInfo.name));
    const baseFailureMessage = parsedTest?.failureMessage ?? testInfo.error?.message ?? "Test failed";
    const stack = testInfo.error?.stack;
    return stack && !baseFailureMessage.includes(stack) ? `${baseFailureMessage}
${stack}` : baseFailureMessage;
  }
  buildTestsFromInspector(testHierarchy, executionOrder, parsed, totalElapsedMs, inspectorIdToProjectFile) {
    if (executionOrder.length === 0) {
      const fallbackTests = parsed.tests.map((t) => {
        const normalizedName = normalizeTestName(t.name);
        if (t.status === "failed") {
          return {
            id: normalizedName,
            name: normalizedName,
            status: TestStatus.Failed,
            failureMessage: t.failureMessage ?? "Test failed",
            timeSpentMs: Math.round(t.duration ?? 1)
          };
        }
        if (t.status === "skipped") {
          return {
            id: normalizedName,
            name: normalizedName,
            status: TestStatus.Skipped,
            timeSpentMs: Math.round(t.duration ?? 1)
          };
        }
        return {
          id: normalizedName,
          name: normalizedName,
          status: TestStatus.Success,
          timeSpentMs: Math.round(t.duration ?? 1)
        };
      });
      return { tests: fallbackTests, testNameIndex: new Map };
    }
    const timePerTest = executionOrder.length > 0 ? Math.max(1, Math.round(totalElapsedMs / executionOrder.length)) : 1;
    const testMap = new Map;
    for (const test of testHierarchy) {
      testMap.set(test.id, test);
    }
    const bunNames = executionOrder.map((inspectorId) => testMap.get(inspectorId)?.bunName);
    const tests = executionOrder.map((inspectorId) => {
      const testInfo = testMap.get(inspectorId);
      if (!testInfo) {
        return {
          id: `unknown-${inspectorId}`,
          name: `unknown-${inspectorId}`,
          status: TestStatus.Success,
          timeSpentMs: timePerTest
        };
      }
      const projectFile = inspectorIdToProjectFile?.get(inspectorId);
      const uniqueName = projectFile ? buildProjectFileTestName(projectFile, testInfo.fullName) : buildUniqueTestName(testInfo.fullName, testInfo.url);
      const fileName = projectFile ?? normalizeTestFilePath(testInfo.url);
      const status = testInfo.status;
      const elapsed = testInfo.elapsed === undefined ? timePerTest : Math.round(testInfo.elapsed / 1e6);
      const startPosition = testInfo.line === undefined ? undefined : { line: testInfo.line, column: 0 };
      if (status === "fail") {
        return {
          id: uniqueName,
          name: uniqueName,
          fileName,
          startPosition,
          status: TestStatus.Failed,
          failureMessage: this.buildFailureMessage(testInfo, parsed),
          timeSpentMs: elapsed
        };
      }
      if (status === "skip" || status === "todo") {
        return {
          id: uniqueName,
          name: uniqueName,
          fileName,
          startPosition,
          status: TestStatus.Skipped,
          timeSpentMs: elapsed
        };
      }
      return {
        id: uniqueName,
        name: uniqueName,
        fileName,
        startPosition,
        status: TestStatus.Success,
        timeSpentMs: elapsed
      };
    });
    const discoveryOrderIndex = buildDiscoveryOrderIndex(testHierarchy.map((t) => t.id));
    const nameCounts = new Map;
    for (const test of tests) {
      nameCounts.set(test.name, (nameCounts.get(test.name) ?? 0) + 1);
    }
    const nameGroups = new Map;
    for (const [i, test] of tests.entries()) {
      if ((nameCounts.get(test.name) ?? 1) > 1) {
        const entry = { test, inspectorId: executionOrder[i] };
        const group = nameGroups.get(test.name);
        if (group) {
          group.push(entry);
        } else {
          nameGroups.set(test.name, [entry]);
        }
      }
    }
    for (const [, group] of nameGroups) {
      const sorted = sortDuplicateGroupByLineThenDiscovery(group, (e) => ("startPosition" in e.test) && e.test.startPosition ? e.test.startPosition.line : undefined, (e) => e.inspectorId, discoveryOrderIndex);
      for (const [i, { test }] of sorted.entries()) {
        const uniqueName = `${test.name} [${i}]`;
        test.id = uniqueName;
        test.name = uniqueName;
      }
    }
    return { tests, testNameIndex: buildTestNameIndex(tests, bunNames) };
  }
  async dryRun() {
    this.logger.debug("Running dry run with inspector-based coverage collection...");
    const abortController = new AbortController;
    this.currentAbortController = abortController;
    const inspectPort = await getAvailablePort();
    const syncPort = await getAvailablePort();
    this.logger.debug("Using inspector port: %d, sync port: %d", inspectPort, syncPort);
    const syncServer = new SyncServer({ port: syncPort, timeout: this.inspectorTimeout });
    try {
      await syncServer.start();
      this.logger.debug("Sync server started on port %d", syncPort);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      this.logger.error("Failed to start sync server: %s", errorMsg);
      return {
        status: DryRunStatus.Error,
        errorMessage: `Failed to start sync server: ${errorMsg}`
      };
    }
    const startTime = Date.now();
    let inspectorUrl = null;
    try {
      const cwd = process.cwd();
      const bunfigPath = this.sanitizedBunfigPath && this.sanitizedBunfigCwd === cwd ? this.sanitizedBunfigPath : await this.ensureSanitizedBunfig();
      const testFilesCached = this.testFilesCacheHit(cwd);
      const testFiles = testFilesCached === null ? await this.getOrDiscoverTestFiles() : testFilesCached;
      const testProcess = runBunTests({
        bunPath: this.bunPath,
        timeout: this.timeout + DRAIN_ACK_ABSOLUTE_CEILING_MS,
        env: this.env,
        bunArgs: this.bunArgs,
        bunfigPath,
        preloadScript: this.preloadScriptPath,
        coverageFile: this.coverageFilePath,
        inspectWaitPort: inspectPort,
        sequentialMode: true,
        syncPort,
        testFiles,
        signal: abortController.signal,
        smol: this.smol,
        maxChildRss: this.maxChildRss,
        rssCheckIntervalMs: this.rssCheckIntervalMs,
        maxSpawnDepth: this.maxSpawnDepth,
        onMemoryLimitExceeded: (rssBytes) => {
          this.logger.warn("bun test child exceeded maxChildRss (%d bytes observed) during dryRun — killing and reporting as a timeout for this run", rssBytes);
        },
        onInspectorReady: (url) => {
          inspectorUrl = url;
        }
      });
      const waitStart = Date.now();
      while (!inspectorUrl && Date.now() - waitStart < this.inspectorTimeout) {
        await sleep(50);
      }
      if (!inspectorUrl) {
        const diagnosticResult = await testProcess;
        const stdoutPreview = diagnosticResult.stdout.slice(0, 1000);
        const stderrPreview = diagnosticResult.stderr.slice(0, 1000);
        this.logger.error(`Failed to get inspector URL within timeout (%dms).
exit=%s timedOut=%s
` + `--- STDOUT (first 1000 chars) ---
%s
` + `--- STDERR (first 1000 chars) ---
%s`, this.inspectorTimeout, String(diagnosticResult.exitCode), String(diagnosticResult.timedOut), stdoutPreview || "(empty)", stderrPreview || "(empty)");
        return {
          status: DryRunStatus.Error,
          errorMessage: "Timeout waiting for inspector URL"
        };
      }
      this.logger.debug("Inspector URL: %s", inspectorUrl);
      const inspector = new InspectorClient({
        url: inspectorUrl,
        connectionTimeout: this.inspectorTimeout,
        requestTimeout: this.inspectorTimeout,
        handlers: {
          onError: (error) => {
            this.logger.warn("Inspector error: %s", error.message);
          },
          onUnexpectedClose: (context) => {
            this.logger.debug("Inspector WebSocket closed while the run was still thought to be in progress (wsClosed=%s closeExpected=%s isClosing=%s closeCode=%s closeReason=%s closeWasClean=%s msFromLastFrameToClose=%s) — often benign; see checkCompletenessGate", context.wsClosed, context.closeExpected, context.isClosing, String(context.closeCode), String(context.closeReason), String(context.closeWasClean), String(context.msFromLastFrameToClose));
          },
          onRequestStall: (info) => {
            this.logger.warn("Inspector request unanswered after %dms even though other frames are still arriving (last frame %dms ago): %s (id=%d) — possible protocol-level stall distinct from total silence", info.msUnanswered, info.msSinceLastFrame, info.method, info.id);
          }
        }
      });
      try {
        await inspector.connect();
        await inspector.send("TestReporter.enable", {});
        this.logger.debug("Inspector connected and TestReporter enabled");
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        this.logger.error("Failed to connect inspector: %s", errorMsg);
        abortController.abort();
        await inspector.close();
        return {
          status: DryRunStatus.Error,
          errorMessage: `Failed to connect to Bun inspector: ${errorMsg}`
        };
      }
      let drainSettleReason;
      syncServer.setDrainHandler(async () => {
        const drainRequestReceivedAt = Date.now();
        const countsAtRequest = inspector.getEventCounts();
        const gapsAtRequest = inspector.getFoundIdGaps();
        this.logger.warn("Drain-request received: %d/%d/%d found/start/end events received so far; %d found-id gap(s)%s", countsAtRequest.found, countsAtRequest.start, countsAtRequest.end, gapsAtRequest.length, formatGapIdList(gapsAtRequest));
        const { promise: silencePromise, cancel: cancelSilence } = raceAgainstSilence(inspector, DRAIN_ACK_SILENCE_TIMEOUT_MS, DRAIN_ACK_ABSOLUTE_CEILING_MS, "Inspector drain wait gave up");
        try {
          await Promise.race([
            inspector.send("TestReporter.enable", {}, DRAIN_ACK_ABSOLUTE_CEILING_MS + 1000),
            silencePromise
          ]);
          drainSettleReason = "ack";
        } catch (error) {
          drainSettleReason = error instanceof DrainWaitTimeoutError ? error.reason : "send-rejected";
          if (drainSettleReason === "send-rejected") {
            this.logger.warn("Inspector drain round-trip rejected before any wait bound was hit: %s", error instanceof Error ? error.message : String(error));
          }
        } finally {
          cancelSilence();
          const elapsedMs = Date.now() - drainRequestReceivedAt;
          const countsAtSettle = inspector.getEventCounts();
          const gapsAtSettle = inspector.getFoundIdGaps();
          this.logger.warn("Drain handler settled via %s after %dms; events during wait +%d/+%d/+%d found/start/end; found-id gaps %d -> %d%s", drainSettleReason, elapsedMs, countsAtSettle.found - countsAtRequest.found, countsAtSettle.start - countsAtRequest.start, countsAtSettle.end - countsAtRequest.end, gapsAtRequest.length, gapsAtSettle.length, drainSettleReason === "ack" && gapsAtSettle.length > 0 ? " — ack resolved but gaps remain: the ack may under-prove drain" : "");
        }
      });
      syncServer.signalReady();
      this.logger.debug("Signaled preload script to proceed");
      const result = await testProcess;
      const totalElapsedMs = Date.now() - startTime;
      inspector.expectClose();
      await inspector.waitForClose(INSPECTOR_DRAIN_TIMEOUT_MS);
      const testHierarchy = inspector.getTests();
      const executionOrder = inspector.getExecutionOrder();
      const wasClosedUnexpectedly = inspector.wasClosedUnexpectedly;
      await inspector.close();
      this.logger.debug("Inspector collected %d tests in hierarchy, %d in execution order", testHierarchy.length, executionOrder.length);
      const finalGaps = inspector.getFoundIdGaps();
      this.logger.warn("Post-drain inspector snapshot: %d found-id gap(s) remaining%s; drain handshake %s", finalGaps.length, formatGapIdList(finalGaps), formatDrainSettleReason(drainSettleReason));
      const closeInfo = inspector.getCloseInfo();
      const collisionStats = inspector.getFoundIdCollisionStats();
      this.logger.warn("Post-drain inspector close/collision diagnostics: WS close code=%s reason=%s wasClean=%s msFromLastFrameToClose=%s; " + "found events %d raw / %d unique id(s) / %d duplicate id event(s) (nonzero duplicates = direct evidence of the Bun " + "TestReporter id-collision bug; the found-id-gap count above is density-only — it does NOT prove losslessness under collisions)", String(closeInfo.code), String(closeInfo.reason), String(closeInfo.wasClean), String(closeInfo.msFromLastFrameToClose), collisionStats.rawFoundCount, collisionStats.uniqueFoundIdCount, collisionStats.duplicateFoundIdCount);
      const parsed = parseBunTestOutput(result.stdout, result.stderr);
      const earlyResult = this.checkDryRunProcessResult(result, parsed, testHierarchy);
      if (earlyResult) {
        return earlyResult;
      }
      return await this.buildGatedDryRunResult(result, parsed, testHierarchy, executionOrder, totalElapsedMs, wasClosedUnexpectedly, closeInfo);
    } finally {
      abortController.abort();
      if (this.currentAbortController === abortController) {
        this.currentAbortController = undefined;
      }
      await syncServer.close();
    }
  }
  async buildGatedDryRunResult(result, parsed, testHierarchy, executionOrder, totalElapsedMs, wasClosedUnexpectedly, closeInfo) {
    const { coverage: mutantCoverage, inspectorIdToProjectFile, rawKeyCount, orphanedKeyCount } = await this.collectAndRemapCoverage(testHierarchy, executionOrder);
    const { tests, testNameIndex } = this.buildTestsFromInspector(testHierarchy, executionOrder, parsed, totalElapsedMs, inspectorIdToProjectFile);
    tests.sort((a, b) => a.name.localeCompare(b.name));
    const gateResult = this.checkCompletenessGate(executionOrder, testHierarchy, parsed, rawKeyCount, orphanedKeyCount, wasClosedUnexpectedly, tests, closeInfo, result.stderr);
    if (gateResult) {
      return gateResult;
    }
    await this.buildAndPersistTestRegistry(tests, testNameIndex);
    this.warnOnUnidentifiedDryRunFailure(result, parsed, tests);
    return {
      status: DryRunStatus.Complete,
      tests,
      mutantCoverage
    };
  }
  async buildAndPersistTestRegistry(tests, testNameIndex) {
    this.cachedTestNames = new Set(tests.map((t) => t.name));
    if (tests.length !== this.cachedTestNames.size) {
      const nameCount = new Map;
      for (const test of tests) {
        nameCount.set(test.name, (nameCount.get(test.name) ?? 0) + 1);
      }
      const duplicates = [...nameCount.entries()].filter(([_, count]) => count > 1).map(([name, count]) => `"${name}" (${count}x)`);
      this.logger.warn("Found %d duplicate test names (total: %d, unique: %d): %s", tests.length - this.cachedTestNames.size, tests.length, this.cachedTestNames.size, duplicates.join(", "));
    }
    this.baseNameIndex = new Map;
    const suffixRe = / \[\d+\]$/;
    for (const id of this.cachedTestNames) {
      const base = suffixRe.test(id) ? id.replace(suffixRe, "") : id;
      const bucket = this.baseNameIndex.get(base);
      if (bucket) {
        bucket.push(id);
      } else {
        this.baseNameIndex.set(base, [id]);
      }
      if (base !== id) {
        this.baseNameIndex.set(id, [id]);
      }
    }
    this.logger.debug("Cached %d test names from dry run for killedBy resolution", this.cachedTestNames.size);
    this.testNameIndex = testNameIndex;
    try {
      const registryPath = this.registryPath;
      const tmpPath = this.registryTmpPath;
      const registryData = JSON.stringify({
        version: 2,
        writtenAt: Date.now(),
        cachedTestNames: [...this.cachedTestNames],
        baseNameIndex: [...this.baseNameIndex.entries()],
        testNameIndex: [...testNameIndex.entries()]
      });
      await fsPromises2.mkdir(path4.dirname(registryPath), { recursive: true });
      await fsPromises2.writeFile(tmpPath, registryData, "utf8");
      this.lastRegistryTmpPath = tmpPath;
      await fsPromises2.rename(tmpPath, registryPath);
      this.lastRegistryTmpPath = undefined;
      this.logger.debug("Wrote dryRun registry to %s (%d entries)", registryPath, this.cachedTestNames.size);
    } catch (error) {
      this.logger.warn("Failed to write dryRun registry file: %s", error instanceof Error ? error.message : String(error));
    }
  }
  warnLossyPatternAlternatives(filterIds, mutantId) {
    if (filterIds.length === 0) {
      return;
    }
    const exactNameIndex = this.testNameIndex;
    if (exactNameIndex === undefined) {
      this.logger.warn('Mutant %s: no exact-name registry available — all %d covering-test pattern alternatives use lossy reconstruction; tests with " > " in their titles may be silently dropped', mutantId, filterIds.length);
      return;
    }
    const missed = filterIds.filter((id) => !exactNameIndex.has(id));
    if (missed.length > 0) {
      this.logger.warn('Mutant %s: %d of %d testFilter ids missing from exact-name registry (lossy fallback; " > " titles among them may be silently dropped): %s%s', mutantId, missed.length, filterIds.length, missed.slice(0, 5).join(", "), missed.length > 5 ? ", …" : "");
    }
  }
  async mutantRun(options) {
    this.logger.debug("Running mutant run for mutant %s", options.activeMutant.id);
    const filterIds = options.testFilter ?? [];
    if (!this.cachedTestNames) {
      await this.loadRegistryFile();
    }
    this.warnLossyPatternAlternatives(filterIds, options.activeMutant.id);
    const testNamePattern = buildTestNamePattern(filterIds, this.testNameIndex);
    const { localRegistry, localBaseIndex } = this.buildLocalTestFilterIndex(filterIds);
    const mutantCwd = process.cwd();
    const bunfigPath = this.sanitizedBunfigPath && this.sanitizedBunfigCwd === mutantCwd ? this.sanitizedBunfigPath : await this.ensureSanitizedBunfig();
    this.cachedTestFiles = await this.getOrDiscoverTestFiles();
    return this.executeMutantRun(options, bunfigPath, testNamePattern, localRegistry, localBaseIndex, this.resolveCoveringTestFiles(filterIds));
  }
  async executeMutantRun(options, bunfigPath, testNamePattern, localRegistry, localBaseIndex, coveringTestFiles) {
    const abortController = new AbortController;
    this.currentAbortController = abortController;
    let result;
    try {
      result = await runBunTests({
        bunPath: this.bunPath,
        timeout: this.timeout,
        env: this.env,
        bunArgs: this.bunArgs,
        bunfigPath,
        activeMutant: options.activeMutant.id,
        bail: !options.disableBail,
        sequentialMode: true,
        preloadScript: this.preloadScriptPath,
        testNamePattern,
        testFiles: testNamePattern === undefined ? this.cachedTestFiles : coveringTestFiles ?? this.cachedTestFiles,
        signal: abortController.signal,
        smol: this.smol,
        maxChildRss: this.maxChildRss,
        rssCheckIntervalMs: this.rssCheckIntervalMs,
        maxSpawnDepth: this.maxSpawnDepth,
        onMemoryLimitExceeded: (rssBytes) => {
          this.logger.warn("bun test child exceeded maxChildRss (%d bytes observed) during mutant run %s — killing and reporting as a timeout for this mutant", rssBytes, options.activeMutant.id);
        }
      });
    } finally {
      if (this.currentAbortController === abortController) {
        this.currentAbortController = undefined;
      }
    }
    if (result.timedOut) {
      this.logger.debug("Mutant run timed out");
      return {
        status: MutantRunStatus.Timeout
      };
    }
    const parsed = parseBunTestOutput(result.stdout, result.stderr);
    this.logger.debug("Mutant run completed: %o", {
      totalTests: parsed.totalTests,
      passed: parsed.passed,
      failed: parsed.failed,
      exitCode: result.exitCode
    });
    if (result.exitCode !== 0) {
      if (testNamePattern !== undefined && parsed.tests.length === 0 && ZERO_MATCH_TEST_PATTERN_RE.test(result.stderr)) {
        this.logger.warn("Mutant %s: --test-name-pattern matched 0 tests — usually a runner pattern gap or a mutant that changed an interpolated test title (it.each); retrying once with the full suite", options.activeMutant.id);
        return this.executeMutantRun(options, bunfigPath, undefined, localRegistry, localBaseIndex);
      }
      return this.buildMutantKilledResult(result, parsed, localRegistry, localBaseIndex, options.activeMutant.id);
    }
    return {
      status: MutantRunStatus.Survived,
      nrOfTests: parsed.totalTests
    };
  }
  buildMutantKilledResult(result, parsed, localRegistry, localBaseIndex, mutantId) {
    const rawFailedNames = parsed.tests.filter((test) => test.status === "failed").map((test) => normalizeTestName(test.name));
    if (rawFailedNames.length === 0 && parsed.tests.length === 0) {
      const runtimeResult = this.checkRuntimeError(result, mutantId);
      if (runtimeResult) {
        return runtimeResult;
      }
    }
    const killedBy = this.resolveKilledBy(rawFailedNames, localRegistry, localBaseIndex, mutantId);
    if (killedBy.length === 0) {
      this.logger.warn("Mutant %s: no killing test identifiable — emitting empty killedBy; " + `this mutant will re-run on every incremental run
` + `exit=%s
--- STDOUT (first 600 chars) ---
%s
` + `--- STDERR (first 600 chars) ---
%s`, mutantId, String(result.exitCode), result.stdout.slice(0, 600) || "(empty)", result.stderr.slice(0, 600) || "(empty)");
    }
    return {
      status: MutantRunStatus.Killed,
      killedBy,
      failureMessage: parsed.tests.filter((test) => test.status === "failed").map((test) => test.failureMessage).filter((msg) => !!msg).join(`

`) || `Tests failed with exit code ${result.exitCode}`,
      nrOfTests: parsed.totalTests || 1
    };
  }
  checkRuntimeError(result, mutantId) {
    const stderr = result.stderr;
    if (ZERO_MATCH_TEST_PATTERN_RE.test(stderr)) {
      this.logger.warn("Mutant %s: --test-name-pattern matched 0 tests with no covering tests left to retry — not a kill: %s", mutantId, stderr.slice(0, 200));
      return {
        status: MutantRunStatus.Error,
        errorMessage: `stryker-bun-runner: bun's --test-name-pattern matched 0 tests for this mutant (runner pattern gap or mutant-changed interpolated title — not a kill): ${stderr.slice(0, 500)}`
      };
    }
    const isRuntimeError = stderr.includes("Unhandled error") || stderr.includes("Cannot find module") || stderr.includes("SyntaxError") || stderr.includes("TypeError") || stderr.includes("ReferenceError") || stderr.includes("is not defined") || stderr.includes("Unexpected token");
    if (isRuntimeError) {
      this.logger.debug("Mutant %s caused runtime error (tests could not run): %s", mutantId, stderr.slice(0, 200));
      return {
        status: MutantRunStatus.Error,
        errorMessage: stderr.slice(0, 500) || `Runtime error with exit code ${result.exitCode}`
      };
    }
    return null;
  }
  checkDryRunProcessResult(result, parsed, testHierarchy) {
    if (result.timedOut) {
      this.logger.warn("Dry run timed out");
      return { status: DryRunStatus.Timeout };
    }
    if (result.exitCode !== 0 && parsed.failed === 0) {
      const failureDetails = this.formatInspectorFailureDetails(testHierarchy);
      const messageParts = [`Bun test process failed with exit code ${result.exitCode}`];
      if (failureDetails) {
        messageParts.push(failureDetails);
      }
      messageParts.push(result.stderr);
      return {
        status: DryRunStatus.Error,
        errorMessage: messageParts.join(`
`)
      };
    }
    return null;
  }
  formatInspectorFailureDetails(testHierarchy) {
    const failedTests = testHierarchy.filter((t) => t.type === "test" && t.status === "fail");
    if (failedTests.length === 0) {
      return "";
    }
    const listed = failedTests.slice(0, MAX_DRY_RUN_FAILURE_TESTS_LISTED);
    const lines = listed.map((t) => {
      const message = t.error?.message ?? "no error message captured";
      let line = `  - ${t.fullName}: ${message}`;
      if (t.error?.stack) {
        const indentedStack = t.error.stack.split(`
`).map((stackLine) => `    ${stackLine}`).join(`
`);
        line += `
${indentedStack}`;
      }
      return line;
    });
    const remaining = failedTests.length - listed.length;
    if (remaining > 0) {
      lines.push(`  ...and ${remaining} more`);
    }
    return `${failedTests.length} test(s) reported failed via Bun's inspector (stdout/stderr recap may be truncated or missing):
${lines.join(`
`)}`;
  }
  warnOnUnidentifiedDryRunFailure(result, parsed, tests) {
    if ((result.exitCode !== 0 || parsed.failed > 0) && !tests.some((t) => t.status === TestStatus.Failed)) {
      this.logger.warn("Bun exited with code %s and its console output reported %d failed test(s), " + "but no failing test could be identified from inspector or console data. " + "An unhandled error firing between tests (e.g. a rejected fire-and-forget " + `promise) is a likely cause. Last 500 chars of stderr:
%s`, String(result.exitCode), parsed.failed, result.stderr.slice(-500));
    }
  }
  checkCompletenessGate(executionOrder, testHierarchy, parsed, rawKeyCount, orphanedKeyCount, wasClosedUnexpectedly, tests, closeInfo, stderr) {
    if (tests.some((t) => t.status === TestStatus.Failed)) {
      return null;
    }
    const testMap = new Map(testHierarchy.map((t) => [t.id, t]));
    const nonSkippedExecutionCount = executionOrder.filter((id) => {
      const status = testMap.get(id)?.status;
      return status !== "skip" && status !== "todo";
    }).length;
    const consoleTotal = parsed.summaryPassed + parsed.summaryFailed;
    const shortfall = consoleTotal - nonSkippedExecutionCount;
    const signalA = consoleTotal > 0 && shortfall > EXECUTION_SHORTFALL_ABS_FLOOR && shortfall / consoleTotal > EXECUTION_SHORTFALL_RATIO_THRESHOLD;
    const signalB = orphanedKeyCount > ORPHANED_KEY_ABS_FLOOR;
    const signalC = parsed.summaryFailed > 0;
    if (!signalA && !signalB && !signalC) {
      return null;
    }
    const reasons = [];
    if (signalA) {
      reasons.push(`console reported ${consoleTotal} test(s) (pass+fail) but the inspector's execution order ` + `contains only ${nonSkippedExecutionCount} non-skipped test(s) (shortfall ${shortfall})`);
    }
    if (signalB) {
      reasons.push(`${orphanedKeyCount} of ${rawKeyCount} coverage key(s) could not be paired with any inspector test (orphaned)`);
    }
    if (signalC) {
      reasons.push(`bun's console summary reported ${parsed.summaryFailed} failing test(s), but none of them could be ` + "attributed to an individual test — a whole spec file that fails to load (e.g. an unresolvable " + `import) produces exactly this shape. Last 500 chars of stderr:
${stderr.slice(-500)}`);
    }
    if (wasClosedUnexpectedly) {
      const closeDetail = closeInfo.code === undefined ? "close code/reason not captured" : `close code=${closeInfo.code} reason=${JSON.stringify(closeInfo.reason ?? "")} wasClean=${String(closeInfo.wasClean)}, ${String(closeInfo.msFromLastFrameToClose)}ms after the last received frame`;
      reasons.push(`the inspector WebSocket closed unexpectedly before this data could be fully drained (${closeDetail})`);
    }
    const errorMessage = "stryker-bun-runner: dry run data-completeness check failed — " + `${reasons.join("; ")}. This indicates the Bun inspector event stream may have been ` + "truncated mid-run; proceeding would risk silently " + "corrupted coverage attribution, so this dry run is being reported as an error instead of " + "Complete, and the test registry has NOT been persisted.";
    this.logger.error("%s", errorMessage);
    return {
      status: DryRunStatus.Error,
      errorMessage
    };
  }
  async collectAndRemapCoverage(testHierarchy, executionOrder) {
    const testMap = new Map(testHierarchy.map((t) => [t.id, t]));
    if (!this.coverageFilePath) {
      return { coverage: undefined, inspectorIdToProjectFile: new Map, rawKeyCount: 0, orphanedKeyCount: 0 };
    }
    const [rawCoverage, lateHits] = await Promise.all([
      collectCoverage(this.coverageFilePath, this.logger),
      collectLateHits(this.coverageFilePath, this.logger)
    ]);
    await cleanupCoverageFile(this.coverageFilePath);
    if (!rawCoverage) {
      return { coverage: undefined, inspectorIdToProjectFile: new Map, rawKeyCount: 0, orphanedKeyCount: 0 };
    }
    const { coverage, inspectorIdToProjectFile, counterKeyToTestName, rawKeyCount, orphanedKeyCount } = mapCoverageToInspectorIds(rawCoverage, executionOrder, testMap, this.logger);
    if (lateHits.length > 0) {
      this.emitCoverageBleedWarnings(lateHits, counterKeyToTestName);
    }
    return { coverage, inspectorIdToProjectFile, rawKeyCount, orphanedKeyCount };
  }
  emitCoverageBleedWarnings(lateHits, counterKeyToTestName) {
    const listed = lateHits.slice(0, MAX_COVERAGE_BLEED_WARNINGS);
    for (const { testId, mutantIds } of listed) {
      const testName = counterKeyToTestName.get(testId) ?? testId;
      this.logger.warn("mutant coverage was recorded between tests, after '%s' completed — likely fire-and-forget async work " + "leaking past the test boundary (or beforeAll/fixture code running between tests); attribution for %d " + "mutant(s) may be wrong (mutant IDs: %s)", testName, mutantIds.length, mutantIds.join(", "));
    }
    const remaining = lateHits.length - listed.length;
    if (remaining > 0) {
      this.logger.warn("...and %d more coverage-bleed warning(s) suppressed", remaining);
    }
  }
  buildLocalTestFilterIndex(testFilter) {
    const localRegistry = new Set(testFilter);
    const localSuffixRe = / \[\d+\]$/;
    const localBaseIndex = new Map;
    for (const id of localRegistry) {
      const base = localSuffixRe.test(id) ? id.replace(localSuffixRe, "") : id;
      const bucket = localBaseIndex.get(base);
      if (bucket) {
        bucket.push(id);
      } else {
        localBaseIndex.set(base, [id]);
      }
      if (base !== id) {
        localBaseIndex.set(id, [id]);
      }
    }
    return { localRegistry, localBaseIndex };
  }
  resolveKilledBy(rawFailedNames, localRegistry, localBaseIndex, mutantId) {
    const killedBySet = new Set;
    const unresolved = new Set;
    for (const name of rawFailedNames) {
      if (localRegistry.has(name)) {
        killedBySet.add(name);
        continue;
      }
      const localBucket = localBaseIndex.get(name);
      if (localBucket) {
        this.logger.debug('Expanded killedBy base name "%s" → %d local registry IDs for mutant %s', name, localBucket.length, mutantId);
        for (const id of localBucket) {
          killedBySet.add(id);
        }
        continue;
      }
      if (this.cachedTestNames?.has(name)) {
        killedBySet.add(name);
        continue;
      }
      const instanceBucket = this.baseNameIndex?.get(name);
      if (instanceBucket) {
        this.logger.debug('Expanded killedBy base name "%s" → %d instance registry IDs for mutant %s', name, instanceBucket.length, mutantId);
        for (const id of instanceBucket) {
          killedBySet.add(id);
        }
        continue;
      }
      unresolved.add(name);
    }
    this.warnUnresolvedKilledBy(unresolved, mutantId);
    return [...killedBySet];
  }
  warnUnresolvedKilledBy(unresolved, mutantId) {
    if (unresolved.size === 0) {
      return;
    }
    const sample = [...unresolved];
    this.logger.warn("Mutant %s: %d failed test name(s) could not be resolved to dry-run test ids and will not be recorded in killedBy — this mutant's Killed verdict will not be reusable from the incremental cache: %s%s", mutantId, unresolved.size, sample.slice(0, 5).join(", "), sample.length > 5 ? ", …" : "");
  }
  async dispose() {
    this.logger.debug("Disposing BunTestRunner");
    if (this.currentAbortController) {
      this.logger.debug("Aborting in-flight bun test child during dispose");
      this.currentAbortController.abort();
      this.currentAbortController = undefined;
    }
    if (this.preloadScriptPath) {
      this.logger.debug("Cleaning up preload script: %s", this.preloadScriptPath);
      await cleanupPreloadScript(this.preloadScriptPath);
    }
    if (this.coverageFilePath) {
      this.logger.debug("Cleaning up coverage file: %s", this.coverageFilePath);
      await cleanupCoverageFile(this.coverageFilePath);
    }
    if (this.sanitizedBunfigPath) {
      this.logger.debug("Cleaning up sanitized bunfig: %s", this.sanitizedBunfigPath);
      await cleanupSanitizedBunfig(this.sanitizedBunfigPath);
    }
    if (this.lastRegistryTmpPath) {
      try {
        await fsPromises2.unlink(this.lastRegistryTmpPath);
      } catch (err) {
        if (err.code !== "ENOENT") {
          this.logger.debug("Failed to clean registry tmp file: %s", err instanceof Error ? err.message : String(err));
        }
      }
    }
  }
}

// src/index.ts
var strykerPlugins = [
  declareClassPlugin(PluginKind.TestRunner, "bun", BunTestRunner)
];
var strykerValidationSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    bun: {
      title: "BunTestRunnerOptions",
      description: "Configuration options for the Bun test runner",
      type: "object",
      properties: {
        bunPath: {
          type: "string",
          description: 'Path to the bun executable (default: "bun")',
          default: "bun"
        },
        timeout: {
          type: "number",
          minimum: 0,
          description: "Child-process timeout in milliseconds (default: 10000). Controls how long the entire bun test subprocess may run before being killed. Independent from the per-test timeout in bunfig.toml [test].timeout, which Bun uses to declare individual tests timed out.",
          default: 1e4
        },
        inspectorTimeout: {
          type: "number",
          minimum: 0,
          description: "Timeout for inspector connection in milliseconds (default: 5000)",
          default: 5000
        },
        env: {
          type: "object",
          description: "Additional environment variables to pass to bun test",
          additionalProperties: {
            type: "string"
          }
        },
        bunArgs: {
          type: "array",
          description: "Additional bun test flags",
          items: {
            type: "string"
          }
        },
        testFiles: {
          type: "array",
          description: "Explicit list of test file paths (relative paths preferred in Stryker context — absolute paths bypass the sandbox copy and will NOT be mutated). When provided, skips auto-discovery and uses this list verbatim. Relative paths resolve against the bun subprocess's cwd. An empty array is invalid (use undefined/omit to enable auto-discovery).",
          minItems: 1,
          items: {
            type: "string"
          }
        },
        smol: {
          type: "boolean",
          description: "Pass Bun's --smol flag to every child (smaller JavaScriptCore heap, some speed cost). Recommended on memory-constrained machines (default: false).",
          default: false
        },
        maxChildRss: {
          type: "number",
          minimum: 0,
          description: "Soft memory ceiling in bytes for each bun test child's RSS. A child exceeding this is killed and the run reported as a clean timeout for that mutant. Polled userspace check, not a kernel-enforced limit. Omit to disable."
        },
        rssCheckIntervalMs: {
          type: "number",
          minimum: 0,
          description: "Poll interval in milliseconds for the maxChildRss check (default: 1000).",
          default: 1000
        },
        maxSpawnDepth: {
          type: "number",
          minimum: 1,
          description: "Maximum `bun test` spawn nesting depth before the runner refuses to spawn (default: 1). Guards against runaway recursion when a run spawned by this runner ends up spawning another one. Raise to 2 only if your own tests drive this runner.",
          default: 1
        }
      },
      additionalProperties: false
    }
  }
};
export {
  strykerValidationSchema,
  strykerPlugins,
  BunTestRunner
};
