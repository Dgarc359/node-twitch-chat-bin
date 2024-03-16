#!/usr/bin/env node

import chalk from "chalk";
import tmi from "tmi.js";

const colors = ["blue", "red", "yellow", "green", "magenta", "cyan"] as const;

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

const client = new tmi.Client({
  channels: ["ss_dvd"],
});

client.connect();

client.on("message", (channel: any, tags: any, message: any, self: any) => {
  console.log(
    chalk[getRandomColor()](`${tags["display-name"]}`) + `: ${message}`,
  );
});
