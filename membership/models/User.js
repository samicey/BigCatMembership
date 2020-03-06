const assert = require("assert");
const utility = require("../lib/utility");
function user(args) {
  assert.ok(args.email, "Email is required");
  let user = {};
  user.email = args.email;
  user.status = args.status || "pending";
  user.createdAt = args.createdAt || new Date();
  user.signInCount = args.signInCount || 0;
  user.lastLoginAt = args.lastLogin || new Date();
  user.currentLoginAt = args.currentLoginAt || new Date();
  user.authenticationToken =
    args.authenticationToken || utility.randomString(18);
  return user;
}

module.exports = user;
