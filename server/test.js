const dns = require("dns");

dns.resolveSrv("_mongodb._tcp.cluster0.s38xdoq.mongodb.net", (err, records) => {
  if (err) {
    console.error("DNS Error:", err);
  } else {
    console.log("SRV Records:");
    console.log(records);
  }
});