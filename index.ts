// installation guide 
// create a new directory mkdir typescript-project
// change your current directory to that project
// install typescript using npm i typescript --save-dev
// create the typescript config file npx tsc --init
// uncomment the outDir section and set it to ./build
// create a index.ts or any file and write your ts code
// npx tsc will compile or you can go to watch mode by
// using npx tsc -w


const world = 'world';

export function hello(who: string = world): string{
    return `Hello ${who}!` ; 
}