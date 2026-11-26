import { Button } from '@/components/ui/button'

function NavBar() {
  return (
    <nav className="flex items-center justify-between border-b border-stone-200 px-6 py-4 md:px-30">
      <a href="/" className="text-2xl font-bold text-stone-800">
        hh<span className="text-emerald-600">.</span>
      </a>

      <div className="flex gap-2">
        <Button variant="outline" className="h-12 rounded-full px-10">
          Log in
        </Button>
        <Button className="h-12 rounded-full px-10">Sign up</Button>
      </div>
    </nav>
  )
}

export default NavBar
