'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Queue = function (_React$Component) {
  _inherits(Queue, _React$Component);

  function Queue(props) {
    _classCallCheck(this, Queue);

    var _this = _possibleConstructorReturn(this, (Queue.__proto__ || Object.getPrototypeOf(Queue)).call(this, props));

    console.log(props.func, 'func on queue');
    _this.state = {
      people: props.people,
      func: props.func
    };
    return _this;
  }

  _createClass(Queue, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'z-depth-3 queue', onClick: this.func },
        React.createElement(
          'p',
          null,
          'Users in a queue'
        )
      );
    }
  }]);

  return Queue;
}(React.Component);

module.exports = Queue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL1F1ZXVlLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJRdWV1ZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImZ1bmMiLCJzdGF0ZSIsInBlb3BsZSIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRQyxRQUFRLE9BQVIsQ0FBWjs7SUFFTUMsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWkEsS0FEWTs7QUFFakJDLFlBQVFDLEdBQVIsQ0FBWUYsTUFBTUcsSUFBbEIsRUFBd0IsZUFBeEI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUUwsTUFBTUssTUFESDtBQUVYRixZQUFNSCxNQUFNRztBQUZELEtBQWI7QUFIaUI7QUFPbEI7Ozs7NkJBQ1E7QUFDUCxhQUNDO0FBQUE7QUFBQSxVQUFLLFdBQVUsaUJBQWYsRUFBaUMsU0FBUyxLQUFLQSxJQUEvQztBQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESCxPQUREO0FBS0Q7Ozs7RUFmaUJOLE1BQU1TLFM7O0FBa0IxQkMsT0FBT0MsT0FBUCxHQUFpQlQsS0FBakIiLCJmaWxlIjoiUXVldWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jbGFzcyBRdWV1ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gIFx0c3VwZXIocHJvcHMpO1xuICAgIGNvbnNvbGUubG9nKHByb3BzLmZ1bmMsICdmdW5jIG9uIHF1ZXVlJylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGVvcGxlOiBwcm9wcy5wZW9wbGUsXG4gICAgICBmdW5jOiBwcm9wcy5mdW5jXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIFx0PGRpdiBjbGFzc05hbWU9J3otZGVwdGgtMyBxdWV1ZScgb25DbGljaz17dGhpcy5mdW5jfT5cbiAgICAgICAgPHA+VXNlcnMgaW4gYSBxdWV1ZTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTsiXX0=