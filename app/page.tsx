"use client"; 

import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import NavBar from "./components/navbar";

export default function App({pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps?.session}>     
    <NavBar {...pageProps} />
    </SessionProvider>
  );
}
