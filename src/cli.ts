import { cac } from "cac";
import type { GlobalCLIOptions } from "dep-types/cli";
const cli = cac("sci");

const cleanOptions = (option: GlobalCLIOptions) => {
  const re = { ...option };
  delete re["--"];
  return re;
};

cli
  .command("test", "Test for production")
  .option("--demo", "Test for demo project")
  .action(async (root, option: GlobalCLIOptions) => {
    cleanOptions(option);
    if (root.demo) {
      console.log(`------------------------ The starting point of the cli script ------------------------\n`);
      const { add } = await import(
        "./index"
      );
      console.log(add(1, 1));
    }
  });


cli.parse();
