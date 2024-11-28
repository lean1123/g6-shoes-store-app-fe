import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';

// Xác thực với Yup
const validationSchema = Yup.object({
	collectionName: Yup.string()
		.required('Collection Name is required')
		.min(3, 'Collection Name must be at least 3 characters'),
	brand: Yup.string().required('Brand is required'),
});

function AddCollection() {
	// Xử lý khi submit form
	const handleSubmit = (values: { collectionName: string; brand: string }) => {
		console.log(values);
		alert('Collection Added!');
	};

	return (
		<>
			<Breadcrumb pageName='Add Collection' />
			<Formik
				initialValues={{ collectionName: '', brand: '' }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{() => (
					<Form className='grid grid-cols-12 gap-4 bg-white p-3 shadow-md rounded-md'>
						{/* Collection Name */}
						<div className='col-span-6'>
							<label className='text-black' htmlFor='collectionName'>
								Collection Name
							</label>
							<Field
								type='text'
								id='collectionName'
								name='collectionName'
								className='w-full p-2 rounded-md border border-gray-300'
							/>
							<ErrorMessage
								name='collectionName'
								component='div'
								className='text-red-500 text-sm mt-1'
							/>
						</div>

						{/* Brand */}
						<div className='col-span-6'>
							<label className='text-black' htmlFor='brand'>
								Brand
							</label>
							<Field
								as='select'
								id='brand'
								name='brand'
								className='w-full rounded-md border border-gray-300 p-2'
							>
								<option value='' label='Select Brand' />
								<option value='Nike' label='Nike' />
								<option value='Adidas' label='Adidas' />
								<option value='Puma' label='Puma' />
							</Field>
							<ErrorMessage
								name='brand'
								component='div'
								className='text-red-500 text-sm mt-1'
							/>
						</div>

						{/* Submit button */}
						<div className='col-span-12'>
							<button
								type='submit'
								className='bg-blue-500 text-white p-2 rounded-md mt-3'
							>
								Add Collection
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
}

export default AddCollection;
