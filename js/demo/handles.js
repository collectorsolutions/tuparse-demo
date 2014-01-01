define([
  "./parser",
  "behave"
], function (parser) {
  return {
    initializeRawCode: function (node) {
      var editor = new Behave({
        textarea: node,
        tabSize: 2
      });
    },
    test: function () {
      // summary:
      //    Simple test method.
      console.log("successful test");
    },
    parseCode: parser.tryParse,
    clear: function () {
      // summary:
      //    Clears everything.
      document.getElementById("rawCode").value = "";
      document.getElementById("parsedCode").innerHTML = "";
    }
  }
});