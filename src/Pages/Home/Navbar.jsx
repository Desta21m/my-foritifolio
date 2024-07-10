import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-scroll'

function Navbar() {
    const [navActive, setNavActive] =useState(false);
    const toggleNav=()=>{
        setNavActive(!navActive)
    }
    const closeMenu=()=>{
        setNavActive(false);
    }
    useEffect(()=>{
        const handelResize=()=>{
            if(window.innerWidth <= 500){
                closeMenu
            }
        }

        window.addEventListener("resize",handelResize);

        return ()=>{
            window.removeEventListener("resize",handelResize);
        }
    },[]);

    useEffect(()=>{
        if(window.innerWidth <=1200){
            closeMenu;
        }
    },[]);



  return (
    <nav className={'navbar ${navActive ? "active":"" }'}>

    </nav>
  )
}

export default Navbar