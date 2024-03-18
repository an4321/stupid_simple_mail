import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle.tsx";

import SignUp from "@/components/sign-up-btn"
import SettingsDrawer from "@/components/settings-drawer"

export default function Nav() {
    return (
        <div className="fixed bottom-5 left-0 right-0 flex justify-center ">
            <div className="border border-secondary bg-secondary py-3 flex gap-1 shadow-xl rounded-md">
                <div className="group relative px-4 cursor-pointer">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="32" width="32">
                            <path stroke="currentColor" d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"></path>
                        </svg>
                    </div>
                    <span className="absolute -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-card bg-card px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                        Home
                    </span>
                </div>
                <div className="group relative px-4 cursor-pointer">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"></path>
                        </svg>
                    </div>
                    <span className="absolute -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-card bg-card px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                        Messages
                    </span>
                </div>
                <div className="group relative px-4 cursor-pointer">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-gray-400"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"></path>
                        </svg>
                    </div>
                    <span className="absolute -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg borderabout border-card bg-card px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                        User
                    </span>
                </div>
                <SettingsDrawer />
            </div>
        </div>
    );
}


//         <div className="fixed top-0 w-full flex justify-between lg:px-4 px-3 py-2 backdrop-blur-sm xl:backdrop-blur-0 ">
//             <div className="flex items-center">
//                 <h2 className="text-xl font-bold drop-shadow-[0_1.2px_1.2px_#e1e1e1] dark:drop-shadow-[0_1.2px_1.2px_#181818]">Chrono</h2>
//             </div>
//             <div className="flex justify-between space-x-2">
//                 <SignUp />
//                 <ModeToggle />
//             </div>
//         </div>
