import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MainComponent = ({children}) => {
  return (
    <>
     <div className="container">
     <Header/>
        {children}
     <Footer/>  
    </div> 
    </>
  )
}

export default MainComponent
