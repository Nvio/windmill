const program = require("commander");

program
  .command("create <app-name>")
  .description("generate a windmill project")
  .action((name) => {
    require("./create")(name);
  });

program
  .command("dev")
  .description("serve a windmill project in a development environment")
  .action(require("./dev"));

program.parse(process.argv);
