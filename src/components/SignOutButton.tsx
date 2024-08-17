// components/SignOutButton.tsx
import { signOut } from 'next-auth/react';

const SignOutButton: React.FC = () => (
  <button
    onClick={() => signOut()}
    className="px-4 py-2 mt-4 bg-red-600 text-white rounded hover:bg-red-700"
  >
    Sign Out
  </button>
);

export default SignOutButton;