import React from 'react'
import "./Layout.scss"
import SildeBar from '../SideBar/SildeBar'
import Hom from '../Home/Hom'
function Layout() {
  return (
<div className="app" >
<SildeBar />
<Hom />
<div className="page">
  <div className="top_tages tages">
<h2> &lt;html&gt;</h2>
<h2> &lt;body&gt;</h2>
  </div>
  <div className="bottom_tages tages">
  <h2> &lt;/html&gt;</h2>
<h2> &lt;/body&gt;</h2>
  </div>
</div>
  </div>

  )
}

export default Layout