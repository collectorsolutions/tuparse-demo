define([
  "tuparse-shakur/tests/data"
], function (testData) {
  return {
    replicatingButton: {
      title: "Replicating Button",
      description: "Buttons that are dynamically created by Tuparse",
      structure: {
        dom: {
          h3: {
            text: "Some Header"
          },
          ".items": {
            "button.btn.btn-default.btn-block": {
              text: "Click Me",
              type: "button",
              events: {
                click: {
                  mid: "demo/handles",
                  method: "complex"
                }
              }
            }
          }
        }
      }
    },
    tuparseDemo: {
      title: "Tuparse Demo",
      description: "The demo that comes with Tuparse",
      structure: testData
    }
  };
});