import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const menus = [
		{
			title: 'Article',
			items: [
				{ name: 'All Posts', path: '/' },
				{ name: 'Add New', path: '/new' },
				{ name: 'Preview', path: '/preview' },
			],
		},
	];
	return (
		<div className='navbar'>
			<div className='navLogo padding121r'>
				<div className='logoTitle mb-20'>Article Kita</div>
			</div>

			<div className='navMenus'>
				{menus.map((menu) => {
					return (
						<div className='navMenu'>
							<div className='menuTitle'>{menu.title}</div>
							{menu.items.map((item) => {
								return (
									<div className='menuItems'>
										<NavLink
											to={`${item.path}`}
											className={({ isActive }) => {
												return isActive ? 'menuItem active' : 'menuItem';
											}}>
											<span className='itemSpan'></span>
											{item.name}
										</NavLink>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Navbar;
