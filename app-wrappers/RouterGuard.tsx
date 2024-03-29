import { useState, useEffect, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export { RouteGuard };

function RouteGuard({ children }: PropsWithChildren) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const userId = useSelector((state: RootState) => state.user.uid);

  useEffect(() => {
    // on initial load - run auth check

    authCheck(router.pathname);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);

    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  async function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ["/login", "/register", "/", "/about"];
    const loggedInGuardedPaths = ["/login", "/register"];
    const path = url.split("?")[0];
    if (userId === "" && !publicPaths.includes(path)) {
      setAuthorized(false);
      await router.push("/login");
    } else {
      setAuthorized(true);
    }

    if (userId !== "" && loggedInGuardedPaths.includes(path)) {
      setAuthorized(false);
      await router.push("/");
    } else {
      setAuthorized(true);
    }
  }

  return authorized ? <>{children}</> : <></>;
}

export default RouteGuard;
