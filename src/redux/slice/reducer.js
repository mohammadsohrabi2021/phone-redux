import {createSlice} from "@reduxjs/toolkit";


const initialState = [
    {id: 1,name: "mohammad", lastName: "sohrabi", phone: "09186333667", age: 21, country: "iran", city: "hamedan" ,state:false},
]

export const ContactSlice = createSlice({
    name: 'reducer',
    initialState,
    reducers: {
        deleteContact: (state, action) => {
            const {payload} = action
            const index = state.findIndex(contact => contact.id === payload)
            state.splice(index, 1)
        },
        addContact: (state, action) => {
            const {payload} = action
            state.push(payload)
        },
        updateContact: (state, action) => {
            const {payload} = action
            const index = state.findIndex(state => state.id === payload.id)
            state[index] = payload
        }
    }
})

export const {deleteContact, addContact, updateContact} = ContactSlice.actions

export default ContactSlice.reducer


