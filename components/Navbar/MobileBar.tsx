import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
/* import { XIcon } from "@heroicons/react/outline";  */
import { ActiveLink } from "./ActiveLink";
import MenuNav from "../constants/MenuNav";

export const MobileBar = () => {
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
        <div className="overflow-hidden rounded-lg bg-gray-800 shadow-md ring-1 ring-black ring-opacity-5">
          <div className="flex items-center justify-between px-5 pt-4">
            <div className="flex text-white  ">
              <span className="bg-white py-1 px-2 text-xl font-bold text-black">
                A
              </span>
              <p className="bg-[#C48F5A] py-1 px-2 text-lg font-bold hover:bg-[#B27D48]">
                Alica Art
              </p>
            </div>
            <div className="-mr-2">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-100">
                <span className="sr-only">Close main menu</span>
                {/* <XIcon className="h-7 w-7" aria-hidden="true" /> */}
                <p>close</p>
              </Popover.Button>
            </div>
          </div>
          <div className="space-y-1 px-2 pt-2 pb-3">
            {MenuNav.map((menu) => (
              <ActiveLink
                key={menu.name}
                href={menu.href}
                text={menu.name}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-gray-200"
              />
            ))}
          </div>
          <a
            href="#"
            className="block w-full bg-slate-600 px-5 py-3 text-center font-medium text-white hover:bg-slate-700"
          >
            Log in
          </a>
        </div>
      </Popover.Panel>
    </Transition>
  );
};
