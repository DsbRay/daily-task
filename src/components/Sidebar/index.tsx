import React, { useState } from 'react'
import styled from 'styled-components'
import { IconButton } from '../elements'

import openIcon from '../../assets/open-arrow.svg'
import closeIcon from '../../assets/close-arrow.svg'

const Sidebar: React.FC<{}> = () => {
  const [sidebarExtended, setSidebarExtended] = useState(true)

  const toggleSidebar = () => setSidebarExtended(!sidebarExtended)

  return (
    <SideContainer className={sidebarExtended ? 'extended' : ''}>
      <Toggle>
        <IconButton ctaFunction={toggleSidebar} icon={sidebarExtended ? openIcon : closeIcon} />
      </Toggle>
    </SideContainer>
  )
}

const Toggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`
const SideContainer = styled.div`
  background-color: var(--bunker);
  width: 50px;
  min-height: calc(100vh - 50px);
  transition: width 0.25s ease-in-out;
  &.extended {
    width: 200px;
    ${Toggle} {
      justify-content: flex-end;
      padding: 10px;
    }
  }
`

export default Sidebar
