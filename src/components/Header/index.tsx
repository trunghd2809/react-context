import React from 'react';
import { NavLink } from 'react-router-dom';
interface Props {};
const withPage = (WrappedComponent: any) => {
  return (props: Props) => {
    return (
      <div className="main-wrapper">
        <header className='header'>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Products</NavLink>
              </li>
              <li>
                <NavLink to="/carts">Cart</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <WrappedComponent {...props} />
      </div>
    );
  } 
}
export default withPage;