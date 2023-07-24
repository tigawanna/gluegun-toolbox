import { execa,Options } from 'execa';
import { RmOptions, existsSync } from "fs"
import kleur from 'kleur';


export async function run(command: string, args?: readonly string[] | undefined, options?: Options<string> | undefined) {
try {
const res = await execa(command, args, options)
console.log(res?.command)
console.log(res?.stdout)
return res
} catch (error) {
 console.log("error", error)   
}
}




export async function dynamicFileLad(path) {
  if (existsSync(path)) {
    try {
      const path_file = await import(path);
      console.log(kleur.green(path_file));
      return path_file;
    } catch (error) {
      console.log(kleur.bold("Error dynamically importing:"));
      console.log(kleur.red(error.message));
      throw error;
    }
  } else {
    console.log(kleur.red(path + " file not found"));
  }
}




// dynamicFileLad('../../package.json').then((res) => {
// console.log("success reading dynamic import == ",res)
// }).catch((error) => {
//   console.log("error", error)
// })

async function dynamic(){
  const pkg = await import('../package.json');
  const tw_pkg = await import('../tsup.config');
  
  
  return {pkg, tw_pkg}
}

dynamic().then((res) => {
  // console.log("success reading dynamic import == ",res)
  console.log(res.tw_pkg.default)
}).catch((error) => {
  console.log("error", error)
})
