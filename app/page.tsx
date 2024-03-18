"use client";

import { useSession, signIn, signOut } from "next-auth/react"
import { ModeToggle } from "@/components/theme-toggle.tsx";

import { Button } from "@/components/ui/button"
import Nav from "@/components/nav"
import "@/public/sign-up-btn.css";

export default function Home() {
    return (
        <main className="">

            <div className="my-20 mx-6 md:mx-24 p-6 md:p-24 bg-secondary rounded-lg relative">
                <div className="absolute top-0 right-0 mt-4 md:mt-6 mr-1 md:mr-0 rotate-45 md:rotate-90" >
                    <ModeToggle />
                </div>
                <h1 className="text-primary text-6xl md:text-7xl font-bold">
                    Stupid Simple Mail
                </h1>
                <br />
                <h2 className="text-secondary-foreground text-xl md:text-5xl font-semibold md:w-5/6">
                    Build Your Community, <br/> One Newsletter at a Time.
                </h2>
                <button className="sign-btn mt-8" onClick={() => signIn('google')} >
                    Sign in
                    <div className="arrow-wrapper">
                        <div className="arrow"></div>
                    </div>
                </button>
            </div>

            <Nav />
        </main>
    );
}
