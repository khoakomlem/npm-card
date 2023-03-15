#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:khoakomlem@gmail.com");
          console.log("\nDone, see you soon.\n");
        }
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        }
      }
    ]
  }
];

const data = {
  name: chalk.bold.green("        Dau Van Dang Khoa"),
  handle: chalk.white("@khoakomlem"),
  work: `${chalk.white("Developer at")} ${chalk
    .hex("#341f7c")
    .bold("KB2A")}`,
  blog: chalk.gray("https://facebook.com/") + chalk.whiteBright("khoakomlem"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("khoakomlem"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~khoakomlem"),
  github: chalk.gray("https://github.com/") + chalk.green("khoakomlem"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("khoakomlem"),
  web: chalk.cyan("https://about.me/khoakomlem"),
  npx: chalk.red("npx") + " " + chalk.white("khoakomlem"),
  wakatime: chalk.gray("https://wakatime.com/") + chalk.yellow("@khoakomlem"),

  labelWork: chalk.white.bold("       Work:"),
  labelBlog: chalk.white.bold("     Medium:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
  labelWakatime: chalk.white.bold("   Wakatime:")
};

const me = boxen(
  [
    `${data.name} / ${data.handle}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelnpm}  ${data.npm}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWakatime}  ${data.wakatime}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic(
      "I'm curious, enthusiastic, interesting in mystical philosophy."
    )}`,
    `${chalk.italic("The rest of the time I write code that others can read.")}`
  ].join("\n"),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: "single",
    borderColor: "green"
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )} on the links above`,
  '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());
