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
	extraReducers: (builder) => {
		builder
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.user = action.payload;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.error = action.payload;
			})
			.addCase(fetchAddress.fulfilled, (state, action) => {
				state.address = action.payload;
			})
			.addCase(fetchAddress.rejected, (state, action) => {
				state.error = action.payload;
			});
	},
});

export const { setUser } = userSlice.actions;
export const userInfoReducer = userSlice.reducer;
