import { Success, Loading } from "./UserExamplesCell";

import type { StoryFn } from '@storybook/react'

import { standard } from './UserExamplesCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : <></>
}

export const success: StoryFn<typeof Success> = (args) => {
  return Success ? <Success {...standard()} {...args} /> : <></>
}

export default { title: 'Cells/UserExamplesCells' }
