#!/usr/bin/env node

const path = require("path");
const Service = require("@vue/cli-service/lib/Service");

const service = new Service(path.join(__dirname, ".."));

service
  .run("serve", {
    port: 9990,
    open: true,
  })
  .catch((err) => {
    error(err);
    process.exit(1);
  });
