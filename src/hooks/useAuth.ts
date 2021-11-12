interface User {
  displayName: string;
  email: string;
  photoURL: string;
  phoneNumber: string;
  country: string;
  address: string;
  state: string;
  city: string;
  zipCode: string;
}

let currentUser: User = {
  displayName: 'Jaydon Frankie',
  email: 'jaydonfrankie@gmail.com',
  photoURL: '/static/mock-images/avatars/minimal_avatar.jpg',
  phoneNumber: '+1 718-555-6666',
  country: 'United States',
  address: '55 Waverly Place',
  state: 'New York',
  city: 'New York',
  zipCode: '10001'
};

export default function useAuth() {
  return {
    user: currentUser,
    updateProfile: (updatedUser: User) => {
      currentUser = { ...updatedUser };
    }
  };
}
