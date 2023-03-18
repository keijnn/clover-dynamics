//import modules
import { Link } from "@/shared/ui/Link"

export const Header = () => {
  return (
    <div className='h-16 bg-gray-400 flex justify-between items-center px-10'>
      <p className='text-2xl font-bold'>Trello clone</p>
      <div>
        <Link url='/'>Home</Link>
        <Link url='/tables'>Tables</Link>
        <Link url='/source-code'>Source Code</Link>
      </div>
    </div>
  )
}
