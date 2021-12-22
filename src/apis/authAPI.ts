import axios, { AxiosResponse } from 'axios';
import firebase from 'firebase/compat';
import { User } from '../store/authentication/types';

const authenticationServiceURL = 'http://localhost:3002/auth';
const userServiceURL = 'http://localhost:8443';

async function createUser(signupDetails: {
  username: string;
  email: string;
  password: string;
}): Promise<AxiosResponse> {
  return axios.post(`${authenticationServiceURL}/signup`, signupDetails);
}

async function getUser(): Promise<AxiosResponse<User>> {
  const user = firebase.auth().currentUser;
  return axios.post(`${userServiceURL}/user`, undefined, {
    headers: { Authorization: `Bearer ${await user?.getIdToken()}` }
  });
}

export { createUser, getUser };
