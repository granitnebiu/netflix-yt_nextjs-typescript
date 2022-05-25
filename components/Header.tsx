import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'

function Header() {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">MOvies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 cursor-pointer sm:inline" />
        <p className="hidden cursor-pointer lg:inline">Kids</p>
        <BellIcon className=" h-6 w-6 cursor-pointer" />
        <Link href="/account">
          <img
            src="/images/avatarIcon.png"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
