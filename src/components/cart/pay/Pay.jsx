import { LoadingOutlined } from '@ant-design/icons';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const Pay = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isCod, setIsCod] = useState(true);

	const { cartItems } = useSelector((state) => state.persistedReducer.cart);
	const { userId } = useSelector((state) => state.persistedReducer.user);

	const [isShow, setIsShow] = useState(false);
	useEffect(() => {
		if (cartItems?.length > 2) {
			setIsShow(true);
		}
	}, [cartItems.length]);

	const total = useMemo(() => {
		return cartItems.reduce(
			(acc, item) => acc + item?.productItem?.price * item?.quantity,
			0,
		);
	}, [cartItems]);

	const form = useForm({
		defaultValues: {
			paymentMethod: isCod === true ? 'CASH' : '',
			totalPrice: total,
			orderDetails: cartItems?.map((item) => ({
				productId: item?.productItem?.id,
				quantity: item?.quantity,
				pricePerItem: item?.productItem?.price,
			})),
			userId: userId,
		},
	});

	const { register, setValue } = form;

	useEffect(() => {
		setValue('paymentMethod', isCod ? 'CASH' : '');
	}, [isCod, setValue]);

	const onSubmit = (data) => {
		console.log('Form data: ', data);
	};

	return (
		<div className='w-full flex justify-between'>
			<div id='left' className='w-1/2 px-5 pt-10 flex flex-col'>
				<img src='logo.png' alt='logo' className='h-20 w-20' />

				<div className='flex flex-row justify-between items-center py-2'>
					<div>
						<LoadingOutlined />
					</div>
					<strong className='ml-1 animate-bounce'>
						Sản phẩm đang trong giỏ hàng của nhiều người dùng. Đừng lo
						<span className='text-red-500 hover:cursor-pointer animate-bounce'>
							{' '}
							LEN DOM{' '}
						</span>
						đã giữ chỗ cho các bạn để không bị hết hàng khi thanh toán.
					</strong>
				</div>

				<Box component='form' onSubmit={form.handleSubmit(onSubmit)}>
					<div className='flex items-center justify-between py-1'>
						<FormGroup>
							<FormControlLabel
								content='center'
								control={
									<Checkbox
										defaultChecked
										value={isCod}
										onChange={() => setIsCod((prev) => !prev)}
										{...register('paymentMethod')}
									/>
								}
								label='Thanh toán khi nhận hàng'
							/>
						</FormGroup>
						<input
							type='submit'
							value='Hoàn tất đơn hàng'
							className='h-10 bg-red-500 rounded-lg text-white w-2/4 my-2'
						/>
					</div>
				</Box>
				<hr className='mt-10 mb-2 text-grey-300' />
				<div className='flex flex-col h-full justify-end text-center'>
					<div className='border-1'></div>
					<p className='text-2xl text-stone-300'>Power by github huynnthinh</p>
				</div>
			</div>
			<div id='right' className='w-1/2 bg-stone-100 pt-10 px-10'>
				<div
					id='items'
					className={`${isExpanded ? 'h-fit' : 'h-60'} overflow-y-scroll`}
				>
					{cartItems?.map((item) => (
						<div
							key={item?.productItem.id}
							className='flex justify-between items-center py-2'
						>
							<div className='flex items-center'>
								<img
									src={item?.productItem?.listDetailImages[0]}
									alt={item?.product?.name}
									className='h-20 w-20 rounded-lg mr-2'
								/>
								<div>
									<p>{item?.product?.name}</p>
									<div className='flex'>
										<p className='text-stone-500'>{item?.productItem?.color}</p>
										<p className='text-stone-500 ml-1'> {item?.productItem?.size}</p>
									</div>
								</div>
							</div>
							<div>
								<p>{item?.productItem?.price.toLocaleString()}đ</p>
								<p className='text-stone-500'>x1</p>
							</div>
						</div>
					))}
				</div>
				{isShow && (
					<button
						onClick={() => setIsExpanded(!isExpanded)}
						className='mt-2 font-bold hover:text-stone-300  p-2 w-full'
					>
						{isExpanded ? 'Thu gọn' : 'Xem tất cả'}
					</button>
				)}
				<div className='border-1 my-3'></div>

				<div className='border-1 my-3'></div>
				<div className='flex justify-between px-5'>
					<p className='font-calibri text-base'>Tạm tính</p>
					<p>{total?.toLocaleString()}đ</p>
				</div>

				<div className='border-1 my-3'></div>
				<div className='flex justify-between items-center px-5'>
					<p className='font-bold text-xl'>Tổng cộng</p>
					<p className='font-bold text-xl'>{total?.toLocaleString()}đ</p>
				</div>
				<div className='flex items-center mt-2'>
					<div className='border-1 flex-grow'></div>

					<div className='border-1 flex-grow'></div>
				</div>
				<div className='mt-4'>
					<div className='flex'>
						<img src='vanchuyen.png' alt='vanchuyen' className='mr-2 ' />
						<p>
							<strong>
								Hơn 800.000 đơn hàng được Thịnh vận chuyển đến tay khách hàng thành
								công.
							</strong>
							<br />
							Thịnh luôn làm đảm bảo khách hàng hài lòng khi nhận sản phẩm. Bạn chỉ cần
							đặt hàng giao hàng hãy để đội ngũ Thịnh lo.
						</p>
					</div>
					<div className='flex mt-3'>
						<img src='loop.png' className='mr-2' alt='loop' />
						<p>
							<strong>
								Đổi trả hàng dễ dàng trong 30 ngày với sản phẩm không hài lòng.
							</strong>
							<br />
							Thịnh cam kết đổi trả hàng dễ dàng trong 30 ngày nếu sản phẩm không hài
							lòng. Bạn chỉ cần liên hệ với Thịnh qua hotline hoặc email.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pay;
