import { Spinner } from "@topcli/spinner";
import kleur from "kleur";

export async function loader<T>(promise: Promise<T>,title?:string): Promise<T> {
    const spinner = new Spinner().start("Start working!");
    spinner.text = title ? title +" running...":"task running..."
    try {
        const result = await promise;
        spinner.succeed(kleur.green("✔︎"));
        return result;
    } catch (error:any) {
        spinner.failed(kleur.red(title+"taks failed"));
        console.log(kleur.red(error.messge))
    throw error;
    }
}
