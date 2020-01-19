const { exec } = require("child_process");

const instance = exec("yarn watch");
instance.stdout.on("data", line => {
  console.log(line);
  if (line.includes("tasks success")) {
    console.log(line);
    const watchExample = exec("yarn watch:example");
    watchExample.stdout.on("data", res => {
      console.log(res);
    });
  }
});
