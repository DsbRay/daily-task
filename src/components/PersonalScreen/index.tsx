import React from 'react'
import styled from 'styled-components'

const PersonalScreen: React.FC<{}> = () => {
  return (
    <Container>
      <p>Personal Development</p>
    </Container>
  )
}

const Container = styled.div`
  height: calc(100vh - 50px);
`

export default PersonalScreen
