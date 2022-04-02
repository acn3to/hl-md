function createUrlsArray(linksArray) {
  return linksArray.map((linkObject) => Object.values(linkObject).join());
}

export default function validateUrl(linksArray) {
  return createUrlsArray(linksArray);
}
