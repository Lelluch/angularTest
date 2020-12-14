import { createAction, props } from '@ngrx/store';
import { ICustomItem, IItem } from '../models/search-item.model';


export enum EAppActions {
    LoadList = '[EApp] Load List',
    CreateCustomItem = '[EApp] Create Custom Item'
}

export enum AppActions {
    SetList='[App] Set List',
    SetUser = '[App] Set User',
    SetLoading = '[App] Set Loading',
    AddCustomItem='[App] Add Customer Item'
}

export const LoadList = createAction(EAppActions.LoadList, props<{ search: string }>());
export const CreateCustomItem = createAction(EAppActions.CreateCustomItem, props<{ customItem: ICustomItem }>());

export const SetUser = createAction(AppActions.SetUser, props<{ user: string }>());
export const SetList = createAction(AppActions.SetList, props<{ items: IItem[] }>());
export const SetLoading = createAction(AppActions.SetLoading, props<{ isLoading: boolean }>());
export const AddCustomItem = createAction(AppActions.AddCustomItem, props<{ customItem: ICustomItem }>());

