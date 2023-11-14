import { createSlice } from '@reduxjs/toolkit';

export type PhoneState = {
  phone: string;
  loadState: 'dialing' | 'calling' | '';
};

const initialState: PhoneState = {
  phone: '',
  loadState: '',
};

const phoneSlice = createSlice({
  name: 'phone',
  initialState: initialState,
  reducers: {
    phone: (state, { payload }: { payload: string }) => {
      state.phone = state.phone + payload;
      state.loadState = 'dialing';
    },
    delete: (state) => {
      state.phone = '';
      state.loadState = '';
    },
    call: (state, { payload }) => {
      state.loadState = 'calling';
      setTimeout(payload, 3000);
    },
    hang: (state) => {
      state.phone = '';
      state.loadState = '';
    },
  },
});

export default phoneSlice.reducer;
export const actions = phoneSlice.actions;
