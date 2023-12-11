import Image from "next/image";
import Link from "next/link";
import LandingImage from "@/assets/landing.jpg";
import Logo from "@/assets/logo.svg";
import SignInButtons from "@/components/SignInButtons";
import CentralI from "@/public/landing_page_transparent.png";
import SignInButton from "@/components/SignInButton";
export default function Home() {
  return (
    <div className=''>
      <nav className='w-screen absolute top-0 gap-4 h-fit flex items-center justify-between p-4'>
        <div className='object-contain w-36 '>
          <Logo className='fill-green-600' alt='logo' />
        </div>
        <div className='hidden md:flex gap-4 text-green-900 dark:text-green-300'>
          <Link className='font-semibold' href='/'>
            Home
          </Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <SignInButtons />
      </nav>
      <div>
        <div className='absolute top-48 left-0 md:left-24 flex flex-col px-4'>
          <h1 className='text-3xl md:text-[5rem] mb-4 font-extrabold text-yellow-500'>e-Dukado LMS</h1>
          <div className='text-green-500 text-md md:text-2xl'>
            <p>A Learning Management System developed for</p>
            <p>Santa Rosa Elementary School Central I</p>
          </div>
          <div className='mt-4'>
            <SignInButton href='/student/register' text='Join now!' />
          </div>
        </div>
        <div className='absolute bottom-0 -z-10'>
          <Image src={CentralI} alt='school' />
        </div>
      </div>
    </div>
  );
}
