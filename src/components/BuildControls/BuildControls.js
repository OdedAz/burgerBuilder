import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { Label: "Salad", Type: "salad" },
  { Label: "Bacon", Type: "bacon" },
  { Label: "Cheese", Type: "cheese" },
  { Label: "Meat", Type: "meat" }
];

const buildControls = props => (
  <div className="BuildControls">
    <p>
      current price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl, key) => (
      <BuildControl
        Type={ctrl.Label}
        Label={ctrl.Label}
        added={() => props.ingredientAdded(ctrl.Type)}
        remove={() => props.ingredientRemoved(ctrl.Type)}
        disabled={props.disabled[ctrl.Type]}
        key={key}
      />
    ))}
    <button
      className="OrderButton"
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
