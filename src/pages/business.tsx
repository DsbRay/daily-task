import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import BusinessScreen from '../components/BusinessScreen'

const Business: React.FC<PageProps> = () => {
  return (
    <Layout>
      <BusinessScreen />
    </Layout>
  )
}

export default Business

export const Head: HeadFC = () => <title>Business</title>
