import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import "./DashSidebar.css";

const DashSidebar = () => {
    return (
        <div>
            <Menu width={ '20%' } >
                <h5 className="menu-item">
                    Chart
                </h5>
                <Link className="menu-item" to="/chart-category">
                    Category Wise
                </Link>
                <Link className="menu-item" to="/chart-source">
                    Source Wise
                </Link>
                <Link className="menu-item" to="/chart-country">
                    Country Wise
                </Link>
            </Menu>
        </div>
    )
}

export default DashSidebar
