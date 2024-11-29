import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddress } from '../../hooks/user/userSlice';

function Address() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    
    const { userId } = useSelector((state) => state.persistedReducer.user);
    const address = useSelector((state) => state.persistedReducer.user?.address) || [];

    useEffect(() => {
        if (!userId) {
            navigate('/login');
            return;
        }

        dispatch(fetchAddress(userId));
    }, [dispatch, userId, navigate]);

    const handleBackToProfile = () => {
        navigate('/profile');
    };

    const handleBackAddress = () => {
        navigate('/address');
    };

    return (
        <div className='flex p-5 font-sans'>
            {/* Sidebar */}
            <div className='w-64 mr-5'>
                <div className='bg-orange-500 p-5 text-center rounded-full w-24 h-24 text-4xl text-white mx-auto flex items-center justify-center'>
                    LA
                </div>
                <p className='text-center mt-3'>
                    Xin chào <span className='text-blue-500 font-bold'>Lê Thanh An</span>
                </p>
                <ul className='list-none p-0 text-center mt-5 space-y-2'>
                    <li className='text-blue-500'>
                        <i className='fa fa-user-circle-o' aria-hidden='true'></i>{' '}
                        <a href='' onClick={handleBackToProfile}>
                            Thông tin tài khoản
                        </a>
                    </li>
                    <li className='text-blue-500'>
                        <i className='fa fa-list-alt' aria-hidden='true'></i>{' '}
                        <a href=''>Quản lý đơn hàng</a>
                    </li>
                    <li className='text-blue-500'>
                        <i className='fa fa-map-marker' aria-hidden='true'></i>{' '}
                        <a href='' onClick={handleBackAddress}>Danh sách địa chỉ</a>
                    </li>
                    <li className='text-red-500'>
                        <i className='fa fa-sign-out' aria-hidden='true'></i>{' '}
                        <a href=''>Đăng xuất</a>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className='flex-1'>
                <div className='flex justify-between items-center mb-5'>
                    <h2 className='text-2xl font-bold'>DANH SÁCH ĐỊA CHỈ</h2>
                    <button 
                        onClick={() => setIsAddingNew(true)}
                        className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
                    >
                        Thêm địa chỉ mới
                    </button>
                </div>

                {/* Danh sách địa chỉ */}
                {!isAddingNew && !editingAddress && (
                    <div className='space-y-4'>
                        {address && address.map((addr) => (
                            <div key={addr.id} className='border p-4 rounded'>
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <p><strong>Địa chỉ:</strong> {addr.homeNumber} {addr.street}</p>
                                        <p><strong>Phường/Xã:</strong> {addr.ward}</p>
                                        <p><strong>Quận/Huyện:</strong> {addr.district}</p>
                                        <p><strong>Tỉnh/Thành:</strong> {addr.city}</p>
                                    </div>
                                    <button
                                        onClick={() => setEditingAddress(addr)}
                                        className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'
                                    >
                                        Sửa
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Form thêm/sửa địa chỉ */}
                {(isAddingNew || editingAddress) && (
                    <AddressForm initialData={editingAddress || {}} />
                )}
            </div>
        </div>
    );
}

export default Address;
