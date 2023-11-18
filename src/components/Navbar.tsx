import Link from "next/link"
import { RegisterLink, LoginLink, getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = () => {

   const { getUser } = getKindeServerSession()
   const user = getUser()
   return (<>
      <div className='flex h-14 items-center justify-between border-b border-zinc-200 '>
         <Link
            href='/'
            className='flex z-40 font-semibold'>
            <span>REINVENTATHON</span>
         </Link>
         {/*Todo: add mobile navbar */}
         <div className='hidden items-center space-x-4 sm:flex'>
            <LoginLink>Sign in</LoginLink>

            <RegisterLink>Sign up</RegisterLink>
         </div>
      </div>
   </>)
}


export default Navbar