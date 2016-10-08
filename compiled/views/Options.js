'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Options = function (_React$Component) {
  _inherits(Options, _React$Component);

  function Options(props) {
    _classCallCheck(this, Options);

    var _this = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

    _this.state = {
      person: props.person,
      selectedFunc: props.selected
    };
    return _this;
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'option',
        { value: this.state.person.name },
        this.state.person.name
      );
    }
  }]);

  return Options;
}(React.Component);

module.exports = Options;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL09wdGlvbnMuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIk9wdGlvbnMiLCJwcm9wcyIsInN0YXRlIiwicGVyc29uIiwic2VsZWN0ZWRGdW5jIiwic2VsZWN0ZWQiLCJuYW1lIiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVFDLFFBQVEsT0FBUixDQUFaOztJQUVNQyxPOzs7QUFDTCxtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNaQSxLQURZOztBQUVsQixVQUFLQyxLQUFMLEdBQWE7QUFDWkMsY0FBUUYsTUFBTUUsTUFERjtBQUVUQyxvQkFBY0gsTUFBTUk7QUFGWCxLQUFiO0FBRmtCO0FBTWxCOzs7OzZCQUNTO0FBQ1AsYUFDQztBQUFBO0FBQUEsVUFBUSxPQUFPLEtBQUtILEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkcsSUFBakM7QUFDSSxhQUFLSixLQUFMLENBQVdDLE1BQVgsQ0FBa0JHO0FBRHRCLE9BREQ7QUFLRDs7OztFQWRtQlIsTUFBTVMsUzs7QUFpQjVCQyxPQUFPQyxPQUFQLEdBQWlCVCxPQUFqQiIsImZpbGUiOiJPcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY2xhc3MgT3B0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRwZXJzb246IHByb3BzLnBlcnNvbixcbiAgICAgIHNlbGVjdGVkRnVuYzogcHJvcHMuc2VsZWN0ZWRcblx0XHR9O1xuXHR9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIFx0PG9wdGlvbiB2YWx1ZT17dGhpcy5zdGF0ZS5wZXJzb24ubmFtZX0+XG4gICAgICAgIHt0aGlzLnN0YXRlLnBlcnNvbi5uYW1lfVxuICAgICAgPC9vcHRpb24+XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9wdGlvbnM7Il19