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
        ".col-lg-6.col-lg-offset-3.tps-item-1": {
          "form.custom-handler": {
            "h4.title": {
              "a": {
                _text: "Custom Handles Module",
                events: {
                  click: {
                    mid: "tuparse-demo/handles",
                    method: "toggleCustomHandlesModule"
                  }
                },
                "span.caret": {}
              }
            },
            "div.hidden.custom-module": {
              id: "customModule",
              ".form-group": {
                label: {
                  _text: "Module MID",
                  "for": "moduleMid"
                },
                "input.form-control": {
                  id: "moduleMid",
                  name: "moduleMid"
                }
              },
              ".form-group.tps-item-1": {
                label: {
                  _text: "Module Definition (use define)",
                  "for": "moduleDefinition"
                },
                "textarea.form-control.module-definition": {
                  id: "moduleDefinition",
                  name: "moduleDefinition",
                  events: {
                    _created: {
                      mid: "tuparse-demo/handles",
                      method: "behave"
                    }
                  }
                }
              },
              ".btn.btn-info.btn-block": {
                _text: "Done",
                type: "button",
                events: {
                  click: {
                    mid: "tuparse-demo/handles",
                    method: "toggleCustomHandlesModule"
                  }
                }
              },
              ".btn.btn-danger.btn-block": {
                _text: "Clear",
                type: "button",
                events: {
                  click: {
                    mid: "tuparse-demo/handles",
                    method: "resetCustomModuleDefinition"
                  }
                }
              }
            }
          }
        },
        ".col-lg-4.left-bar": {
          "textarea.form-control.raw-code": {
            id: "rawCode",
            events: {
              _created: {
                mid: "tuparse-demo/handles",
                method: "behave"
              }
            }
          },
          "button.btn.btn-block.btn-info": {
            _text: "Parse",
            type: "button",
            events: {
              click: {
                mid: "tuparse-demo/handles",
                method: "parseCode"
              }
            }
          },
          "button.btn.btn-block.btn-danger": {
            _text: "Clear",
            type: "button",
            events: {
              click: {
                mid: "tuparse-demo/handles",
                method: "clear"
              }
            }
          }
        },
        ".col-lg-8.content": {
          ".parsed-code.tuparse-test-container": {
            id: "parsedCode"
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
      ".tuparse-demo-container": {
        padding_bottom: "25px",
        ".left-bar": {
          border_right: "1px solid @black",
          ".raw-code": {
            height: "800px",
            margin_bottom: "15px"
          }
        },
        ".parsed-code": {
          width: "100%"
        },
        ".custom-handler": {
          ".title": {
            "a": {
              cursor: "pointer",
              text_decoration: "none",
              ".caret": {
                margin_left: "5px",
                "&.caret-up": {
                  border_bottom: "4px solid",
                  border_top: 0
                },
              }
            }
          },
          ".custom-module": {
            border: "1px solid @black",
            margin_bottom: "10px",
            padding: "10px",
            ".module-definition": {
              height: "500px"
            }
          }
        }
      }
    }
  }
});