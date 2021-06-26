import React from 'react';
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import PeopleIcon from '@material-ui/icons/People';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ChatIcon  from '@material-ui/icons/Chat';
import VideoLibraryIcon  from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from './StateProvider';

function Sidebar(){
    const [{user}, dispatch] = useStateValue();
    return(
        <div className="Sidebar">
            <SidebarRow src= {user.photoURL}
            title={user.displayName} />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Market Place" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="Market Place" />

        </div>
    )
}

export default Sidebar