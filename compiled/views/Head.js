"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "head",
        null,
        React.createElement("meta", { charset: "utf-8" }),
        React.createElement("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
        React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
        React.createElement("meta", { name: "viewport", content: "initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width,height=device-height" }),
        React.createElement(
          "title",
          null,
          "Bagle Queue"
        ),
        React.createElement("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css" }),
        React.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js" }),
        React.createElement("link", { rel: "stylesheet", type: "text/css", href: "style.css" }),
        React.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" })
      );
    }
  }]);

  return Nav;
}(React.Component);

module.exports = Nav;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL0hlYWQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIk5hdiIsInByb3BzIiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVFDLFFBQVEsT0FBUixDQUFaOztJQUVNQyxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUdBQ1pBLEtBRFk7QUFFbEI7Ozs7NkJBQ1E7QUFDUCxhQUNDO0FBQUE7QUFBQTtBQUNHLHNDQUFNLFNBQVEsT0FBZCxHQURIO0FBRUcsc0NBQU0sY0FBVyxpQkFBakIsRUFBbUMsU0FBUSxTQUEzQyxHQUZIO0FBR0csc0NBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEscUNBQTlCLEdBSEg7QUFJRyxzQ0FBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSwwRkFBOUIsR0FKSDtBQUtHO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FMSDtBQU1HLHNDQUFNLEtBQUksWUFBVixFQUF1QixNQUFLLG1GQUE1QixHQU5IO0FBT0csd0NBQVEsS0FBSSxpRkFBWixHQVBIO0FBUUcsc0NBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssVUFBNUIsRUFBdUMsTUFBSyxXQUE1QyxHQVJIO0FBU0csd0NBQVEsS0FBSSxtRUFBWjtBQVRILE9BREQ7QUFhRDs7OztFQWxCZUgsTUFBTUksUzs7QUFxQnhCQyxPQUFPQyxPQUFQLEdBQWlCSixHQUFqQiIsImZpbGUiOiJIZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgXHRzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgXHQ8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+PC9tZXRhPlxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIj48L21ldGE+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiPjwvbWV0YT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MSx1c2VyLXNjYWxhYmxlPW5vLG1heGltdW0tc2NhbGU9MSx3aWR0aD1kZXZpY2Utd2lkdGgsaGVpZ2h0PWRldmljZS1oZWlnaHRcIj48L21ldGE+XG4gICAgICAgIDx0aXRsZT5CYWdsZSBRdWV1ZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0ZXJpYWxpemUvMC45Ny43L2Nzcy9tYXRlcmlhbGl6ZS5taW4uY3NzXCI+PC9saW5rPlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGVyaWFsaXplLzAuOTcuNy9qcy9tYXRlcmlhbGl6ZS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJzdHlsZS5jc3NcIj48L2xpbms+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuMS4xL2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDwvaGVhZD5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2OyJdfQ==