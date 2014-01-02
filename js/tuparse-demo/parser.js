define([
  "tuparse-shakur/parser",
  "tuparse-shakur/css",
  "tuparse-shakur/dom",
  "jquery"
], function (parser, css, dom) {
  return {
    tryParse: function () {
      // summary:
      //    Try to parse the raw code into a parsed dom.
      var rawCode = document.getElementById("rawCode"),
        parsedCode = document.getElementById("parsedCode"),
        parsedStyles = document.getElementById("parsedStyles"),
        moduleMid = document.getElementById("moduleMid"),
        moduleDefinition = document.getElementById("moduleDefinition"),
        code = $.trim(rawCode.value),
        mid = $.trim(moduleMid.value),
        definition = $.trim(moduleDefinition.value),
        parsed, module;

      parsedCode.innerHTML = "";
      parsedStyles.innerHTML = "";

      if (code) {
        try {
          if (mid && definition) {
            // Clear require of the cache
            require.undef(mid);

            // Assume the user has not supplied their own name for now.
            // Hard code the mid into the defition, so that require can use it.
            module = new Function(definition.replace(/^define\(/, "define(\"" + mid + "\","));
            module();
          }

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
    }
  };
});