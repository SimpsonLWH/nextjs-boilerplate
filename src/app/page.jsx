// src/app/page.jsx
"use client";

import { useSession, signOut } from 'next-auth/react';

const HomePage = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <p>You are not signed in</p>
      )}
    </div>
  );
};

export default HomePage;