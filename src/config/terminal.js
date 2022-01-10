import chalk from 'chalk';

// @TODO: Any guesses about what's missing?
export default {
  table: {
    leftPad: 2,
    columns: [{ field: "position", name: chalk.cyan("Position") },
    { field: "expectation", name: chalk.magenta("Expectation (BRL)") },
    { field: "conversion01", name: chalk.cyan("USD") },
    { field: "conversion02", name: chalk.cyan("EUR") },
    { field: "conversion03", name: chalk.cyan("RUB") }],
  },
};
