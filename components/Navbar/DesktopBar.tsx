import { useState } from "react";
import useTheme from "next-theme";
import Link from "next/link";

import { Popover, Switch } from "@headlessui/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { ActiveLink } from "./ActiveLink";
import MenuNav from "../constants/MenuNav";

export const DesktopBar = () => {
  const { theme, setTheme } = useTheme();
  const [themeState, setThemeState] = useState(false);

  const handleTheme = () => {
    setThemeState(theme === "light" ? !themeState : themeState);
  };
  return (
    <div className="relative h-auto w-auto">
      <nav
        className="z-10 mt-6 flex w-full items-center justify-between px-4 sm:h-10 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
          <div className="flex w-full items-center justify-between md:w-auto">
            <Link href="/">
              <a className="flex text-white">
                <span className="bg-white py-1 px-2 text-xl font-bold text-black">
                  Jose
                </span>
                <p className="bg-black py-1 px-2 text-lg font-bold text-white dark:text-white">
                  Sanchez S.
                </p>
              </a>
            </Link>

            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2">
                <span className="sr-only">Open main menu</span>
                <HiOutlineMenuAlt3 className="h-7 w-7" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>

        <ul className="hidden md:flex md:space-x-8">
          {MenuNav.map((menu) => (
            <ActiveLink
              key={menu.name}
              text={menu.name}
              href={menu.href}
              className="cursor-pointer font-medium text-gray-500 hover:text-black dark:text-zinc-300 dark:hover:text-white"
            />
          ))}
        </ul>

        <div className="hidden md:flex">
          <Switch
            checked={themeState}
            onChange={handleTheme}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`${
              theme === "dark" ? "bg-white" : "bg-zinc-900"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">
              Enable {theme === "light" ? "Light Mode" : "Dark Mode"}
            </span>
            <span
              className={`${
                theme === "dark" ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white dark:bg-black`}
            />
          </Switch>
          <p className="ml-2">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </p>
        </div>
      </nav>
    </div>
  );
};
