function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import { createPortal } from "react-dom";
import * as portals from "react-reverse-portal";

var portal = document.createElement("div");
portal.id = "portal";
document.body.append(portal);

var withReversePortal = function withReversePortal(Component) {
  var WithReversedPortal = function WithReversedPortal(_ref) {
    var isDefaultState = _ref.isDefaultState,
        NonDefaultStateComp = _ref.NonDefaultStateComp,
        props = _objectWithoutProperties(_ref, ["isDefaultState", "NonDefaultStateComp"]);

    var portalNode = React.useMemo(portals.createHtmlPortalNode, []);
    var outPortal = React.createElement(portals.OutPortal, { key: "out-portal", node: portalNode });
    return [React.createElement(
      portals.InPortal,
      { key: "in-portal", node: portalNode },
      React.createElement(Component, props)
    ), isDefaultState ? outPortal : createPortal(React.createElement(
      NonDefaultStateComp,
      { key: "out-portal-container" },
      outPortal
    ), portal)];
  };
  WithReversedPortal.displayName = Component.name;
  return WithReversedPortal;
};
export { withReversePortal };