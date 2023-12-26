import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {floversService} from "../../services";


const initialState = {
    one_product: {},
    similarItem: [],
    category: [],
    all_with_paginate: {},
    products_in_basket: [],
    burger_menu: false,
    basket_open: false,
};

const getAll = createAsyncThunk(
    'flowersSlice/getAll',
    async ([page, type], thunkAPI) => {
        try {
            const {data} = await floversService.getAll(page, type)
            return data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getCategory = createAsyncThunk(
    'flowersSlice/getCategory',
    async (_, thunkAPI) => {
        try {
            const {data} = await floversService.getCategory()
            return data.data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getById = createAsyncThunk(
    'flowersSlice/getById',
    async (id, thunkAPI) => {
        try {
            const {data} = await floversService.getById(id)
            return data.data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const getSimilar = createAsyncThunk(
    'flowersSlice/getSimilar',
    async (count, thunkAPI) => {
        try {
            const {data} = await floversService.getSimilar(count)
            return data.data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const sendData = createAsyncThunk(
    'flowersSlice/sendData',
    async (data_, thunkAPI) => {
        try {
            const {data} = await floversService.sendData(data_)
            console.log(data);
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const flowerSlice = createSlice({
    name: 'flowerSlice',
    initialState,
    reducers: {
        open_menu: (state) => {
            state.burger_menu = !state.burger_menu
        },
        open_basket: (state) => {
            state.basket_open = !state.basket_open
        },
        add_product_in_basket: (state, action) => {
            const productsToAdd = action.payload; // Отримуємо масив об'єктів з action.payload

            // Перевіряємо кожен об'єкт в масиві productsToAdd
            productsToAdd.forEach(productToAdd => {
                const { color_id, product_id, count, total, opt_price } = productToAdd;

                // Перевіряємо, чи існує об'єкт з такими color_id і product_id в масиві
                const productExists = state.products_in_basket.some(item => item.color_id === color_id && item.product_id === product_id);

                if (productExists) {
                    // Якщо об'єкт із такими color_id і product_id вже існує в масиві
                    // Оновлюємо його властивості за потреби
                    state.products_in_basket = state.products_in_basket.map(item => {
                        if (item.color_id === color_id && item.product_id === product_id) {
                            // Оновлюємо відповідні властивості з productToAdd, які потрібно оновити
                            // Наприклад, count, total, opt_price і т. д.
                            return {
                                ...item,
                                count: count,
                                total: total,
                                opt_price: opt_price,
                            };
                        }
                        return item;
                    });
                } else {
                    // Якщо об'єкт із такими color_id і product_id не існує в масиві
                    // Додаємо новий об'єкт до масиву
                    state.products_in_basket = [...state.products_in_basket, productToAdd];
                }
            });
        },
        delete_product_by_ids: (state, action) => {
            const { color_id, product_id } = action.payload;
            state.products_in_basket = state.products_in_basket.filter(product => !(product.color_id === color_id && product.product_id === product_id));
        },
        close_menu: (state) => {
            state.burger_menu = false;
        },
        close_basket: (state) => {
            state.basket_open = false;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getCategory.fulfilled, (state, action) => {
                state.category = action.payload
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.one_product = action.payload
            })
            .addCase(getSimilar.fulfilled, (state, action) => {
                state.similarItem = action.payload
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.all_with_paginate = action.payload
            })
            .addCase(sendData.fulfilled, state => {
                state.products_in_basket = []
            })
})


const {reducer: flowerReducer, actions} = flowerSlice;

const flowerAction = {
    ...actions,
    getCategory,
    getById,
    getSimilar,
    getAll,
    sendData
}

export {
    flowerReducer,
    flowerAction
}