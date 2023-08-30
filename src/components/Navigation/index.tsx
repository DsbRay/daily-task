import React from 'react'
import styled from 'styled-components'

import logoIcon from '../../assets/duck-svgrepo-com.svg'
import userIcon from '../../assets/user.svg'

import { IconButton } from '../../components/elements'
import { Link } from 'gatsby'

const NAV_LINKS = [
  {
    title: 'Personal',
    url: '/personal',
  },
  {
    title: 'Business',
    url: '/business',
  },
  {
    title: 'Fitness',
    url: '/fitness',
  },
]

interface NavProps {
  handleOpenModal: () => void
}

const Navigation: React.FC<NavProps> = ({ handleOpenModal }) => {
  const renderLinks = () => {
    return NAV_LINKS.map((nav, i) => {
      const { title, url } = nav
      return (
        <Link to={url} key={i}>
          {title}
        </Link>
      )
    })
  }
  return (
    <Nav>
      <Link to='/'>
        <img src={logoIcon} />
      </Link>
      <div className='links'>
        {renderLinks()}
        <IconButton ctaFunction={handleOpenModal} icon={userIcon} />
      </div>
    </Nav>
  )
}

const Nav = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  padding: 0 15px;
  background-color: var(--bunker);
  border-bottom: 1px solid var(--reef);
  justify-content: space-between;
  .links {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  a {
    transition: opacity 0.25s ease-in-out;
    opacity: 1;
    &:hover {
      opacity: 0.7;
    }
    img {
      height: 40px;
    }
  }
`
export default Navigation
