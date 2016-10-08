'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Options = require('./Options');

var People = function (_React$Component) {
  _inherits(People, _React$Component);

  function People(props) {
    _classCallCheck(this, People);

    var _this = _possibleConstructorReturn(this, (People.__proto__ || Object.getPrototypeOf(People)).call(this, props));

    _this.state = {
      people: props.peopleArr
    };
    return _this;
  }

  _createClass(People, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { method: 'POST', action: '/addToQueue' },
        React.createElement(
          'label',
          { className: 'formLabel' },
          'Choose your name and the number of bagel halfs you want'
        ),
        React.createElement('br', null),
        React.createElement(
          'div',
          { 'class': 'input-field col s12' },
          React.createElement(
            'select',
            { name: 'user' },
            React.createElement(
              'option',
              { value: '', disabled: true, selected: true },
              'Choose your option'
            ),
            this.state.people.map(function (person) {
              return React.createElement(Options, { person: person });
            })
          )
        ),
        React.createElement('input', { type: 'text', name: 'bagleHalfs' }),
        React.createElement('input', { type: 'submit', name: 'Submit' })
      );
    }
  }]);

  return People;
}(React.Component);

module.exports = People;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL1Blb3BsZS5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiT3B0aW9ucyIsIlBlb3BsZSIsInByb3BzIiwic3RhdGUiLCJwZW9wbGUiLCJwZW9wbGVBcnIiLCJtYXAiLCJwZXJzb24iLCJDb21wb25lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUUMsUUFBUSxPQUFSLENBQVo7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLFdBQVIsQ0FBZDs7SUFFTUUsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWkEsS0FEWTs7QUFFbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLGNBQVFGLE1BQU1HO0FBREYsS0FBYjtBQUZrQjtBQUtsQjs7Ozs2QkFDUTtBQUNQLGFBQ0M7QUFBQTtBQUFBLFVBQU0sUUFBTyxNQUFiLEVBQW9CLFFBQU8sYUFBM0I7QUFDRztBQUFBO0FBQUEsWUFBTyxXQUFVLFdBQWpCO0FBQUE7QUFBQSxTQURIO0FBQytGLHVDQUQvRjtBQUVHO0FBQUE7QUFBQSxZQUFLLFNBQU0scUJBQVg7QUFDRTtBQUFBO0FBQUEsY0FBUSxNQUFLLE1BQWI7QUFDRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxFQUFkLEVBQWlCLGNBQWpCLEVBQTBCLGNBQTFCO0FBQUE7QUFBQSxhQURGO0FBRUcsaUJBQUtGLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkUsR0FBbEIsQ0FBc0I7QUFBQSxxQkFDckIsb0JBQUMsT0FBRCxJQUFTLFFBQVFDLE1BQWpCLEdBRHFCO0FBQUEsYUFBdEI7QUFGSDtBQURGLFNBRkg7QUFVRyx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxZQUF4QixHQVZIO0FBV0csdUNBQU8sTUFBSyxRQUFaLEVBQXFCLE1BQUssUUFBMUI7QUFYSCxPQUREO0FBZUQ7Ozs7RUF2QmtCVCxNQUFNVSxTOztBQTBCM0JDLE9BQU9DLE9BQVAsR0FBaUJULE1BQWpCIiwiZmlsZSI6IlBlb3BsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgT3B0aW9ucyA9IHJlcXVpcmUoJy4vT3B0aW9ucycpO1xuXG5jbGFzcyBQZW9wbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICBcdHN1cGVyKHByb3BzKTtcbiAgXHR0aGlzLnN0YXRlID0ge1xuICBcdFx0cGVvcGxlOiBwcm9wcy5wZW9wbGVBcnIgIFx0XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIFx0PGZvcm0gbWV0aG9kPSdQT1NUJyBhY3Rpb249Jy9hZGRUb1F1ZXVlJz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9ybUxhYmVsJz5DaG9vc2UgeW91ciBuYW1lIGFuZCB0aGUgbnVtYmVyIG9mIGJhZ2VsIGhhbGZzIHlvdSB3YW50PC9sYWJlbD48YnIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9J3VzZXInPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPkNob29zZSB5b3VyIG9wdGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUucGVvcGxlLm1hcChwZXJzb24gPT5cbiAgICAgICAgICAgICAgPE9wdGlvbnMgcGVyc29uPXtwZXJzb259IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2JhZ2xlSGFsZnMnIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIG5hbWU9J1N1Ym1pdCcgLz5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGVvcGxlOyJdfQ==