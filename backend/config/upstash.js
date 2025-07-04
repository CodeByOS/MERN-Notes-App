require("dotenv").config();
const { Ratelimit } = require("@upstash/ratelimit");
const { Redis } = require("@upstash/redis");

//* Create a ratelimiter that allow 100 requests per 60 seconds
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "60 s")
})

module.exports = ratelimit;