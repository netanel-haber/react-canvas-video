import React from "react";
import { createPortal } from "react-dom";
import * as portals from "react-reverse-portal";

const portal = document.createElement("div");
portal.id = "portal";
document.body.append(portal);

export const withReversePortal = (
  Component
) => {
  const WithReversedPortal = ({
    isDefaultState,
    NonDefaultStateComp,
    ...props
  }) => {
    const portalNode = React.useMemo(portals.createHtmlPortalNode, []);
    const outPortal = <portals.OutPortal key="out-portal" node={portalNode} />;
    return (
      [
        <portals.InPortal key="in-portal" node={portalNode}>
          <Component {...props} />
        </portals.InPortal>,
        isDefaultState
          ? outPortal
          : createPortal(
            <NonDefaultStateComp key="out-portal-container">{outPortal}</NonDefaultStateComp>,
            portal
          )
      ]
    );
  };
  WithReversedPortal.displayName = Component.name;
  return WithReversedPortal;
};
