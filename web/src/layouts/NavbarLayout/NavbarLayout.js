import { Fragment } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import logo from './thairun.png'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://scontent.fbkk5-1.fna.fbcdn.net/v/t39.30808-6/309922894_1450507872120357_2013748573071282769_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHoEFb3pcAmyzmuJHWgIm5GBZ8fFtv-FNIFnx8W2_4U0s2v9993OlrYZk-wrMXtrZ5HUrFx9zwyGNxHxVXJmMSZ&_nc_ohc=q2tyEG78H5EAX9B1eiu&_nc_ht=scontent.fbkk5-1.fna&oh=00_AT_r4gU-GBM6MvfYBqcsPBlhHA-u3LAEr0QjlBGmRQjh5Q&oe=635285BB',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavbarLayout = ({ children }) => {

  const { isAuthenticated, currentUser, logOut } = useAuth()

  const navigationUser = [
    { name: 'Home', href: '/', current: true },
    { name: 'Parks', href: '/blog-parks', current: false },
    { name: 'Statistic', href: '/statistic', current: false },
  ]

  const navigationAdmin = [
    { name: 'Home', href: '/', current: false },
    { name: 'Parks', href: '/admin/parks', current: false },
    { name: 'Scanners', href: '/admin/scanners', current: false },
    { name: 'Scans', href: '/admin/scans', current: false },
    { name: 'Runs', href: '/admin/runs', current: false },
    { name: 'Users', href: '/admin/users', current: false },
  ]

  const navigationGovernor = [
    { name: 'Home', href: '/', current: false },
    { name: 'Parks', href: '/', current: false },
    { name: 'Scanners', href: '/', current: false },
  ]

  const navigationOwner = [
    { name: 'Home', href: '/', current: false },
    { name: 'Parks', href: '/', current: false },
    { name: 'Owner', href: '/', current: false },
  ]

  const userNavigation = [
    { name: 'Your Profile', href: '/statistic', state: false },
    { name: 'Settings', href: '#', state: false },
    { name: 'Sign out', href: '#', state: true },
  ]

  return (
    <>
      <div className='min-h-full'>
      <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-auto"
                        src={logo}
                        alt="Thairun"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {isAuthenticated && (
                          <>
                            {currentUser.roles === 'admin' ? (
                              <>
                                {navigationAdmin.map((item) => (
                                  <>
                                    <Link
                                      key={item.name}
                                      to={item.href}
                                      // onClick={() => setcurrent(true)}
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
                                      <Link
                                        key={item.name}
                                        to={item.href}
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
                                    ))}
                                  </>
                                ) : (
                                  <>
                                    {currentUser.roles === 'governor' ? (
                                      <>
                                        <h1>governor</h1>
                                        {navigationGovernor.map((item) => (
                                          <Link
                                            key={item.name}
                                            to={item.href}
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
                                          </Link>
                                        ))}
                                      </>
                                    ) : (
                                      <>
                                        {navigationOwner.map((item) => (
                                          <Link
                                            key={item.name}
                                            to={item.href}
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
                                          </Link>
                                        ))}
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
                  <div className="hidden md:block text-gray-300">
                    <div className='flex items-center md:ml-6'>
                      <div className='ml-4 flex items-center md:ml-6'>
                        {isAuthenticated && (
                          <>
                            <span className='pr-2'>{currentUser.firstName}</span>
                            <span className='pr-2'>{currentUser.lastName}</span>
                          </>
                        )}
                      </div>
                      {isAuthenticated ? (
                        <div className="grid grid-rows-1">
                          <Menu
                            as="div"
                            className="relative ml-3 grid grid-cols-1"
                          >
                            <div>
                              <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
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
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
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
                        </div>
                      ) : (
                        <Link to={routes.login()}>Login</Link>
                      )}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {isAuthenticated && (
                    <>
                      {currentUser.roles === 'admin' ? (
                        <>
                          {navigationAdmin.map((item) => (
                            <>
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className={classNames(
                                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'block px-3 py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </Disclosure.Button>
                            </>
                          ))}
                        </>
                      ) : (
                        <>
                          {currentUser.roles === 'user' ? (
                            <>
                              {navigationUser.map((item) => (
                                <Disclosure.Button
                                  key={item.name}
                                  as="a"
                                  href={item.href}
                                  className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block px-3 py-2 rounded-md text-base font-medium'
                                  )}
                                  aria-current={item.current ? 'page' : undefined}
                                >
                                  {item.name}
                                </Disclosure.Button>
                              ))}
                            </>
                          ) : (
                            <>
                              {currentUser.roles === 'governor' ? (
                                <>
                                  {navigationGovernor.map((item) => (
                                    <Disclosure.Button
                                      key={item.name}
                                      as="a"
                                      href={item.href}
                                      className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                      )}
                                      aria-current={item.current ? 'page' : undefined}
                                    >
                                      {item.name}
                                    </Disclosure.Button>
                                  ))}
                                </>
                              ) : (
                                <>
                                  {navigationOwner.map((item) => (
                                    <Disclosure.Button
                                      key={item.name}
                                      as="a"
                                      href={item.href}
                                      className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                      )}
                                      aria-current={item.current ? 'page' : undefined}
                                    >
                                      {item.name}
                                    </Disclosure.Button>
                                  ))}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        onClick={
                          item.name === 'Sign out'
                            ? logOut
                            : undefined
                        }
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5 text-gray-300">
                    {isAuthenticated ? (
                      <div>
                        <span className='px-2'> {currentUser.email} </span>{' '}
                        <button type="button" onClick={logOut}>
                          Logout
                        </button>
                      </div>
                    ) : (
                      <Link to={routes.login()}>Login</Link>
                    )}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      <main>{children}</main>
    </>
  )
}

export default NavbarLayout
