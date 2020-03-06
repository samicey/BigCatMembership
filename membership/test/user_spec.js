const should = require("should");
const User = require("../models/User");

describe("User", function() {
  describe("defaults", function() {
    let user = {};
    before(function() {
      user = new User({ email: "sammy@test.com" });
    });

    it("email is sammy@test.com", function() {
      user.email.should.equal("sammy@test.com");
    });
    it("has an authentication token", function() {
      user.authenticationToken.should.be.defined;
    });
    it("has a pending status", function() {
      user.status.should.equal("pending");
    });
    it("has a created date ", function() {
      user.createdAt.should.be.defined;
    });
    it("has a signInCount of 0", function() {
      user.signInCount.should.equal(0);
    });
    it("has lastLogin", function() {
      user.lastLoginAt.should.be.defined;
    });
    it("has currentLogin", function() {
      user.currentLoginAt.should.be.defined;
    });
  });
});
