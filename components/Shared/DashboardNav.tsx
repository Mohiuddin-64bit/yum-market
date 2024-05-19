import React from "react";
import { Logo } from "../icons";
import { User } from "@nextui-org/user";
import { ThemeSwitch } from "../theme-switch";

const DashboardNav = () => {
  return (
    <div className="w-full bg-slate-100 dark:bg-slate-700">
      <div className="flex justify-between items-center py-5 px-12">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
