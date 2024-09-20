"use client";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { ArrowRight } from "lucide-react";
import React from "react";
import { buttonVariants } from "../ui/button";

const HomeAuth = () => {
  return (
    <div className="flex flex-row gap-2">
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
  );
};

export default HomeAuth;
