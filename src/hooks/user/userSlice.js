import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import addressApi from '../../api/addressApi';

export const fetchUser = createAsyncThunk(
	'userInfo/fetchUser',
	async (userId) => {
		try {
			const response = await userApi.getUserInfo(userId);
		//	console.log('fetchUser thunk response:', response);
			return response;
		} catch (error) {
			console.error('fetchUser thunk error:', error);
			throw error;
		}
	}
);
  
  
export const fetchAddress = createAsyncThunk(
	'user/fetchAddress',
	async (userId, { rejectWithValue }) => {
		try {
			const response = await addressApi.getAddress(userId);

			if (response.status !== 200) {
				return rejectWithValue(
					`Failed to fetch address. Status: ${response.status}, Message: ${response.statusText}`,
				);
			}

			return response.data;
		} catch (error) {
			console.error('Error fetching address:', error);
			return rejectWithValue('Error fetching address');
		}
	},
);
export const updateAddress = createAsyncThunk(
    'user/updateAddress',
    async ({ userId, addressId, addressData }, { rejectWithValue }) => {
        try {
            const response = await userApi.updateAddress(userId, addressId, addressData);
            if (response.status !== 200) {
                return rejectWithValue('Failed to update address');
            }
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const addAddress = createAsyncThunk(
    'user/addAddress',
    async ({ userId, addressData }, { rejectWithValue }) => {
        try {
            const response = await userApi.addAddress(userId, addressData);
            if (response.status !== 201) {
                return rejectWithValue('Failed to add address');
            }
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const userSlice = createSlice({
	name: 'userInfo',
	initialState: {
		user: null,
		error: null,
		loading: false
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload.data;
				state.error = null;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	}
});

export const { setUser } = userSlice.actions;
export const userInfoReducer = userSlice.reducer;
