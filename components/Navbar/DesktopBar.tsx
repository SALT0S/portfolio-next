import Link from "next/link";
import { Popover } from "@headlessui/react";
/*import { MenuAlt3Icon } from "@heroicons/react/outline"; */
import { ActiveLink } from "./ActiveLink";
import MenuNav from "../constants/MenuNav";

export const DesktopBar = () => {
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
                <p className="bg-black  py-1 px-2 text-lg font-bold">
                  Sanchez S.
                </p>
              </a>
            </Link>

            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-900">
                <span className="sr-only">Open main menu</span>
                {/* <MenuAlt3Icon className="h-7 w-7" aria-hidden="true" /> */}
                <p>menu</p>
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:space-x-8">
          {MenuNav.map((menu) => (
            <ActiveLink
              key={menu.name}
              text={menu.name}
              href={menu.href}
              className="font-medium text-gray-900 hover:text-gray-400"
            />
          ))}
        </div>
        <p className="hidden font-medium text-black hover:text-indigo-500 md:block">
          Dark theme
        </p>
      </nav>
    </div>
  );
};
