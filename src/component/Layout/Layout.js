import React from 'react'
import "./Layout.scss"
import SildeBar from '../SideBar/SildeBar'
function Layout() {
  return (
<div className="app" >
<SildeBar />

<div className="page">
  <div className="top_tages tages">
<h2> &lt;html&gt;&lt;/html&gt;</h2>
<h2> &lt;body&gt;&lt;/body&gt;</h2>
  </div>

  
  <div className="bottom_tages tages">
  <h2> &lt;html&gt;&lt;/html&gt;</h2>
<h2> &lt;body&gt;&lt;/body&gt;</h2>
  </div>
</div>
  </div>

  )
}

export default Layout