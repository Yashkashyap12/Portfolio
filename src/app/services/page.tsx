import Footer from '@/components/layout/Footer/Footer'
import Navbar from '@/components/layout/Header/Navbar'
import Service from '@/components/services/Service'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <Service />
            <Footer />
        </>
    )
}

export default page