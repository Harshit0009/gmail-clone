import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import EmailList from './EmailList'

function RenderComponent() {
  return (
    <>
        <Header />
        <div className='components'>
            <Sidebar />
            <EmailList />
        </div>
    </>
  )
}

export default RenderComponent