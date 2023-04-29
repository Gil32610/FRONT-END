import './Header.css'

import { Link } from "react-router-dom";

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = (props) => {
    return (
        <div className='Header'>
            <h2 className='Title'>{props.title}</h2> 
            <div className='Options'>
                <Link>
                    <EmailOutlinedIcon/>
                </Link>
                <Link>
                    <NotificationsNoneOutlinedIcon/> 
                </Link>
                <Link to="/"> 
                    <div className='Options'>
                        <h3>Escola Dom Bosco</h3>
                        <AccountCircleIcon/>
                    </div>
                </Link> 
            </div>
        </div> 
    )
}

export default Header