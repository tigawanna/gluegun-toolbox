
export type KeyStringObject = { [key: string]: string };
export interface IPackageJson {
    name: string;
    private?: boolean;
    version: string;
    type?: string;
    scripts: KeyStringObject;
    dependencies: KeyStringObject;
    devDependencies: KeyStringObject;
    // deno-lint-ignore no-explicit-any
    [key: string]: any | undefined;
}

export type TPkgType =
    | "React+Vite"
    | "React+Relay"
    | "Rakkasjs"
    | "Nextjs"
    | "Angular"
    | "Vue"
    | "Svelte"
    | "Solidjs"
    | "Qwik"
    | "Redwood"
    | "Remix"
    | "Ember"
    | "Preact"
    | "Knockout"
    | "Lit"
    | "Nuxt"
    | "SvelteKit"
    | "SolidStart"
    | "QwikCity"
    | "Others"
    | "Nodejs";
