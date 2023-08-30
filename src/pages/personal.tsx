import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import PersonalScreen from '../components/PersonalScreen'

const Personal: React.FC<PageProps> = () => {
  return (
    <Layout>
      <PersonalScreen />
    </Layout>
  )
}

export default Personal

export const Head: HeadFC = () => <title>Personal</title>
