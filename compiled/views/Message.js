'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Message = function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message(props) {
    _classCallCheck(this, Message);

    var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props));

    _this.state = {
      message: props.message
    };
    return _this;
  }

  _createClass(Message, [{
    key: 'fade',
    value: function fade() {
      console.log('works');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'alert alert-successr' },
        this.fade(),
        this.state.message
      );
    }
  }]);

  return Message;
}(React.Component);

module.exports = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL01lc3NhZ2UuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIk1lc3NhZ2UiLCJwcm9wcyIsInN0YXRlIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJmYWRlIiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVFDLFFBQVEsT0FBUixDQUFaOztJQUVNQyxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNaQSxLQURZOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBU0YsTUFBTUU7QUFESixLQUFiO0FBRmlCO0FBS2xCOzs7OzJCQUNNO0FBQ0xDLGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7Ozs2QkFDUTtBQUNQLGFBQ0M7QUFBQTtBQUFBLFVBQUssV0FBVSxzQkFBZjtBQUNJLGFBQUtDLElBQUwsRUFESjtBQUVJLGFBQUtKLEtBQUwsQ0FBV0M7QUFGZixPQUREO0FBTUQ7Ozs7RUFqQm1CTCxNQUFNUyxTOztBQW9CNUJDLE9BQU9DLE9BQVAsR0FBaUJULE9BQWpCIiwiZmlsZSI6Ik1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgXHRzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2U6IHByb3BzLm1lc3NhZ2VcbiAgICB9XG4gIH1cbiAgZmFkZSgpIHtcbiAgICBjb25zb2xlLmxvZygnd29ya3MnKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIFx0PGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3NyJz5cbiAgICAgICAge3RoaXMuZmFkZSgpfVxuICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1lc3NhZ2U7Il19