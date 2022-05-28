import { Fragment, useState } from "react";
import useTheme from "next-theme";

import { Popover, Transition, Switch } from "@headlessui/react";
import { HiX } from "react-icons/hi";

import { ActiveLink } from "./ActiveLink";
import MenuNav from "../constants/MenuNav";

const ActiveStyle = {
  fontWeight: "bold",
};

export const MobileBar = () => {
  const { theme, setTheme } = useTheme();
  const [themeState, setThemeState] = useState(false);

  const handleTheme = () => {
    setThemeState(theme === "light" ? !themeState : themeState);
  };
  return (
    <Transition
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-black">
          <div className="flex items-center justify-between px-5 pt-4">
            <div className="flex text-white">
              <span className="bg-white py-1 px-2 text-xl font-bold text-black">
                Jose
              </span>
              <p className="bg-black py-1 px-2 text-lg font-bold text-white dark:text-white">
                Sanchez S.
              </p>
            </div>
            <div className="-mr-2">
              <Popover.Button className="inline-flex items-center justify-center p-2">
                <span className="sr-only">Close main menu</span>
                <HiX className="h-7 w-7" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>

          <ul className="space-y-1 px-2 pt-2 pb-3">
            {MenuNav.map((menu) => (
              <ActiveLink
                key={menu.name}
                href={menu.href}
                text={menu.name}
                className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-zinc-900"
              />
            ))}
          </ul>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="block w-full bg-gray-50 px-5 py-3 text-center font-medium hover:bg-gray-100 dark:bg-zinc-900"
          >
            <div className="flex justify-center">
              <Switch
                checked={themeState}
                onChange={handleTheme}
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
          </button>
        </div>
      </Popover.Panel>
    </Transition>
  );
};
