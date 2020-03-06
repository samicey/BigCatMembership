const Registration = require("../lib/registration");
const should = require("should");

describe("Registration ", function() {
  // happy path
  describe("a valid application", function() {
    let regResult = {};
    before(function() {
      regResult = new Registration({
        email: "sammy@test.com"
      });
    });
    it("is successful", function() {
      regResult.success.should.equal(true);
    });
    it("creates a user");
    it("creates a log entry");
    it("sets the user's status to approved");
    it("offers a message");
  });

  describe("an empty or null email", function() {
    it(" is not successful");
    it("tells user that email is required");
  });

  describe("empty or null password", function() {
    it(" is not successful");
    it("tells user that password is required");
  });

  describe("password and confirmation mismatch", function() {
    it(" is not successful");
    it("tells user that password and confirmation does not match");
  });

  describe("email already exists", function() {
    it(" is not successful");
    it("tells user that email already exists");
  });
});
