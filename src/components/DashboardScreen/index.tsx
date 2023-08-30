import React from 'react'
import styled from 'styled-components'

const DashboardScreen: React.FC<{}> = () => {
  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  )
}
const Container = styled.div`
  height: calc(100vh - 50px);
`

export default DashboardScreen
