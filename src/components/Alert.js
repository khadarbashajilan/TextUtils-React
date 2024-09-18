import React from "react";

export default function Alert(props) {
  const cap = (wrd) => {
    const lwr = wrd.toLowerCase();
    return lwr.charAt(0).toUpperCase() + lwr.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
          <strong>{cap(props.alert.type)}</strong> : {props.alert.msg}
        </div>
      )}
    </div>
  );
}
