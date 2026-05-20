
import { headers } from "next/headers";
import {  NextResponse } from "next/server";
import { auth } from "./lib/auth";


export async function proxy(request) {
    // const session = await auth.api.getSession({
    //     headers: await headers()
    // })
    // if(!session) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
    
    
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });
        if (!session) {
            return { redirect: true, url: '/login'};
        }
        return NextResponse.next();
        //return { redirect: false, session };
    
    } catch(error) {
        console.error('Proxy Session Error: ', error);
        return { redirect: true, url: '/login'};
    }
}

export const config = {
    matcher: ['/add-facility', '/facilities/:path'],
}