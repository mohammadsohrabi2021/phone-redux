import { configureStore} from "@reduxjs/toolkit";
import ContactSlice from "./slice/reducer";

export const store = configureStore({
    reducer: {
        reducer:ContactSlice,
    },
})

