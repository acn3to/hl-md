import fetch from "node-fetch";

function handleError(err) {
  throw new Error(err.message);
}

async function checkStatus(urlArray) {
  try {
    const statusArray = await Promise.all(
      urlArray.map(async (url) => {
        const res = await fetch(url);
        return res.status;
      })
    );
    return statusArray;
  } catch (err) {
    handleError(err);
  }
}

function createUrlsArray(linksArray) {
  return linksArray.map((linkObject) => Object.values(linkObject).join());
}

export default async function validateUrl(linksArray) {
  const links = createUrlsArray(linksArray);
  const linksStatus = await checkStatus(links);
  const result = linksArray.map((object, index) => ({
    ...object,
    status: linksStatus[index],
  }));
  return result;
}
