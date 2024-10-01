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

const HomeAuth = () => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  return (
    <div className="flex flex-row gap-2">
      {isAuthenticated ? (
        <LogoutLink className={buttonVariants({})}>
          <LogOutIcon className="size-6" />
        </LogoutLink>
      ) : isLoading ? (
        <div className="flex items-center justify-center">
          <Loader2 className="size-6 animate-spin" />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default HomeAuth;
