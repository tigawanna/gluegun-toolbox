import {GluegunPrint} from "./print-types.ts";
import kleur from "kleur";

/**
 * Print a blank line.
 */
function newline() {
  console.log("");
}

/**
 * Prints a divider line
 */
function divider() {
  console.log(kleur.yellow("---------------------------------------------------------------"));
}

export function error(message: string, ...content: any) {
  console.log(kleur.red(message), content);
}

export function success(message: string, ...content: any) {
  console.log(kleur.green(message), content);
}

export function warning(message: string, ...content: any) {
  console.log(kleur.yellow(message), content);
}

export function info(message: string, ...content: any) {
  console.log(kleur.blue(message), content);
}

function fancy(message: any): void {
  console.log(message);
}

function debug(message: string, title = "DEBUG"): void {
  const topLine = `vvv -----[ ${title} ]----- vvv`;
  const botLine = `^^^ -----[ ${title} ]----- ^^^`;

  console.log(kleur.magenta(topLine));
  console.log(message);
  console.log(kleur.magenta(botLine));
}

function highlight(message: string): void {
  console.log(kleur.bold(message));
}

function muted(message: string): void {
  console.log(kleur.bgCyan(message));
}

function spin(config?: string | object): any {
  return require("ora")(config || "").start();
}

const checkmark = kleur.green("✔︎");
const xmark = kleur.red("ⅹ");

const print: GluegunPrint = {
  newline,
  divider,
  fancy,
  info,
  error,
  warning,
  debug,
  success,
  highlight,
  muted,
  checkmark,
  xmark,
};

export { print, GluegunPrint };
