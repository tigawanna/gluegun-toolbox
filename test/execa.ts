import { execa,Options } from 'execa';

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


run('node', ['--version']).then((res) => {
  console.log(res?.command)
  console.log(res?.stdout)
}).catch((error) => {
  console.log("error", error)
})
