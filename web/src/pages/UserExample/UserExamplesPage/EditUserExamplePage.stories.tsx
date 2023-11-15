import type { Meta } from '@storybook/react'
import { mockGraphQLQuery } from '@redwoodjs/testing/web'
import UserExamplePage from './UserExamplesPage'

export const generated = () => {
  mockGraphQLQuery('FindUserExamples', () => ({
    userExamples: [
      {
        id: 1,
        email: 'test@example.com',
        name: 'Test User',
      }
    ]
  }))
  return <UserExamplePage />
}

export default {
  title: 'Pages/UserExamplePage',
  component: UserExamplePage,
} as Meta<typeof UserExamplePage>
