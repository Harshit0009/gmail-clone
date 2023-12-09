import { ArrowDropDown, CheckBoxOutlineBlank, MoreVert, Redo } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import "./EmailList.css"


function EmailList() {
  return (
    <div className='emailList'>
        <div className='emailList_Settings'>
            <div className='emailList_settingsLeft'>
                <CheckBoxOutlineBlank />
                <IconButton>
                 <ArrowDropDown />
                </IconButton>
                <IconButton>
                    <Redo/>
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>

            </div>
        </div>


        <Outlet />
    </div>
  )
}

export default EmailList