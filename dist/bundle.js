'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _recompose = require('recompose');

var Input = function Input(_ref) {
  var className = _ref.className;
  var placeholder = _ref.placeholder;
  var updateValue = _ref.updateValue;
  return React.createElement('input', { type: 'text',
    className: className,
    placeholder: placeholder,
    onChange: updateValue
  });
};

var StatefulInput = (0, _recompose.compose)((0, _recompose.withState)('value', 'setValue', ''), (0, _recompose.mapProps)(function (_ref2) {
  var setValue = _ref2.setValue;

  var rest = _objectWithoutProperties(_ref2, ['setValue']);

  return _extends({
    updateValue: function updateValue(event) {
      return setValue(function () {
        return event.target.value;
      });
    },
    clearValue: function clearValue() {
      return setValue(function () {
        return '';
      });
    }
  }, rest);
}))(Input);

exports['default'] = StatefulInput;
module.exports = exports['default'];
