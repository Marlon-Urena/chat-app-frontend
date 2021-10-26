import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

export type UserType = {
  id: string;
  avatarUrl: string;
  name: string;
  company: string;
  isVerified: boolean;
  status: 'active' | 'banned';
  role:
    | 'Leader'
    | 'Hr Manager'
    | 'UI Designer'
    | 'UX Designer'
    | 'UI/UX Designer'
    | 'Project Manager'
    | 'Backend Developer'
    | 'Full Stack Designer'
    | 'Front End Developer'
    | 'Full Stack Developer';
};

const users: UserType[] = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']) || 'active',
  role:
    sample([
      'Leader',
      'Hr Manager',
      'UI Designer',
      'UX Designer',
      'UI/UX Designer',
      'Project Manager',
      'Backend Developer',
      'Full Stack Designer',
      'Front End Developer',
      'Full Stack Developer'
    ]) || 'Leader'
}));

export default users;
