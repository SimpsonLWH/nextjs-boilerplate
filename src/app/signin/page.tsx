// app/signin/page.tsx
import { getProviders, signIn, ClientSafeProvider } from 'next-auth/react';
import { GetServerSideProps } from 'next';

interface SignInProps {
  providers: Record<string, ClientSafeProvider> | null;
}

export default function SignIn({ providers }: SignInProps) {
  if (!providers) {
    return <p>Loading...</p>; // Handle the case where providers are null
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Sign In</h1>
      {Object.values(providers).map((provider) => (
        <button
          key={provider.name}
          onClick={() => signIn(provider.id)}
          className="px-4 py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sign in with {provider.name}
        </button>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<SignInProps> = async () => {
  const providers = await getProviders();
  return {
    props: { providers: providers ?? null },
  };
};