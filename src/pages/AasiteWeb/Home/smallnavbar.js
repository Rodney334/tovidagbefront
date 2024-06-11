// SmallNavbar.js
import React from "react";
import { Link } from "react-router-dom";

const SmallNavbar = () => {
    return (
        <div style={{ backgroundColor: '#001f3f', color: '#FFA500', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '20px' }}>
            <Link to="/login" style={{ color: '#FFA500', marginRight: '20px' }}>Se connecter</Link>
            <Link to="/partners" style={{ color: '#FFA500', marginRight: '20px' }}>Partenaires</Link>
            <Link to="/contact" style={{ color: '#FFA500' }}>Contact</Link>
        </div>
    );
};

export default SmallNavbar;
