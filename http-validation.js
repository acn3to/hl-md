import fetch from "node-fetch";

async function checkStatus(urlArray) {
  const statusArray = await Promise.all(
    urlArray.map(async (url) => {
      const res = await fetch(url);
      return res.status;
    })
  );
  return statusArray;
}

function createUrlsArray(linksArray) {
  return linksArray.map((linkObject) => Object.values(linkObject).join());
}

export default async function validateUrl(linksArray) {
  const links = createUrlsArray(linksArray);
  const linksStatus = await checkStatus(links);
  return linksStatus;
}
