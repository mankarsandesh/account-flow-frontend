import { MenuButton, Menu } from "@headlessui/react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <>
      <div className="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div className="flex flex-1">
          <form action="#" method="GET" className="grid flex-1 grid-cols-1">
            <input
              name="search"
              type="search"
              placeholder="Search transactions"
              aria-label="Search"
              className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm/6"
            />
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
            />
          </form>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6" />
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-3">
            <div>
              <MenuButton className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
                <span className="absolute -inset-1.5 lg:hidden" />
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-8 rounded-full"
                />
                <span className="ml-3 hidden text-sm font-medium text-gray-700 lg:block">
                  <span className="sr-only">Open user menu for </span>
                  Ruchika Mankar
                </span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="ml-1 hidden size-5 shrink-0 text-gray-400 lg:block"
                />
              </MenuButton>
            </div>
            <Menu.Items
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <Menu.Item>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                >
                  Your Profile
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                >
                  Settings
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                >
                  Logout
                </a>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </>
  );
}
