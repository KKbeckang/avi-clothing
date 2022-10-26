import {Link, Outlet} from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as AviLogo } from '../../assets/AviSembler.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return(
      <Fragment> 
          <div className='navigation'>
            <Link className='logo-container' to ='/'>
                <AviLogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to ='/shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to ='/signIn'>
                    Sign In
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
      );
  }


export default Navigation