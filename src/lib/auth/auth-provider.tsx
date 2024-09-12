"use client"

import {Session} from "next-auth";
import { useSession } from "next-auth/react";
import {usePathname, useRouter} from "next/navigation";
import React, {createContext, PropsWithChildren, useContext, useEffect} from "react";
import Spinner from "@/components/shared/spinner";

interface IAuthProviderProps {}

interface IAuthContext {
  initialized: boolean;
  session: Session;
}
const AuthContext = createContext<IAuthContext | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context?.initialized) {
    // throw new Error("Auth context must be used within a AuthProvider!");
    return null; // AuthContext가 아직 초기화되지 않았을 때 null 반환
  }
  return context;
};

const publicPageList = ["/admin/login"];


const AuthProvider = ({ children }: PropsWithChildren<IAuthProviderProps>) => {
  const { data: session, status } = useSession();
  console.log("session = ", session);
  const router = useRouter();
  const pathname = usePathname()
  const loading = status === "loading";
  const isPublicPage = () => {
    return publicPageList.includes(pathname);
  };

  useEffect(() => {
    if (loading) {
      return;
    }

    if (session && isPublicPage()) {
      router.push("/admin/notice");
    } else if (!session && !isPublicPage()) {
      router.push("/admin/login");
    }
  }, [loading, router, session, pathname]);

  if (loading || (session && isPublicPage())) {
    return <Spinner />;
  }

  if (isPublicPage()) {
    return <>{children}</>;
  }

  if (!session?.user) {
    return <Spinner />;
  }

  return <AuthContext.Provider value={{ initialized: true, session }}>
        {children}
      </AuthContext.Provider>;
};

export default React.memo(AuthProvider);
