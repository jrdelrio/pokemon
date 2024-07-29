import React, { useContext } from 'react';
import { AppContext } from '../store/appContext';

const Navbar = () => {

  const { store, actions } = useContext(AppContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search your Pokémon..." aria-label="Search" />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;