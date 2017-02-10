import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './style/Header.css';

class Header extends Component {
	buildNavItems = (items) => {
		return items.map((item, i) => {
			return (
				<NavItem href={"#" + item} key={"navItem_" + i}>
					{item}
				</NavItem>
			);
		});
	}
	render() {
		return (
			<Navbar name="Portfolio" inverse collapseOnSelect>
				<p className="banner-large">Zach Toben</p>
				<Navbar.Collapse>
					<Nav>
						{this.buildNavItems(this.props.items)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>

		);
	}
}

Header.propTypes = {
	items: React.PropTypes.array
}

Header.DefaultProps = {
	items: []
}

export default Header;