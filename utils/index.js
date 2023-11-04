export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    // var pattern = new RegExp(
    //   "^(https?:\\/\\/)?" + // protocol
    //     "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    //     "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    //     "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    //     "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    //     "(\\#[-a-z\\d_]*)?$",
    //   "i"
    // ); // fragment locator
    // return !!pattern.test(url);
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};
