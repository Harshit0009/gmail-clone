import React from "react";
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from "@mui/material";
import { ArrowDropDown} from "@mui/icons-material";
import { Apps } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";

function Header(){
    return <div className="header">
        <div className="header_left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="Gmail Icon" />
        </div>

        <div className="header_middle">
            <SearchIcon />
            <input placeholder="Search Mail" type="text" />
            <ArrowDropDown className="header_inputCaret" />
        </div>

        <div className="header_right">
            <IconButton>
                <Apps />
            </IconButton>
            <IconButton>
                <Notifications />
            </IconButton>
            <Avatar />
        </div>
    </div>
}

export default Header;