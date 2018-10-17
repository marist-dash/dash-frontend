import React from 'react';
import connect from "react-redux/es/connect/connect";

const InitialsCircle = (props) => (
  <div className="rounded-full h-16 w-16 flex items-center justify-center bg-red-light shadow-md">
      <p className="mt-1 text-red-lightest text-3xl tracking-tight">
        {props.student.firstName.charAt(0)}{props.student.lastName.charAt(0)}
      </p>
    </div>
);

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps)(InitialsCircle);


