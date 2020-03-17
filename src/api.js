import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default class Api {
  // login user
  static async login(data) {
    const user = await axios.post(`${process.env.REACT_APP_BASE_URL}/personnel/login`, data);
    console.log('---------user from API-----------', user);
    return user;
  }
}
