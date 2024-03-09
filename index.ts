#!/usr/bin/env node

import tmi from "tmi.js";

const client = new tmi.Client({
  channels: ["ss_dvd"],
});

client.connect();

client.on("message", (channel: any, tags: any, message: any, self: any) => {
  console.log(`${tags["display-name"]}: ${message}`);
});
