import { GluegunSystem } from "./system-types.ts";
import { head, tail, isNil } from "@/utils.js";
import { execa, Options as ExecaOptions} from 'execa';
import kleur from "kleur";

export interface Options {
  [key: string]: any;
}


/**
 * Executes a command asynchronously.
 *
 * @param {string} command - The command to be executed.
 * @param {readonly string[]} [args] - Optional arguments for the command.
 * @param {ExecaOptions<string>} [options] - Optional options for the execution.
 * @return {Promise<ExecaReturnValue<string>>} A promise that resolves to the result of the command execution.
 */
export async function run(command: string, args?: readonly string[] | undefined, options?: ExecaOptions<string> | undefined) {
  try {
    const res = await execa(command, args, options)
    console.log(kleur.green(res?.command))
    console.log(res?.stdout)
    return res
  } catch (error) {
    console.log("error", error)
  }
}




/**
 * Executes a commandline via execa.
 *
 * @param commandLine The command line to execute.
 * @param options Additional child_process options for node.
 * @returns Promise with result.
 */
async function exec(commandLine: string, options: Options = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    const args = commandLine.split(" ");
    execa(head(args), tail(args), options)
      .then((result: any) => resolve(result.stdout))
      .catch((error: any) => reject(error));
  });
}

/**
 * Starts a timer used for measuring durations.
 *
 * @return A function that when called will return the elapsed duration in milliseconds.
 */
function startTimer(): () => number {
  const started = process.uptime();
  return () => Math.floor((process.uptime() - started) * 1000); // uptime gives us seconds
}

const system: GluegunSystem = { exec, run, startTimer };

export { system, GluegunSystem };
