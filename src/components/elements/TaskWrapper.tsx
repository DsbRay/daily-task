import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const TaskWrapper: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  background-color: var(--bunker);
`

export default TaskWrapper
