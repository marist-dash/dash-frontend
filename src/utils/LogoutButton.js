import React from 'react';
import { FaSignOutAlt } from "react-icons/fa";

const LogoutButton = () => (
  <button
    className="rounded shadow-md border border-red text-indigo hover:text-red"
    onClick={doLogout}>
    <div className="flex">
      <div className="flex-1 py-2 px-2">
        Logout
      </div>
      <div className="flex-1 py-2 pr-2">
        <FaSignOutAlt/>
      </div>
    </div>
  </button>
);

function doLogout() {
  window.location.reload();
}

export default LogoutButton;