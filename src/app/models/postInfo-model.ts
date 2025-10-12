import { IPost } from './post-model';

export interface IPostInfo extends IPost {
  id: number;
  author: string;
  date: string;
  updatedAt?: string;
}
