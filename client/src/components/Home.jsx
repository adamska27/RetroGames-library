import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends PureComponent {
  active (path) {
    // Return active when the path is equal to the current location
    if (this.props.location.pathname === path) {
      return 'active';
    }
  }
  render() {
    return(
       <div className="site-wrapper">
         <div className="site-wrapper-inner">
           <div className="cover-container">
             <div className="masthead clearfix">
               <div className="inner">
                 <nav>
                   <img className="header-logo" src="https://cdn.filestackcontent.com/nLnmrZQaRpeythR4ezUo"/>
                   <ul className="nav masthead-nav">
                     <li className={this.active('/')}><Link to="/">Home</Link></li>
                     <li className={this.active('/about')}><Link to="/about">About</Link></li>
                     <li className={this.active('/contact')}><Link to="/contact">Contact</Link></li>
                   </ul>
                 </nav>
               </div>
             </div>
           </div>
         </div>
       </div>
   );
  }
}
