import { Leaf } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm py-4">

    <div className="w-full max-w-[90rem] mx-auto px-4 2xl:px-0">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
        <Leaf className="w-6 h-6 text-green-500" />
        <span className="font-semibold text-xl text-slate-900 dark:text-slate-100">SeedSync</span>
        </Link>
    </div>
    </nav>
  )
}

export default Navbar