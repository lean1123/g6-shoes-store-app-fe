import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from '@mui/material';
import { Outlet, useParams } from 'react-router';
import './Style.css';
import SubProductDetail from './SubProductDetail';
import useProductItem from '../../../hooks/product/useProductItem';
import { useState } from 'react';

// {
//   "status": 200,
//   "data": {
//     "id": "bcabc1f8-8091-44ef-8076-304728a32ca3",
//     "price": 100000,
//     "quantity": 10,
//     "listDetailImages": [
//       "http://res.cloudinary.com/dr7uxdi9o/image/upload/v1732706775/ShoesShopApp/Product-Item/null_f327f540.webp"
//     ],
//     "color": "BLACK",
//     "size": "40",
//     "product": {
//       "id": "e1738e3e-21cb-4fae-a6c0-36665b28f2c2",
//       "name": "Product 2",
//       "description": "Demo",
//       "warrantyInformation": null,
//       "returnInformation": null,
//       "avatar": "http://res.cloudinary.com/dr7uxdi9o/image/upload/v1732519798/ShoesShopApp/Product/Product%202.webp",
//       "shippingInformation": null,
//       "rating": 0,
//       "createdDate": "2024-12-11T17:00:00.000+00:00",
//       "gender": null,
//       "collection": null,
//       "category": {
//         "id": "1",
//         "name": "cate 1",
//         "description": null
//       }
//     },
//     "status": "INSTOCK"
//   }
// }

function ProductDetail() {
	const params = useParams();

	const { isLoading, productItem } = useProductItem(params.id);

	const [selectedSize, setSelectedSize] = useState(null);
	const [selectedColor, setSelectedColor] = useState(null);

	const handleColorSelect = (color) => {
		setSelectedColor(color);
	};

	const handleSizeSelect = (size) => {
		console.log(size);

		setSelectedSize(size);
	};

	return (
		<div className='grid grid-cols-2 my-6 font-calibri'>
			<div className='flex flex-row justify-center'>
				<div className='flex-col h-96 overflow-auto scrollbar-hidden p-2 mr-2'>
					{productItem?.listDetailImages.map((item, index) => (
						<img
							key={index + 1}
							className='w-20 mb-4 border rounded-lg'
							src={item}
							alt='product'
						/>
					))}
				</div>
				<div className='border rounded-lg w-96 h-96 object-cover p-2'>
					<img
						className='w-full h-full'
						src={productItem?.listDetailImages[0]}
						alt='product avatar'
					/>
				</div>
			</div>
			<div className='mb-10'>
				<h2 className='text-2xl font-bold mb-4'>{productItem?.product.name}</h2>
				<div className='w-full flex justify-start mb-4'>
					<p className='text-lg mr-10 font-semibold text-orange-600'>
						{productItem?.price} VND
					</p>
					<p className='text-lg text-orange-600'>
						Tình trạng còn hàng: {productItem?.quantity}
					</p>
				</div>
				<div className='flex justify-start mb-4'>
					<p className='text-base font-bold mr-2'>Chọn màu:</p>
					<div className='flex justify-start'>
						{productItem?.product?.colors.map((color) => (
							<button
								key={color}
								className={`mr-2 border px-3 py-2 ${color === selectedSize ? 'bg-orange-300' : ''}`}
							>
								<span>{color}</span>
							</button>
						))}
					</div>
				</div>
				<div className='flex justify-start mb-4'>
					<p className='text-base font-bold mr-2'>Chọn size:</p>
					<div className='flex justify-start'>
						{productItem?.product.sizes.map((size) => (
							<button
								key={size}
								className={`mr-2 border px-3 py-2 ${size === selectedSize ? 'bg-orange-300' : ''}`}
								onClick={handleSizeSelect.bind(this, size)}
							>
								<span>{size}</span>
							</button>
						))}
					</div>
				</div>
				<div className='mb-8 text-base text-slate-800 ml-24'>
					<Link href='/products/1' color='textPrimary'>
						Hướng dẫn chọn size
					</Link>
				</div>
				<div className='flex justify-start ml-24 mb-10'>
					<button className='bg-orange-600 px-8 py-2 font-bold hover:bg-slate-950 hover:text-sky-50'>
						THÊM VÀO GIỎ HÀNG
					</button>
					<div className='px-8 py-2 font-bold border w-30 text-orange-600 border-orange-600'>
						<FavoriteBorderIcon />
					</div>
				</div>

				<div className='w-full flex flex-col'>
					<div className='w-3/4 flex justify-between items-center border-t border-gray-800 py-2'>
						<SubProductDetail
							title='Mô tả sản phẩm'
							content={productItem?.product.description}
							path={`/products/${params.id}/description`}
						/>
					</div>
					<div className='w-3/4 flex justify-between items-center border-t border-gray-800 py-2'>
						<SubProductDetail
							title='Thông tin bảo hành'
							path={`/products/${params.id}/warrantyPolicy`}
						/>
					</div>
					<div className='w-3/4 flex justify-between items-center border-t border-gray-800 py-2'>
						<SubProductDetail
							title='Chính sách đổi trả'
							path={`/products/${params.id}/returnPolicy`}
						/>
					</div>
					<div className='w-3/4 flex justify-between items-center border-t border-gray-800 py-2'>
						<SubProductDetail
							title='Reviews'
							path={`/products/${params.id}/reviews`}
						/>
					</div>
				</div>
			</div>
			<Outlet />
			<div className='w-full'>
				<p>Danh sách sản phẩm cùng dòng</p>
			</div>
		</div>
	);
}

export default ProductDetail;
