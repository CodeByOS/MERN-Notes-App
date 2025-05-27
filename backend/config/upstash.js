require("dotenv").config();
const { Ratelimit } = require("@upstash/ratelimit");
const { Redis } = require("@upstash/redis");

//* Create a ratelimiter that allow 10 requests per 20 seconds
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "20 s")
})

module.exports = ratelimit;