import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoText = styled.h1`
font-family: 'Akaya Telivgala', cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all .2s ease;

&:hover {
    transform: scale(1.1);
}
`
const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
            Bp.
        </Link>
    </LogoText>
  )
}

export default Logo