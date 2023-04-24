import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [showSublist, setShowSublist] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);


  return (
    <>
      <div>
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              CodeBucks
              <i className="fa fa-code"></i>          
                                      {/* ---------- -- This Icon is Coming from - Bootstrap -------------*/}
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  id="sublist-parent"
                  onClick={click ? handleClick : null}
                  onMouseEnter={(e)=>setShowSublist(true)}
                  onMouseLeave={(e)=>setShowSublist(false)}
                >
                  <span>About</span>
                             {/* --------------------- Div ki gah pe Span - Use karenge bcz Span -Block Element h,Gitna uska Size h Utna area lega , and Div 100 % Width lega  ------------ */}
          
              {   showSublist && (
                <ul className="sublist" >
                  <li to={"www.google.com"}>1ST PAGE</li>
                  <li to={"www.google.com"}>2nd </li>
                    </ul>
                    )
              }
        
                </NavLink>
                
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/blog"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  id="sublist-parent"
                  onClick={click ? handleClick : null}
                  onMouseEnter={(e)=>setShowSublist(true)}
                  onMouseLeave={(e)=>setShowSublist(false)}
                >
                <span>Contact Us </span>  

                {   showSublist && (
                <ul className="sublist" >
                  <li to={"www.google.com"}>1ST PAGE</li>
                  <li to={"www.google.com"}>2nd </li>
                    </ul>
                    )
              }
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                           {/* ---------- Bootstap Icon - Menu BAR iCON - will be Visivbal when it will Click on 900PX Display , IF Menubar is Visibal Then it will show Cross Icon----------*/}
            </div>
          </div>
        </nav>
      </div>
      
    </>
  )
}

export default Navbar;
