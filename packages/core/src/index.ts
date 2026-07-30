import jsObfuscator from "javascript-obfuscator";
import { minifySync } from "oxc-minify";

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
