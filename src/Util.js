function makeUrl(from, to, returnURL) {
  let url = to;
  if (from && !from.endsWith("/")) {
    from += "/";
  }
  try {
    if (returnURL) {
      url = new URL(to, from, null);
    } else {
      url = new URL(to, from, null).href;
    }
  } catch (e) {
    console.log(e);
  }
  return url;
}

export default {
  makeUrl,
};
