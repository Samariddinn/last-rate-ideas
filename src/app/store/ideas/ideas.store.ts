import {patchState, signalStore, withMethods, withState} from '@ngrx/signals' 
import { ICategory } from '../../shared/models/backend/ICategory';

interface State  {
  ideas: IIdea[];
  categories: ICategory[];
  isLoading: boolean
}

export interface IIdea {
    id: number;
    title: string;
    description: string;
    isSaved: boolean;
    category: ICategory;
  }
  

const initalState: State = {
  ideas: [
  {id: 2,
    title: 'Angularni rivojlanitirsh', 
    isSaved: true,
    user: {firstName: 'Samar'}, 
    description: 'this is desc',} as unknown as IIdea
  ],
  categories: [],
  isLoading: false
}

export const ideasStore = signalStore(
    {providedIn: 'root'},

    withState<State>(initalState),
    withMethods(state => ({
      updateSave(id: number): void {
       const updatedIdeas =  state.ideas().map(idea => {
        if(idea.id === id) return {...idea, isSaved: !idea.isSaved}
        return idea;
      });

       patchState(state, {ideas: updatedIdeas})
      }
    }))
   
  );