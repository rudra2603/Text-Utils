import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} navbar-collapse`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="d-flex">
              <div className="bg-primary rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode('primary')}} ></div>
              <div className="bg-danger rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode('danger')}} ></div>
              <div className="bg-success rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode('success')}} ></div>
              <div className="bg-warning rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode('warning')}} ></div>
              <div className="bg-light rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid black'}} onClick={()=>{props.toggleMode('light')}} ></div>
              <div className="bg-dark rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer',border:'1px solid white'}} onClick={()=>{props.toggleMode('dark')}} ></div>

              </div>
         
          {/* <div className={`form-check form-switch `} >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode(null)}}  />
            <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >Toggle Mode</label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, //It should return an Error / object if the validation fails.
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
