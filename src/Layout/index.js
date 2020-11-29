import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import Header from './Header';
import Footer from './Footer';
export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Container as="main" className="pt-4">
                {children}
            </Container>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}