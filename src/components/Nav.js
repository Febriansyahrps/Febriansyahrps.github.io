import { Component } from 'react';
import { Link } from 'react-scroll';

class Nav extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        const MenuItems = [
            {
                name: 'Home',
                url: 'home',
            },
            {
                name: 'Skills',
                url: 'skills',
            },
            {
                name: 'Contact',
                url: 'contact',
            }
        ]        
        return(
            <nav>
                <div className="logo">
                    <h3>Febriansyah RPS</h3>
                </div>
                <div className="menu-icon" onClick={ this.handleClick }>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={this.state.clicked ? 'nav-links active' : 'nav-links'}>
                    { MenuItems.map((item, index) => {
                        return (
                            <Link key={index} 
                                activeClass="active"
                                to={item.url}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                isDynamic={true}>
                                <li>
                                    {item.name}
                                </li>
                            </Link>
                        )
                    })} 
                </ul>
            </nav>
        )
    }
}

export default Nav
