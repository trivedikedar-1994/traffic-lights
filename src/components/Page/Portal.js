import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from './Dashboard'

export default function Portal() {
  return (
    <>
        <main>
            <sidebar>
                <Sidebar />
            </sidebar>
            <aside>
                <Dashboard />
            </aside>
        </main>
    </>
  )
}
