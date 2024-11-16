import {create} from 'zustand';

export const comingFromState = create<{
  value: string;
  setValue: (newValue: string) => void;
}>(set => ({
  value: '',
  setValue: newValue => set(() => ({value: newValue})),
}));
