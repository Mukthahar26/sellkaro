import {create} from 'zustand';

export const useComingFromState = create<{
  value: string;
  setValue: (newValue: string) => void;
}>(set => ({
  value: '',
  setValue: newValue => set(() => ({value: newValue})),
}));
