import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import Header from './Header';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/custom.css'

export default function Layout({ children }) {
    document.getElementById('root').classList.add("h-100", "bg-light");
    return (
        <>
            <Header />
            <Container
                as="main"
                className="pt-4 bg-light"
                style={{ height: '100%' }}
            >
                {children}
            </Container>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}