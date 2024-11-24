import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {exloreCategoryList} from '../../utilities/databaseData';

type InitialStateType = {
  isMenuListLoading: boolean;
  menuList: any[];
  ErrorMenuListMessage: string | null;
};

type asyncFuncType = {
  fetchMenuList: () => Promise<void>;
};

const initialState: InitialStateType = {
  isMenuListLoading: false,
  menuList: [],
  ErrorMenuListMessage: null,
};

const useFetchMenuList = create<InitialStateType & asyncFuncType>()(
  immer(set => ({
    ...initialState,
    fetchMenuList: async () => {
      set(state => {
        state.isMenuListLoading = true;
        state.ErrorMenuListMessage = null;
        state.menuList = [];
      });
      try {
        const response = exloreCategoryList;
        set(state => {
          state.menuList = response;
          state.isMenuListLoading = false;
          state.ErrorMenuListMessage = null;
        });
      } catch (error) {
        set(state => {
          state.ErrorMenuListMessage = (error as Error).message;
          state.isMenuListLoading = false;
          state.menuList = [];
        });
      }
    },
  })),
);

export default useFetchMenuList;
