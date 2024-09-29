"use strict";
// installation guide 
// create a new directory mkdir typescript-project
// change your current directory to that project
// install typescript using npm i typescript --save-dev
// create the typescript config file npx tsc --init
// uncomment the outDir section and set it to ./build
// create a index.ts or any file and write your ts code
// npx tsc will compile or you can go to watch mode by
// using npx tsc -w
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = hello;
const world = 'world';
function hello(who = world) {
    return `Hello ${who}!`;
}
