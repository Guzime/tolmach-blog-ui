"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const ButtonLogin: React.FC = () => {
    const { data: session } = useSession();
    if (session) {
      return (
        <>
          Signed in as {session.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )
    }
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )

/*  return (
    <div>
      <button className="px-6 py-2 bg-blue-600 text-white font-sans rounded-lg shadow-md hover:opacity-80 transform transition duration-200 focus:outline-none focus:ring-2 focus:opacity-80">
        Log In
      </button>
    </div>
  );*/
};

export default ButtonLogin;
