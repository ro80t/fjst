import jsObfuscator from "javascript-obfuscator";
import { minifySync } from "oxc-minify";
import { transformSync } from "oxc-transform";

/**
 *
 * this func is wrapper of javascript-obfuscator.
 * I'll make it myself **someday**.
 *
 */
export function jsObf(src: string) {
  return jsObfuscator.obfuscate(src).getObfuscatedCode();
}

/**
 *
 * this func is wrapper of oxc-minify.
 *
 */
export function jsMinify(src: string, filepath: string) {
  return minifySync(filepath, src).code;
}

/**
 *
 * this func is wrapper of oxc-transform.
 * returns a transpiler that downlevels JavaScript to the given target(s).
 *
 */
export function jsTranspile(target: string | string[]) {
  return (src: string, filepath: string) => transformSync(filepath, src, { target }).code;
}
