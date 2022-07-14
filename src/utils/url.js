const url = {
  serializeSearchParams(searchParams) {
    let searchObj = {};
    const string = searchParams.toString().trim();
    if (!string) return searchObj;
    searchObj = JSON.parse(
      '{"' +
        decodeURI(searchParams.toString())
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
    for (let key in searchObj) {
      if (searchObj[key]) {
        searchObj[key] = searchObj[key] === "true";
      }
    }
    return searchObj
  },
};
export default url;
