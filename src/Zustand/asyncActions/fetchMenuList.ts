import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {exloreCategoryList} from '../../utilities/databaseData';

type InitialStateType = {
  isLoading: boolean;
  menuList: any[];
  ErrorMessage: string | null;
};

type asyncFuncType = {
  fetchMenuList: () => Promise<void>;
};

const initialState: InitialStateType = {
  isLoading: false,
  menuList: [],
  ErrorMessage: null,
};

const useFetchMenuList = create<InitialStateType & asyncFuncType>()(
  immer(set => ({
    ...initialState,
    fetchMenuList: async () => {
      set(state => {
        state.isLoading = true;
        state.ErrorMessage = null;
        state.menuList = [];
      });
      try {
        const response = exloreCategoryList;
        set(state => {
          state.menuList = response;
          state.isLoading = false;
          state.ErrorMessage = null;
        });
      } catch (error) {
        set(state => {
          state.ErrorMessage = (error as Error).message;
          state.isLoading = false;
          state.menuList = [];
        });
      }
    },
  })),
);

export default useFetchMenuList;
