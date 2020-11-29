import React from 'react'
import { Navbar } from 'react-bootstrap'
import { ReactComponent as Linkedin } from 'assets/img/linkedin-icon.svg'
import { ReactComponent as Github } from 'assets/img/github-icon.svg'
export default function Footer() {
    return (
        <Navbar as="footer" fixed="bottom" bg="dark" variant="dark" className="justify-content-center">
            <address>
                <a href="https://www.linkedin.com/in/josé-henrique-lucena-0ba256b1" target="blank" className="mr-2">
                    <Linkedin height="30px" width="30px" />
                </a>
                <a href="https://github.com/zelucena" target="blank" className="mr-2">
                    <Github height="30px" width="30px" />
                </a>
                <span className="text-light">2020. Made by José Lucena</span>
            </address>
        </Navbar>
    )
}