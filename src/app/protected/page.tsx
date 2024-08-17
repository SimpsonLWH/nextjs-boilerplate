// app/protected/page.tsx
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { Session } from 'next-auth';
import SignOutButton from '@/components/SignOutButton'

interface ProtectedPageProps {
  session: Session | null;
}

export default function ProtectedPage({ session }: ProtectedPageProps) {
  if (!session) {
    return <p>You must be signed in to view this page.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Protected Page</h1>
      <p>Welcome, {session.user?.email}!</p>
      <SignOutButton />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<ProtectedPageProps> = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};