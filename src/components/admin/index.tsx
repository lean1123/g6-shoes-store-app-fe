import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import AdminLayout from './AdminLayout';
import Dashboard from './pages/Dashboard';
import ListProduct from './pages/ListProduct';
import CreateProduct from './pages/CreateProduct';
import AddProductItem from './pages/AddProductItem';
import ListBrand from './pages/ListBrand';
import CreateBrand from './pages/CreateBrand';
import AddCollection from './pages/AddCollection';
import ListCategory from './pages/ListCategory';
import CreateCategory from './pages/CreateCategory';
import ListOrder from './pages/ListOrder';
import OrderDetail from './pages/OrderDetail';

function AdminPage() {
	const [loading, setLoading] = useState(true);
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);
	return loading ? (
		'Loading...'
	) : (
		<AdminLayout>
			<Routes>
				<Route index element={<Dashboard />} />
				<Route path='/products/list' element={<ListProduct />} />
				<Route path='/products/add' element={<CreateProduct />} />
				<Route path='/products/add-item' element={<AddProductItem />} />
				<Route path='/brands/list' element={<ListBrand />} />
				<Route path='/brands/add' element={<CreateBrand />} />
				<Route path='/brands/add-collection' element={<AddCollection />} />
				<Route path='/categories/list' element={<ListCategory />} />
				<Route path='/categories/add' element={<CreateCategory />} />
				<Route path='/orders' element={<ListOrder />} />
				<Route path='/orders/detail' element={<OrderDetail isEdit={false} />} />
				<Route path='/orders/edit' element={<OrderDetail isEdit={true} />} />
			</Routes>
		</AdminLayout>
	);
}

export default AdminPage;
