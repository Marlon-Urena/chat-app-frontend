import axios, { AxiosResponse } from 'axios';
import firebaseAuth from '../.firebase/firebaseConfig';
import { User } from '../store/user/types';

const authenticationServiceURL = `${process.env.REACT_APP_AUTHENTICATION_SERVICE_URL}/auth`;
const userServiceURL = process.env.REACT_APP_USER_ACCOUNT_SERVICE_URL;

async function createUser(signupDetails: {
  username: string;
  email: string;
  password: string;
}): Promise<AxiosResponse> {
  return axios.post(`${authenticationServiceURL}/signup`, signupDetails);
}

async function getUser(): Promise<AxiosResponse<User>> {
  const user = firebaseAuth.currentUser;
  return axios.post(`${userServiceURL}/user`, undefined, {
    headers: { Authorization: `Bearer ${await user?.getIdToken()}` }
  });
}

async function updateUser(updatedUser: User): Promise<AxiosResponse<User>> {
  const user = firebaseAuth.currentUser;
  return axios.put(`${userServiceURL}/user`, updatedUser, {
    headers: { Authorization: `Bearer ${await user?.getIdToken()}` }
  });
}

async function checkEmailAvailable(email: string): Promise<AxiosResponse<boolean>> {
  return axios.post(`${userServiceURL}/register/email-availability`, email);
}

async function checkUsernameAvailable(username: string): Promise<AxiosResponse<boolean>> {
  return axios.post(`${userServiceURL}/register/username-availability`, username);
}

async function changeEmail(newEmail: string): Promise<AxiosResponse<User>> {
  const user = firebaseAuth.currentUser;
  return axios.patch(`${userServiceURL}/user/change_email`, newEmail, {
    headers: {
      Authorization: `Bearer ${await user?.getIdToken()}`
    }
  });
}

async function changeUsername(newUsername: string): Promise<AxiosResponse<User>> {
  const user = firebaseAuth.currentUser;
  return axios.patch(`${userServiceURL}/user/change_username`, newUsername, {
    headers: {
      Authorization: `Bearer ${await user?.getIdToken()}`
    }
  });
}

async function changeProfilePhoto(photoFile: File): Promise<AxiosResponse<User>> {
  const user = firebaseAuth.currentUser;
  const photoData = new FormData();
  photoData.append('file', photoFile);
  return axios.post(`${userServiceURL}/user/change_profile_photo`, photoData, {
    headers: {
      Authorization: `Bearer ${await user?.getIdToken()}`
    }
  });
}

export {
  createUser,
  getUser,
  updateUser,
  checkEmailAvailable,
  checkUsernameAvailable,
  changeEmail,
  changeUsername,
  changeProfilePhoto
};
