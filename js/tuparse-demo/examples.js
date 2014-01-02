define([
  "tuparse-shakur/tests/data"
], function (testData) {
  return {
    createFunction: function (/*Object*/example, /*String*/handleId) {
      // summary:
      //    Turns a handle function into a proper define function string
      var handle = example.handles[handleId],
        dependencies = handle.dependencies,
        fn = "define(", i, total;

      if (dependencies.length) {
        fn += "[\"" + dependencies.join("\",\"") + "\"], ";
      }

      fn += "\n" + handle.fn.toString() + ");";

      return fn;
    },
    replicatingButton: {
      title: "Replicating Button",
      description: "Buttons that are dynamically created by Tuparse",
      structure: {
        dom: {
          ".test": {
            "h3.title": {
              _text: "Replicating Button"
            },
            ".items": {
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
            }
          }
        },
        css: {
          variables: {
            "@black": "#333"
          },
          styles: {
            ".test": {
              border: "1px solid @black",
              padding: "10px",
              ".title": {
                margin_top: 0
              },
              ".items": {
                button: {
                  "&.btn-default": {
                    margin_top: "15px"
                  }
                }
              }
            }
          }
        }
      },
      handles: {
        "demo/handles": {
          dependencies: ["tuparse-shakur/dom"],
          fn: function (dom) {
            return {
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
              }
            };
          }
        }
      }
    }
  };
});