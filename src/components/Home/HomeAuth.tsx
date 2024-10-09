"use client";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { ArrowRight, Loader2, LogOutIcon } from "lucide-react";
import React from "react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

const HomeAuth = () => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  return (
    <div className="flex flex-row gap-2">
      {isAuthenticated ? (
        <div className="flex flex-row items-center gap-2">
          <Link href="" className={buttonVariants({ variant: "ghost" })}>
            My account
          </Link>
          <LogoutLink className={buttonVariants({})}>
            <LogOutIcon className="size-6" />
          </LogoutLink>
        </div>
      ) : isLoading ? (
        <div className="flex items-center justify-center">
          <Loader2 className="size-6 animate-spin" />
        </div>
      ) : (
        <div className="flex flex-row items-center gap-2">
          <LoginLink
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            Sign in
          </LoginLink>
          <RegisterLink className={buttonVariants({})}>
            Create account <ArrowRight className="ml-2 size-6" />
          </RegisterLink>
        </div>
      )}
    </div>
  );
};

export default HomeAuth;
