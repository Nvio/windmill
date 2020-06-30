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
  .action(() => {
    // Run client
    require("@windmillcss/client/bin/windmill-client");

    // Run server
    require("@windmillcss/server/bin/windmill-server");
  });

program.parse(process.argv);
