import React, { ReactNode, useRef } from 'react'
import styled from 'styled-components'
import closeIcon from '../../assets/close-icon.svg'
import { IconButton } from '../elements'

interface Props {
  children: ReactNode
  isModalOpen: boolean
  handleOpenModal: () => void
  label: string
}

const ModalWrapper: React.FC<Props> = ({ children, isModalOpen, handleOpenModal, label }) => {
  const modalBlockRef = useRef<HTMLDivElement | null>(null)

  const handleOverlayClick = (e: any) => {
    if (modalBlockRef.current && !modalBlockRef.current.contains(e.target)) {
      handleOpenModal()
    }
  }

  return (
    <Container className={`overlay ${isModalOpen ? 'active' : ''}`} onClick={handleOverlayClick}>
      <div className='modal-block' ref={modalBlockRef}>
        <div className='header'>
          <h2>{label}</h2>
          <IconButton ctaFunction={handleOpenModal} icon={closeIcon} />
        </div>
        {children}
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  background-color: rgb(77 77 77 / 48%);
  height: 100%;
  width: 100%;
  max-height: 100vh;
  max-width: 100vw;
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
  z-index: -1;
  &.active {
    opacity: 1;
    display: initial;
    z-index: 10;
  }
  .modal-block {
    background-color: var(--bunker);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    padding: 20px;
    min-width: 300px;
    min-height: 300px;
    .header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
  }
`

export default ModalWrapper
