import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import '../styles/theme.css'
import { ModalWrapper } from '../components/elements'
import Navigation from './Navigation'
import Sidebar from './Sidebar'

interface PageProps {
  children: ReactNode
}

const Layout: React.FC<PageProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(!isModalOpen)

  return (
    <>
      <ModalWrapper isModalOpen={isModalOpen} handleOpenModal={handleOpenModal} label='Sign In'>
        <h1>test</h1>
      </ModalWrapper>
      <Navigation handleOpenModal={handleOpenModal} />
      <Main>
        <Sidebar />
        {children}
      </Main>
    </>
  )
}

const Main = styled.div`
  display: flex;
`

export default Layout
