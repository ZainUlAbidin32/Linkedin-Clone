import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import linkedin from '../images/linkedin.png'
import HeaderOption from './HeaderOption';
import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from '../features/userSlice';



function Header() {

  const dispatch=useDispatch()
  const logoutApp=()=>{
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className='header'>

        <div className="header__left">
            <img src={linkedin} alt="" />

            <div className="header__search">
                {/* <SearchIcon/> */}
                <SearchIcon/>
                <input type="text" placeholder='Search'/>
            </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={Home} title="Home"/>
          <HeaderOption Icon={SupervisorAccount} title="My Network"/>
          <HeaderOption Icon={BusinessCenter} title="Jobs"/>
          <HeaderOption Icon={Chat} title="Messaging"/>
          <HeaderOption Icon={Notifications} title="Notifications"/>
          <HeaderOption avatar={true} title="Me" onClick={logoutApp}/>
        </div>
    </div>
  )
}

export default Header