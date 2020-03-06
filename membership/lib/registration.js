let RegResult = function() {
  let result = {
    success: false,
    message: null,
    user: null
  };
  return result;
};

module.exports = function applyFormembership(args) {
  let regResult = new RegResult();
  regResult.success = true;
  regResult.message = "Welcome!";
  return regResult;
};
