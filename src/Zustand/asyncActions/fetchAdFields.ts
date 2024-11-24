import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {AdPostProperties} from '../../utilities/databaseData';

type InitialStateType = {
  isAdPropertiesListLoading: boolean;
  adPropertiesList: any[];
  ErrorAdPropertiesListMessage: string | null;
};

type asyncFuncType = {
  fetchMenuList: () => Promise<void>;
};

const initialState: InitialStateType = {
  isAdPropertiesListLoading: false,
  adPropertiesList: [],
  ErrorAdPropertiesListMessage: null,
};

const useAdPostProperties = create<InitialStateType & asyncFuncType>()(
  immer(set => ({
    ...initialState,
    fetchMenuList: async () => {
      set(state => {
        state.isAdPropertiesListLoading = true;
        state.ErrorAdPropertiesListMessage = null;
        state.adPropertiesList = [];
      });
      try {
        const response = AdPostProperties;
        set(state => {
          state.adPropertiesList = response;
          state.isAdPropertiesListLoading = false;
          state.ErrorAdPropertiesListMessage = null;
        });
      } catch (error) {
        set(state => {
          state.ErrorAdPropertiesListMessage = (error as Error).message;
          state.isAdPropertiesListLoading = false;
          state.adPropertiesList = [];
        });
      }
    },
  })),
);

export default useAdPostProperties;
