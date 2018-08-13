import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//component
class Header extends Component {
    render() {
        return (
            <header>

                <div className="logo">
                    <a href = "/">LOGO</a>
                </div>

                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Products">Products</Link>
                        </li>
                        <li className="last">
                            <a href = "/">Contacts</a>
                        </li>
                    </ul>
                </nav>

            </header>
        );
    }
}

export default Header;
