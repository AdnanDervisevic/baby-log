import { withProtectedRoute } from "@/components/SessionProvider/withProtectedRoute";
import Link from "next/link";

const Login = () => {
  return (
    <main>
      <h1>Baby Log</h1>
      <button>
        <Link href={"/api/login"}>Login</Link>
      </button>
    </main>
  );
};

export default withProtectedRoute(Login);
