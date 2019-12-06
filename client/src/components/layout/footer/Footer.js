import React from 'react';
import './footer.css'

class Footer extends React.Component {

  render(){
    return(
      <div className="footer-nav fixed-bottom">
        <div className =" site-info">
          <div className="copyright-column">PRO HOCKEY STATS</div>
          <div className="author-column">
            By Raymond Chen
          </div>
        </div>

      </div>
    )
  }


}

export default Footer
