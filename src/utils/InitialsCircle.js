import React from 'react';

const InitialsCircle = (props) => (
  <div className="rounded-full h-16 w-16 flex items-center justify-center bg-indigo-light shadow-lg">
    <p className="mt-1 text-indigo-lightest text-3xl tracking-tight">
      {props.firstName.charAt(0)}{props.lastName.charAt(0)}
    </p>
  </div>
);

export default InitialsCircle;

