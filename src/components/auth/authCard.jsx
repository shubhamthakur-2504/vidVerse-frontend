import Link from "next/link"
export default function AuthCard({ name, children }) {
    return (
        <div className='flex flex-col gap-4 bg-[#000000] text-[#FFFFFF]  border-[0.2px] border-[#535353] p-2  md:w-[40vw]' >
            <div className='mt-2 mb-2'>
                <div className="text-3xl font-bold flex-shrink-0">
                    <span className="text-[#AD49E1]">Vid</span>verse
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex border-[0.2px] border-[#535353] p-3 m-2'>
                        <Link href="/auth/Signup">
                        <button className={`mr-2 ml-1 p-2 pl-4 ${name === 'signup' ? 'bg-white text-black font-bold ' : "hover:bg-[#535353] text-md font-bold "}`} >Signup</button>
                        </Link>
                        <Link href="/auth/login">
                        <button className={`ml-2 mr-1 p-2 pl-3 pr-4 ${name === 'login' ? 'bg-white text-black font-bold ' : "hover:bg-[#535353] text-md font-bold "}`}>Login</button></Link>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>

    )
}
