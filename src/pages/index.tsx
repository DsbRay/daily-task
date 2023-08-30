import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import DashboardScreen from '../components/DashboardScreen'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <DashboardScreen />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
