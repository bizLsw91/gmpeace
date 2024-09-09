import Spinner from "@/components/shared/spinner";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, {createContext, PropsWithChildren, useContext, useEffect} from "react";

interface IAuthProviderProps {}

interface IAuthContext {
  initialized: boolean;
  session: Session;
}
export const AuthContext = createContext<IAuthContext | null>(null);
export const useAuth = () => {
  const result = useContext(AuthContext);
  if (!result?.initialized) {
    throw new Error("Auth context must be used within a AuthProvider!");
  }
  return result;
}

const privatePage = ["/admin/history"];

const AuthProvider = ({ children }: PropsWithChildren<IAuthProviderProps>) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const loading = status === "loading";
  const isPublicPage = !privatePage.includes(router.pathname);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (session && isPublicPage) {
      router.push("/");
    } else if (!session && !isPublicPage) {
      router.push("/login");
    }
  }, [loading, session, router]);

  if (loading || (session && isPublicPage)) {
    return <Spinner />;
  }

  if (isPublicPage) {
    return <>{children}</>;
  }

  if (!session?.user) {
    return <Spinner />;
  }

  return (
      <AuthContext.Provider value={{ initialized: true, session }}>
        {children}
      </AuthContext.Provider>
  );
};

export default React.memo(AuthProvider);
