import { IIdea } from './IIdea';

import { IComment } from './IComment';
import { IImage } from './IImage';
import { IVote } from './IVote';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  dateOfBirth: Date;
  image: IImage;
  ideas: IIdea[];
  ideaVotes: IVote[];
  comments: IComment[];
  commentVotes: IVote[];
}