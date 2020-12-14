import { ICustomItem, IItem } from '../models/search-item.model';

export interface IState {
    items: IItem[];
    user: string;
    customItems: ICustomItem[];
    isLoading: boolean;
}

export const initialAppState: IState = {
    items: [],
    user: 'Your Name',
    customItems: [],
    isLoading: false
}