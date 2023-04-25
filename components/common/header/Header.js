/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
const Header = () => {
  return (
    <header className="dark:bg-black">
      <div className="max-w-6xl p-3 h-[70px] mx-auto flex items-center justify-center">
        <div className="flex items-center justify-between gap-2">
          <Link href={`/`}>
            <img
              src="./assets/logo.png"
              className="w-6 h-6 dark:invert"
              alt=""
            />
          </Link>
          <h4 className="text-lg font-bold">cs.dev</h4>
        </div>
      </div>
    </header>
  )
}

export default Header
