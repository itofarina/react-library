var React = require('react');

var styles = {"test":"_styles-module__test__3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    style: {
      color: 'red'
    },
    className: styles.test
  }, "Example Component: ", text);
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
