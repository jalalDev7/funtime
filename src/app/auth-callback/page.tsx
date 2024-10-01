"use client";

import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { trpc } from "../_trpc/Client";

const Page = () => {
  const router = useRouter();

  const { data: login, isError } = trpc.authCallback.useQuery(undefined, {
    retry: false,
  });
  if (isError) router.push("/api/auth/login");
  if (login && login.success) router.push("/dashboard");

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default Page;
