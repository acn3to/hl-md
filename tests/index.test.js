import getFile from "../index.js";

const resultsArray = [
  {
    "Link to Status 200 Test": "https://httpstat.us/200",
  },
  {
    "Link to Status 404 Test": "https://httpstat.us/404",
  },
];

describe("getFile::", () => {
  it("Should return a function", () => {
    expect(typeof getFile).toBe("function");
  });
  it("Should return array with results", async () => {
    const result = await getFile("./tests/files/text1.md");
    expect(result).toEqual(resultsArray);
  });
  it('Should return message: "There is no links"', async () => {
    const result = await getFile("./tests/files/text2.md");
    expect(result).toBe("There is no links");
  });
});
