module.exports = {
  placeholderName: "HelloWorld",
  titlePlaceholder: "Hello World",
  templateDir: "./template",
  // Path to script, which will be executed after initialization process, but before installing all the dependencies specified in the template. This script runs as a shell script but you can change that (e.g. to Node) by using a shebang (see example custom template).
  postInitScript: './postInitScript.js',
};
