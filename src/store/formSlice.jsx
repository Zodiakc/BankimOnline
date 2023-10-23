import { createSlice } from "@reduxjs/toolkit";
//Инициализируем все типы инпутов
const initialState = {
    propertyValue: 1e6,
    purchaseCity: "",
    mortgageDate: "",
    initialPayment: 5e5,
    propertyType: "",
    propertyOwnership: "",
    period: 30,
    monthlyPayment: 2654,
};
const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        replaceInitialState(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});
export const { replaceInitialState } = formSlice.actions;
export default formSlice.reducer;
