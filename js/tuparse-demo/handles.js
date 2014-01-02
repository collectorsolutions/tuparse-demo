define([
  "tuparse-shakur/dom",
  "./parser",
  "behave",
  "jquery"
], function (dom, parser) {
  var handles = {
    behave: function (/*Node*/node) {
      // summary:
      //    Wraps a node in a Behave instance.
      // node: Node
      var editor = new Behave({
        textarea: node,
        tabSize: 2
      });
    },
    toggleCustomHandlesModule: function () {
      // summary:
      //    Toggle the custom handles module fields.
      $("#customModule").toggleClass("hidden");
      $(".custom-handler .title .caret").toggleClass("caret-up");
    },
    resetCustomModuleDefinition: function () {
      // summary:
      //    Reset the custom handles module fields.
      $("#moduleMid").val("demo/handles");
      $("#moduleDefinition").val("define([\n  /*Dependencies if any*/\n], function (/*Modules*/) {\n  \n});");
    },
    parseCode: parser.tryParse,
    clear: function () {
      // summary:
      //    Clears everything.
      document.getElementById("rawCode").value = "";
      document.getElementById("parsedCode").innerHTML = "";
      handles.resetCustomModuleDefinition();
    },
    cancelCustomHandles: function () {
      handles.resetCustomModuleDefinition();
      handles.toggleCustomHandlesModule();
    }
  };
  return handles;
});