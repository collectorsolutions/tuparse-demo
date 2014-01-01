define([
  "tuparse-shakur/dom",
  "./parser",
  "behave"
], function (dom, parser) {
  return {
    behave: function (/*Node*/node) {
      // summary:
      //    Wraps a node in a Behave instance.
      // node: Node
      var editor = new Behave({
        textarea: node,
        tabSize: 2
      });
    },
    basic: function () {
      // summary:
      //    Simple test method.
      console.log("basic handle triggered");
    },
    replicatingButton: function (/*Event*/event) {
      // summary:
      //    Creates a button with this function as its event handler.
      // event: Event
      var structure = {
        "button.btn.btn-default.btn-block": {
          _text: "Click Me",
          type: "button",
          events: {
            click: {
              mid: "demo/handles",
              method: "replicatingButton"
            }
          }
        }
      };

      dom.parse(structure).appendAll(event.target.parentNode);
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