import SecureIcon from '../assets/secure.svg';
import FastIcon from '../assets/fast-icon.svg';
import UsersIcon from '../assets/users-icon.svg';

export type FeatureItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export const features: FeatureItem[] = [
  {
    id: 1,
    icon: SecureIcon,
    title: 'Secure Authentication',
    description: 'Enterprise-grade security with Firebase authentication',
  },
  {
    id: 2,
    icon: FastIcon,
    title: 'Lightning Fast',
    description: 'Optimized performance for the best user experience',
  },
  {
    id: 3,
    icon: UsersIcon,
    title: 'User Management',
    description: 'Complete profile management and customization',
  },
];
