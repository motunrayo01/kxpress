import React, { Component } from 'react';
import {Link} from 'react-router-dom'




class Footer extends Component {
  render() {
    return (
      <div>
                <div className="container-fluid">
                <div className="row">
                <div className="footer1 col"> 
                </div>
                </div>
                </div>
                <div className="container-fluid footer">
            <div className="container ">
              <div className="row foot">
                  <div className="col-4 i">
                     <img src="https://kxpress.ng/img/groups-38.svg" alt="logo" />
                    </div>
                     <div className="col-4 l">
                  <h6><Link to='/'> Contact us</Link></h6>
                  <p>enquiries@kxpress.ng </p>
                  <p>09092996010</p>
                  </div>
                  <div className="col-4 socialicon">
                <ul>
                  <li><Link to='/'> Location</Link></li>   
                  <li><Link to='/'> Privacy</Link></li>   
                  <li><Link to='/'> Terms and Conditions</Link></li>   
                  <li><Link to='/'> API Integration</Link></li>   <br/>
                
                  <Link to='/'><img src="https://kxpress.ng/img/group-3.svg" alt="fb"/> </Link>
                  <Link to='/'><img src="https://kxpress.ng/img/group-4.svg" alt="twitter"/></Link>
                  <Link to='/'><img src="https://kxpress.ng/img/group-12.svg" alt="ig"/></Link>
                      </ul>
                  </div>
              </div>
              <div className="row">
                  <div className="col copyright">
                      <p>Keep on shipping | Copyright © 2020 KXpress Logistics</p>
                  </div>
              </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Footer;
