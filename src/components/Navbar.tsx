

import Link from 'next/link'
import Button from './Button';
import { useSelector } from 'react-redux';

export default function ButtonAppBar() {

const user =useSelector((state:any)=>state.user.userid)
console.log(user)
  return (
    <nav className="flex w-full items-center justify-between shadow-2xl mx-auto ">
      <div>
      <Link  href={'/inicio'}>
        <h1 className=" text-black font-bold text-2xl my-4 px-20">Tasks</h1>
      </Link>
      </div>
      <div className=' flex justify-end w-full'>
        
      <Link href={'/inicio/new'}>
      <button className={"h-[40px] bg-blue-600 w-28 text-white rounded-[5px] text-textSize4 font-bold mx-10"}>
      New Task
    </button>
    </Link>
    </div>
    </nav>
  );
}
