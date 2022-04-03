import getFile from "../index.js";

const resultsArray = [
  {
    "Definition file": "https://github.com/markdown-it/markdown-it-deflist",
  },
];

describe("getFile::", () => {
  it("Should return a function", () => {
    expect(typeof getFile).toBe("function");
  });
  it("Should return array with results", async () => {
    const result = await getFile("./tests/files/markdown-syntax.md");
    expect(result).toEqual(resultsArray);
  });
  it('Should return message: "There is no links"', async () => {
    const result = await getFile("./tests/files/markdown-syntax-no-links.md");
    expect(result).toBe("There is no links");
  });
});
