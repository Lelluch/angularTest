import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { AddCustomItem, SetList, SetLoading, SetUser } from './app.actions';
import { initialAppState, IState } from './app.state';

const _appReducer = createReducer(
    initialAppState,
    on(SetList, (state: IState, { items }) => ({ ...state, items })),
    on(SetUser, (state: IState, { user }) => ({ ...state, user })),
    on(SetLoading, (state: IState, { isLoading }) => ({ ...state, isLoading })),
    on(AddCustomItem, (state: IState, { customItem }) => ({
        ...state,
        customItems: [...state.customItems, customItem],
    })),
);

export function reducer(state: any, action: any) {
    return _appReducer(state, action);
}

export interface IAppState {
    app: IState;
  }

export const reducers: ActionReducerMap<IAppState> = {
   app: reducer
  };