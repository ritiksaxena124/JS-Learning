import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, actions) => {
            state.messages.splice(10, 1);
            state.messages.unshift(actions.payload);
        }
    }
})


export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;