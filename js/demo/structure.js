define({
  dom: {
    ".container.tuparse-demo-container": {
      ".row": {
        ".col-lg-6.col-lg-offset-3": {
          ".header": {
            "h2.title": {
              _text: "Tuparse Shakur Demo"
            }
          }
        },
        ".col-lg-4": {
          "textarea.form-control.raw-code": {
            id: "rawCode",
            events: {
              "_created": {
                mid: "demo/handles",
                method: "initializeRawCode"
              }
            }
          },
          "button.btn.btn-block.btn-info": {
            _text: "Parse",
            type: "button",
            events: {
              click: {
                mid: "demo/handles",
                method: "parseCode"
              }
            }
          },
          "button.btn.btn-block.btn-danger": {
            _text: "Clear",
            type: "button",
            events: {
              click: {
                mid: "demo/handles",
                method: "clear"
              }
            }
          }
        },
        ".col-lg-8": {
          ".parsed-code.tuparse-test-container": {
            id: "parsedCode"
          }
        }
      }
    }
  },
  css: {
    styles: {
      ".tuparse-demo-container": {
        ".raw-code": {
          height: "850px",
          "margin-bottom": "15px"
        },
        ".parsed-code": {
          width: "100%"
        }
      }
    }
  }
});