const assert = require("assert");

const log = function(args) {
  assert.ok(
    args.subject && args.entry && args.userId,
    "Need subject, entry and user Id"
  );
  const log = {};
  log.subject = args.subject;
  log.entry = args.entry;
  log.createdAt = new Date();
  log.userId = args.userId;

  return log;
};
