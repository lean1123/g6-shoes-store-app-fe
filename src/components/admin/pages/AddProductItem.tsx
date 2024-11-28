import React, { useState, useEffect } from 'react';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import DragDropImageUploader from '../../common/admin/DragDropImageUploader';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function AddProductItem() {
	const [images, setImages] = useState<File[]>([]);

	// Schema validate
	const validationSchema = Yup.object({
		quantity: Yup.number()
			.min(1, 'Quantity must be at least 1')
			.required('Quantity is required'),
		price: Yup.number()
			.min(1, 'Price must be at least 1')
			.required('Price is required'),
		size: Yup.string().required('Size is required'),
		color: Yup.string().required('Color is required'),
		images: Yup.array()
			.min(1, 'At least one image is required')
			.required('Images are required'),
	});

	// Initial values for the form
	const initialValues = {
		quantity: '',
		price: '',
		size: '',
		color: '',
		images: [],
	};

	// Handle submit
	const handleSubmit = (values) => {
		console.log('Form Data:', { ...values, images });
		alert('Product added successfully!');
	};

	return (
		<>
			<Breadcrumb pageName='Add Product Item' />
			<DragDropImageUploader onImagesChange={setImages} />
			<div className='p-3 rounded-md shadow-md mt-4 bg-white'>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values) => handleSubmit(values)}
				>
					{({ setFieldValue }) => {
						// Sử dụng useEffect để đồng bộ images với Formik
						useEffect(() => {
							setFieldValue('images', images);
						}, [images, setFieldValue]);

						return (
							<Form>
								<div className='grid grid-cols-12 gap-6'>
									<div className='col-span-6'>
										<label className='text-black' htmlFor='quantity'>
											Quantity
										</label>
										<Field
											type='number'
											name='quantity'
											className='w-full rounded-md border border-gray-300 p-2'
										/>
										<ErrorMessage
											name='quantity'
											component='div'
											className='text-red-500 text-sm mt-1'
										/>
									</div>
									<div className='col-span-6'>
										<label className='text-black' htmlFor='price'>
											Product Price
										</label>
										<Field
											type='number'
											name='price'
											className='w-full rounded-md border border-gray-300 p-2'
										/>
										<ErrorMessage
											name='price'
											component='div'
											className='text-red-500 text-sm mt-1'
										/>
									</div>
									<div className='col-span-6'>
										<label className='text-black' htmlFor='size'>
											Product Size
										</label>
										<Field
											as='select'
											name='size'
											className='w-full rounded-md border border-gray-300 p-2'
										>
											<option value='' disabled>
												Select Size
											</option>
											<option value='S'>S</option>
											<option value='M'>M</option>
											<option value='L'>L</option>
										</Field>
										<ErrorMessage
											name='size'
											component='div'
											className='text-red-500 text-sm mt-1'
										/>
									</div>
									<div className='col-span-6'>
										<label className='text-black' htmlFor='color'>
											Product Color
										</label>
										<Field
											as='select'
											name='color'
											className='w-full rounded-md border border-gray-300 p-2'
										>
											<option value='' disabled>
												Select Color
											</option>
											<option value='Red'>Red</option>
											<option value='Green'>Green</option>
											<option value='Blue'>Blue</option>
										</Field>
										<ErrorMessage
											name='color'
											component='div'
											className='text-red-500 text-sm mt-1'
										/>
									</div>
									<div className='col-span-12'>
										<ErrorMessage
											name='images'
											component='div'
											className='text-red-500 text-sm mt-1'
										/>
									</div>
									<div className='col-span-12'>
										<button
											type='submit'
											className='w-full bg-blue-500 text-white rounded-md p-2'
										>
											Submit
										</button>
									</div>
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
		</>
	);
}
