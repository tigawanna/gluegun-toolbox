import kleur from "kleur";
import { tryCatchWrapper } from "../async/try-catch.ts";
import { readFileAsync } from "../fs/crud-files.ts";
import { IPackageJson, TPkgType } from "./framework-tool-types.ts";
export type FrameworkType = Partial<TPkgType>;
export function frameworkType(pkg: IPackageJson): FrameworkType {
  if (pkg.devDependencies?.rakkasjs) {
    return "Rakkasjs"
  } else if (pkg.dependencies?.next) {
    return "Nextjs"
  } else if (pkg.dependencies?.react && pkg.dependencies?.["react-relay"]) {
    return "React+Relay";
  } else if (pkg.devDependencies?.vite && pkg.dependencies?.react) {
    return "React+Vite";
  } 
  return "Others"
}

export async function checkFramework(){
return tryCatchWrapper(async()=>{
    const pkg_json = await readFileAsync("./package.json");
    if(pkg_json){
      const framework = frameworkType(JSON.parse(pkg_json))
      console.log(kleur.green(framework+" detected"))
      return framework
    }

})
} 
