import {patchState, signalStore, withMethods, withState} from '@ngrx/signals' 
import { ICategory } from '../../shared/models/backend/ICategory';
import { IUser } from '../../shared/models/backend/IUser';

interface State  {
  user: IUser;
  isLoading: boolean
}



const initalState: State = {
  isLoading: false
}

export const userStore = signalStore(
    {providedIn: 'root'},

    withState<State>(initalState),
   
  );