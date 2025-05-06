import { newToken, Token, token } from "./data/Token.mjs";
import { TokenType } from "./data/TokenType.mjs";

/**
 * Parses a string of Markdown into a list of tokens
 * @param {string} inputStr
 * @returns {[Token]}
 */
export const parseMarkdown = (inputStr) => {
  const blocks = inputStr.split("\n");
  let tokens = [];
  blocks.forEach((block) => {
    tokens = [...tokens, findBlockType(block)];
  });
  return tokens;
};

/**
 * Finds the type of the Markdown block
 * @param {string} block
 * @returns {Token}
 */
const findBlockType = (block) => {
  if (block.startsWith("# ") && block.length >= 2) {
    return newToken(TokenType.h1, block.slice(1).trim());
  }
  if (block.startsWith("#") && block.length === 1) {
    return newToken(TokenType.h1, "");
  }
};
