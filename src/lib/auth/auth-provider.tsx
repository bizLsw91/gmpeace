"use client"

import {Session} from "next-auth";
import { useSession } from "next-auth/react";
import {usePathname, useRouter} from "next/navigation";
import { createContext, useContext, useEffect } from "react";
import Spinner from "@/components/shared/spinner";

interface AuthContextType {
  session: Session | null;
}
const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname()
  const loading = status === "loading";

  useEffect(() => {
    if (!loading && !session && pathname.startsWith("/admin")) {
      router.push("/admin/login");
    }
  }, [loading, session, pathname, router]);

  if (loading) {
    return <Spinner />;
  }

  return (
      <AuthContext.Provider value={{ session }}>
        {children}
      </AuthContext.Provider>
  );
};
