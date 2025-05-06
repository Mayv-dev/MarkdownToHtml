import { expect, test } from "vitest";
import { newToken } from "../src/data/Token.mjs";
import { TokenType } from "../src/data/TokenType.mjs";
import { parseMarkdown } from "../src/MarkdownParser.mjs";

test("Create a token with type:h1", () => {
  const str = "#";
  const exp = [newToken(TokenType.h1, "")];

  expect(parseMarkdown(str)).toEqual(exp);
});

test("Create a token with type:h1. Ignores first space.", () => {
  const str = "# ";
  const exp = [newToken(TokenType.h1, "")];

  expect(parseMarkdown(str)).toEqual(exp);
});

test("Create a token with type:h1 and content.", () => {
  const str = "# header1";
  const exp = [newToken(TokenType.h1, "header1")];

  expect(parseMarkdown(str)).toEqual(exp);
});

test("Create a token with type:h1 and content. Ignores trims whitespace.", () => {
  const str = "#    header1   ";
  const exp = [newToken(TokenType.h1, "header1")];

  expect(parseMarkdown(str)).toEqual(exp);
});
