import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {AiOutlineEllipsis} from 'react-icons/ai'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md  border-gray-300 dark:bg-black dark:text-white bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        <AiOutlineEllipsis size={30} />
          
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-neutral-900  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="mailto:sanchez.cliff.86@gmail.com"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 dark:text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Contact
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://github.com/cxs2549"
                  target={`_blank`}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 dark:text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Github
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://www.linkedin.com/in/cliff-sanchez-b75a201bb/"
                  target={`_blank`}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 dark:text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  LinkedIn
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
