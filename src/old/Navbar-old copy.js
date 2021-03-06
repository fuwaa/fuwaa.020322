import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className=" -z-1 w-full top-0 fixed">
      <div className="flex justify-center items-center py-3">
        <div className="mr-auto ml-auto inline-flex">
          <Link href="#" className="navbar-brand">
            nafu
          </Link>
        </div>
        <div className="inline-flex">
          <button className="rounded bg-red-600 p-1 hidden">Menu</button>
        </div>
        <div className="justify-center inline-flex">
          <ul className="inline-flex">
            <li className="mx-4">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-4">
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>
        <div className=" mr-auto inline-flex">
          <ul className="inline-flex">
            <li>
              <button className="rounded bg-slate-500 p-1 px-3 mx-1 text-white">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
