'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Head = require('./Head');
var Nav = require('./Nav');
var Counter = require('./Count');
var People = require('./People');
var Queue = require('./Queue');
var Dequeued = require('./Dequeued');
var Message = require('./Message');

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      people: props.people,
      message: props.message
    };
    return _this;
  }

  _createClass(App, [{
    key: 'enqueue',
    value: function enqueue() {
      console.log('enqueue');
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state.message, 'message');
      var message = void 0;
      if (this.state.message) {
        var _message = React.createElement(Message, { message: this.state.message });
      }

      return React.createElement(
        'html',
        null,
        React.createElement(Head, null),
        React.createElement(
          'body',
          null,
          React.createElement(Nav, null),
          message,
          React.createElement(People, { peopleArr: this.state.people }),
          React.createElement(Dequeued, null),
          React.createElement(Queue, { func: this.enqueue.bind(this) }),
          React.createElement('script', { src: 'select_materialize.js' })
        )
      );
    }
  }]);

  return App;
}(React.Component);

module.exports = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL0FwcC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiSGVhZCIsIk5hdiIsIkNvdW50ZXIiLCJQZW9wbGUiLCJRdWV1ZSIsIkRlcXVldWVkIiwiTWVzc2FnZSIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJwZW9wbGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImVucXVldWUiLCJiaW5kIiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVFDLFFBQVEsT0FBUixDQUFaO0FBQ0EsSUFBSUMsT0FBT0QsUUFBUSxRQUFSLENBQVg7QUFDQSxJQUFJRSxNQUFNRixRQUFRLE9BQVIsQ0FBVjtBQUNBLElBQUlHLFVBQVVILFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUksU0FBU0osUUFBUSxVQUFSLENBQWI7QUFDQSxJQUFJSyxRQUFRTCxRQUFRLFNBQVIsQ0FBWjtBQUNBLElBQUlNLFdBQVdOLFFBQVEsWUFBUixDQUFmO0FBQ0EsSUFBSU8sVUFBVVAsUUFBUSxXQUFSLENBQWQ7O0lBRU1RLEc7OztBQUNMLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWkEsS0FEWTs7QUFFbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLGNBQVFGLE1BQU1FLE1BREY7QUFFVEMsZUFBU0gsTUFBTUc7QUFGTixLQUFiO0FBRmtCO0FBTWxCOzs7OzhCQUVVO0FBQ1JDLGNBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQRCxjQUFRQyxHQUFSLENBQVksS0FBS0osS0FBTCxDQUFXRSxPQUF2QixFQUFnQyxTQUFoQztBQUNBLFVBQUlBLGdCQUFKO0FBQ0EsVUFBRyxLQUFLRixLQUFMLENBQVdFLE9BQWQsRUFBdUI7QUFDbkIsWUFBSUEsV0FBVSxvQkFBQyxPQUFELElBQVMsU0FBUyxLQUFLRixLQUFMLENBQVdFLE9BQTdCLEdBQWQ7QUFDSDs7QUFFRCxhQUNDO0FBQUE7QUFBQTtBQUNHLDRCQUFDLElBQUQsT0FESDtBQUVDO0FBQUE7QUFBQTtBQUNFLDhCQUFDLEdBQUQsT0FERjtBQUVHQSxpQkFGSDtBQUdBLDhCQUFDLE1BQUQsSUFBUSxXQUFXLEtBQUtGLEtBQUwsQ0FBV0MsTUFBOUIsR0FIQTtBQUlFLDhCQUFDLFFBQUQsT0FKRjtBQUtFLDhCQUFDLEtBQUQsSUFBTyxNQUFNLEtBQUtJLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJQUFsQixDQUFiLEdBTEY7QUFNRSwwQ0FBUSxLQUFJLHVCQUFaO0FBTkY7QUFGRCxPQUREO0FBYUQ7Ozs7RUFqQ2VqQixNQUFNa0IsUzs7QUFvQ3hCQyxPQUFPQyxPQUFQLEdBQWlCWCxHQUFqQiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEhlYWQgPSByZXF1aXJlKCcuL0hlYWQnKTtcbnZhciBOYXYgPSByZXF1aXJlKCcuL05hdicpO1xudmFyIENvdW50ZXIgPSByZXF1aXJlKCcuL0NvdW50Jyk7XG52YXIgUGVvcGxlID0gcmVxdWlyZSgnLi9QZW9wbGUnKTtcbnZhciBRdWV1ZSA9IHJlcXVpcmUoJy4vUXVldWUnKTtcbnZhciBEZXF1ZXVlZCA9IHJlcXVpcmUoJy4vRGVxdWV1ZWQnKTtcbnZhciBNZXNzYWdlID0gcmVxdWlyZSgnLi9NZXNzYWdlJyk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRwZW9wbGU6IHByb3BzLnBlb3BsZSxcbiAgICAgIG1lc3NhZ2U6IHByb3BzLm1lc3NhZ2Vcblx0XHR9O1xuXHR9XG5cbiAgZW5xdWV1ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnZW5xdWV1ZScpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubWVzc2FnZSwgJ21lc3NhZ2UnKVxuICAgIGxldCBtZXNzYWdlO1xuICAgIGlmKHRoaXMuc3RhdGUubWVzc2FnZSkge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IDxNZXNzYWdlIG1lc3NhZ2U9e3RoaXMuc3RhdGUubWVzc2FnZX0vPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgIFx0PGh0bWw+XG4gICAgICAgIDxIZWFkIC8+XG4gICAgICA8Ym9keSA+XG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgXHRcdDxQZW9wbGUgcGVvcGxlQXJyPXt0aGlzLnN0YXRlLnBlb3BsZX0vPlxuICAgICAgICA8RGVxdWV1ZWQgLz5cbiAgICAgICAgPFF1ZXVlIGZ1bmM9e3RoaXMuZW5xdWV1ZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwic2VsZWN0X21hdGVyaWFsaXplLmpzXCI+PC9zY3JpcHQ+XG4gICAgXHQ8L2JvZHk+XG4gICAgXHQ8L2h0bWw+XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDsiXX0=