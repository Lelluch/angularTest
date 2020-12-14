import { createSelector } from '@ngrx/store';
import { IState } from './app.state';


const appState = (state:any) => {
    return state.app;
};

export const getUser = createSelector(appState, (app: IState) => {
    return app.user;
});

export const getItems = createSelector(appState, (app: IState) => {
    return app.items;
});

export const getCustomItems = createSelector(appState, (app: IState) => {
    return app.customItems;
});

export const getLoading = createSelector(appState, (app: IState) => {
    return app.isLoading;
});