import Footer from '@/components/layout/Footer/Footer'
import Navbar from '@/components/layout/Header/Navbar'
import Service from '@/components/services/Service'
import React from 'react'

const Page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                <Service />
            </main>

            <Footer />
        </div>
    )
}

export default Page