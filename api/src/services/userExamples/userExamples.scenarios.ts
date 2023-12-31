import type { Prisma, UserExample } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String1326407' } },
    two: { data: { email: 'String4414144' } },
  },
})

export type StandardScenario = ScenarioData<UserExample, 'userExample'>
