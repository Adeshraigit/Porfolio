import React from 'react'
import { SiGithub, SiX, SiLinkedin } from 'react-icons/si'
import Link from 'next/link'
import Hero from './Hero'

function Navbar() {

    const socials = [
        {
            Link: "",
            Label: "Linkedin",
            Icon: SiLinkedin ,
        },
        {
            Link: "https://github.com/Adeshraigit",
            Label: "Github",
            Icon: SiGithub ,
        },
        {
            Link: "https://x.com/adeshrai707",
            Label: "X",
            Icon: SiX ,
        },
    ]

  return (
    <>
    <nav>
        <h1>Adesh 👨‍💻</h1>
        <div>
            {socials.map((social,index) => {

                const Icon = social.Icon

                return <Link href={social.Link} key={index} aria-label={social.Label} >
                    <Icon/>
                </Link>
            })}
        </div>
    </nav>
    </>
  )
}

export default Navbar