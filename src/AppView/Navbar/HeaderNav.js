// imported Requried Packages
import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// To Get the Created Context variable
import userContext from '../../Context/UserContext';

// imported Custom Hook for nameChange
import useForNameChange from '../../CustomHook/useForNameChange';

// imporing Routes Constants
import { secureRoute } from '../../Routing/RouteConstants';

/**
 * A Navbar with Logout feature and logo of the App
 *
 */

const HeaderNav = () => {
  // Providing the Static Values using Custom Hook and destructure a funnction
  const { changeName } = useForNameChange('Prince');

  // A Variable to Navigate to the page
  const navigate = useNavigate();

  // Get the Context value using Destructring
  const useForLogout = useContext(userContext);
  const { loginData, setLoginData } = useForLogout;
  const { username } = loginData;

  /**
     *  A logout function to handel logout button
     *
     */
  const handelLogout = () => {
    // Clearing the userDeatis to empty string
    setLoginData({
      ...loginData,
      username: '',
      password: '',
      loggedIn: false,
    });
    // navigating to  authrization page
    navigate(secureRoute);
  };

  /**
     *  use to change the name on a click using custom hook
     */
  const changeNameWithCustomHook = (event) => {
    // prevent refreshing page
    event.preventDefault();

    // Use A Method to Change Name
    changeName();
  };
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo of the App */}
        <h2 className="navbar-brand">Amazon Prime</h2>

        <div className="d-flex">
          {/* Name Change Feature using Custom Hook */}
          <button
            type="submit"
            className="btn btn-success mx-3"
            onClick={changeNameWithCustomHook}
          >
            Name Change
          </button>

          {/* Displaying Current User Name */}
          <h4 className="navbar-brand mx-3">
            Welcome
            {' '}
            {username}
          </h4>

          {/* A Logout Feature of the App */}
          <button
            type="submit"
            className="btn btn-success "
            onClick={handelLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
