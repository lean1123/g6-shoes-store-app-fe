import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import addressApi from '../../api/addressApi';

export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	async (userId, { rejectWithValue }) => {
		try {
			const userResponse = await userApi.getUserInfo(userId);

			if (userResponse.status !== 200) {
				return rejectWithValue(
					`Failed to fetch user. Status: ${userResponse.status}, Message: ${userResponse.statusText}`,
				);
			}

			const user = userResponse.data;

			return user;
		} catch (error) {
			console.error('Error fetching user:', error);
			return rejectWithValue('Error fetching user');
		}
	},
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

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
		address: [],
		error: null,
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
	extraReducers: {
		[fetchUser.pending]: (state) => {
			state.status = 'loading';
		},
		[fetchUser.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			state.user = action.payload;
		},
		[fetchUser.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		},
	},
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
