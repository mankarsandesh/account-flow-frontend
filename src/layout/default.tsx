"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3CenterLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import SearchBar from "../components/ui/searchbar";
import { Logo } from "../components/Logo";
import { navigation, secondaryNavigation } from '../utils/menu'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ children }: any) {
  const pageName = window.location.pathname;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="min-h-full ">
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-600/75 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative flex w-full max-w-xs flex-1 transform flex-col bg-green-700 pb-4 pt-5 transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute right-0 top-0 -mr-12 pt-2 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="relative ml-1 flex size-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex shrink-0 items-center px-4">
                <Logo reverse={false} />
              </div>
              <nav
                aria-label="Sidebar"
                className="mt-5 h-full shrink-0 divide-y divide-green-800 overflow-y-auto"
              >
                <div className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.href ? "page" : undefined}
                      className={classNames(
                        item.href === pageName
                          ? "bg-green-800 text-white"
                          : "text-green-100 hover:bg-green-600 hover:text-white",
                        "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className="mr-4 size-6 shrink-0 text-green-200"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 pt-6">
                  <div className="space-y-1 px-2">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-green-100 hover:bg-green-600 hover:text-white"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="mr-4 size-6 text-green-200"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </DialogPanel>
            <div aria-hidden="true" className="w-14 shrink-0">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col overflow-y-auto bg-gray-600 pb-4 pt-5">
            <div className="flex shrink-0 items-center px-4">
              <Logo />
            </div>
            <nav
              aria-label="Sidebar"
              className="mt-5 flex flex-1 flex-col divide-y divide-green-800 overflow-y-auto"
            >
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.href ? "page" : undefined}
                    className={classNames(
                      item.href === pageName
                        ? "bg-green-800 text-white"
                        : "text-white hover:bg-green-700 hover:text-white",
                      "group flex items-center rounded-md px-2 py-2 text-sm/6 font-medium"
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className="mr-4 size-6 shrink-0 text-white"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-6">
                <div className="space-y-1 px-2">
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center rounded-md px-2 py-2 text-sm/6 font-medium text-green-100 hover:bg-green-600 hover:text-white"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="mr-4 size-6 text-green-200"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex flex-1 flex-col lg:pl-64">
          <div className="flex h-16 shrink-0 border-b border-gray-200 bg-white lg:border-none">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3CenterLeftIcon aria-hidden="true" className="size-6" />
            </button>
            {/* Search bar */}
            <SearchBar />
          </div>

          {children}
        </div>
      </div>
    </>
  );
}
