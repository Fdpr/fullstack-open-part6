import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: "notification",
    initialState: "Nothing",
    reducers: {
        createNotification(state, action) {
            if (action.payload === undefined)
                return ""
            return action.payload
        },
        removeNotification() {
            return ""
        }
    }
})
export const { createNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer