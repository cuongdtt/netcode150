const chokidar = require("chokidar");
const { spawn } = require("child_process");

const watcher = chokidar.watch("**/*.js", {
  ignored: ["node_modules/**", "pnpm-lock.yaml"],
  persistent: true,
  ignoreInitial: true,
});

console.log(
  "🔍 Watching for changes in .js files (excluding .test.js files)..."
);
console.log("Press Ctrl+C to stop watching");

watcher.on("ready", () => {
  console.log("🎯 Watcher is ready and watching for changes...");
});

watcher.on("all", (event, path) => {
  console.log(`[DEBUG] Event: ${event} on ${path}`);
});

watcher.on("change", (filePath) => {
  console.log(`\n📝 File changed: ${filePath}`);
  console.log("🧪 Running related tests...");

  const jestProcess = spawn("pnpm", ["jest", "--findRelatedTests", filePath], {
    stdio: "inherit",
    shell: true,
  });

  jestProcess.on("close", (code) => {
    if (code === 0) {
      console.log("✅ Tests passed!\n");
    } else {
      console.log("❌ Tests failed!\n");
    }
  });
});

watcher.on("error", (error) => {
  console.error("Error:", error);
});
