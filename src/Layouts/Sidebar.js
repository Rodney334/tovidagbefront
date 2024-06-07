// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import SimpleBar from "simplebar-react";
// // Import logos
// import logoSm from "../assets/images/logo-sm.png";
// import logoDark from "../assets/images/logo-dark.png";
// import logoLight from "../assets/images/logo-light.png";

// import { Container } from "reactstrap";

// const Sidebar = ({ layoutType }) => {
//   const [isComplaintsOpen, setIsComplaintsOpen] = useState(false);

//   useEffect(() => {
//     var verticalOverlay = document.getElementsByClassName("vertical-overlay");
//     if (verticalOverlay) {
//       verticalOverlay[0].addEventListener("click", function () {
//         document.body.classList.remove("vertical-sidebar-enable");
//       });
//     }
//   }, []);

//   const addEventListenerOnSmHoverMenu = () => {
//     if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
//       document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
//     } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
//       document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
//     } else {
//       document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
//     }
//   };

//   const toggleComplaintsMenu = () => {
//     setIsComplaintsOpen(!isComplaintsOpen);
//   };

//   return (
   
// <React.Fragment>
//       <div className="app-menu navbar-menu">
//         <div className="navbar-brand-box">
//           <Link to="/" className="logo logo-dark">
//             <span className="logo-sm">
//               <img src={logoSm} alt="logo" height="22" />
//             </span>
//             <span className="logo-lg">
//               <img src={logoDark} alt="logo" height="17" />
//             </span>
//           </Link>

//           <Link to="/" className="logo logo-light">
//             <span className="logo-sm">
//               <img src={logoSm} alt="logo" height="22" />
//             </span>
//             <span className="logo-lg">
//               <img src={logoLight} alt="logo" height="17" />
//             </span>
//           </Link>
//           <button
//             onClick={addEventListenerOnSmHoverMenu}
//             type="button"
//             className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
//             id="vertical-hover"
//           >
//             <i className="ri-record-circle-line"></i>
//           </button>
//         </div>
//         <SimpleBar id="scrollbar" className="h-100">
//           <Container fluid>
//             <div id="two-column-menu"></div>
//             <ul className="navbar-nav" id="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/dashboard">
//                   <i className="ri-dashboard-line"></i> Tableau de bords
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/users">
//                   <i className="ri-user-line"></i> Utilisateurs
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="#"
//                   onClick={toggleComplaintsMenu}
//                   aria-expanded={isComplaintsOpen ? "true" : "false"}
//                 >
//                   <i className="ri-folder-line"></i> Plaintes
//                 </Link>
//                 <div className={`collapse ${isComplaintsOpen ? "show" : ""}`}>
//                   <ul className="nav nav-sm flex-column">
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/complaints/new">
//                         Nouvelle plainte
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/complaints/in-progress">
//                         En cours de traitement
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/complaints/processed">
//                         Traité
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/complainants">
//                   <i className="ri-account-circle-line"></i> Plaignants
//                 </Link>
//               </li>
//             </ul>
//           </Container>
//         </SimpleBar>
//         <div className="sidebar-background"></div>
//       </div>
//       <div className="vertical-overlay"></div>
//     </React.Fragment>
//   );
// };

// export default Sidebar;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
//import logo
import logoSm from "../assets/images/logo-sm.png";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";

//Import Components
import VerticalLayout from "./VerticalLayouts";
import TwoColumnLayout from "./TwoColumnLayout";
import { Container } from "reactstrap";
import HorizontalLayout from "./HorizontalLayout";

const Sidebar = ({ layoutType }) => {

  useEffect(() => {
    var verticalOverlay = document.getElementsByClassName("vertical-overlay");
    if (verticalOverlay) {
      verticalOverlay[0].addEventListener("click", function () {
        document.body.classList.remove("vertical-sidebar-enable");
      });
    }
  });

  const addEventListenerOnSmHoverMenu = () => {
    // add listener Sidebar Hover icon on change layout from setting
    if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
    } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
    } else {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
    }
  };

  return (
    <React.Fragment>
      <div className="app-menu navbar-menu">
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logoSm} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoDark} alt="" height="17" />
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <img src={logoSm} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoLight} alt="" height="17" />
            </span>
          </Link>
          <button
            onClick={addEventListenerOnSmHoverMenu}
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>
        {layoutType === "horizontal" ? (
          <div id="scrollbar">
            <Container fluid>
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <HorizontalLayout />
              </ul>
            </Container>
          </div>
        ) : layoutType === 'twocolumn' ? (
          <React.Fragment>
            <TwoColumnLayout layoutType={layoutType} />
            <div className="sidebar-background"></div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <SimpleBar id="scrollbar" className="h-100">
              <Container fluid>
                <div id="two-column-menu"></div>
                <ul className="navbar-nav" id="navbar-nav">
                  <VerticalLayout layoutType={layoutType} />
                </ul>
              </Container>
            </SimpleBar>
            <div className="sidebar-background"></div>
          </React.Fragment>
        )}
      </div>
      <div className="vertical-overlay"></div>
    </React.Fragment>
  );
};

export default Sidebar;
