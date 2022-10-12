import { Fragment, useState, useEffect } from 'react'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline'
import { calcLength } from 'framer-motion'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { QUERY } from 'src/components/User/UsersCell'

import logo from './thairun.png'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavbarLayout = ({ children }) => {
  const [current, setcurrent] = useState(false)
  const { isAuthenticated, currentUser, logOut } = useAuth()
  // console.log(isAuthenticated.currentUser.imageUrl)

  // console.log(current)
  const user = {
    name: '',
    email: 'currentUser.email',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
  const navigationUser = [
    { name: 'Home', href: '/', current: false },
    { name: 'Parks', href: '/parks', current: false },
  ]

  const navigationAdmin = [
    { name: 'Home', href: '/', current: false },
    { name: 'Parks', href: '/admin/parks', current: false },
    { name: 'Scanners', href: '/admin/scanners', current: false },
    { name: 'Runs', href: '/admin/runs', current: false },
    { name: 'Users', href: '/admin/users', current: false },
  ]

  const navigationGovernor = [
    { name: 'Home', href: '/', current: false },
    { name: 'Parks', href: '/admin/parks', current: false },
    { name: 'Scanners', href: '/admin/scanners', current: false },
  ]

  const navigationOwner = [
    { name: 'Home', href: '/', current: false },
    { name: 'Parks', href: '/admin/parks', current: false },
    { name: 'Owner', href: '/admin/test', current: false },
  ]

  const userNavigation = [
    { name: 'Your Profile', href: '#', state: false },
    { name: 'Settings', href: '#', state: false },
    { name: 'Sign out', href: '#', state: true },
  ]

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to={routes.home()}>
                        <img className="w-auto h-8" src={logo} alt="Thairun" />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-baseline ml-10 space-x-4">
                        {isAuthenticated && (
                          <>
                            {currentUser.roles === 'admin' ? (
                              <>
                                {navigationAdmin.map((item) => (
                                  <>
                                    <Link
                                      key={item.name}
                                      to={item.href}
                                      onClick={() => setcurrent(true)}
                                      className={classNames(
                                        item.current
                                          ? 'bg-gray-900 text-white'
                                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                      )}
                                      aria-current={
                                        item.current ? 'page' : undefined
                                      }
                                    >
                                      {item.name}
                                    </Link>
                                  </>
                                ))}
                              </>
                            ) : (
                              <>
                                {currentUser.roles === 'user' ? (
                                  <>
                                    {navigationUser.map((item) => (
                                      <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                          item.bg
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                          'rounded-md px-3 py-2 text-sm font-medium'
                                        )}
                                        aria-current={
                                          item.bg ? 'page' : undefined
                                        }
                                      >
                                        {item.name}
                                      </a>
                                    ))}
                                  </>
                                ) : (
                                  <>
                                    {currentUser.roles === 'governor' ? (
                                      <>
                                        <h1>governor</h1>
                                      </>
                                    ) : (
                                      <>
                                        <h1>owner</h1>
                                      </>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="hidden text-gray-300 md:block">
                    {isAuthenticated ? (
                      <div className="grid grid-rows-1">
                        {/* <span className="px-2"> {currentUser.email} </span>{' '} */}
                        <Menu
                          as="div"
                          className="relative grid grid-cols-1 ml-3"
                        >
                          {console.log(currentUser.email)}
                          {console.log(currentUser.lastName)}
                          <div>
                            <Menu.Button className="flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="w-8 h-8 rounded-full"
                                src={currentUser.imageUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      // state={item.state}
                                      onClick={
                                        item.name === 'Sign out'
                                          ? logOut
                                          : undefined
                                      }
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                        {/* <div className="grid grid-cols-1">
                          <button
                            className="grid grid-cols-1"
                            type="button"
                            onClick={logOut}
                          >
                            Logout
                          </button>
                        </div> */}
                      </div>
                    ) : (
                      <Link to={routes.login()}>Login</Link>
                    )}
                  </div>
                  <div className="flex -mr-2 md:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>

      <main>{children}</main>
    </>
  )
}

export default NavbarLayout
