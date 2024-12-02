import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productItemApi from '../../api/productItemApi';

export const onSearch = createAsyncThunk(
	'filter/onSearch',
	async (
		{ color, size, minPrice, maxPrice, productName },
		{ rejectWithValue },
	) => {
		try {
			const response = await productItemApi.search({
				color,
				size,
				minPrice,
				maxPrice,
				productName,
			});
			if (response.status !== 200) {
				return rejectWithValue('Failed to fetch product items by filter');
			}

			console.log('Filtered product items:', response.data?.data);

			return response.data.data;
		} catch (error) {
			console.error('Error:', error);
			return rejectWithValue(error);
		}
	},
);

const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		color: null,
		size: null,
		minPrice: null,
		maxPrice: null,
		productName: null,
		returnProducts: [],
		error: null,
		loading: false,
	},
	reducers: {
		setColor: (state, action) => {
			state.color = action.payload;
		},
		setSize: (state, action) => {
			state.size = action.payload;
		},
		setMinPrice: (state, action) => {
			state.minPrice = action.payload;
		},
		setMaxPrice: (state, action) => {
			state.maxPrice = action.payload;
		},
		setProductName: (state, action) => {
			state.productName = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(onSearch.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(onSearch.fulfilled, (state, action) => {
				state.loading = false;
				state.returnProducts = action.payload;
			})
			.addCase(onSearch.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const { setColor, setSize, setMinPrice, setMaxPrice, setProductName } =
	filterSlice.actions;
export const filterReducer = filterSlice.reducer;
