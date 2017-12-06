import { IUser, IUserDetail, createUser, createUsers, createUserById, createUserByEmail } from './interface';
import * as Bluebird from 'bluebird';
const model = require('../../models');

class User implements IUser {
  public id: number;
  public name: string;
  public email: string;
  public password: string;

  constructor(){}

  create(user: any){
    return model.User.create(user);
  }

  getAll(): Bluebird<IUser[]>{
    return model.User.findAll({
      order: ['name']
    })
    .then(createUsers);
  }

  getById(id: number): Bluebird<IUserDetail[]>{}

  getByEmail(email: string): Bluebird<IUserDetail[]>{}

  update(id: number, user: any){}

  delete(id: number){}
}
