"use client";

import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarNavItem } from "@/types";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarNavItem[];
  user: Pick<User, "name" | "image" | "email">;
}

export function UserAccountNav({ items, user }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{user.name}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        {items.map((item, index) => {
          return (
            item.href && (
              <DropdownMenuItem asChild key={index}>
                <Link href={item.disabled ? "/" : (item.href as string)}>
                  {item.title}
                </Link>
              </DropdownMenuItem>
            )
          );
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/login`,
            });
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
