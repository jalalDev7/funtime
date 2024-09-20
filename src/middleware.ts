import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
export default function middleware(req: Request) {
  return withAuth(req, {
    isReturnToCurrentPage: true,
  });
}
export const config = {
  matcher: ["/admin"],
};
