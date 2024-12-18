import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";

export default function Header() {
  const { isConnected } = useAccount();

  return (
    <Disclosure as='nav' className='bg-background border-b border-black'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-between'>
                <Link href='/' className='flex flex-shrink-0 items-center'>
                  <Image
                    className='block h-16 w-auto sm:block lg:block'
                    src='/Chamaa_Logo.svg'
                    width='24'
                    height='24'
                    alt='Chamaa Logo'
                  />
                </Link>
                <div className="flex space-x-10">
                  <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                    <Link
                      href='/'
                      className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900'
                    >
                      Home
                    </Link>
                  </div>
                  <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                    <Link
                      href='/my_pools'
                      className='inline-flex items-center  px-1 pt-1 text-sm font-medium text-gray-900'
                    >
                      My Pools
                    </Link>
                  </div>
                </div>

                <div className='absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                 
                    <ConnectButton
                      showBalance={{
                        smallScreen: false,
                        largeScreen: true,
                      }}
                      accountStatus={{
                        smallScreen: 'avatar',
                        largeScreen: 'address',
                      }}
                      chainStatus={{
                        smallScreen: 'none',
                        largeScreen: 'full',
                      }}
                    />
                 
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 pt-2 pb-4'>
              <Disclosure.Button
                as='a'
                href='/'
                className='block py-2 pl-3 pr-4 text-base font-medium text-black'
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/my_pools'
                className='block  py-2 pl-3 pr-4 text-base font-medium text-black'
              >
                My Pools
              </Disclosure.Button>
              {/* Add here your custom menu elements */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
