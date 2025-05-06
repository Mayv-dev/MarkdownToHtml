import { TokenType } from "./TokenType.mjs";

/**
 * Typedef for Token
 * @typedef {Object} Token
 * @property {TokenType} type
 * @property {string} content
 */

/**
 * Returns a new Token
 * @param {TokenType} type
 * @param {string} content
 * @returns {Token}
 */
export const newToken = (type, content) => {
  return { type: type, content: content };
};
