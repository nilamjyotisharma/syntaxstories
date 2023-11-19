import React from 'react'
import Navbar from './navbar'
import Footer from './footer'



const BaseLayout = ({children }) => {
    return (
        <div>
            
            <Navbar />
            <main className='min-h-screen'>
                {children}
            </main>
            <Footer />
            
        </div>
    )
}

export default BaseLayout