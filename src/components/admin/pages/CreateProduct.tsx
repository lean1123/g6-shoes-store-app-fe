import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { useNavigate } from 'react-router';

function CreateProduct() {
	const navigate = useNavigate();

	const validationSchema = Yup.object({
		productName: Yup.string().required('Product name is required'),
		description: Yup.string().required('Description is required'),
		brand: Yup.string().required('Brand is required'),
		category: Yup.string().required('Category is required'),
		collection: Yup.string().required('Collection is required'),
		gender: Yup.string().required('Gender is required'),
	});

	const formik = useFormik({
		initialValues: {
			productName: '',
			description: '',
			brand: '',
			category: '',
			collection: '',
			gender: '',
		},
		validationSchema,
		onSubmit: (values) => {
			console.log('Form data', values);
			// Submit form data to the backend
		},
	});

	return (
		<>
			<Breadcrumb pageName='Create Product' />
			<div className='grid grid-cols-12 gap-4'>
				{/* Preview of the product */}
				<div className='col-span-3 max-h-[550px] p-6 rounded-md border border-gray-300 bg-white shadow-sm'>
					<img
						src='https://th.bing.com/th/id/R.341824fb9731186e574fe00ab9a5da66?rik=uFs84f4Clc%2b7bw&pid=ImgRaw&r=0'
						alt='product'
						className='w-full rounded-md'
					/>
					<h2 className='font-medium mt-4 text-black'>Sneaker 01 black</h2>
					<p className='text-gray-500'>Nike</p>
					<p className='text-black mt-4'>Price:</p>
					<p className='font-medium text-black'>$200</p>
					<p className='text-black mt-4'>Size:</p>
					<div className='flex flex-row gap-2 mt-2'>
						<button className='w-6 h-6 rounded-md bg-slate-500'>
							<p className='text-white'>S</p>
						</button>
						<button className='w-6 h-6 rounded-md bg-slate-500'>
							<p className='text-white'>M</p>
						</button>
						<button className='w-6 h-6 rounded-md bg-slate-500'>
							<p className='text-white'>L</p>
						</button>
					</div>
					<p className='text-black mt-4'>Color:</p>
					<div className='flex flex-row gap-2 mt-2'>
						<button className='w-6 h-6 rounded-full bg-black'></button>
						<button className='w-6 h-6 rounded-full bg-blue-500'></button>
						<button className='w-6 h-6 rounded-full bg-red-500'></button>
					</div>
				</div>

				{/* Form to create a product */}
				<div className='col-span-9'>
					<form
						onSubmit={formik.handleSubmit}
						className='grid grid-cols-1 gap-4 p-6 rounded-md border border-gray-300 bg-white shadow-sm'
					>
						<h2 className='text-black text-xl font-medium'>Product Information</h2>

						<div>
							<label className='text-black' htmlFor='productName'>
								Product Name
							</label>
							<input
								type='text'
								id='productName'
								name='productName'
								className='w-full rounded-md border border-gray-300 p-2'
								value={formik.values.productName}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.productName && formik.errors.productName ? (
								<p className='text-red-500 text-sm'>{formik.errors.productName}</p>
							) : null}
						</div>

						<div>
							<label className='text-black' htmlFor='description'>
								Description
							</label>
							<textarea
								id='description'
								name='description'
								className='w-full rounded-md border border-gray-300 p-2'
								value={formik.values.description}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.description && formik.errors.description ? (
								<p className='text-red-500 text-sm'>{formik.errors.description}</p>
							) : null}
						</div>

						<div>
							<label className='text-black' htmlFor='brand'>
								Brand
							</label>
							<select
								id='brand'
								name='brand'
								className='w-full rounded-md border border-gray-300 p-2'
								value={formik.values.brand}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							>
								<option value='' label='Select Brand' />
								<option value='Nike' label='Nike' />
								<option value='Adidas' label='Adidas' />
								<option value='Puma' label='Puma' />
							</select>
							{formik.touched.brand && formik.errors.brand ? (
								<p className='text-red-500 text-sm'>{formik.errors.brand}</p>
							) : null}
						</div>

						<div>
							<label className='text-black' htmlFor='category'>
								Category
							</label>
							<select
								id='category'
								name='category'
								className='w-full rounded-md border border-gray-300 p-2'
								value={formik.values.category}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							>
								<option value='' label='Select category' />
								<option value='Nike' label='Nike' />
								<option value='Adidas' label='Adidas' />
								<option value='Puma' label='Puma' />
							</select>
							{formik.touched.category && formik.errors.category ? (
								<p className='text-red-500 text-sm'>{formik.errors.category}</p>
							) : null}
						</div>

						<div>
							<label className='text-black' htmlFor='collection'>
								Collection
							</label>
							<select
								id='collection'
								name='collection'
								className='w-full rounded-md border border-gray-300 p-2'
								value={formik.values.collection}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							>
								<option value='' label='Select collection' />
								<option value='Nike' label='Nike' />
								<option value='Adidas' label='Adidas' />
								<option value='Puma' label='Puma' />
							</select>
							{formik.touched.collection && formik.errors.collection ? (
								<p className='text-red-500 text-sm'>{formik.errors.collection}</p>
							) : null}
						</div>

						<div>
							<label className='text-black' htmlFor='gender'>
								Gender
							</label>
							<select
								id='gender'
								name='gender'
								className='w-full rounded-md border border-gray-300 p-2'
								value={formik.values.gender}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							>
								<option value='' label='Select gender' />
								<option value='Nike' label='Nike' />
								<option value='Adidas' label='Adidas' />
								<option value='Puma' label='Puma' />
							</select>
							{formik.touched.gender && formik.errors.gender ? (
								<p className='text-red-500 text-sm'>{formik.errors.gender}</p>
							) : null}
						</div>

						{/* Repeat similar fields for category, collection, gender */}

						<div className='mt-4 grid grid-cols-3 gap-6'>
							<button
								type='button'
								className='w-full bg-red-500 text-white rounded-md py-2'
								onClick={() => navigate('/admin/products')}
							>
								Cancel
							</button>
							<button
								type='submit'
								className='w-full bg-primary text-white rounded-md py-2'
							>
								Create Product
							</button>
							<button
								type='button'
								className='w-full bg-green-500 text-white rounded-md py-2'
								onClick={() => navigate('/admin/products/add-item')}
							>
								Add Product Item
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default CreateProduct;
