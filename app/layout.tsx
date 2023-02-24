import './globals.scss'
import React from "react";
import Header from "#/components/Header/Header";
import Footer from "#/components/Footer/Footer";
import StoreWrapper from "#/components/StoreWrapper";;
import {sfdisplaypro} from '#/components/fonts';
import {Metadata} from "next";

export const metadata:Metadata = {
    title: {
        default: 'Tdural1',
        template: '%s - Tdural1',
    },
}

export default function RootLayout({children}: {children: React.ReactNode}) {

    return (
        <html lang="ru" className={sfdisplaypro.className}>

        <body className={"drawer-closed"}>
        <StoreWrapper>
            <Header/>
            <main>

                {children}
            </main>
            <Footer/>
        </StoreWrapper>
        </body>
        </html>
    )
}