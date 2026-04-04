import jsObfuscator from "javascript-obfuscator";

/**
 *
 * this func is wrapper of javascript-obfuscator.
 * I'll make it myself **someday**.
 *
 */
export function jsObf(src: string) {
  return jsObfuscator.obfuscate(src).getObfuscatedCode();
}
