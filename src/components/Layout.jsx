import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"

import Header from './Header'
import Footer from './Footer'
import Routes from '../routes/Routes'
import PropTypes from 'prop-types'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <React.Fragment>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <Routes />
                        </div>
                    </div>
                    <Footer {...props} />
                </React.Fragment>
            )}>
            </Route>
        </BrowserRouter>
    )
}


export default Layout
