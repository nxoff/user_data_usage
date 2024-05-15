import '@/styles/globals.css'

import { ClerkProvider, UserButton, SignedIn } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'hello'
}

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={inter.className}>
                    <header>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </header>
                    <main className='app'>
                        {children}
                    </main>
                </body>
            </html>
        </ClerkProvider>
    )
}