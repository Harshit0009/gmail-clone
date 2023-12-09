import React from 'react';
import './Sidebar.css';
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SidebarOption from './SidebarOption';
import { Duo, Inbox, Note, Person, Phone, Send, Snooze, Star } from '@mui/icons-material';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Button
        className='sidebar_compose'
        startIcon={<EditIcon fontSize='large' />}
      >
        COMPOSE
      </Button>
      <SidebarOption Icon={Inbox} title='Inbox' number={54} selected={true} />
      <SidebarOption Icon={Star} title='Starred' number={54} selected={false} />
      <SidebarOption
        Icon={Snooze}
        title='Snoozed'
        number={54}
        selected={false}
      />
      <SidebarOption Icon={Send} title='Sent' number={54} selected={false} />
      <SidebarOption Icon={Note} title='Drafts' number={54} selected={false} />

      <div className='sidebar_footer'>
        <div className='sidebar_footerIcons'>
            <IconButton>
                <Person />
            </IconButton>
            <IconButton>
                <Duo/>
            </IconButton>
            <IconButton>
                <Phone/>
            </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
