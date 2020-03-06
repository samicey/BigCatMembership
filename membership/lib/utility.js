exports.randomString = function(stringLength) {
  stringLength = stringLength || 12;
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < stringLength.length; i++) {
    let rnum = Math.floor(Math.random() * chars.length);
    result += chars.substring(rnum, rnum + 1);
  }
  return result;
};
