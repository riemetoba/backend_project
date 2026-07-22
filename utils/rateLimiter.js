const { rateLimit, MINUTE } = require("express-rate-limit");

// const limiter = rateLimit({
//   windowMs: 15 * MINUTE,
//   limit: 100,
//   standardHeaders: "draft-8",
//   legacyHeaders: false,
//   ipv6Subnet: 56,
// });

const createLimiter = ({ windowMs, limit, message }) => {
  return rateLimit({
    windowMs,
    limit,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    ipv6Subnet: 56,
    message,
  });
};

const generalLimiter = createLimiter({
  windowMs: 15 * MINUTE,
  limit: 100,
});

module.exports = {
  createLimiter,
  generalLimiter,
};
