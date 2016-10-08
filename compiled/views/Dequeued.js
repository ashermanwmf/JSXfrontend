'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Dequeued = function (_React$Component) {
  _inherits(Dequeued, _React$Component);

  function Dequeued(props) {
    _classCallCheck(this, Dequeued);

    var _this = _possibleConstructorReturn(this, (Dequeued.__proto__ || Object.getPrototypeOf(Dequeued)).call(this, props));

    _this.state = {
      people: props.people
    };
    return _this;
  }

  _createClass(Dequeued, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'z-depth-3 dequeued' },
        React.createElement(
          'p',
          null,
          'Users making bagels '
        )
      );
    }
  }]);

  return Dequeued;
}(React.Component);

module.exports = Dequeued;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL0RlcXVldWVkLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJEZXF1ZXVlZCIsInByb3BzIiwic3RhdGUiLCJwZW9wbGUiLCJDb21wb25lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUUMsUUFBUSxPQUFSLENBQVo7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1pBLEtBRFk7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRRixNQUFNRTtBQURILEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBQ1E7QUFDUCxhQUNDO0FBQUE7QUFBQSxVQUFLLFdBQVUsb0JBQWY7QUFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREgsT0FERDtBQUtEOzs7O0VBYm9CTCxNQUFNTSxTOztBQWdCN0JDLE9BQU9DLE9BQVAsR0FBaUJOLFFBQWpCIiwiZmlsZSI6IkRlcXVldWVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY2xhc3MgRGVxdWV1ZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICBcdHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGVvcGxlOiBwcm9wcy5wZW9wbGVcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgXHQ8ZGl2IGNsYXNzTmFtZT0nei1kZXB0aC0zIGRlcXVldWVkJz5cbiAgICAgICAgPHA+VXNlcnMgbWFraW5nIGJhZ2VscyA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVxdWV1ZWQ7Il19