define([
  "tuparse-shakur/parser",
  "tuparse-shakur/css",
  "tuparse-shakur/dom"
], function (parser, css, dom) {
  var rawCode = document.getElementById("rawCode"),
    parsedCode = document.getElementById("parsedCode"),
    parsedStyles = document.getElementById("parsedStyles");

  return {
    tryParse: function () {
      // summary:
      //    Try to parse the raw code into a parsed dom.
      var code = rawCode.value,
        parsed;

      parsedCode.innerHTML = "";
      parsedStyles.innerHTML = "";

      try {
        // Make it valid JSON in case they do not add quotes to everything.
        parsed = parser.parse(JSON.parse(code.replace(/\s{2,}\w+\:/g, function (match) { return match.replace(/\w+/, function (match) { return '"' + match + '"'; }) })));

        if (parsed.css) {
          parsedStyles.innerHTML = parsed.css;
        }

        if (parsed.dom) {
          parsed.dom.then(function (nodes) {
            dom.appendNodes(nodes, parsedCode);
          });
        }
      } catch (e) {
        console.log(">>>>>", e, e.message);
        parsedCode.innerHTML = "There was an error parsing this code.";
      }
    }
  };
});