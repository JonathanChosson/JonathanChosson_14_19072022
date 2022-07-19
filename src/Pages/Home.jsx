import React from 'react'
import Form from '../Components/Form'
import Header from '../Components/Header'
import Route from '../Components/Route'
import '../Style/Pages/Home.css'

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Route />
            <Form />
        </div>
    )
}

export default Home
