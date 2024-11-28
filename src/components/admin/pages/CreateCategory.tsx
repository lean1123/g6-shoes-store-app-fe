import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';

// Validation schema using Yup
const validationSchema = Yup.object({
	categoryName: Yup.string()
		.required('Category Name is required')
		.min(3, 'Category Name must be at least 3 characters'),
});

function CreateCategory() {
	// Handle form submission
	const handleSubmit = (values: { categoryName: string }) => {
		console.log(values);
		alert('Category Created!');
	};

	return (
		<>
			<Breadcrumb pageName='Create Category' />
			<Formik
				initialValues={{ categoryName: '' }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{() => (
					<Form className='grid grid-cols-12 gap-4 p-3 rounded-md shadow-md bg-white'>
						{/* Category Name */}
						<div className='col-span-6'>
							<label className='text-black' htmlFor='categoryName'>
								Category Name
							</label>
							<Field
								type='text'
								id='categoryName'
								name='categoryName'
								className='w-full p-2 rounded-md border border-gray-300'
							/>
							<ErrorMessage
								name='categoryName'
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
								Create Category
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
}

export default CreateCategory;
