import React from 'react'
import { Navbar } from 'react-bootstrap'
export default function Header() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" as="header">
                <Navbar.Brand href="#">
                    Url shortener
                </Navbar.Brand>
            </Navbar>
        </>
    )
}