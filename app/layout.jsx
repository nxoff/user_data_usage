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
                    <main className='app'>
                        {children}
                    </main>
                    <div className='profile'>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}