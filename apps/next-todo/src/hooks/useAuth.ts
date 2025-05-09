import { User } from '@/models/user';

export const useAuth = () => {
  return { user: { id: 'userid', name: 'Name' } satisfies User };
};
