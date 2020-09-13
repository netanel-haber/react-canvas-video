"use strict";

exports.__esModule = true;
exports.withReversePortal = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactReversePortal = require("react-reverse-portal");

var portals = _interopRequireWildcard(_reactReversePortal);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var portal = document.createElement("div");
portal.id = "portal";
document.body.append(portal);

var withReversePortal = function withReversePortal(Component) {
  var WithReversedPortal = function WithReversedPortal(_ref) {
    var isDefaultState = _ref.isDefaultState,
        NonDefaultStateComp = _ref.NonDefaultStateComp,
        props = _objectWithoutProperties(_ref, ["isDefaultState", "NonDefaultStateComp"]);

    var portalNode = _react2.default.useMemo(portals.createHtmlPortalNode, []);
    var outPortal = _react2.default.createElement(portals.OutPortal, { key: "out-portal", node: portalNode });
    return [_react2.default.createElement(
      portals.InPortal,
      { key: "in-portal", node: portalNode },
      _react2.default.createElement(Component, props)
    ), isDefaultState ? outPortal : (0, _reactDom.createPortal)(_react2.default.createElement(
      NonDefaultStateComp,
      { key: "out-portal-container" },
      outPortal
    ), portal)];
  };
  WithReversedPortal.displayName = Component.name;
  return WithReversedPortal;
};
exports.withReversePortal = withReversePortal;