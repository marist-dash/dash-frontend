//Sets the properties for the logout button

//Import Statements
import React from 'react';
import { FaSignOutAlt } from "react-icons/fa";

const LogoutButton = () => (
  <div>
    <button
      className="rounded shadow-md border border-red-light bg-grey-lightest text-red hover:bg-red-light hover:text-grey-lightest"
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
  </div>
);

//Removes the user's information from local storage (which is kept there so they don't have to login from the same computer every time) and reloads the page
function doLogout() {
  localStorage.clear();
  window.location.reload();
}

export default LogoutButton;
