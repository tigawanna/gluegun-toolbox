import { GluegunStrings } from "./strings-types.js";
import { is } from "@/utils.ts";
import { camel, snake, dash} from "radash";
import pluralize_fn from "pluralize"
      

const camelCase = camel;
const snakeCase = snake;
const kebabCase = dash;

/**
 * Converts a string to uppercase.
 *
 * @param {string} value - The string to convert.
 * @return {string} - The converted string in uppercase.
 */
function upperCase(value: string): string {
  return value.toUpperCase();
}

/**
 * Converts a string to lowercase.
 *
 * @param {string} args - The string to be converted.
 * @return {string} The lowercase version of the input string.
 */
function lowerCase(args: string): string {
  return args.toLowerCase();
}

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} value - The string to capitalize.
 * @return {string} - The capitalized string.
 */
function upperFirst(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * Converts the first character of a string to lowercase.
 *
 * @param {string} args - The string to convert.
 * @return {string} - The converted string.
 */
function lowerFirst(args: string) {
  return args.charAt(0).toLowerCase() + args.slice(1);
}

/**
 * Pads a given word with a specified length of characters on both sides.
 *
 * @param {string} word - The word to pad.
 * @param {number} length - The desired length of the padded word.
 * @param {string} [chars] - The characters to use for padding. If not provided, spaces will be used.
 * @return {string} - The padded word.
 */
function pad(word: string, length: number, chars?: string) {
  const padding = chars ?? " ".repeat(length);
  return padding + word + padding;
}

/**
 * Pads the start of a string with a specified character or space to a specified length.
 *
 * @param {string} word - The string to pad.
 * @param {number} length - The target length of the padded string.
 * @param {string} [chars] - The character to use for padding. Defaults to a space.
 * @return {string} - The padded string.
 */
function padStart(word: string, length: number, chars?: string) {
  const padding = chars ?? " ".repeat(length);
  return padding + word;
}

/**
 * Pads the end of a string with a specified character or a space.
 *
 * @param {string} word - The string to pad.
 * @param {number} length - The target length of the string.
 * @param {string} [chars] - The character to pad the string with. Defaults to a space.
 * @return {string} - The padded string.
 */

/**
 * Pads the end of a word with a specified character or space to a specified length.
 *
 * @param {string} word - The word to be padded.
 * @param {number} length - The desired length of the padded word.
 * @param {string} [chars] - The character to be used for padding. Defaults to space.
 * @return {string} - The padded word.
 */
function padEnd(word: string, length: number, chars?: string) {
  const padding = chars ?? " ".repeat(length);
  return word + padding;
}
/**
 * Repeats a given source string a specified number of times.
 *
 * @param {string} sourceString - The string to be repeated.
 * @param {number} numberOfTimes - The number of times the string should be repeated.
 * @return {string} The repeated string.
 */

/**
 * Repeats a given source string a specified number of times.
 *
 * @param {string} sourceString - The string to be repeated.
 * @param {number} numberOfTimes - The number of times the string should be repeated.
 * @return {string} The resulting string after repeating the source string.
 */
function repeat(sourceString: string, numberOfTimes: number) {
  return sourceString.repeat(numberOfTimes);
}

/**
 * Converts a given word to start case.
 *
 * @param {string} word - The word to be converted.
 * @return {string} The word in start case.
 */
function startCase(word: string) {
  const words = word.split(" ");
  return words
    .map((wrd) => {
      return wrd.charAt(0).toUpperCase() + wrd.slice(1);
    })
    .join(" ");
}

/**
 * Trims whitespace from both ends of a string.
 *
 * @param {string} sourceString - The string to be trimmed.
 * @param {string} [chars] - The characters to be trimmed. Defaults to whitespace.
 * @return {string} The trimmed string.
 */
function trim(sourceString: string) {
  return sourceString.trim();
}
/**
 * Strips whitespace from the start of a string.
 */
function trimStart(sourceString: string) {
  return sourceString.trimStart();
}
/**
 * Strips whitespace from the end of a string.
 */
function trimEnd(sourceString: string) {
  return sourceString.trimEnd();
}

const pluralize = (word: string, count?: number, inclusive?: boolean) =>
  pluralize_fn(word, count, inclusive);
pluralize.plural = (word: string) => pluralize_fn.plural(word);
pluralize.singular = (word: string) => pluralize_fn.singular(word);

pluralize.addPluralRule = (rule: string | RegExp, replacement: string) =>
  pluralize_fn.addPluralRule(rule, replacement);
pluralize.addSingularRule = (rule: string | RegExp, replacement: string) =>
  pluralize_fn.addSingularRule(rule, replacement);

pluralize.addIrregularRule = (single: string, plural: string) =>
  pluralize_fn.addIrregularRule(single, plural);
pluralize.addUncountableRule = (word: string | RegExp) =>
  pluralize_fn.addUncountableRule(word);
pluralize.isPlural = (word: string) => pluralize_fn.isPlural(word);
pluralize.isSingular = (word: string) => pluralize_fn.isSingular(word);

/**
 * Is this not a string?
 *
 * @param value The value to check
 * @return True if it is not a string, otherwise false
 */
function isNotString(value: any): boolean {
  return !is(String, value);
}

/**
 * Is this value a blank string?
 *
 * @param value The value to check.
 * @returns True if it was, otherwise false.
 */
function isBlank(value: any): boolean {
  return isNotString(value) || trim(value) === "";
}

/**
 * Returns the value it is given
 *
 * @param value
 * @returns the value.
 */
function identity(value: any): any {
  return value;
}

/**
 * Converts the value ToPascalCase.
 *
 * @param value The string to convert
 * @returns PascalCase string.
 */
function pascalCase(value: string): string {
  return upperFirst(camelCase(value));
}

export { GluegunStrings };

export const strings: GluegunStrings = {
  isNotString,
  isBlank,
  identity,
  pascalCase,
  camelCase,
  kebabCase,
  lowerCase,
  lowerFirst,
  pad,
  padEnd,
  padStart,
  repeat,
  snakeCase,
  startCase,
  trim,
  trimEnd,
  trimStart,
  upperCase,
  upperFirst,
  pluralize,
  plural: pluralize.plural,
  singular: pluralize.singular,
  addPluralRule: pluralize.addPluralRule,
  addSingularRule: pluralize.addSingularRule,
  addIrregularRule: pluralize.addIrregularRule,
  addUncountableRule: pluralize.addUncountableRule,
  isPlural: pluralize.isPlural,
  isSingular: pluralize.isSingular,
};
