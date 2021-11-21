import axios, { AxiosResponse } from 'axios';
import firebase from 'firebase/compat';
import { User } from '../store/authentication/types';

const authenticationURL = 'http://localhost:8443';

async function createUser(signupDetails: {
  name: string;
  password: string;
  email: string;
}): Promise<AxiosResponse> {
  return axios.post(`${authenticationURL}/register`, signupDetails);
}

async function getUser(): Promise<AxiosResponse<User>> {
  const user = firebase.auth().currentUser;
  return axios.post(`${authenticationURL}/user`, undefined, {
    headers: { Authorization: `Bearer ${await user!.getIdToken()}` }
  });
}

export { createUser, getUser };
