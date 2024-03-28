import { Painting } from './painting';


export interface User {
  
  paintings?: Painting[]
  _id: string;
  email: string;
  password: string;
  token: string;
  photo?: string; 
}

export interface UserForAuth extends User {
 
  _id: string;
  email: string;
  password: string;
  token: string;
  paintings?: Painting[]
  photo?: string; 
}

