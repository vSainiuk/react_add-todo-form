import { User } from './User';

export interface Todo {
  id: number,
  title: string,
  completed: boolean,
  userId: User['id']
  user: User,
}