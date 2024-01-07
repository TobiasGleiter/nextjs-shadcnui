"use client";

import { zodResolver } from "@hookform/resolvers/zod";
//import { signIn } from "next-auth/react";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { userAuthSchema } from "@/lib/validations/auth";
import { signIn } from "next-auth/react";

import { useSearchParams } from "next/navigation";
import { Icons } from "../icons/base-icon";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const handleSignIn = async (provider: any, callbackUrl: string | null) => {
    await signIn(provider, {
      redirect: true,
      callbackUrl: callbackUrl as string,
    });
  };

  const {
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams && searchParams.get("callbackUrl");

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() =>
          handleSignIn("github", `${window.location.origin}/main/dashboard`)
        }
        disabled={isGitHubLoading}
      >
        {isGitHubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </button>
    </div>
  );
}
