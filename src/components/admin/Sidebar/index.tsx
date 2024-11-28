import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import Icon from '@ant-design/icons';
import {
	Category,
	ContactPage,
	Dashboard,
	Inventory,
	KeyboardArrowDown,
	KeyboardArrowUp,
	Settings,
	ShoppingBag,
} from '@mui/icons-material';
// import Logo from "../../../../public/logo.png";

interface SidebarProps {
	sidebarOpen: boolean;
	setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
	const location = useLocation();
	const { pathname } = location;

	const trigger = useRef<any>(null);
	const sidebar = useRef<any>(null);

	const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
	const [sidebarExpanded, setSidebarExpanded] = useState(
		storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
	);

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }: MouseEvent) => {
			if (!sidebar.current || !trigger.current) return;
			if (
				!sidebarOpen ||
				sidebar.current.contains(target) ||
				trigger.current.contains(target)
			)
				return;
			setSidebarOpen(false);
		};
		document.addEventListener('click', clickHandler);
		return () => document.removeEventListener('click', clickHandler);
	});

	// close if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }: KeyboardEvent) => {
			if (!sidebarOpen || keyCode !== 27) return;
			setSidebarOpen(false);
		};
		document.addEventListener('keydown', keyHandler);
		return () => document.removeEventListener('keydown', keyHandler);
	});

	useEffect(() => {
		localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
		if (sidebarExpanded) {
			document.querySelector('body')?.classList.add('sidebar-expanded');
		} else {
			document.querySelector('body')?.classList.remove('sidebar-expanded');
		}
	}, [sidebarExpanded]);

	return (
		<aside
			ref={sidebar}
			className={`absolute left-0 top-0 z-[9999] flex h-screen w-72 flex-col overflow-y-hidden bg-[#262d34] duration-300 ease-linear lg:static lg:translate-x-0 ${
				sidebarOpen ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			{/* <!-- SIDEBAR HEADER --> */}
			<div className='flex items-center justify-between gap-2 px-6 py-4 lg:py-5'>
				<NavLink to='/'>
					<img src='../../../../public/logo.png' alt='Logo' className='w-14 h-14' />
				</NavLink>

				<button
					ref={trigger}
					onClick={() => setSidebarOpen(!sidebarOpen)}
					aria-controls='sidebar'
					aria-expanded={sidebarOpen}
					className='block lg:hidden'
				>
					x
				</button>
			</div>
			{/* <!-- SIDEBAR HEADER --> */}

			<div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
				{/* <!-- Sidebar Menu --> */}
				<nav className='mt-2 py-4 px-1 lg:mt-9 lg:px-6'>
					{/* <!-- Menu Group --> */}
					<div>
						<h3 className='mb-4 ml-4 text-sm font-semibold text-slate-300'>MENU</h3>

						<ul className='mb-6 flex flex-col gap-1.5'>
							{/* <!-- Menu Item Dashboard --> */}
							<li>
								<NavLink
									to='/admin'
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-slate-300 duration-300 ease-in-out hover:bg-gray-800  ${
										pathname.endsWith('/admin') &&
										'bg-gray-800 border-l-[2px] border-orange-800'
									}`}
								>
									<Dashboard
										className={`w-5 h-5 ${pathname.endsWith('/admin') && 'text-orange-800'}`}
									/>
									Dashboard
								</NavLink>
							</li>
							{/* <!-- Menu Item Dashboard --> */}

							{/* <!-- Menu Item Product --> */}
							<SidebarLinkGroup
								activeCondition={
									pathname === '/admin/products' || pathname.includes('products')
								}
							>
								{(handleClick, open) => {
									return (
										<React.Fragment>
											<NavLink
												to='#'
												className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-slate-300 duration-300 ease-in-out hover:bg-gray-800 ${
													(pathname === '/admin/products' ||
														pathname.includes('products')) &&
													'bg-gray-800 border-l-[2px] border-orange-800'
												}`}
												onClick={(e) => {
													e.preventDefault();
													sidebarExpanded ? handleClick() : setSidebarExpanded(true);
												}}
											>
												<Inventory
													className={`w-5 h-5 ${pathname.includes('/products') && 'text-orange-800'}`}
												/>
												Product
												<KeyboardArrowDown className='right-0 absolute mr-3' />
											</NavLink>
											{/* <!-- Dropdown Menu Start --> */}
											<div
												className={`translate transform overflow-hidden ${
													!open && 'hidden'
												}`}
											>
												<ul className='mt-2 mb-5.5 flex flex-col gap-2.5 pl-6'>
													<li>
														<NavLink
															to='/admin/products/list'
															className={({ isActive }) =>
																'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-gray-400 duration-300 ease-in-out hover:text-white ' +
																(isActive && '!text-white')
															}
														>
															List
														</NavLink>
													</li>
													<li>
														<NavLink
															to='/admin/products/add'
															className={({ isActive }) =>
																'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-gray-400 duration-300 ease-in-out hover:text-white ' +
																(isActive && '!text-white')
															}
														>
															Create
														</NavLink>
													</li>
												</ul>
											</div>
											{/* <!-- Dropdown Menu End --> */}
										</React.Fragment>
									);
								}}
							</SidebarLinkGroup>
							{/* <!-- Menu Item Product --> */}

							{/* <!-- Menu Item Brands --> */}
							<SidebarLinkGroup
								activeCondition={
									pathname === '/admin/brands' || pathname.includes('brands')
								}
							>
								{(handleClick, open) => {
									return (
										<React.Fragment>
											<NavLink
												to='#'
												className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-slate-300 duration-300 ease-in-out hover:bg-gray-800 ${
													(pathname === '/admin/brands' || pathname.includes('brands')) &&
													'bg-gray-800 border-l-[2px] border-orange-800'
												}`}
												onClick={(e) => {
													e.preventDefault();
													sidebarExpanded ? handleClick() : setSidebarExpanded(true);
												}}
											>
												<ContactPage
													className={`w-5 h-5 ${pathname.includes('/brands') && 'text-orange-800'}`}
												/>
												Brand
												<KeyboardArrowDown className='right-0 absolute mr-3' />
											</NavLink>
											{/* <!-- Dropdown Menu Start --> */}
											<div
												className={`translate transform overflow-hidden ${
													!open && 'hidden'
												}`}
											>
												<ul className='mt-2 mb-5.5 flex flex-col gap-2.5 pl-6'>
													<li>
														<NavLink
															to='/admin/brands/list'
															className={({ isActive }) =>
																'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-gray-400 duration-300 ease-in-out hover:text-white ' +
																(isActive && '!text-white')
															}
														>
															List
														</NavLink>
													</li>
													<li>
														<NavLink
															to='/admin/brands/add'
															className={({ isActive }) =>
																'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-gray-400 duration-300 ease-in-out hover:text-white ' +
																(isActive && '!text-white')
															}
														>
															Create
														</NavLink>
													</li>
												</ul>
											</div>
											{/* <!-- Dropdown Menu End --> */}
										</React.Fragment>
									);
								}}
							</SidebarLinkGroup>
							{/* <!-- Menu Item Brands --> */}

							{/* <!-- Menu Item Brands --> */}
							<SidebarLinkGroup
								activeCondition={
									pathname === '/admin/brands' || pathname.includes('brands')
								}
							>
								{(handleClick, open) => {
									return (
										<React.Fragment>
											<NavLink
												to='#'
												className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-slate-300 duration-300 ease-in-out hover:bg-gray-800 ${
													(pathname === '/admin/categories' ||
														pathname.includes('categories')) &&
													'bg-gray-800 border-l-[2px] border-orange-800'
												}`}
												onClick={(e) => {
													e.preventDefault();
													sidebarExpanded ? handleClick() : setSidebarExpanded(true);
												}}
											>
												<Category
													className={`w-5 h-5 ${pathname.includes('/categories') && 'text-orange-800'}`}
												/>
												Category
												<KeyboardArrowDown className='right-0 absolute mr-3' />
											</NavLink>
											{/* <!-- Dropdown Menu Start --> */}
											<div
												className={`translate transform overflow-hidden ${
													!open && 'hidden'
												}`}
											>
												<ul className='mt-2 mb-5.5 flex flex-col gap-2.5 pl-6'>
													<li>
														<NavLink
															to='/admin/categories/list'
															className={({ isActive }) =>
																'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-gray-400 duration-300 ease-in-out hover:text-white ' +
																(isActive && '!text-white')
															}
														>
															List
														</NavLink>
													</li>
													<li>
														<NavLink
															to='/admin/categories/add'
															className={({ isActive }) =>
																'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-gray-400 duration-300 ease-in-out hover:text-white ' +
																(isActive && '!text-white')
															}
														>
															Create
														</NavLink>
													</li>
												</ul>
											</div>
											{/* <!-- Dropdown Menu End --> */}
										</React.Fragment>
									);
								}}
							</SidebarLinkGroup>
							{/* <!-- Menu Item Category --> */}

							{/* <!-- Menu Item Order --> */}
							<li>
								<NavLink
									to='/admin/orders'
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-slate-300 duration-300 ease-in-out hover:bg-gray-800  ${
										pathname.includes('/orders') &&
										'bg-gray-800 border-l-[2px] border-orange-800'
									}`}
								>
									<ShoppingBag
										className={`w-5 h-5 ${pathname.includes('/orders') && 'text-orange-800'}`}
									/>
									Order
								</NavLink>
							</li>
							{/* <!-- Menu Item Order --> */}
						</ul>
					</div>

					{/* <!-- Others Group --> */}
					<div>
						<h3 className='mb-4 ml-4 text-sm font-semibold text-slate-300'>OTHERS</h3>

						<ul className='mb-6 flex flex-col gap-1.5'>
							{/* <!-- Menu Item Settings --> */}
							<li>
								<NavLink
									to='/admin/settings'
									className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-slate-300 duration-300 ease-in-out hover:bg-gray-800  ${
										pathname.includes('/settings') &&
										'bg-gray-800 border-l-[2px] border-orange-800'
									}`}
								>
									<Settings
										className={`w-5 h-5 ${pathname.includes('/settings') && 'text-orange-800'}`}
									/>
									Settings
								</NavLink>
							</li>
							{/* <!-- Menu Item Order --> */}
						</ul>
					</div>
				</nav>
				{/* <!-- Sidebar Menu --> */}
			</div>
		</aside>
	);
};

export default Sidebar;
